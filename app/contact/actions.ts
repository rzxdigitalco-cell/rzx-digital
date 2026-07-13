"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

export interface ContactFormState {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
}

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactFormState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      success: false,
      message: "Please fix the errors below and try again.",
      fieldErrors,
    };
  }

  // Honeypot tripped — silently report success to the bot, do nothing else.
  if (parsed.data.website) {
    return { success: true, message: "Thanks! We'll be in touch shortly." };
  }

  /**
   * TODO(client): wire up real email delivery. No email service was
   * specified in 05_TECH.md. Recommended: Resend (resend.com) — swap
   * this block for:
   *
   *   import { Resend } from "resend";
   *   const resend = new Resend(process.env.RESEND_API_KEY);
   *   await resend.emails.send({
   *     from: "RZX Digital <notifications@rzxdigital.co>",
   *     to: siteConfig.email,
   *     subject: `New project inquiry from ${parsed.data.name}`,
   *     replyTo: parsed.data.email,
   *     text: JSON.stringify(parsed.data, null, 2),
   *   });
   *
   * For now, submissions are logged server-side only.
   */
  console.log("[contact-form] New inquiry received:", {
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company || undefined,
    projectType: parsed.data.projectType,
    budget: parsed.data.budget,
    messageLength: parsed.data.message.length,
  });

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you within 1–2 business days.",
  };
}
