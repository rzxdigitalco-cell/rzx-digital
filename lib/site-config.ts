/**
 * Single source of truth for site-wide, non-content configuration.
 * Everything downstream (metadata, footer, contact card, JSON-LD)
 * reads from here — update once, it updates everywhere.
 */
export const siteConfig = {
  name: "RZX Digital",
  shortName: "RZX",
  tagline: "We Build Websites That Grow Businesses.",
  description:
    "RZX Digital is a freelance web design and development agency building fast, modern, conversion-focused websites for startups, doctors, local businesses, and growing brands — from WordPress and WooCommerce to custom Next.js builds.",
  url: "https://rzxdigital.co",
  ogImage: "/images/og/og-cover.png",
  email: "rzxdigital.co@gmail.com",
  phones: [
    { label: "Zaid", number: "+91 8591626865" },
    { label: "Rayyan", number: "+91 9833427662" },
  ],
  whatsapp: "918591626865",
  location: "Mumbai, India",
  social: {
    instagram: undefined as string | undefined,
    linkedin: undefined as string | undefined,
  },
  keywords: [
    "web design agency",
    "website development",
    "WordPress development",
    "WooCommerce development",
    "landing page design",
    "business website design",
    "portfolio website design",
    "SEO friendly websites",
    "website maintenance",
    "Mumbai web design agency",
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavLinks = navLinks;
