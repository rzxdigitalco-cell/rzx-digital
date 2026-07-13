"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";

export function Hero() {
  const heroProject = getFeaturedProjects()[0];

  return (
    <section className="relative overflow-hidden border-b border-border pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-badge border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <Sparkles size={14} className="text-primary" />
            Founder-Led • Real Client Work • Modern Engineering
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            We Build Websites{" "}
            <span className="text-gradient">That Grow Businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            RZX Digital is a freelance agency founded by two developers who
            design, build, and ship fast, modern websites for startups,
            doctors, local businesses, and growing brands — from WordPress
            and WooCommerce to custom Next.js builds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="primary" size="lg">
              <Link href="/work">
                View Our Work
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>
        </div>

        {heroProject ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-card border border-border shadow-soft-lg">
              <div className="relative aspect-[16/10.5]">
                <Image
                  src="/images/SortMyStay.png"
                  alt="SortMyStay"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-card border border-border bg-surface px-4 py-3 shadow-soft-lg sm:block">
              <p className="font-mono text-xs text-muted-foreground">Featured Work</p>
              <p className="font-heading text-sm font-semibold text-foreground">
                {heroProject.name}
              </p>
            </div>
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}
