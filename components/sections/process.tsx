import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container>
        <SectionTitle eyebrow="Our Process" title="How We Work" />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block"
          />

          {processSteps.map((step, i) => (
            <FadeUp key={step.step} delay={i} className="relative">
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                  <DynamicIcon name={step.icon} size={18} />
                </div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground">{step.step}</span>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:pl-[60px]">
                {step.description}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
