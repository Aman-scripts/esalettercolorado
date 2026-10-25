import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { seoSettings, type PageSeo } from "@/data/seo-settings";

const seoByPath = new Map(seoSettings.map((page) => [page.path, page]));

/** Looks up the sheet row for a route path such as "/" or "/rights/hoa-rules/". */
export function getPageSeo(path: string): PageSeo {
  const page = seoByPath.get(path);
  if (!page) {
    throw new Error(`No SEO settings row for path "${path}"`);
  }
  return page;
}

/** Same as getPageSeo, but returns undefined for routes that are not in the sheet. */
export function findPageSeo(path: string): PageSeo | undefined {
  return seoByPath.get(path);
}

function parseRobots(value: string) {
  const directives = value.split(",").map((d) => d.trim().toLowerCase());
  return {
    index: !directives.includes("noindex"),
    follow: !directives.includes("nofollow"),
  };
}

export function buildMetadata(page: PageSeo): Metadata {
  const robots = parseRobots(page.robots);

  return {
    // Sheet titles already include the brand, so bypass the layout's title template
    title: { absolute: page.title },
    description: page.description,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: {
      canonical: page.canonical,
    },
    robots: {
      ...robots,
      googleBot: {
        ...robots,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: page.canonical,
      title: page.ogTitle,
      description: page.ogDescription,
      images: [{ url: page.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.ogDescription,
      images: [page.ogImage],
    },
  };
}

export function pageMetadata(path: string): Metadata {
  return buildMetadata(getPageSeo(path));
}
