<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
        <title>XML Sitemap | ESA Letter Colorado</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: #ffffff;
            color: #24333B;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
          }
          .wrap { max-width: 1400px; margin: 0 auto; padding: 32px 16px 64px; }
          @media (min-width: 768px) { .wrap { padding: 40px 92px 80px; } }
          h1 { margin: 0 0 24px; font-size: 40px; line-height: 1.2; font-weight: 700; color: #19354A; }
          .intro {
            margin: 0 0 36px;
            padding: 20px;
            border-radius: 12px;
            background: #E8F0ED;
            color: #24333B;
          }
          .table-wrap { overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; }
          th {
            padding: 20px 18px;
            background: #F3F4F6;
            text-align: left;
            font-weight: 600;
            white-space: nowrap;
          }
          td { padding: 16px 18px; border-bottom: 1px solid #E5E7EB; white-space: nowrap; }
          td.url { white-space: normal; word-break: break-all; }
          a { color: #2563EB; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML Sitemap</h1>
          <p class="intro">
            This XML sitemap is generated for search engines following the sitemap.org protocol.
            It lists every page on this site along with when it was last updated.
          </p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="url">
                      <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
                    </td>
                    <td><xsl:value-of select="sitemap:lastmod" /></td>
                    <td><xsl:value-of select="sitemap:changefreq" /></td>
                    <td><xsl:value-of select="sitemap:priority" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
