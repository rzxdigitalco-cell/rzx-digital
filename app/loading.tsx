import { Container } from "@/components/shared/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Loading
        </span>
      </div>
    </Container>
  );
}
