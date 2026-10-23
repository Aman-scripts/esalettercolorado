import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/wp-admin/admin-ajax.php"],
        disallow: [
          "/wp-admin/",
          "/?s=",
          "/search/",
          "/*?utm_",
          "/*?fbclid=",
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
