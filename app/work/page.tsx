import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";
import { WorkHero } from "@/components/sections/work-hero";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsFilterGrid } from "@/features/projects/projects-filter-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A look at RZX Digital's work — real websites built for hospitality, healthcare, e-commerce, corporate, and restaurant clients, plus original team builds.",
  alternates: { canonical: `${siteConfig.url}/work` },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <section className="section-padding">
        <Container>
          <ProjectsFilterGrid />
        </Container>
      </section>
      <TechStackSection />
    </>
  );
}
