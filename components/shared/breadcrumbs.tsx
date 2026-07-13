import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/container";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-border py-4">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  {item.href && !isLast ? (
                    <Link href={item.href} className="transition-colors hover:text-foreground">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current={isLast ? "page" : undefined} className="text-foreground">
                      {item.label}
                    </span>
                  )}
                  {!isLast ? <ChevronRight size={12} /> : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
