import Link from "next/link";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="section-padding">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-card border border-border bg-surface px-8 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 w-64 rounded-full bg-brand-gradient opacity-[0.08] blur-3xl"
            />
            <h2 className="relative font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s Build Something Great Together.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you&apos;re launching a new business, redesigning an
              existing website, or building a custom web application,
              we&apos;re here to help. Let&apos;s discuss your project.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact#schedule">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
