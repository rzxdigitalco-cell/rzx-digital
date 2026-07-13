import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "mb-4 inline-block rounded-badge border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
