import type { WhyUsCard } from "@/types";

export const mission =
  "Help startups, doctors, local businesses, and growing brands build modern, high-performing websites that generate leads and build trust.";

export const vision =
  "To grow RZX Digital from a two-founder freelance studio into a recognized web design and development agency, known for beautiful, fast, dependable work.";

export const values: WhyUsCard[] = [
  { icon: "Gem", title: "Quality", description: "We hold every project to a production-grade standard, not a prototype standard." },
  { icon: "Gauge", title: "Performance", description: "Speed and reliability are treated as features, not afterthoughts." },
  { icon: "Eye", title: "Transparency", description: "Clear communication and honest timelines, from the first call to launch." },
  { icon: "Handshake", title: "Long-Term Relationships", description: "We build for businesses we want to keep working with, not just for a single launch." },
  { icon: "Code2", title: "Clean Engineering", description: "Maintainable, well-structured code that holds up long after handoff." },
  { icon: "Target", title: "Business First", description: "Every technical decision is made in service of a business outcome, not a trend." },
];

export const story = [
  "RZX Digital was founded by Zaid Ghare and Rayyan Inamulhaque — two developers who kept ending up on the same real client work: hospitality, healthcare, architecture, and e-commerce brands that needed a website representing the quality of their business, not a generic template.",
  "Rather than run two separate freelance practices, we brought our work together under one studio. Zaid leads design and front-end craft; Rayyan leads architecture and strategy. Every project moves through both of us, which means it's designed well and built to last.",
];

export const engineeringMindset =
  "We think like engineers first, designers second — not because design doesn't matter, but because a beautiful interface built on fragile code eventually fails the business it was meant to serve. Every project starts with a clear content structure, a component architecture that avoids duplication, and code we'd be comfortable handing to another developer. We choose technologies for reliability and maintainability, not novelty.";

export interface TimelineStage {
  label: string;
  title: string;
  description: string;
}

export const timeline: TimelineStage[] = [
  {
    label: "Foundations",
    title: "Two Developers, One Standard",
    description: "Zaid and Rayyan each built a track record in modern frontend engineering, WordPress, and full-stack development — independently, before joining forces.",
  },
  {
    label: "Client Work",
    title: "Real Businesses, Real Deadlines",
    description: "Delivering production websites across hospitality, healthcare, architecture, and e-commerce — under real deadlines and real constraints.",
  },
  {
    label: "Coming Together",
    title: "RZX Digital",
    description: "Formalizing the partnership into one studio — same discipline, same standards, now under a single agency built to take on more.",
  },
  {
    label: "Today",
    title: "Building For Growth",
    description: "Taking on business websites, e-commerce platforms, and custom web applications, with the same care that shaped everything before it.",
  },
];
