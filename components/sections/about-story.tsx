import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import { Card } from "@/components/ui/card";
import { story, mission, vision } from "@/data/about";

export function AboutStory() {
  return (
    <section className="section-padding border-b border-border">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeUp>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Our Story
          </h2>
          <div className="mt-5 space-y-4">
            {story.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={1} className="space-y-6">
          <Card>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
              Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mission}</p>
          </Card>
          <Card>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-secondary">
              Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{vision}</p>
          </Card>
        </FadeUp>
      </Container>
    </section>
  );
}
