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
