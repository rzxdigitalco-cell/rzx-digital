import type { Project } from "@/types";

/**
 * RZX Digital portfolio — merged from both founders' individual project
 * histories. Projects worked on jointly (SortMyStay, Casa De Mirdad,
 * Mumbai Ortho Care) are presented once, as agency work. Projects unique
 * to one founder's track record are included as part of the same studio
 * portfolio — this is one agency, one body of work.
 */
export const projects: Project[] = [
  // ─────────────────────────── CLIENT PROJECTS ───────────────────────────
  {
    slug: "sortmystay",
    name: "SortMyStay",
    industry: "Hospitality & Rentals",
    year: "2024",
    category: "professional",
    agencyCategory: "Hospitality",
    featured: true,
    shortDescription:
      "A dual-dashboard booking platform for luxury villas and PG accommodations — one consistent booking flow for two very different property types.",
    overview:
      "SortMyStay connects travellers with villas and PG (paying-guest) accommodations through a single booking experience. Owners get a dashboard to list and manage inventory; guests get a fast, visual way to browse listings, check amenities, and book online — no calls or manual coordination required.",
    businessChallenge:
      "Independent villa and PG owners had no consistent way to list properties online or manage bookings without relying on calls and messages. The platform needed to handle two very different listing types — short-stay villas and long-stay PG rooms — under one coherent booking experience.",
    solution:
      "We designed a unified booking flow that adapts to both property types, with a dedicated owner dashboard for adding and managing listings, a gallery-first browsing experience for guests, and a data structure built to support new property categories without reworking the core booking logic.",
    responsibilities: [
      "End-to-end frontend development of the guest-facing booking experience",
      "Villa and PG listing detail pages with gallery components",
      "Owner dashboard for managing listings",
      "Responsive design across mobile and desktop",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    keyFeatures: [
      { icon: "Search", title: "Property Discovery", description: "Browse villas and PG listings with a gallery-first layout and clear amenity breakdowns." },
      { icon: "LayoutDashboard", title: "Owner Dashboard", description: "Property owners add, edit, and manage their own listings independently." },
      { icon: "Image", title: "Rich Media Galleries", description: "Multi-image galleries for each property to help guests decide with confidence." },
      { icon: "Smartphone", title: "Responsive Booking Flow", description: "A consistent booking experience across every device, from listing to confirmation." },
    ],
    challenges: {
      business: "Two distinct accommodation types needed to feel native to the same platform without confusing either audience.",
      technical: "Structuring listing data so villas and PG rooms could share booking and dashboard components while still surfacing type-specific details.",
    },
    lessonsLearned: [
      "Designing flexible data models that serve more than one product type without duplicating UI logic",
      "Building dashboards non-technical property owners can actually use",
      "Prioritizing image-heavy layouts for performance on mobile networks",
    ],
    outcomes: [
      "Production website live for a real hospitality client",
      "Responsive, mobile-first design",
      "Owner-managed listing system that removed manual coordination",
    ],
    coverImage: {
      src: "/images/SortMyStay.png",
      alt: "SortMyStay villa and PG booking platform",
    },
    gallery: [
      { src: "", alt: "Gallery-first homepage across villa and PG listings" },
      { src: "", alt: "Single villa detail page with image gallery" },
      { src: "", alt: "PG accommodation listing and detail pages" },
      { src: "", alt: "Villa owner dashboard for managing listings" },
    ],
    liveUrl: "https://sortmystay.co.in/",
  },
  
  // ─────────────────────────── TEAM BUILDS ───────────────────────────
  {
    slug: "gocart",
    name: "GoCart",
    industry: "E-commerce (Multi-Vendor Marketplace)",
    year: "2024",
    category: "engineering",
    agencyCategory: "Ecommerce",
    featured: true,
    shortDescription:
      "A multi-vendor marketplace built to sharpen our engineering — extended with an original inventory and stock-management system.",
    overview:
      "GoCart is a multi-vendor e-commerce marketplace supporting shoppers, store owners, and admins in one application. We built on a guided project foundation and extended it with original engineering work around real-time inventory management.",
    businessChallenge:
      "Multi-vendor marketplaces need to support three different user roles — shoppers, store owners, and platform admins — each with different permissions, while keeping inventory accurate in real time as orders come in.",
    solution:
      "Role-based access separates shopper, store-owner, and admin experiences behind dedicated dashboards. On top of that foundation, we engineered a quantity-based inventory system that keeps stock accurate automatically as orders are placed.",
    responsibilities: [
      "Full-stack marketplace build across shopper, vendor, and admin roles",
      "Original inventory management system, engineered independently",
      "Coupon and payment verification flows",
    ],
    techStack: ["Next.js", "React", "Node.js", "MongoDB", "Clerk", "Stripe", "Tailwind CSS"],
    keyFeatures: [
      { icon: "Store", title: "Multi-Vendor Storefronts", description: "Store owners manage their own products independently within the marketplace." },
      { icon: "ShieldCheck", title: "Role-Based Access", description: "Separate shopper, store-owner, and admin experiences with appropriate permissions." },
      { icon: "Ticket", title: "Coupon System", description: "Discount coupons that store owners create and manage." },
      { icon: "CreditCard", title: "Payment Verification", description: "A payment flow with verification before an order is confirmed." },
    ],
    engineeringContributions: [
      { title: "Quantity-Based Inventory System", description: "Real stock-quantity tracking per product, rather than a simple in-stock/out-of-stock flag." },
      { title: "Automatic Stock Reduction", description: "Stock levels reduce automatically as orders are placed, keeping inventory accurate without manual updates." },
      { title: "Dynamic Out-of-Stock Logic", description: "Products automatically reflect out-of-stock status once inventory reaches zero, disabling the purchase flow to prevent overselling." },
    ],
    challenges: {
      business: "Preventing overselling in a marketplace where multiple shoppers can attempt to buy the same limited-stock item.",
      technical: "Designing an inventory system that updates stock reliably and reflects that state consistently across the shop, cart, and store-owner dashboard.",
    },
    lessonsLearned: [
      "Designing inventory systems that stay consistent across multiple parts of an application",
      "Implementing role-based access control across shopper, vendor, and admin experiences",
      "Extending an existing codebase with original features without breaking its architecture",
    ],
    outcomes: [
      "Functional multi-vendor marketplace with role-based dashboards",
      "Original inventory management system built beyond the base scope",
      "Demonstrates full-stack capability behind our client work",
    ],
    coverImage: { src: "/images/GoCart.png", alt: "GoCart multi-vendor marketplace" },
    gallery: [
      { src: "", alt: "Marketplace homepage and product listings" },
      { src: "", alt: "Store owner dashboard" },
      { src: "", alt: "Admin dashboard with store approvals and coupons" },
      { src: "", alt: "Cart, payment, and order flow" },
    ],
    liveUrl: "https://gocart-gs.vercel.app/",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getRelatedProjects = (slug: string, limit = 2) =>
  projects.filter((p) => p.slug !== slug).slice(0, limit);
export const getProjectsByAgencyCategory = (category: string) =>
  category === "All" ? projects : projects.filter((p) => p.agencyCategory === category);
export const agencyCategories = [
  "All",
  "Healthcare",
  "Hospitality",
  "Ecommerce",
  "Business",
  "Corporate",
  "Restaurants",
] as const;
