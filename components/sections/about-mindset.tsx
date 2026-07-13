import { Code2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import { engineeringMindset } from "@/data/about";

export function AboutMindset() {
  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container className="max-w-3xl">
        <FadeUp>
          <div className="rounded-card border border-border bg-surface p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-button bg-primary/10 text-primary">
              <Code2 size={22} />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Our Engineering Mindset
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {engineeringMindset}
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
