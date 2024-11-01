import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

const languageCodes = ["en", "sk", "cz", "ie"];

export default defineConfig({
  site: "https://certainwager.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: languageCodes,
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
        if (page.includes("404")) {
          return false;
        }

        const segments = page.split("/");

        const languageSegments = segments.filter((segment) =>
          languageCodes.includes(segment),
        );

        // If there are two language segments and they are different, exclude the page
        if (
          languageSegments.length > 1 &&
          languageSegments[0] !== languageSegments[1]
        ) {
          return false;
        }

        return true;
      },
      serialize: ({ url }) => {
        const lastModified = new Date().toISOString().split("T")[0];

        const alternateLinks = languageCodes.map((locale) => ({
          hreflang: locale,
          lang: locale,
          url: url
            .split("/")
            .map((segment) => {
              if (languageCodes.includes(segment)) {
                return locale;
              }

              return segment;
            })
            .join("/"),
        }));

        return {
          url,
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
