import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { rightsSpokes } from "@/data/rights-data";
import { conditionsList } from "@/data/conditions-data";
import { coloradoCities } from "@/data/locations-data";
import { blogCategories, blogPosts } from "@/data/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString().split("T")[0];

  // Static core & hub & legal pages
  const staticPages = [
    "",
    "/what-is-an-esa-letter/",
    "/how-to-get-an-esa-letter-in-colorado/",
    "/requirements/",
    "/sample-letter/",
    "/cost/",
    "/renewal/",
    "/rights/",
    "/conditions/",
    "/locations/",
    "/blog/",
    "/how-it-works/",
    "/faq/",
    "/about-our-therapists/",
    "/reviews/",
    "/verify-esa-letter/",
    "/contact/",
    "/privacy-policy/",
    "/terms/",
    "/disclaimer/",
    "/refund-policy/",
  ].map((route) => ({
    url: `${baseUrl}${route ? (route.endsWith("/") ? route : `${route}/`) : "/"}`,
    lastModified: currentDate,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/rights") || route.startsWith("/conditions") || route.startsWith("/locations") ? 0.9 : 0.8,
  }));

  // Silo 1: Rights Spokes
  const rightsUrls = rightsSpokes.map((page) => ({
    url: `${baseUrl}/rights/${page.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Silo 2: Condition Spokes
  const conditionUrls = conditionsList.map((page) => ({
    url: `${baseUrl}/conditions/${page.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Silo 3: City Spokes
  const cityUrls = coloradoCities.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Blog Categories
  const categoryUrls = blogCategories.map((cat) => ({
    url: `${baseUrl}/blog/category/${cat.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Blog Posts
  const postUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...rightsUrls,
    ...conditionUrls,
    ...cityUrls,
    ...categoryUrls,
    ...postUrls,
  ];
}
