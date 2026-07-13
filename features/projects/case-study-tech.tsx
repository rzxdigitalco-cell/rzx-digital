import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function CaseStudyTech({ project }: { project: Project }) {
  if (project.techStack.length === 0) return null;

  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container>
        <SectionTitle align="left" title="Technologies Used" />
        <FadeUp>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="primary" className="px-4 py-1.5 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
