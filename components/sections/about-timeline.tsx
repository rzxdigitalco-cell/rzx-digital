import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { timeline } from "@/data/about";

export function AboutTimeline() {
  return (
    <section className="section-padding border-b border-border">
      <Container>
        <SectionTitle eyebrow="How We Got Here" title="Our Journey So Far" />

        <div className="relative mx-auto mt-14 max-w-2xl">
          <div
            aria-hidden
            className="absolute bottom-0 left-[15px] top-0 w-px bg-border sm:left-[19px]"
          />
          <ol className="space-y-10">
            {timeline.map((stage, i) => (
              <FadeUp key={stage.label} delay={i}>
                <li className="relative flex gap-6 pl-10 sm:pl-12">
                  <span className="absolute left-0 top-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-secondary">
                      {stage.label}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
