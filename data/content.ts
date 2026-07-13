import type { ProcessStep, WhyUsCard, FAQItem, StatItem, Testimonial } from "@/types";

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discovery", description: "Understanding your business, your audience, and what success looks like.", icon: "Search" },
  { step: "02", title: "Research", description: "Studying competitors, patterns, and constraints before we design anything.", icon: "ListChecks" },
  { step: "03", title: "Planning", description: "Structuring content, information architecture, and technical approach.", icon: "PenTool" },
  { step: "04", title: "Design", description: "Building the visual language — type, color, layout, and interaction.", icon: "Palette" },
  { step: "05", title: "Development", description: "Turning the design into fast, clean, maintainable code.", icon: "Code2" },
  { step: "06", title: "Testing", description: "Cross-device checks, performance passes, and edge-case hunting.", icon: "TestTube2" },
  { step: "07", title: "Launch", description: "Shipping to production with monitoring in place.", icon: "Rocket" },
  { step: "08", title: "Support", description: "Staying involved after launch — fixes, iteration, and growth.", icon: "Handshake" },
];

export const whyUsCards: WhyUsCard[] = [
  { icon: "Sparkles", title: "Beautiful, Modern UI", description: "Design that looks and feels like a premium agency built it — because we did." },
  { icon: "Gauge", title: "Fast-Loading Websites", description: "Performance-tuned builds that keep visitors from bouncing before they see your work." },
  { icon: "Search", title: "SEO Friendly", description: "Structured to be found — clean metadata, semantic markup, and fast Core Web Vitals." },
  { icon: "Smartphone", title: "Mobile Responsive", description: "Every project tested and tuned across every real device, not just a browser preview." },
  { icon: "Code2", title: "Clean Code", description: "Maintainable code a future developer — yours or ours — can actually build on." },
  { icon: "Wallet", title: "Affordable Pricing", description: "Agency-quality work priced for startups and growing businesses, not just enterprises." },
  { icon: "Handshake", title: "Long-Term Support", description: "We stay involved after launch — this is a partnership, not a one-off vendor relationship." },
  { icon: "Zap", title: "Quick Delivery", description: "A tight two-founder team means fewer handoffs and faster turnarounds." },
];

export const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We build business websites, WordPress and WooCommerce sites, landing pages, portfolio and corporate websites, along with redesigns, SEO, performance optimization, and ongoing maintenance.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. A focused landing page can take a couple of weeks, while a full business website or e-commerce store typically takes several weeks from discovery through launch. We'll give you a clear estimate after understanding your requirements.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We modernize existing websites' design and performance while preserving what already works, including your existing SEO equity.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. We offer ongoing maintenance plans so your website stays secure, fast, and up to date after launch.",
  },
  {
    question: "Can you build WooCommerce or e-commerce stores?",
    answer:
      "Yes. We build WooCommerce and custom e-commerce stores with streamlined product discovery, cart, and checkout flows, including payment integration.",
  },
  {
    question: "Do you work with businesses outside Mumbai?",
    answer:
      "Yes. We're based in Mumbai but work remotely with clients across India and internationally — everything from kickoff calls to handoff can happen online.",
  },
  {
    question: "Who will actually work on my project?",
    answer:
      "Both founders — Zaid and Rayyan — are involved in every project, covering design, frontend, backend, and strategy between us. You're not handed off to a rotating team.",
  },
];

export const trustIndicators: StatItem[] = [
  { label: "Projects Delivered", value: "10", suffix: "+" },
  { label: "Technologies We Use", value: "15", suffix: "+" },
  { label: "Founders On Every Project", value: "2" },
  { label: "Responsive Design", value: "100", suffix: "%" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Shah",
    role: "Founder",
    company: "Hospitality Client",
    quote:
      "RZX took a messy set of requirements and turned it into a booking platform our owners and admins both actually enjoy using. Communication was clear the entire way through.",
  },
  {
    name: "Meera Kapoor",
    role: "Practice Manager",
    company: "Healthcare Client",
    quote:
      "We needed a site that looked credible and loaded fast. They delivered both, and stayed responsive to every round of feedback without the process dragging on.",
  },
  {
    name: "Rohan Mehta",
    role: "Operations Lead",
    company: "Corporate Client",
    quote:
      "What stood out was the attention to detail — spacing, load times, mobile behaviour, all of it considered. The kind of build you don't have to revisit in six months.",
  },
];
