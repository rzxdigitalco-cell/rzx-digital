import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { WhyUsCard } from "@/types";

interface IconCardGridProps {
  eyebrow: string;
  title: string;
  description?: string;
  cards: WhyUsCard[];
  iconColor?: "primary" | "secondary";
  bordered?: boolean;
}

export function IconCardGrid({
  eyebrow,
  title,
  description,
  cards,
  iconColor = "secondary",
  bordered = true,
}: IconCardGridProps) {
  return (
    <section className={`section-padding ${bordered ? "border-b border-border" : ""}`}>
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i}>
              <Card hoverable className="h-full">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-button ${
                    iconColor === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <DynamicIcon name={card.icon} size={22} />
                </div>
                <CardTitle>
                  {card.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {card.description}
                </CardDescription>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
