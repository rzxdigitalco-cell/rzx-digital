import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { founders } from "@/data/founders";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("");
}

export function Founders() {
  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="Founders"
          title="Run By Two Founders, Not A Bench Of Strangers"
          description="Every project at RZX Digital moves through both of us — design, engineering, and strategy, without a rotating cast of subcontractors."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {founders.map((founder, i) => (
            <FadeUp key={founder.name} delay={i}>
              <div className="group relative h-full overflow-hidden rounded-card border border-border bg-surface/60 p-8 shadow-soft backdrop-blur-sm transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-gradient opacity-[0.10] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.18]"
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-card border border-border bg-background font-heading text-lg font-bold text-primary">
                  {initials(founder.name)}
                </div>
                <h3 className="relative mt-5 font-heading text-xl font-bold tracking-tight text-foreground">
                  {founder.name}
                </h3>
                <p className="relative mt-1 text-sm font-medium text-secondary">{founder.role}</p>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {founder.titles.map((title) => (
                    <span
                      key={title}
                      className="rounded-badge border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {title}
                    </span>
                  ))}
                </div>

                <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
