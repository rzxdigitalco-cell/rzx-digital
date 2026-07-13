export interface Founder {
  name: string;
  role: string;
  titles: string[];
  bio: string;
  focus: string[];
}

export const founders: Founder[] = [
  {
    name: "Zaid Ghare",
    role: "Co-Founder",
    titles: ["WordPress Developer", "Frontend Developer", "UI Developer"],
    bio: "Zaid leads the visual and front-of-site side of every build — turning briefs into interfaces that feel fast, considered, and genuinely on-brand. His background spans WordPress, Elementor, and modern React/Next.js front ends, with a habit of sweating the details other agencies skip: spacing, load times, mobile behaviour.",
    focus: ["WordPress & Elementor", "Next.js & React", "UI/UX Design", "Performance"],
  },
  {
    name: "Rayyan Inamulhaque",
    role: "Co-Founder",
    titles: ["WordPress Developer", "Backend Developer", "Website Strategist"],
    bio: "Rayyan owns the engineering and strategy side — data models, dashboards, and the systems that keep a site working long after launch. He thinks in terms of business outcomes first, translating client goals into clean architecture, then building it to actually hold up under real traffic.",
    focus: ["Backend Architecture", "WordPress Development", "Strategy & Planning", "E-commerce Systems"],
  },
];
