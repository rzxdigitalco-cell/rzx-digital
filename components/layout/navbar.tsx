"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastY.current;
    setScrolled(latest > 8);
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastY.current = latest;
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-button px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-4 -bottom-[1px] h-[2px] rounded-full bg-brand-gradient"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="primary" size="default">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-button p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {mobileOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-button px-4 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-surface text-foreground"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild variant="primary" className="mt-2 w-full">
              <Link href="/contact">Start a Project</Link>
            </Button>
          </Container>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
