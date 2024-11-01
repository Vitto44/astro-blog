import { promises as fs } from "fs";
import path from "path";

const BASE_URL = "https://certainwager.com";
const LOCALES = ["en", "sk", "cz", "ie"];

const formatDate = (date: Date) => date.toISOString().split("T")[0];

const pages = [
  { path: "/", lastmod: new Date() },
  { path: "/blog/", lastmod: new Date() },
  { path: "/contact/", lastmod: new Date() },
  { path: "/reviews/", lastmod: new Date() },
];

// Generate the sitemap XML content
const generateSitemapXML = () => {
  const lastmod = formatDate(new Date());
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  pages.forEach((page) => {
    // Add each locale variation for the page
    LOCALES.forEach((locale) => {
      const localePath = locale === "en" ? page.path : `/${locale}${page.path}`;
      sitemap += `  <url>\n`;
      sitemap += `    <loc>${BASE_URL}${localePath}</loc>\n`;
      sitemap += `    <lastmod>${lastmod}</lastmod>\n`;

      // Alternate links for each locale
      LOCALES.forEach((altLocale) => {
        const altLocalePath =
          altLocale === "en" ? page.path : `/${altLocale}${page.path}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${BASE_URL}${altLocalePath}" />\n`;
      });

      sitemap += `  </url>\n`;
    });
  });

  sitemap += `</urlset>`;
  return sitemap;
};

// Write the generated XML to the .vercel/output/static directory
const writeSitemap = async () => {
  const sitemap = generateSitemapXML();
  const outputPath = path.join(".vercel", "output", "static", "sitemap.xml");
  await fs.writeFile(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

writeSitemap().catch((err) => {
  console.error("Error generating sitemap:", err);
});
