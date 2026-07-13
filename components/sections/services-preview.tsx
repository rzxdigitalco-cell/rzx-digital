import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Services"
          description="From business websites to custom web applications, we build digital solutions tailored to your goals."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.slug} delay={i}>
              <Card hoverable className="h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-button bg-primary/10 text-primary">
                  <DynamicIcon name={service.icon} size={22} />
                </div>
                <CardTitle>
                  {service.title}
                </CardTitle>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.solution}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.benefits.slice(0, 2).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-secondary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeUp>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="text">
            <Link href="/services">
              Explore All Services
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
