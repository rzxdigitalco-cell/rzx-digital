import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageHero } from "@/components/shared/page-hero";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { AboutStory } from "@/components/sections/about-story";
import { AboutMindset } from "@/components/sections/about-mindset";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { Founders } from "@/components/sections/founders";
import { WhyRZX } from "@/components/sections/why-rzx";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { FinalCta } from "@/components/sections/final-cta";
import { values } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "RZX Digital is a freelance web design agency founded by Zaid Ghare and Rayyan Inamulhaque — our story, mission, values, and how we work.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RZX Digital"
        title="A website should do more than look good."
        description="We believe a great website should generate leads, build trust, and create measurable value for the business behind it."
      />
      <AboutStory />
      <Founders />
      <IconCardGrid eyebrow="Our Values" title="What We Value" cards={values} iconColor="primary" />
      <AboutMindset />
      <AboutTimeline />
      <WhyRZX />
      <TechStackSection />
      <FinalCta />
    </>
  );
}
