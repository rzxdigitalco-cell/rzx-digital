import { Container } from "@/components/shared/container";
import { SectionTitle } from "@/components/shared/section-title";
import { FadeUp } from "@/components/shared/fade-up";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import type { ProjectImage } from "@/types";

export function CaseStudyGallery({ images }: { images: ProjectImage[] }) {
  if (images.length === 0) return null;

  return (
    <section className="section-padding border-b border-border bg-surface/30">
      <Container>
        <SectionTitle align="left" title="What We Built" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, i) => (
            <FadeUp key={image.alt} delay={i % 8}>
              <div className="flex h-full flex-col justify-between gap-4 rounded-image border border-border bg-surface p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-button bg-primary/10 text-primary">
                  <DynamicIcon name="LayoutTemplate" size={16} />
                </span>
                <p className="text-sm leading-relaxed text-foreground/90">{image.alt}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
