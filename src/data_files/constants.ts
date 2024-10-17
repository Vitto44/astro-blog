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

export const TEXTS = {
  en: {
    reviewTitle: "Top Betting Sites & Casinos: Reviews",
    reviewDescription:
      "Find the best online betting sites and casinos. Read reviews and compare offers.",
    blogTitle: "Your Insider's Guide to Maximizing Profits",
    blogDescription:
      "Learn how to maximize your profits with our expert insights and tips.",
    heroSubtitle:
      "Discover the best free and exclusive deals and offers. Maximize your winnings effortlessly with CertainWager!",
    heroAlt: "Technolgoies showcasing money and betting",
    contactTitle: "Contact Us",
    emailSubscribe1: "Subscribe to our newsletter to get the ",
    emailSubscribe2: "Latest Offers!",
    subscribe: "Subscribe",
    contactDescription:
      "We're here to help you with any questions or concerns. Reach out to us and we'll get back to you as soon as possible.",
  },
  sk: {
    reviewTitle: "Top Betting Sites & Casinos: Reviews",
    reviewDescription:
      "Find the best online betting sites and casinos. Read reviews and compare offers.",
    blogTitle: "Your Insider's Guide to Maximizing Profits",
    blogDescription:
      "Learn how to maximize your profits with our expert insights and tips.",
    heroSubtitle:
      "Discover the best free and exclusive deals and offers. Maximize your winnings effortlessly with CertainWager!",
    heroAlt: "Technolgoies showcasing money and betting",
    contactTitle: "Kontaktujte nás",
    emailSubscribe1: "Prihláste sa k odberu noviniek a získajte ",
    emailSubscribe2: "Najnovšie Ponuky!",
    subscribe: "Odoberať",
    contactDescription:
      "We're here to help you with any questions or concerns. Reach out to us and we'll get back to you as soon as possible.",
  },
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
