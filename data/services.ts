import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-website-development",
    icon: "Globe",
    title: "Business Website Development",
    businessProblem:
      "Many businesses run on an outdated site — or none at all — and lose credibility with visitors before a conversation even starts.",
    solution:
      "We design and build fast, professional websites that clearly communicate what your business does and why visitors should trust you.",
    benefits: [
      "A polished first impression that builds trust immediately",
      "Fast load times that keep visitors from bouncing",
      "A site built to grow with your business",
    ],
    deliverables: [
      "Custom-designed, responsive website",
      "Content structure and page hierarchy",
      "Contact and lead-capture forms",
      "Basic on-page SEO setup",
    ],
  },
  {
    slug: "wordpress-development",
    icon: "LayoutTemplate",
    title: "WordPress Development",
    businessProblem:
      "Off-the-shelf themes rarely fit a business perfectly, and can slow content teams down instead of helping them move fast.",
    solution:
      "We build custom WordPress sites and themes that are easy for your team to manage without sacrificing performance or design quality.",
    benefits: [
      "A content system your team can actually update",
      "Custom design instead of a generic theme",
      "Performance-tuned WordPress builds",
    ],
    deliverables: [
      "Custom WordPress theme or child theme",
      "Editable page templates for your content team",
      "Elementor Pro & ACF Pro setup and configuration",
      "Editor training handoff",
    ],
  },
  {
    slug: "woocommerce-development",
    icon: "ShoppingCart",
    title: "WooCommerce Development",
    businessProblem:
      "A confusing checkout or slow product pages cost sales — every extra step is a chance for a customer to leave.",
    solution:
      "We build WooCommerce stores with streamlined product discovery, cart, and checkout flows designed to convert visitors into customers.",
    benefits: [
      "A checkout flow built to reduce cart abandonment",
      "Product pages designed for fast decision-making",
      "Secure payment integration",
    ],
    deliverables: [
      "Product catalogue and category structure",
      "Cart and checkout implementation",
      "Payment gateway integration",
      "Order management setup",
    ],
  },
  {
    slug: "landing-pages",
    icon: "Rocket",
    title: "Landing Pages",
    businessProblem:
      "Generic landing pages fail to convert traffic from ads or campaigns into leads and customers.",
    solution:
      "We design focused, conversion-oriented landing pages built around a single clear goal for each campaign.",
    benefits: [
      "Pages built to convert, not just to look good",
      "Fast turnaround for time-sensitive campaigns",
      "Clear calls to action tied to your campaign goals",
    ],
    deliverables: [
      "Single-goal, conversion-focused page design",
      "Copy structured around one clear call to action",
      "Mobile-optimized layout",
      "Fast turnaround for campaign timelines",
    ],
  },
  {
    slug: "portfolio-websites",
    icon: "Layers",
    title: "Portfolio Websites",
    businessProblem:
      "A weak portfolio undersells strong work — visitors judge the quality of what you do by the quality of the site showing it.",
    solution:
      "We build editorial, image-led portfolio sites that let your work speak for itself, with a layout built to slow visitors down.",
    benefits: [
      "A portfolio that matches the quality of your work",
      "Fast-loading, image-heavy pages done right",
      "A structure that scales as your body of work grows",
    ],
    deliverables: [
      "Custom portfolio and project template design",
      "Optimized image galleries",
      "Case-study or project detail pages",
    ],
  },
  {
    slug: "corporate-websites",
    icon: "Building2",
    title: "Corporate & Business Websites",
    businessProblem:
      "Businesses need to read as established and credible from the first scroll — especially when adding new service lines over time.",
    solution:
      "We build corporate identity sites on clean grid systems and reusable component sets, so new service lines slot in without a rebuild.",
    benefits: [
      "Credibility at a glance through disciplined design",
      "A component system that scales with your business",
      "Consistent branding across every page",
    ],
    deliverables: [
      "Corporate branding system implementation",
      "Reusable, component-based UI",
      "Service and department page templates",
    ],
  },
  {
    slug: "website-redesign",
    icon: "RefreshCcw",
    title: "Website Redesign",
    businessProblem:
      "An aging website can quietly undercut a strong business — outdated design signals outdated service, even when that isn't true.",
    solution:
      "We modernize your existing website's design and performance while preserving what already works, including your SEO equity.",
    benefits: [
      "A modern look without losing search rankings",
      "Improved performance and Core Web Vitals",
      "A design that matches where your business is today",
    ],
    deliverables: [
      "Design audit of the existing site",
      "Modernized UI/UX with preserved SEO structure",
      "Performance and accessibility improvements",
      "Content migration",
    ],
  },
  {
    slug: "speed-and-performance-optimization",
    icon: "Gauge",
    title: "Speed & Performance Optimization",
    businessProblem:
      "Slow websites lose visitors and rank lower in search results, quietly costing traffic and revenue.",
    solution:
      "We audit and optimize your website's images, code, and loading strategy to hit strong Core Web Vitals and Lighthouse scores.",
    benefits: [
      "Faster load times across every device",
      "Improved search visibility",
      "A measurably better user experience",
    ],
    deliverables: [
      "Performance and Core Web Vitals audit",
      "Image and asset optimization",
      "Code-splitting and loading strategy improvements",
      "Before/after performance report",
    ],
  },
  {
    slug: "seo-optimization",
    icon: "Search",
    title: "SEO Optimization",
    businessProblem:
      "A beautiful website that no one can find isn't generating leads — visibility has to be built in, not bolted on.",
    solution:
      "We structure metadata, content, and page architecture around how your customers actually search, from day one.",
    benefits: [
      "Better search visibility for the terms that matter",
      "SEO-sound page structure from launch",
      "Local SEO setup for businesses that serve a specific area",
    ],
    deliverables: [
      "On-page SEO audit and setup",
      "Metadata and content structure",
      "Local SEO configuration where relevant",
    ],
  },
  {
    slug: "website-maintenance",
    icon: "Wrench",
    title: "Website Maintenance",
    businessProblem:
      "Websites need ongoing updates, monitoring, and fixes — work that easily falls through the cracks without a dedicated partner.",
    solution:
      "We provide ongoing maintenance and support so your website stays secure, fast, and up to date long after launch.",
    benefits: [
      "Peace of mind with ongoing technical support",
      "Faster fixes when something needs attention",
      "A long-term partner instead of a one-time vendor",
    ],
    deliverables: [
      "Ongoing monitoring and uptime checks",
      "Security and dependency updates",
      "Bug fixes and small content changes",
      "Monthly maintenance summary",
    ],
  },
];

export const futureServices = [
  "Shopify Development",
  "Custom Web Applications",
  "SaaS Development",
  "AI Integrations",
  "Mobile App Development",
] as const;
