import { sitemapEntries } from "@/lib/sitemap-entries";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Standard sitemap XML, plus an xml-stylesheet instruction so browsers render it
// as a readable table (public/sitemap.xsl). Search engines ignore the stylesheet.
export function GET() {
  const urls = sitemapEntries()
    .map((entry) => {
      const lastModified =
        entry.lastModified instanceof Date
          ? entry.lastModified.toISOString()
          : entry.lastModified;
      return [
        "  <url>",
        `    <loc>${escapeXml(entry.url)}</loc>`,
        lastModified ? `    <lastmod>${escapeXml(lastModified)}</lastmod>` : "",
        entry.changeFrequency ? `    <changefreq>${entry.changeFrequency}</changefreq>` : "",
        entry.priority !== undefined ? `    <priority>${entry.priority.toFixed(1)}</priority>` : "",
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
