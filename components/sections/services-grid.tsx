import { Container } from "@/components/shared/container";
import { FadeUp } from "@/components/shared/fade-up";
import { ServiceDetailCard } from "@/features/services/service-detail-card";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="section-padding border-b border-border">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeUp key={service.slug} delay={i}>
              <ServiceDetailCard service={service} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
