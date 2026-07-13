import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — Home`}
      className={cn("flex items-center", className)}
    >
      <Image
        src="/images/logo.png"
        alt="RZX Digital"
        width={170}
        height={55}
        priority
        className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
