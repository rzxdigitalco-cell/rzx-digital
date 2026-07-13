"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to the console for now — swap for an error-monitoring
    // service (e.g. Sentry) before production launch.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-card border border-error/30 bg-error/10 text-error">
        <AlertTriangle size={28} />
      </div>
      <Eyebrow className="mt-6 border-error/30 bg-error/10 text-error">
        Something Went Wrong
      </Eyebrow>
      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        An unexpected error occurred.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        Please try again. If the problem continues, head back to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button variant="primary" size="lg" onClick={reset}>
          <RotateCcw size={18} />
          Try Again
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </Container>
  );
}
