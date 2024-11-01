import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

export default defineConfig({
  site: "https://certainwager.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sk", "cz", "ie"],
    fallback: {
      sk: "en",
      cz: "en",
      ie: "en",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-GB",
          sk: "sk",
          cz: "cs",
          ie: "en-GB",
        },
      },
      filter: (page) => {
        // Exclude pages like 404
        return !page.includes("404") && !page.includes("/private");
      },
      serialize: ({ url, route }) => {
        const lastModified =
          route?.lastModified || new Date().toISOString().split("T")[0];
        const lang = route?.locale || "en";
        const isDefaultLocale = lang === "en";
        const formattedUrl = isDefaultLocale ? url : `/${lang}${url}`;

        const alternateLinks = ["en", "sk", "cz", "ie"].map((locale) => ({
          hreflang: locale,
          lang: locale,
          url,
        }));

        return {
          url: formattedUrl,
          lastmod: lastModified,
          links: alternateLinks,
        };
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});
