import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { footerNavLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-button border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <Mail size={18} />
              </a>
              {siteConfig.phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s/g, "")}`}
                  aria-label={`Call ${p.label}`}
                  title={`Call ${p.label}: ${p.number}`}
                  className="flex h-10 w-10 items-center justify-center rounded-button border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <Phone size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-4">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Get in touch</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 block transition-colors hover:text-foreground">
              {siteConfig.email}
            </a>
            {siteConfig.phones.map((p) => (
              <p key={p.number} className="mt-1">
                {p.label}: <a href={`tel:${p.number.replace(/\s/g, "")}`} className="transition-colors hover:text-foreground">{p.number}</a>
              </p>
            ))}
            <p className="mt-1">{siteConfig.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Founded by Zaid Ghare &amp; Rayyan Inamulhaque.</p>
        </div>
      </Container>
    </footer>
  );
}
