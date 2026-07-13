import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="section-padding border-b border-border">
      <Container className="max-w-3xl text-center">
        <FadeUp>
          <Eyebrow>About RZX Digital</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A website should do more than look good.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            RZX Digital is a freelance agency founded by Zaid Ghare and
            Rayyan Inamulhaque, focused on building digital solutions for
            real businesses. We believe a great website should generate
            leads, build trust, and create measurable value — not just look
            impressive in a screenshot. Every project moves through both
            founders, with a focus on quality, performance, and long-term
            partnership.
          </p>
          <div className="mt-8">
            <Button asChild variant="text">
              <Link href="/about">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
