import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Services } from "@/components/sections/services-preview";
import { WhyRZX } from "@/components/sections/why-rzx";
import { Process } from "@/components/sections/process";
import { Founders } from "@/components/sections/founders";
import { AboutPreview } from "@/components/sections/about-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "RZX Digital — We Build Websites That Grow Businesses",
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "RZX Digital — We Build Websites That Grow Businesses",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <FeaturedWork />
      <Services />
      <WhyRZX />
      <Process />
      <Founders />
      <AboutPreview />
      <FinalCta />
    </>
  );
}
