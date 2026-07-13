import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business website development, WordPress, e-commerce, React frontends, redesigns, performance optimization, landing pages, and ongoing maintenance.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services"
        description="From business websites to custom web applications, we build digital solutions tailored to your goals."
      />
      <ServicesGrid />
      <Process />
      <TechStackSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
