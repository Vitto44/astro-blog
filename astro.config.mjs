import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://certainWager.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sk", "cz", "ir"],
    fallback: {
      sk: "en",
      cz: "en",
      ir: "en",
    },
    routing: {
      prefixDefaultLocale: true,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          sk: "sk",
          cz: "cz",
          ir: "ir",
        },
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
