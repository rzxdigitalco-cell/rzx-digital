import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card hoverable className="flex flex-col overflow-hidden p-0">
      <Link
        href={`/work/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-border"
      >
        <div className="relative h-full w-full overflow-hidden transition-transform duration-500 ease-out-expo group-hover:scale-[1.03]">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge variant={project.category === "professional" ? "professional" : "engineering"}>
            {project.category === "professional" ? "Client Project" : "Team Build"}
          </Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>{project.name}</CardTitle>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-secondary">
              {project.industry}
            </p>
          </div>
        </div>

        <CardDescription className="mt-3">{project.shortDescription}</CardDescription>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View Case Study
            <ArrowUpRight size={16} />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Visit Website
              <ArrowUpRight size={14} />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={14} />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
