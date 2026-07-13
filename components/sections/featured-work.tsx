import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/features/projects/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="section-padding border-b border-border">
      <Container>
        <SectionTitle
          eyebrow="Featured Work"
          title="Featured Work"
          description="A collection of production websites and engineering projects that demonstrate how we solve real business challenges through thoughtful design and modern development."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <FadeUp key={project.slug} delay={i}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/work">
              View All Work
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
