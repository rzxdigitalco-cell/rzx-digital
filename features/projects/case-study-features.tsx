import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { Project } from "@/types";

export function CaseStudyFeatures({ project }: { project: Project }) {
  if (project.keyFeatures.length === 0) return null;

  return (
    <section className="section-padding border-b border-border">
      <Container>
        <SectionTitle align="left" title="Key Features" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.keyFeatures.map((feature, i) => (
            <FadeUp key={feature.title} delay={i}>
              <Card hoverable className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-button bg-primary/10 text-primary">
                  <DynamicIcon name={feature.icon} size={20} />
                </div>
                <CardTitle>
                  {feature.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {feature.description}
                </CardDescription>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
