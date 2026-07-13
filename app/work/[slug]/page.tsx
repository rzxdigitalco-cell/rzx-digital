import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CaseStudyHero } from "@/features/projects/case-study-hero";
import { CaseStudyOverview } from "@/features/projects/case-study-overview";
import { CaseStudyResponsibilities } from "@/features/projects/case-study-responsibilities";
import { CaseStudyFeatures } from "@/features/projects/case-study-features";
import { CaseStudyTech } from "@/features/projects/case-study-tech";
import { CaseStudyChallenges } from "@/features/projects/case-study-challenges";
import { CaseStudyGallery } from "@/features/projects/case-study-gallery";
import { RelatedProjects } from "@/features/projects/related-projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Every valid slug is known at build time (data/projects.ts). Any
// slug outside that set should 404 immediately rather than attempt
// on-demand server rendering.
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name} — Case Study`;
  const description = project.shortDescription;
  const url = `${siteConfig.url}/work/${project.slug}`;
  const image = `${siteConfig.url}${project.coverImage.src}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 750, alt: project.coverImage.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.shortDescription,
    url: `${siteConfig.url}/work/${project.slug}`,
    image: `${siteConfig.url}${project.coverImage.src}`,
    creator: { "@type": "Organization", name: siteConfig.name },
    about: project.industry,
    keywords: project.techStack.join(", "),
    ...(project.category === "engineering"
      ? {
          educationalUse: "Guided learning project extended with original engineering work",
        }
      : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/work` },
      { "@type": "ListItem", position: 3, name: project.name, item: `${siteConfig.url}/work/${project.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Work", href: "/work" },
          { label: project.name },
        ]}
      />
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyResponsibilities project={project} />
      <CaseStudyFeatures project={project} />
      <CaseStudyTech project={project} />
      <CaseStudyChallenges project={project} />
      <CaseStudyGallery images={project.gallery} />
      <RelatedProjects slug={project.slug} />
    </>
  );
}
