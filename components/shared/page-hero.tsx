import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import { Eyebrow } from "@/components/shared/eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  maxWidth?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  maxWidth = "max-w-2xl",
}: PageHeroProps) {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <Container className={`${maxWidth} text-center`}>
        <FadeUp>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
