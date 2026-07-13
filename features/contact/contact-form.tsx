"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  projectTypes,
  budgetRanges,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/app/contact/actions";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", message: "", website: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    setStatus(null);
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        setStatus({ type: "success", message: result.message });
        reset();
      } else {
        setStatus({ type: "error", message: result.message });
      }
    });
  };

  return (
    <Card className="p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Honeypot — visually hidden, off-screen, not just display:none (bots skip display:none) */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Jane Cooper"
              invalid={!!errors.name}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name ? (
              <p id="name-error" className="mt-1.5 text-xs text-error">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@company.com"
              invalid={!!errors.email}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1.5 text-xs text-error">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <Label htmlFor="company">Company (optional)</Label>
          <Input id="company" placeholder="Your business name" {...register("company")} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="projectType">Project Type</Label>
            <Select
              id="projectType"
              invalid={!!errors.projectType}
              aria-invalid={!!errors.projectType}
              defaultValue=""
              {...register("projectType")}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
            {errors.projectType ? (
              <p className="mt-1.5 text-xs text-error">{errors.projectType.message}</p>
            ) : null}
          </div>

          <div>
            <Label htmlFor="budget">Budget (optional)</Label>
            <Select id="budget" defaultValue="" {...register("budget")}>
              <option value="" disabled>
                Select a range
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Project Details</Label>
          <Textarea
            id="message"
            rows={5}
            placeholder="Tell us a bit about your business and what you're looking to build..."
            invalid={!!errors.message}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="mt-1.5 text-xs text-error">
              {errors.message.message}
            </p>
          ) : null}
        </div>

        <Button type="submit" variant="primary" size="lg" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} />
            </>
          )}
        </Button>

        {status ? (
          <div
            role="status"
            className={`flex items-start gap-2 rounded-button border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-success/30 bg-success/10 text-success"
                : "border-error/30 bg-error/10 text-error"
            }`}
          >
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            {status.message}
          </div>
        ) : null}
      </form>
    </Card>
  );
}
