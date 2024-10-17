import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "CertainWager",
  tagline: "List of the best online betting sites and casinos",
  description:
    "CertainWager showcases the best online betting sites and casinos. Read reviews and compare offers. Learn how to maximize your profits with our expert insights and tips.",
  description_short:
    "CertainWager showcases the best online betting sites and casinos. Read reviews and compare offers.",
  url: "https://certainwager.com",
  author: "Viktor Hajdu",
};

export const TEXTS = {
  en: {
    blogLayoutDescription:
      "Dive into the latest news, insider tips, and winning strategies in the thrilling world of sports betting and casinos.",
    reviewLayoutName: "Top Casinos & Sports Betting Reviews | CertainWager",
    reviewLayoutDescription:
      "Discover 100% real and honest reviews from experts on the best casinos and sports betting sites.",
    mainDescription:
      "Unlock the best free bets and exclusive deals in the world of sports betting and casinos.",
    reviewTitle: "Top Betting Sites & Casinos: Unbiased Reviews",
    reviewDescription:
      "Find and compare the best online betting sites and casinos. Read honest reviews and seize top offers.",
    blogTitle: "Your Insider's Guide to Maximizing Profits",
    blogDescription:
      "Master the art of winning with our expert insights, tips, and strategies.",
    heroSubtitle:
      "Discover the best free bets and exclusive offers. Maximize your winnings effortlessly with CertainWager!",
    heroAlt: "Exciting visuals showcasing money and betting opportunities",
    contactTitle: "Get in Touch with Us",
    emailSubscribe1: "Subscribe to our newsletter and be the first to get the ",
    emailSubscribe2: "Latest Offers!",
    subscribe: "Subscribe Now",
    contactDescription:
      "Have questions or need assistance? Reach out, and we'll respond as soon as possible.",
  },
  ie: {
    emailSubscribe1: "Subscribe to our newsletter and be the first to get the ",
    emailSubscribe2: "Latest Offers!",
    subscribe: "Subscribe Now",
  },
  sk: {
    blogLayoutDescription:
      "Čítajte najnovšie správy, tipy a triky zo sveta športového stávkovania a kasín.",
    reviewLayoutName: "Recenzie Kasín a Stávkových Stránok | CertainWager",
    reviewLayoutDescription:
      "Objavte 100% skutočné a čestné recenzie od odborníkov na najlepšie kasína a stávkové stránky.",
    mainDescription:
      "Získajte najlepšie bezplatné a exkluzívne ponuky vo svete športového stávkovania a kasín.",
    reviewTitle: "Najlepšie Stávkové Stránky a Kasína: Recenzie",
    reviewDescription:
      "Nájdite a porovnajte najlepšie online stávkové stránky a kasína. Prečítajte si recenzie a využite top ponuky.",
    blogTitle: "Váš Sprievodca k Maximalizácii Ziskov",
    blogDescription:
      "Naučte sa umenie výhry s našimi odbornými poznatkami, tipmi a stratégiami.",
    heroSubtitle:
      "Objavte najlepšie bezplatné stávky a exkluzívne ponuky. Maximalizujte svoje výhry jednoducho s CertainWager!",
    heroAlt: "Technológie prezentujúce peniaze a stávkovanie",
    contactTitle: "Kontaktujte Nás",
    emailSubscribe1: "Prihláste sa k odberu noviniek a získajte ",
    emailSubscribe2: "Najnovšie Ponuky!",
    subscribe: "Odoberať",
    contactDescription:
      "Sme tu, aby sme vám pomohli s akýmikoľvek otázkami alebo obavami. Kontaktujte nás a ozveme sa vám čo najskôr.",
  },
  cz: {
    blogLayoutDescription:
      "Čtěte nejnovější zprávy, tipy a triky ze světa sportovního sázení a kasin.",
    reviewLayoutName: "Recenze Kasín a Sázkových Stránek | CertainWager",
    reviewLayoutDescription:
      "Objevte 100% skutečné a upřímné recenze od expertů na nejlepší kasina a sázkové stránky.",
    mainDescription:
      "Získejte nejlepší bezplatné a exkluzivní nabídky ve světě sportovního sázení a kasin.",
    reviewTitle: "Nejlepší Sázkové Stránky a Kasina: Recenze",
    reviewDescription:
      "Najděte a porovnejte nejlepší online sázkové stránky a kasina. Přečtěte si recenze a využijte top nabídky.",
    blogTitle: "Váš Průvodce k Maximalizaci Zisků",
    blogDescription:
      "Ovládněte umění výhry s našimi odbornými poznatky, tipy a strategiemi.",
    heroSubtitle:
      "Objevte nejlepší bezplatné sázky a exkluzivní nabídky. Maximalizujte své výhry snadno s CertainWager!",
    heroAlt: "Technologie prezentující peníze a sázení",
    contactTitle: "Kontaktujte Nás",
    emailSubscribe1: "Přihlaste se k odběru novinek a získejte ",
    emailSubscribe2: "Nejnovější Nabídky!",
    subscribe: "Odebírat",
    contactDescription:
      "Jsme tu, abychom vám pomohli s jakýmikoli dotazy nebo obavami. Kontaktujte nás a ozveme se vám co nejdříve.",
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
