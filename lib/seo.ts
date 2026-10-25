import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { seoSettings, type PageSeo } from "@/data/seo-settings";

const seoByPath = new Map(seoSettings.map((page) => [page.path, page]));

// Home page photos used as the share image on every page (the first is the primary)
const OG_IMAGES = [
  {
    url: "/images/colorado-esa-hero.jpg",
    width: 1376,
    height: 768,
    alt: "Colorado resident with emotional support golden retriever in sunlit Denver apartment",
  },
  {
    url: "/images/colorado-happy-tenant-esa.jpg",
    width: 1376,
    height: 768,
    alt: "Colorado tenant enjoying apartment living with their emotional support animals",
  },
];

/** Looks up the SEO row for a route path such as "/" or "/rights/hoa-rules/". */
export function getPageSeo(path: string): PageSeo {
  const page = seoByPath.get(path);
  if (!page) {
    throw new Error(`No SEO settings row for path "${path}"`);
  }
  return page;
}

/** Same as getPageSeo, but returns undefined for routes that have no SEO row. */
export function findPageSeo(path: string): PageSeo | undefined {
  return seoByPath.get(path);
}

// One robots meta tag per page (spec section 7.1):
// I/F  -> "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
// NI/F -> "noindex, follow"
function buildRobots(value: string): Metadata["robots"] {
  const directives = value.split(",").map((d) => d.trim().toLowerCase());
  const index = !directives.includes("noindex");
  const follow = !directives.includes("nofollow");
  if (!index) return { index, follow };
  return {
    index,
    follow,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  };
}

export function buildMetadata(page: PageSeo): Metadata {
  return {
    // Titles already include the brand, so bypass the layout's title template
    title: { absolute: page.title },
    description: page.description,
    ...(page.keywords && { keywords: page.keywords }),
    alternates: {
      canonical: page.canonical,
    },
    robots: buildRobots(page.robots),
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      url: page.canonical,
      title: page.ogTitle,
      description: page.ogDescription,
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.ogDescription,
      images: [OG_IMAGES[0].url],
    },
  };
}

export function pageMetadata(path: string): Metadata {
  return buildMetadata(getPageSeo(path));
}
