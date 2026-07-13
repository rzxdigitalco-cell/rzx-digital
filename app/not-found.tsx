import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-card border border-border bg-surface text-primary">
        <Compass size={28} />
      </div>
      <Eyebrow className="mt-6">404</Eyebrow>
      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        The page you&apos;re looking for may have been moved or never existed.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="primary" size="lg">
          <Link href="/">
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/work">View Our Work</Link>
        </Button>
      </div>
    </Container>
  );
}
