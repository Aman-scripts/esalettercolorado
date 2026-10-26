import type { MetadataRoute } from "next";
import { sitemapEntries } from "@/lib/sitemap-entries";

// Served at /sitemap.xml as plain sitemaps.org XML (no stylesheet)
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries();
}
