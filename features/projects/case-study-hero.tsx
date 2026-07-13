import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import Image from "next/image";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="border-b border-border pt-12 pb-16 md:pt-16 md:pb-20">
      <Container>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={project.category === "professional" ? "professional" : "engineering"}>
            {project.category === "professional" ? "Client Project" : "Team Build"}
          </Badge>
          <span className="text-xs font-medium uppercase tracking-wide text-secondary">
            {project.industry}
          </span>
          {project.year ? (
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          ) : null}
        </div>

        <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {project.name}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {project.shortDescription}
        </p>

        {project.category === "engineering" ? (
          <div className="mt-5 max-w-2xl rounded-button border border-accent/30 bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground/90">
            <strong className="text-accent">Team Build.</strong>{" "}
            We built this project ourselves — on a guided foundation, then
            extended with original engineering work detailed below — to
            sharpen our skills and demonstrate capability beyond client work.
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <Button asChild variant="primary">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Website
                <ArrowUpRight size={16} />
              </a>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button asChild variant="secondary">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                View Source
              </a>
            </Button>
          ) : null}
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-card border border-border shadow-soft-lg">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}
