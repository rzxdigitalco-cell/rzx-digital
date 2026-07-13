export type ProjectCategory = "professional" | "engineering";

export type AgencyCategory =
  | "Healthcare"
  | "Hospitality"
  | "Ecommerce"
  | "Business"
  | "Corporate"
  | "Restaurants";

export interface ProjectFeature {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
}

export interface EngineeringContribution {
  title: string;
  description: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  name: string;
  industry: string;
  /** TODO(client): exact delivery year not supplied for any project — omit until confirmed */
  year?: string;
  category: ProjectCategory;
  agencyCategory: AgencyCategory;
  featured: boolean;
  /** Short line for cards (Work grid, homepage) */
  shortDescription: string;
  /** Max 120 words, business language only — 04_PROJECTS.md */
  overview: string;
  businessChallenge: string;
  solution: string;
  /** Rendered as "Our Responsibilities" per brand voice rules */
  responsibilities: string[];
  /** Required only when category === "professional" */
  internshipNote?: string;
  techStack: string[];
  keyFeatures: ProjectFeature[];
  /** Required only when category === "engineering" */
  engineeringContributions?: EngineeringContribution[];
  challenges: {
    business: string;
    technical: string;
  };
  lessonsLearned: string[];
  outcomes: string[];
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  businessProblem: string;
  solution: string;
  benefits: string[];
  deliverables: string[];
}

export interface TechBadge {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "cms" | "database" | "payments" | "tooling" | "hosting";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyUsCard {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}
