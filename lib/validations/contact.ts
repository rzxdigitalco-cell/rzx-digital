import { z } from "zod";

export const projectTypes = [
  "Business Website",
  "E-commerce Store",
  "Website Redesign",
  "Custom Web Application",
  "Website Maintenance",
  "Something Else",
] as const;

export const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "That name looks too long — please shorten it."),
  email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Please select a project type." }),
  }),
  budget: z.enum(budgetRanges).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please share a few more details (at least 20 characters).")
    .max(2000, "That message is a bit long — please keep it under 2000 characters."),
  // Honeypot field — real users never fill this in; bots typically do.
  website: z.string().max(0, "Spam detected.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
