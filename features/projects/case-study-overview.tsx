import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import type { Project } from "@/types";

export function CaseStudyOverview({ project }: { project: Project }) {
  return (
    <section className="section-padding border-b border-border">
      <Container className="grid gap-10 lg:grid-cols-3">
        <FadeUp delay={0}>
          <h2 className="font-heading text-xl font-semibold text-foreground">Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
        </FadeUp>
        <FadeUp delay={1}>
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Business Challenge
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.businessChallenge}
          </p>
        </FadeUp>
        <FadeUp delay={2}>
          <h2 className="font-heading text-xl font-semibold text-foreground">Solution</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
        </FadeUp>
      </Container>
    </section>
  );
}
