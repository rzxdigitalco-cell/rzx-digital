import { Lightbulb, TrendingUp } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { Card, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

export function CaseStudyChallenges({ project }: { project: Project }) {
  const hasChallenges = project.challenges.business || project.challenges.technical;
  const hasLessons = project.lessonsLearned.length > 0;
  const hasOutcomes = project.outcomes.length > 0;

  if (!hasChallenges && !hasLessons && !hasOutcomes) return null;

  return (
    <section className="section-padding border-b border-border">
      <Container>
        <SectionTitle align="left" title="Challenges & Outcomes" />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {hasChallenges ? (
            <FadeUp delay={0}>
              <Card className="h-full">
                <CardTitle>
                  Challenges Overcome
                </CardTitle>
                <dl className="mt-4 space-y-4">
                  {project.challenges.business ? (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-secondary">
                        Business
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {project.challenges.business}
                      </dd>
                    </div>
                  ) : null}
                  {project.challenges.technical ? (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-secondary">
                        Technical
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {project.challenges.technical}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </Card>
            </FadeUp>
          ) : null}

          {hasLessons ? (
            <FadeUp delay={1}>
              <Card className="h-full">
                <div className="flex items-center gap-2">
                  <Lightbulb size={18} className="text-warning" />
                  <CardTitle>
                    Lessons Learned
                  </CardTitle>
                </div>
                <ul className="mt-4 space-y-2">
                  {project.lessonsLearned.map((lesson) => (
                    <li key={lesson} className="text-sm leading-relaxed text-muted-foreground">
                      • {lesson}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeUp>
          ) : null}
        </div>

        {hasOutcomes ? (
          <FadeUp delay={2} className="mt-6">
            <Card>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-success" />
                <CardTitle>Outcomes</CardTitle>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm leading-relaxed text-muted-foreground">
                    • {outcome}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeUp>
        ) : null}
      </Container>
    </section>
  );
}
