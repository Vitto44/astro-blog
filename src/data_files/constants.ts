import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "CertainWager",
  tagline: "Top-quality Hardware Tools",
  description:
    "CertainWager offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short:
    "CertainWager offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://certainwager.com",
  author: "Viktor Hajdu",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-GB",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with CertainWager's top-quality hardware tools and expert construction services. Trusted by industry leaders, CertainWager offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};
