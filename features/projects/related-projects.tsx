import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { ProjectCard } from "@/features/projects/project-card";
import { getRelatedProjects } from "@/data/projects";

export function RelatedProjects({ slug }: { slug: string }) {
  const related = getRelatedProjects(slug);
  if (related.length === 0) return null;

  return (
    <section className="section-padding">
      <Container>
        <SectionTitle eyebrow="Keep Exploring" title="Related Projects" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {related.map((project, i) => (
            <FadeUp key={project.slug} delay={i}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
