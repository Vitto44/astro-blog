import ogImageSrc from "@images/social.png";

type Locale = "en" | "sk" | "cz" | "ie";

export const SITE = (locale: Locale = "en") => {
  const descriptions: Record<
    Locale,
    {
      title: string;
      tagline: string;
      description: string;
      description_short: string;
    }
  > = {
    en: {
      title: "CertainWager",
      tagline: "List of the best online betting sites and casinos",
      description:
        "CertainWager showcases the best online betting sites and casinos. Read reviews and compare offers. Learn how to maximize your profits with our expert insights and tips.",
      description_short:
        "CertainWager showcases the best online betting sites and casinos. Read reviews and compare offers.",
    },
    sk: {
      title: "CertainWager SK",
      tagline: "Zoznam najlepších stávkových stránok a kasín",
      description:
        "CertainWager predstavuje najlepšie stávkové stránky a kasína. Čítajte recenzie a porovnajte ponuky. Naučte sa, ako maximalizovať svoje zisky s našimi odbornými radami.",
      description_short:
        "CertainWager predstavuje najlepšie stávkové stránky a kasína. Čítajte recenzie a porovnajte ponuky.",
    },
    cz: {
      title: "CertainWager CZ",
      tagline: "Seznam nejlepších online sázkových stránek a kasin",
      description:
        "CertainWager nabízí nejlepší sázkové stránky a kasina. Přečtěte si recenze a porovnejte nabídky. Naučte se, jak maximalizovat své zisky s našimi odbornými radami.",
      description_short:
        "CertainWager nabízí nejlepší sázkové stránky a kasina. Přečtěte si recenze a porovnejte nabídky.",
    },
    ie: {
      title: "CertainWager IE",
      tagline: "List of the best online betting sites and casinos",
      description:
        "CertainWager showcases the best online betting sites and casinos. Read reviews and compare offers. Learn how to maximize your profits with our expert insights and tips.",
      description_short:
        "CertainWager showcases the best online betting sites and casinos. Read reviews and compare offers.",
    },
  };

  return {
    ...descriptions[locale],
    url: `https://certainwager.com/${locale}`,
    author: "Viktor Hajdu",
  };
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
    suggestedOffer: "Suggested Offers",
    newestArticles: "Newest Articles",
    share: "Share",
    copyLink: "Copy Link",
    all: "All",
    casino: "Casino",
    sportsBetting: "Sport Betting",
    esport: "E-Sport",
    crypto: "Crypto",
    contactBtn: "Get in Touch",
    bet: "Bet",
    betCurrency: "£",
    andGet: "and get",
    inBonuses: "in Bonuses",
    howToClaim: "How to Claim",
    redeem: "Claim Bonus",
    orUseCode: "or use code",
    advertisementDisclosure: "Advertisement Disclosure",
    view: "View",
    options: "Options",
    countries: "Countries",
    depositMethods: "Deposit Methods",
    customerSupport: "Customer Support",
    license: "License",
    review: "Review",
    specifications: "Specifications",
    pros: "Pros",
    cons: "Cons",
  },
  ie: {
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
    suggestedOffer: "Suggested Offers",
    newestArticles: "Newest Articles",
    share: "Share",
    copyLink: "Copy Link",
    all: "All",
    casino: "Casino",
    sportsBetting: "Sport Betting",
    esport: "E-Sport",
    crypto: "Crypto",
    contactBtn: "Get in Touch",
    bet: "Bet",
    betCurrency: "£",
    andGet: "and get",
    inBonuses: "in Bonuses",
    howToClaim: "How to Claim",
    redeem: "Claim Bonus",
    orUseCode: "or use code",
    advertisementDisclosure: "Advertisement Disclosure",
    view: "View",
    options: "Options",
    countries: "Countries",
    depositMethods: "Deposit Methods",
    customerSupport: "Customer Support",
    license: "License",
    review: "Review",
    specifications: "Specifications",
    pros: "Pros",
    cons: "Cons",
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
      "Objavte bonusové ponuky ponúkané plne licencovanými stávkovými stránkami a kasínami s ",
    heroAlt: "Technológie prezentujúce peniaze a stávkovanie",
    emailSubscribe1: "Prihláste sa k odberu noviniek a získajte ",
    emailSubscribe2: "Najnovšie Ponuky!",
    subscribe: "Odoberať",
    contactTitle: "Kontaktujte Nás",
    contactDescription:
      "Sme tu, aby sme vám pomohli s akýmikoľvek otázkami alebo obavami. Kontaktujte nás a ozveme sa vám čo najskôr.",
    suggestedOffer: "Navrhované Ponuky",
    newestArticles: "Najnovšie Články",
    share: "Zdieľať",
    copyLink: "Kopírovať Odkaz",
    all: "Všetko",
    casino: "Kasíno",
    sportsBetting: "Športové Stávkovanie",
    esport: "E-Šport",
    crypto: "Krypto",
    contactBtn: "Kontaktujte Nás",
    bet: "Vsaď",
    betCurrency: "€",
    andGet: "a získaj",
    inBonuses: "v Bonusoch",
    howToClaim: "Ako získať bonus",
    redeem: "Získať bonus",
    orUseCode: "alebo použi kód",
    advertisementDisclosure: "Reklamné Sdělenie",
    view: "Zobraziť",
    options: "Možnosti",
    countries: "Krajiny",
    depositMethods: "Spôsoby vkladu",
    customerSupport: "Zákaznícka podpora",
    license: "Licencia",
    review: "Recenzia",
    specifications: "Špecifikácie",
    pros: "Výhody",
    cons: "Nevýhody",
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
    emailSubscribe1: "Přihlaste se k odběru novinek a získejte ",
    emailSubscribe2: "Nejnovější Nabídky!",
    subscribe: "Odebírat",
    contactTitle: "Kontaktujte Nás",
    contactDescription:
      "Jsme tu, abychom vám pomohli s jakýmikoli dotazy nebo obavami. Kontaktujte nás a ozveme se vám co nejdříve.",
    suggestedOffer: "Navrhované Nabídky",
    newestArticles: "Nejnovější Články",
    share: "Sdílet",
    copyLink: "Kopírovat Odkaz",
    all: "Vše",
    casino: "Kasino",
    sportsBetting: "Sportovní Sázení",
    esport: "E-Sport",
    crypto: "Krypto",
    contactBtn: "Kontaktujte Nás",
    bet: "Vsaď",
    betCurrency: " CZK",
    andGet: "a získej",
    inBonuses: "v Bonusech",
    howToClaim: "Jak získat bonus",
    redeem: "Získat bonus",
    orUseCode: "nebo použijte kód",
    advertisementDisclosure: "Reklamní sdělení",
    view: "Zobrazit",
    options: "Možnosti",
    countries: "Země",
    depositMethods: "Způsoby vkladu",
    customerSupport: "Zákaznická podpora",
    license: "Licence",
    review: "Recenze",
    specifications: "Specifikace",
    pros: "Výhody",
    cons: "Nevýhody",
  },
};

export const SEO = (locale: Locale = "en") => {
  const siteData = SITE(locale);

  return {
    title: siteData.title,
    description: siteData.description,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      inLanguage:
        locale === "en" ? "en-GB" : `${locale}-${locale.toUpperCase()}`,
      "@id": siteData.url,
      url: siteData.url,
      name: siteData.title,
      description: siteData.description,
      isPartOf: {
        "@type": "WebSite",
        url: siteData.url,
        name: siteData.title,
        description: siteData.description,
      },
    },
  };
};

export const OG = (locale: Locale = "en") => {
  const siteData = SITE(locale);

  return {
    locale: locale === "en" ? "en_GB" : `${locale}_${locale.toUpperCase()}`,
    type: "website",
    url: siteData.url,
    title: `${siteData.title}: ${siteData.tagline}`,
    description: siteData.description,
    image: ogImageSrc,
  };
};
