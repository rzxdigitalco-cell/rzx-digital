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
  {
    slug: "casa-de-mirdad",
    name: "Casa De Mirdad",
    industry: "Architecture & Interior Design",
    year: "2024",
    category: "professional",
    agencyCategory: "Hospitality",
    featured: true,
    shortDescription:
      "An editorial portfolio-and-product website for an architecture and interior design studio, built to let the photography and the work do the persuading.",
    overview:
      "Casa De Mirdad is a portfolio and e-commerce hybrid for an architecture and interior design studio — presenting completed projects alongside a curated product catalogue, with a blog for ongoing content, all in one consistent visual language.",
    businessChallenge:
      "The studio needed a website that felt as considered as its design work — showcasing a project portfolio with editorial polish while also supporting product listings, without either side feeling like an afterthought.",
    solution:
      "We built a content-first layout with a strong typographic hero, a dedicated projects section for portfolio storytelling, and a product listing system for e-commerce, sharing one visual language across the site and blog.",
    responsibilities: [
      "Frontend development of the portfolio and product pages",
      "Project showcase and blog page templates",
      "Responsive layout and design system implementation",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Elementor", "ACF"],
    keyFeatures: [
      { icon: "Layers", title: "Portfolio Showcase", description: "A dedicated projects page for presenting completed architecture and interior work." },
      { icon: "ShoppingBag", title: "Product Listing", description: "A curated catalogue of design-led products with a clean grid layout." },
      { icon: "Newspaper", title: "Blog", description: "An editorial section for ongoing studio content and design stories." },
    ],
    challenges: {
      business: "Balancing two different goals — portfolio storytelling and product sales — on one site without diluting either.",
      technical: "Keeping a consistent design system across a content-heavy portfolio section and a structured product grid.",
    },
    lessonsLearned: [
      "Designing editorial layouts that hold up across a portfolio, a blog, and a product catalogue",
      "Balancing whitespace and typography for a premium, gallery-like feel",
    ],
    outcomes: [
      "Production website live for a real design studio client",
      "Consistent editorial design system across portfolio, blog, and shop",
      "Fully responsive across devices",
    ],
    coverImage: { src: "/images/Casa De Mirdad.png", alt: "Casa De Mirdad architecture studio website" },
    gallery: [
      { src: "", alt: "Editorial homepage and portfolio hero" },
      { src: "", alt: "Projects page showcasing completed work" },
      { src: "", alt: "Curated product listing grid" },
      { src: "", alt: "Studio blog and site footer" },
    ],
    liveUrl: "https://casademirdad.lighting/",
  },
  {
    slug: "mumbai-ortho-care",
    name: "Mumbai Ortho Care",
    industry: "Healthcare",
    year: "2023",
    category: "professional",
    agencyCategory: "Healthcare",
    featured: true,
    shortDescription:
      "A trust-building website for an orthopedic practice, with a sub-second appointment flow tuned for patients on slower mobile connections.",
    overview:
      "The website for an orthopedic healthcare practice — introducing the clinic's services and expertise to prospective patients, with an appointment system patients can complete in under a minute and an ongoing blog for patient education.",
    businessChallenge:
      "Healthcare visitors need to trust a provider before making contact. The clinic needed a site that communicated credibility and clearly explained its services, without resorting to a generic medical-site template — and performance mattered, since many patients browse on slower mobile connections.",
    solution:
      "A calm, trustworthy visual language with a clear services breakdown, an About page establishing credibility, and a blog for ongoing patient education — prioritizing clarity and load speed over decoration throughout.",
    responsibilities: [
      "Frontend development of the marketing website",
      "Services and About page implementation",
      "Appointment booking flow and blog page template",
      "Performance tuning for mobile networks",
    ],
    techStack: ["WordPress", "PHP", "JavaScript", "SEO"],
    keyFeatures: [
      { icon: "HeartPulse", title: "Services Overview", description: "A clear breakdown of orthopedic services offered by the practice." },
      { icon: "CalendarCheck", title: "Appointment Booking", description: "A sub-second booking flow patients can complete in under a minute." },
      { icon: "Users", title: "About & Credibility", description: "A dedicated About page introducing the practice and building patient trust." },
      { icon: "Newspaper", title: "Patient Education Blog", description: "An ongoing content section for patient education and clinic updates." },
    ],
    challenges: {
      business: "Communicating medical credibility and warmth at the same time, for a visitor who may be anxious about a health concern.",
      technical: "Keeping the visual language calm and accessible while staying modern rather than clinical or generic, with performance tuned for slower connections.",
    },
    lessonsLearned: [
      "Writing and structuring UI for trust-sensitive industries like healthcare",
      "Prioritizing readability and accessible contrast in content-heavy pages",
      "Hitting sub-second interaction targets on constrained mobile networks",
    ],
    outcomes: [
      "Production website live for a real healthcare client",
      "Clear service communication for prospective patients",
      "Responsive, accessible, local-SEO-optimized design",
    ],
    coverImage: { src: "/images/Mumbai Ortho Care.png", alt: "Mumbai Ortho Care clinic website" },
    gallery: [
      { src: "", alt: "Homepage introducing the practice" },
      { src: "", alt: "Services page with orthopedic offerings" },
      { src: "", alt: "About Us page building patient trust" },
      { src: "", alt: "Patient education blog" },
    ],
    liveUrl: "https://mumbaiorthocare.com/",
  },
  {
    slug: "nityaveda",
    name: "NityaVeda",
    industry: "E-commerce & Wellness",
    year: "2023",
    category: "professional",
    agencyCategory: "Ecommerce",
    featured: false,
    shortDescription:
      "A full e-commerce storefront for a wellness brand, covering the complete path from product discovery to checkout.",
    overview:
      "An e-commerce storefront for a wellness product brand, covering the full shopping journey from product browsing to cart and secure payment.",
    businessChallenge:
      "The brand needed a straightforward, trustworthy online store where customers could browse products and check out with confidence, with a checkout flow simple enough to minimize drop-off.",
    solution:
      "A clean product browsing experience, a clear cart summary, and a streamlined payment flow — keeping every step of the purchase path simple and predictable.",
    responsibilities: [
      "Frontend development of product, cart, and payment pages",
      "Cart and checkout flow implementation",
      "Responsive design",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Razorpay"],
    keyFeatures: [
      { icon: "Package", title: "Product Pages", description: "Clear product detail pages built for straightforward decision-making." },
      { icon: "ShoppingCart", title: "Cart Management", description: "A simple, transparent cart summary before checkout." },
      { icon: "CreditCard", title: "Payment Flow", description: "A streamlined payment page designed to reduce checkout friction." },
    ],
    challenges: {
      business: "Minimizing cart abandonment with a checkout flow that feels fast and trustworthy.",
      technical: "Keeping the cart-to-payment flow consistent and predictable across devices.",
    },
    lessonsLearned: [
      "Structuring an e-commerce checkout flow for clarity over feature density",
      "Building payment UI that reduces perceived friction",
    ],
    outcomes: [
      "Production e-commerce website for a real client",
      "Complete product-to-payment purchase flow",
      "Fully responsive design",
    ],
    coverImage: { src: "/images/NityaVeda.png", alt: "NityaVeda wellness e-commerce storefront" },
    gallery: [
      { src: "", alt: "Storefront homepage" },
      { src: "", alt: "Product detail page" },
      { src: "", alt: "Cart and payment flow" },
    ],
    liveUrl: "https://nityaveda.com/",
  },
  {
    slug: "juris-lexum",
    name: "Juris Lexum",
    industry: "Legal",
    year: "2023",
    category: "professional",
    agencyCategory: "Business",
    featured: false,
    shortDescription:
      "A restrained, authoritative law firm website built around clear practice-area navigation and a low-friction consultation form.",
    overview:
      "A law firm website built around clear practice-area navigation and a low-friction consultation request form, with SEO structured around how clients actually search for legal help.",
    businessChallenge:
      "Legal clients need to find the right practice area fast and feel confident enough to reach out — without wading through dense, generic legal-site copy.",
    solution:
      "A low-noise, professional design organized around clear practice-area pages, a simple consultation request form, and metadata structured for how people actually search for legal services.",
    responsibilities: [
      "Practice area page architecture and build",
      "Consultation request form",
      "SEO structure and on-page metadata",
    ],
    techStack: ["WordPress", "PHP", "Elementor", "SEO"],
    keyFeatures: [
      { icon: "Scale", title: "Practice Area Pages", description: "Clear, navigable practice-area structure for prospective clients." },
      { icon: "FileText", title: "Consultation Requests", description: "A low-friction form built to convert visitors into consultations." },
      { icon: "Search", title: "SEO Structure", description: "Metadata and page architecture built around real search behaviour." },
    ],
    challenges: {
      business: "Building trust quickly for a visitor who may be dealing with a stressful legal matter.",
      technical: "Structuring practice-area content for both readability and search visibility.",
    },
    lessonsLearned: [
      "Writing restrained, credibility-first copy for a trust-sensitive industry",
      "Structuring SEO around real client search intent rather than keyword stuffing",
    ],
    outcomes: [
      "Production website for a real legal client",
      "Clear practice-area navigation",
      "SEO foundations laid in from launch",
    ],
    coverImage: { src: "/images/Juris Lexum.png", alt: "Juris Lexum law firm website" },
    gallery: [
      { src: "", alt: "Homepage with practice-area navigation" },
      { src: "", alt: "Consultation request form" },
    ],
    liveUrl: "https://jurislexum.com/",
  },
  {
    slug: "neptune-excellence",
    name: "Neptune Excellence",
    industry: "Corporate",
    year: "2023",
    category: "professional",
    agencyCategory: "Corporate",
    featured: false,
    shortDescription:
      "A corporate identity site focused on credibility at a glance, with a component system built to extend as the business grows.",
    overview:
      "A corporate business website focused on establishing credibility at a glance — clean grid systems, disciplined type, and a component set built to extend as the business adds new service lines.",
    businessChallenge:
      "The business needed a site that read as established and trustworthy from the first scroll, with room to grow as new services and pages were added.",
    solution:
      "A corporate branding system built on clean grids and a modern component-based UI, structured so new service lines slot in without a redesign.",
    responsibilities: [
      "Corporate branding system implementation",
      "Component-based UI architecture",
      "Responsive design across devices",
    ],
    techStack: ["WordPress", "Elementor", "ACF", "JavaScript"],
    keyFeatures: [
      { icon: "Building2", title: "Corporate Branding", description: "A clean, disciplined visual identity system across every page." },
      { icon: "LayoutGrid", title: "Component-Based UI", description: "A reusable component set built to extend as the business grows." },
      { icon: "TrendingUp", title: "Growth-Ready Structure", description: "Architecture built to support new service lines without a rebuild." },
    ],
    challenges: {
      business: "Reading as an established, credible company from the very first impression.",
      technical: "Building a component system flexible enough to support future service-line pages.",
    },
    lessonsLearned: [
      "Designing component systems that scale cleanly as content grows",
      "Using type and grid discipline to communicate credibility without heavy decoration",
    ],
    outcomes: [
      "Production corporate website for a real client",
      "Modern, extensible component-based UI",
      "Responsive across every breakpoint",
    ],
    coverImage: { src: "/images/Neptune Excellence.png", alt: "Neptune Excellence corporate website" },
    gallery: [
      { src: "", alt: "Corporate homepage" },
      { src: "", alt: "Service line component layout" },
    ],
    liveUrl: "https://neptuneexcellence.com/",
  },
  {
    slug: "bowlicious",
    name: "Bowlicious",
    industry: "Restaurant",
    year: "2023",
    category: "professional",
    agencyCategory: "Restaurants",
    featured: false,
    shortDescription:
      "An appetite-first restaurant website with big food photography and an ordering flow with almost no steps between craving and checkout.",
    overview:
      "A restaurant website built around big food photography, a menu that reads like a menu rather than a spreadsheet, and an ordering flow designed to keep steps between craving and checkout to a minimum.",
    businessChallenge:
      "Restaurant sites often bury the menu and photography behind clunky templates — the business needed a site that made food the hero and made ordering effortless.",
    solution:
      "A visual, appetite-driven layout led by food photography, a scannable menu structure, and a mobile-first ordering flow with minimal friction.",
    responsibilities: [
      "Visual food showcase and menu layout",
      "Online ordering flow implementation",
      "Mobile-first responsive build",
    ],
    techStack: ["WordPress", "Elementor", "JavaScript"],
    keyFeatures: [
      { icon: "UtensilsCrossed", title: "Visual Food Showcase", description: "Large, appetite-first photography throughout the menu experience." },
      { icon: "ShoppingCart", title: "Online Ordering", description: "A near-frictionless flow from browsing to checkout." },
      { icon: "Smartphone", title: "Mobile-First Layout", description: "Built for the reality that most food orders start on a phone." },
    ],
    challenges: {
      business: "Making the menu and photography the hero without slowing the site down.",
      technical: "Keeping image-heavy pages fast on mobile without sacrificing visual impact.",
    },
    lessonsLearned: [
      "Balancing rich imagery with real-world mobile performance",
      "Designing ordering flows with the fewest possible steps",
    ],
    outcomes: [
      "Production website for a real restaurant client",
      "Modern, appetite-driven UX",
      "Mobile-first ordering experience",
    ],
    coverImage: { src: "/images/Bowlicious.png", alt: "Bowlicious restaurant website" },
    gallery: [
      { src: "", alt: "Homepage with food photography" },
      { src: "", alt: "Menu and ordering flow" },
    ],
    liveUrl: "https://bowlicious.in/",
  },
  {
    slug: "the-stack-verdict",
    name: "The Stack Verdict",
    industry: "SaaS & Content",
    year: "2024",
    category: "professional",
    agencyCategory: "Business",
    featured: false,
    shortDescription:
      "A data-dense hosting comparison platform, built to make dense tables genuinely scannable while keeping Core Web Vitals in the green.",
    overview:
      "A comparison platform for web hosting providers — the hard part was making dense, data-heavy tables genuinely scannable while keeping performance scores in the green across every page.",
    businessChallenge:
      "Comparison content is naturally data-dense, and data-dense pages are notoriously easy to make slow — the site needed to stay fast while surfacing a lot of information clearly.",
    solution:
      "A performance-first build with dynamic comparison tables, a content-heavy SEO architecture, and scannable data design that keeps dense information digestible.",
    responsibilities: [
      "Dynamic comparison table implementation",
      "Content-heavy SEO architecture",
      "Performance-first build and optimization",
    ],
    techStack: ["JavaScript", "SEO", "Performance"],
    keyFeatures: [
      { icon: "Table2", title: "Dynamic Comparison Tables", description: "Data-dense tables designed to stay scannable at a glance." },
      { icon: "Search", title: "Content-Heavy SEO", description: "Architecture built for comparison and review search intent." },
      { icon: "Gauge", title: "Performance-First Build", description: "Optimized to keep Core Web Vitals green despite dense content." },
    ],
    challenges: {
      business: "Presenting a lot of comparative data without overwhelming the reader.",
      technical: "Keeping data-heavy pages performant without stripping out the detail that makes them useful.",
    },
    lessonsLearned: [
      "Designing scannable data layouts for content-dense pages",
      "Balancing SEO content depth against page performance",
    ],
    outcomes: [
      "Production content platform for a real client",
      "Strong Core Web Vitals despite data density",
      "Scannable, conversion-friendly comparison UX",
    ],
    coverImage: { src: "/images/The Stack Verdict.png", alt: "The Stack Verdict hosting comparison platform" },
    gallery: [
      { src: "", alt: "Comparison table layout" },
      { src: "", alt: "Content and review architecture" },
    ],
    liveUrl: "https://thestackverdict.com/",
  },
  {
    slug: "proassist",
    name: "ProAssist",
    industry: "Business Services",
    year: "2022",
    category: "professional",
    agencyCategory: "Business",
    featured: false,
    shortDescription:
      "A modern, responsive business website built to establish credibility fast, with SEO foundations laid in from the first commit.",
    overview:
      "A business website built to establish credibility quickly — clean branding, clear service messaging, and SEO foundations in place from the very first commit.",
    businessChallenge:
      "The business needed a professional web presence that communicated legitimacy immediately, without a long build timeline.",
    solution:
      "A modern, responsive layout with a professional branding system and SEO-optimized content structure, built for a fast, focused turnaround.",
    responsibilities: [
      "Responsive layout implementation",
      "Branding system application",
      "SEO-optimized content structure",
    ],
    techStack: ["WordPress", "Elementor", "SEO"],
    keyFeatures: [
      { icon: "Layout", title: "Modern Responsive Layout", description: "A clean, professional layout across every device." },
      { icon: "Award", title: "Branding System", description: "A consistent, professional visual identity throughout." },
      { icon: "Search", title: "SEO-Optimized Structure", description: "On-page SEO foundations built in from day one." },
    ],
    challenges: {
      business: "Establishing credibility fast for a business that needed to move quickly.",
      technical: "Delivering a polished, SEO-sound build on a compressed timeline.",
    },
    lessonsLearned: [
      "Shipping polished, credible business sites on tight timelines",
      "Baking SEO fundamentals in from the first commit rather than retrofitting them",
    ],
    outcomes: [
      "Production business website for a real client",
      "Professional, responsive design",
      "SEO-optimized from launch",
    ],
    coverImage: { src: "/images/ProAssist.png", alt: "ProAssist business website" },
    gallery: [
      { src: "", alt: "Homepage and service messaging" },
    ],
    liveUrl: "https://proassist.in/",
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
