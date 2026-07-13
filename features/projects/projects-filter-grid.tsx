"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/features/projects/project-card";
import { projects, agencyCategories } from "@/data/projects";

export function ProjectsFilterGrid() {
  const [filter, setFilter] = useState<(typeof agencyCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.agencyCategory === filter);
  }, [filter]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap justify-center gap-2 rounded-button border border-border bg-surface p-1.5"
      >
        {agencyCategories.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={filter === option}
            onClick={() => setFilter(option)}
            className={cn(
              "relative rounded-button px-4 py-2 text-sm font-medium transition-colors",
              filter === option
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {filter === option ? (
              <motion.span
                layoutId="work-filter-pill"
                className="absolute inset-0 rounded-button bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}
            <span className="relative z-10">{option}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
