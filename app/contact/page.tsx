import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactForm } from "@/features/contact/contact-form";
import { ContactInfoCard } from "@/features/contact/contact-info-card";
import { AvailabilityCard } from "@/features/contact/availability-card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with RZX Digital — tell us about your business and what you're looking to build. We typically respond within 1–2 business days.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great Together."
        description="Whether you're launching a new business, redesigning an existing website, or building a custom web application, we're here to help. Let's discuss your project."
        maxWidth="max-w-3xl"
      />

      <section id="schedule" className="section-padding scroll-mt-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />
            <div className="space-y-6">
              <ContactInfoCard />
              <AvailabilityCard />
            </div>
          </div>
        </Container>
      </section>

      <FaqSection />
    </>
  );
}
