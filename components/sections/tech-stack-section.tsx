import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { techStack } from "@/data/tech-stack";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  cms: "CMS & E-commerce",
  database: "Database",
  payments: "Payments",
  tooling: "Tooling",
  hosting: "Hosting & Deployment",
};

export function TechStackSection() {
  const grouped = techStack.reduce<Record<string, typeof techStack>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});

  return (
    <section className="section-padding border-t border-border bg-surface/30">
      <Container>
        <SectionTitle
          eyebrow="Technology"
          title="Technologies We Work With"
          description="The tools and platforms behind the projects in our portfolio — chosen for reliability, performance, and long-term maintainability."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([category, items], i) => (
            <FadeUp key={category} delay={i}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {categoryLabels[category] ?? category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 rounded-badge border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    <DynamicIcon name={tech.icon} size={14} className="text-primary" />
                    {tech.name}
                  </div>
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
