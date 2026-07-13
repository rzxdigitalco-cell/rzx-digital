import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { Card, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

export function CaseStudyResponsibilities({ project }: { project: Project }) {
  const isEngineering = project.category === "engineering";
  const contributions = project.engineeringContributions ?? [];

  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container>
        <SectionTitle
          align="left"
          title={isEngineering ? "Our Engineering Contributions" : "Our Responsibilities"}
          description={
            isEngineering
              ? "Original engineering work we added on top of the guided project foundation — never exaggerated, always disclosed."
              : undefined
          }
        />

        {isEngineering ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {contributions.map((item, i) => (
              <FadeUp key={item.title} delay={i}>
                <Card>
                  <CardTitle>
                    {item.title}
                  </CardTitle>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </FadeUp>
            ))}
          </div>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.responsibilities.map((item, i) => (
              <FadeUp key={item} delay={i}>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-secondary" />
                  {item}
                </li>
              </FadeUp>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
