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
      "The best bonus offers from verified betting sites and casinos. We provide comprehensive reviews, practical guides on how to obtain bonuses, and up-to-date information on betting trends. Use our tips to increase your chances of winning!",
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
    whyUs: "Why Us",
    considerBefore: "Consider Before You Start Betting or Playing",
    readReview: "Read Review",
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
      "The best bonus offers from verified betting sites and casinos. We provide comprehensive reviews, practical guides on how to obtain bonuses, and up-to-date information on betting trends. Use our tips to increase your chances of winning!",
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
    whyUs: "Why Us",
    considerBefore: "Consider Before You Start Betting or Playing",
    readReview: "Read Review",
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
      "Najatraktívnejšie bonusové ponuky od overených stávkových stránok a kasín. Ponúkame prehľadné recenzie, praktické návody na získanie bonusov a aktuálne informácie o trendoch v stávkovaní. Získajte váš bonus ešte dnes!",
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
    whyUs: "Prečo Práve My",
    considerBefore:
      "Pár Vecí, Ktoré Treba Zvážiť Predtým, Než začnete stávkovať alebo hrať",
    faq: "Často kladené otázky",
    ourChoises: "Naše Voľby",
    ourChoisesSubtitle:
      "Najlepšie stávková kancelária a kasíno na Slovensku podľa našich expertov.",
    bestBettingSite: "Najlepšia Stávková Kancelária",
    bestCasino: "Najlepšie Kasíno",
    readReview: "Prečítať Recenziu",
    footerDisclaimer:
      "Tento web je určený pre osoby staršie ako 18 rokov. CertainWager je nezávislý zdroj informácií o online kasínach a stávkových kanceláriach, ktorý nie je kontrolovaný žiadnym prevádzkovateľom hazardných hier, ani žiadnou inou inštitúciou. Všetky naše recenzie vytvárame čestne, podľa najlepších vedomostí a úsudkov členov nášho nezávislého tímu, slúžia však len na informačné účely a za žiadnych okolností nemajú slúžiť ako právne rady. Pred hraním a stávkovaním vo vybranej spoločnosti by ste sa mali vždy uistiť, že spĺňate všetky regulačné požiadavky.",
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
      "Nejatraktivnější bonusové nabídky od ověřených sázkových stránek a kasin. Nabízíme přehledné recenze, praktické návody na získání bonusů a aktuální informace o trendech v sázení. Využijte naše tipy a zvyšte své šance na výhru!",
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
    whyUs: "Proč Právě My",
    considerBefore:
      "Pár Věcí, Které Je Potřeba Zvážit Předtím, Než začnete sázet nebo hrát",
    readReview: "Přečíst Recenzi",
  },
};

export const WHYUS = {
  sk: [
    {
      title: "Nezávislý tím",
      content:
        "Naše hodnotenia sú nezávislé a založené na skutočných skúsenostiach a skúsenostiach hráčov.",
      svg: "groups",
    },
    {
      title: "Garancia férovosti",
      content:
        "Zaručujeme férové hodnotenie a transparentnosť všetkých nami recenzovaných stávkových kancelárií a kasínami.",
      svg: "verified",
    },
    {
      title: "Recenzie založené na čom záleží",
      content:
        "Naše recenzie sú založené na dôležitých kritériách, ktoré sú pre všetkých hráčov dôležité.",
      svg: "books",
    },
  ],
  en: [
    {
      title: "Independent Team",
      content:
        "Our reviews are independent and based on real player experiences and feedback.",
      svg: "groups",
    },
    {
      title: "Fairness Guarantee",
      content:
        "We guarantee fair reviews and transparency of all betting sites and casinos we review.",
      svg: "verified",
    },
    {
      title: "Relevant Reviews",
      content:
        "Our reviews are based on important criteria that matter to all players.",
      svg: "books",
    },
  ],
  ie: [
    {
      title: "Independent Team",
      content:
        "Our reviews are independent and based on real player experiences and feedback.",
      svg: "groups",
    },
    {
      title: "Fairness Guarantee",
      content:
        "We guarantee fair reviews and transparency of all betting sites and casinos we review.",
      svg: "verified",
    },
    {
      title: "Relevant Reviews",
      content:
        "Our reviews are based on important criteria that matter to all players.",
      svg: "books",
    },
  ],
  cz: [
    {
      title: "Independent Team",
      content:
        "Our reviews are independent and based on real player experiences and feedback.",
      svg: "groups",
    },
    {
      title: "Fairness Guarantee",
      content:
        "We guarantee fair reviews and transparency of all betting sites and casinos we review.",
      svg: "verified",
    },
    {
      title: "Relevant Reviews",
      content:
        "Our reviews are based on important criteria that matter to all players.",
      svg: "books",
    },
  ],
};

export const CONSIDERBEFORE = {
  sk: [
    {
      title: "Pri registrácii uveďte vaše vlastné a pravdivé osobné údaje",
      content: `Okrem výberu kasína je dôležité aj to, aby ste pri tvorbe účtu použili vaše vlastné osobné údaje a uistili sa, že všetky informácie zadávané pri registrácii sú správne a pravdivé. Kasína vždy kontrolujú identitu hráčov (najneskôr) pri ich prvej žiadosti o výber, takže ak zadáte nesprávne údaje, nebudete si môcť vybrať peniaze.
        Drvivá väčšina kasín spúšťa tzv. KYC procedúru (anglicky Know Your Customer, poznaj svojho zákazníka), keď hráč požiada o svoj prvý výber. Táto procedúra zahŕňa kontrolu občianskeho preukazu, pasu, alebo ďalších dokladov, takže naozaj je nutné použiť vaše vlastné osobné údaje. Neexistuje žiadny rozumný spôsob, ako to obísť.`,
    },
    {
      title: "Pri vklade používajte iba platobné metódy vedené vo vašom mene",
      content: `Platobné metódy (bankové účty, platobné karty, internetové peňaženky), ktoré používate na vkladanie peňazí na váš herný účet, by mali byť vaše vlastné a vedené vo vašom mene. Použitie karty, bankového účtu alebo peňaženky niekoho iného môže viesť až k trvalému uzatvoreniu vášho účtu v kasíne a môže byť použité ako dôvod na nevyplatenie výhry.`,
    },
    {
      title:
        "Ako objaviť dôveryhodné kasína a stávkové kancelárie s atraktívnymi bonusmi",
      content: `
      Nie je tajomstvom, že keď si hráči v online kasínach vyberajú nové online kasíno, často hľadajú zaujímavé bonusové ponuky. Vybrané bonusy uvidíte priamo v tomto zozname kasín, alebo si môžete kompletnú ponuku bonusov daného kasína pozrieť v jeho podrobnej recenzii.

        Ak hľadáte bonusy zadarmo, ktoré nevyžadujú vloženie skutočných peňazí, vyberte si z nášho zoznamu kasíno bonusov bez vkladu.

        Avšak, ako vždy odporúčame, nevyberajte si kasína iba na základe ponúkaných bonusov. Zvážte aj iné kvality, najmä celkovú reputáciu a iné faktory, na ktoré sa v našich hodnoteniach zameriavame.

        Niektoré veľmi zle hodnotené kasína môžu mať tie najlepšie bonusy, ale to nič neznamená, ak vám napokon nepovolia vybrať si na konci výhru, čo sa môže veľmi ľahko stať, ak budete hrať v nečestnom kasíne. Ak si vyberiete dobré kasíno, môžete takýmto problémom predísť.

        Držte sa dôveryhodných online kasín, ktoré sa k hráčom správajú férovo a čestne, a budete na tom celkovo podstatne lepšie. Naše hodnotenia kasín sú dobrým indikátorom týchto kvalít. Keď si prečítate úplnú recenziu kasína, než sa tam zaregistrujete, overíte si kvalitu každého kasína a vyhnete sa neskorším problémom.
        `,
    },
    {
      title:
        "Hrajte rozumne a vedzte, kedy je dobré prestať hrať a požiadať o výber",
      content: `Hrajte rozumne a vedzte, kedy je dobré prestať hrať a požiadať o výber, ak sa vám podarí vyhrať
Je dôležité, aby ste rozumeli tomu, že hazard nie je spôsobom, ako zarobiť peniaze. Krátkodobo sa vám môže pošťastiť a môžete vyhrať, no neočakávajte, že budete hraním hier v kasíne systematicky vyhrávať peniaze. Ak sa vám podarí trafiť šťastnú výhru, vyberte si ju, pretože, ak budete pokračovať v hraní, skôr či neskôr prídete o vaše peniaze. Taktiež pamätajte, že závislosť na hazarde je závažný problém, takže hrajte bezpečne a vyhľadajte pomoc, ak sa vám veci začnú vymykať z pod kontroly.

Kasína majú vždy výhodu, no vy môžete hrať rozumne a tým ju minimalizovať. Niektoré hry sú z matematického hľadiska lepšie ako iné, no vždy by ste mali pamätať na to, že hráte v nevýhode. Môžete ju znížiť, no nikdy sa jej úplne nezbavíte. Viac na túto tému sa môžete dozvedieť v našom článku princípe fungovania hazardných hier.

Z perspektívy bezpečného a zodpovedného hrania je dôležité, aby ste si pamätali, že závislosť na hazarde dokáže človeku úplne zničiť život, takže by ste mali k hazardu pristupovať veľmi opatrne. Prečítajte si náš článok s tipmi ako hrať bezpečne a preskúmajte našu sekciu o problémovom hráčstve, v ktorej nájdete viac informácií o závislosti na hazarde, spôsoboch jej diagnostikovania a liečenia.`,
    },
  ],
  en: [
    {
      title: "Provide Your Own Personal Information",
      content: `When creating an account, make sure to use your own personal information and ensure that all information provided during registration is correct and truthful. Casinos always verify the identity of players (at the latest) when they request their first withdrawal, so if you provide incorrect information, you will not be able to withdraw your money.
        The vast majority of casinos launch the so-called KYC procedure (Know Your Customer) when a player requests their first withdrawal. This procedure includes checking an ID card, passport, or other documents, so it is really necessary to use your own personal information. There is no reasonable way to bypass this.`,
    },
    {
      title: "Use Payment Methods Registered in Your Name",
      content: `The payment methods (bank accounts, payment cards, e-wallets) you use to deposit money into your gaming account should be your own and registered in your name. Using someone else's card, bank account, or wallet can lead to the permanent closure of your account at the casino and can be used as a reason for not paying out winnings.`,
    },
    {
      title:
        "Play Wisely and Know When to Stop Playing and Request a Withdrawal",
      content: `Play wisely and know when to stop playing and request a withdrawal if you manage to win
      It is important to understand that gambling is not a way to make money. You may be lucky in the short term and win, but do not expect to systematically make money by playing casino games. If you manage to hit a lucky win, withdraw it, because if you continue playing, sooner or later you will lose your money. Also, remember that gambling addiction is a serious problem, so play safely and seek help if things start to get out of control.
      `,
    },
  ],
  ie: [
    {
      title: "Provide Your Own Personal Information",
      content: `When creating an account, make sure to use your own personal information and ensure that all information provided during registration is correct and truthful. Casinos always verify the identity of players (at the latest) when they request their first withdrawal, so if you provide incorrect information, you will not be able to withdraw your money.
        The vast majority of casinos launch the so-called KYC procedure (Know Your Customer) when a player requests their first withdrawal. This procedure includes checking an ID card, passport, or other documents, so it is really necessary to use your own personal information. There is no reasonable way to bypass this.`,
    },
    {
      title: "Use Payment Methods Registered in Your Name",
      content: `The payment methods (bank accounts, payment cards, e-wallets) you use to deposit money into your gaming account should be your own and registered in your name. Using someone else's card, bank account, or wallet can lead to the permanent closure of your account at the casino and can be used as a reason for not paying out winnings.`,
    },
    {
      title:
        "Play Wisely and Know When to Stop Playing and Request a Withdrawal",
      content: `Play wisely and know when to stop playing and request a withdrawal if you manage to win
      It is important to understand that gambling is not a way to make money. You may be lucky in the short term and win, but do not expect to systematically make money by playing casino games. If you manage to hit a lucky win, withdraw it, because if you continue playing, sooner or later you will lose your money. Also, remember that gambling addiction is a serious problem, so play safely and seek help if things start to get out of control.
      `,
    },
  ],
  cz: [
    {
      title: "Provide Your Own Personal Information",
      content: `When creating an account, make sure to use your own personal information and ensure that all information provided during registration is correct and truthful. Casinos always verify the identity of players (at the latest) when they request their first withdrawal, so if you provide incorrect information, you will not be able to withdraw your money.
        The vast majority of casinos launch the so-called KYC procedure (Know Your Customer) when a player requests their first withdrawal. This procedure includes checking an ID card, passport, or other documents, so it is really necessary to use your own personal information. There is no reasonable way to bypass this.`,
    },
    {
      title: "Use Payment Methods Registered in Your Name",
      content: `The payment methods (bank accounts, payment cards, e-wallets) you use to deposit money into your gaming account should be your own and registered in your name. Using someone else's card, bank account, or wallet can lead to the permanent closure of your account at the casino and can be used as a reason for not paying out winnings.`,
    },
    {
      title:
        "Play Wisely and Know When to Stop Playing and Request a Withdrawal",
      content: `Play wisely and know when to stop playing and request a withdrawal if you manage to win
      It is important to understand that gambling is not a way to make money. You may be lucky in the short term and win, but do not expect to systematically make money by playing casino games. If you manage to hit a lucky win, withdraw it, because if you continue playing, sooner or later you will lose your money. Also, remember that gambling addiction is a serious problem, so play safely and seek help if things start to get out of control.
      `,
    },
  ],
};

export const LANDINGSECTIONS = {
  sk: [
    {
      title: "Bonusy v stávkových kanceláriách",
      content: `
    V prvom rade ide o vstupné bonusy, ktoré sa získavajú za registráciu. Pred vytvorením účtu je dôležité si dôkladne prečítať podmienky resp. požiadavky uvítacích bonusov (okrem bonusu za vklad je rozšírená aj stávka bez rizika).

Pri bonusoch je potrebné si všímať napr. požiadavky na pretočenie, minimálnu výšku kurzu, pripísanie bonusu (po vklade/po častiach/po pretočení) alebo aj bonusový kód (niekedy ho je potrebné zadať priamo pri registrácii).
V každej recenzii je bonus do detailu rozobratý a okrem toho je vytvorená aj veľmi dobrá tabuľka s porovnaním bonusov stávkových kancelárií. Na uvedenej podstránke si môžete preštudovať všetky druhy bonusov, ktoré online stávkové kancelárie ponúkajú.
`,
      imageSrc: "/src/images/gift.png",
      imageAlt: "Exclusive benefits",
    },
    {
      title: "Hodnotenie stávkových kancelárií a skúsenosti hráčov",
      content: `
      Každú online stávkovú kanceláriu hodnotíme na základe parametrov ako použiteľnosť webu, kurzová ponuka, live tipovanie, live streaming, mobilné stávkovanie, stávkové bonusy, zákaznícka podpora, bezpečnosť stávkovej kancelárie, možnosti vkladov, rýchlosť výberov ako aj osobnej skúsenosti.
      Ak si chcete prečítať čo všetko zahŕňajú jednotlivé body, prečítajte si ich pri porovnaní stávkových podľa hodnotenia. Každá recenzia stávkovej kancelárie obsahuje aj konečný verdikt, ktorý je vždy písaný na základe osobnej skúsenosti.
    `,
      imageSrc: "/src/images/review.png",
      imageAlt: "Exclusive benefits",
    },
    {
      title: "How to Claim Your Bonus",
      content: `
      <p>Claiming your bonus is easy! Follow our step-by-step guides to register with your chosen betting site or casino, verify your account, and activate your bonus. Start enjoying the benefits of extra funds or free bets right away.</p>
      <ol class="list-disc list-inside mt-4 text-base">
        <li>Choose a betting site or casino from our list.</li>
        <li>Click on the 'Claim Bonus' button.</li>
        <li>Complete the registration process.</li>
        <li>Verify your account as required.</li>
        <li>Make a qualifying deposit if necessary.</li>
        <li>Enjoy your bonus and start playing!</li>
    `,
      imageSrc: "/src/images/list.png",
      imageAlt: "How to claim bonus",
    },
    {
      title: "Kto udeľuje na Slovensku licencie pre hazardné hry?",
      content: `
      Vďaka novej legislatíve bol na Slovensku vytvorený nový Úrad pre reguláciu hazardných hier (URHH).
      <br />
      Tento úrad je zodpovedný za vydávanie licencií, ale taktiež dohliada na dodržiavanie zákona o hazardných hrách a vedie zoznam legálnych stávkových kancelárií ako aj zoznam blokovaných web stránok a bankových účtov. Okrem tvorby legislatívy má na starosti všetky práva a povinnosti v oblasti regulácie hazardných hier.
      
    `,
      imageSrc: "/src/images/certification.png",
      imageAlt: "Licensed betting sites",
    },
    {
      title: "Daň z výhry v stávkových kanceláriách na Slovensku",
      content: `
     Výhry zo stávkových kancelárií sa momentálne na Slovensku nezdaňujú. Už teraz sa však uvažuje nad legislatívou, ktorá by umožňovala výhry zdaňovať podobne, ako je tomu v susednom Česku. 
Znamenalo by to, že zdaneniu výhier budú okrem stávkových kancelárií podliehať aj lotérie, kasíno alebo poker herne. Viac informácií o platení daní v ČR z hazardných hier nájdete v článku daň z výhry.
`,
      imageSrc: "/src/images/tax.png",
      imageAlt: "Exclusive benefits",
    },
    {
      title: "Hrajte zodpovedne",
      content: `
     Hazardné hry môžu byť zábava, ale môžu sa tiež v živote daného človeka zmeniť na obrovský problém. Patologické hráčstvo nielenže môže viesť k finančným stratám, ale môže spôsobiť celý rad ďalších problémov, vrátane symptómov súvisiacich s duševným a fyzickým zdravím, rodinných a vzťahových problémov a komplikácií v práci. Nikdy nepovažujte hranie za spôsob, ako zarobiť.`,
      imageSrc: "/src/images/breakingChain.png",
      imageAlt: "Exclusive benefits",
    },
    {
      title: "Mobilné aplikácie stávkových kancelárií",
      content: `
   Dnes už takmer každá online stávková kancelária na Slovensku poskytuje mobilnú aplikáciu na stiahnutie. Mobilné aplikácie sú dostupné pre Android a operačný systém iOS (Apple).

V AppStore nájdete aplikácie na stiahnutie pre produkty iPhone a iPad. Bohužiaľ obchod Google Play aplikácie pre hazardné hry zatiaľ nepodporuje, preto je potrebné si stiahnuť aplikáciu priamo na stránkach stávkovej kancelárie.
`,
      imageSrc: "/src/images/app-development.png",
      imageAlt: "Exclusive benefits",
    },
  ],
};

export const FAQS = {
  sk: [
    {
      question:
        "Ponúka slovenská stávková kancelária bonus bez nutnosti vkladu?",
      answer: `Tento druh bonusu pre online stávky je skôr výnimočný, ale pre spoločnosti poskytujúce kurzové stávky nemusí byť stávka zadarmo bez vkladu úplne nereálna (najčastejšie bol bonus bez vkladu poskytovaný od Tipsportu).`,
    },
    {
      question: "Zdaňujú sa výhry z online stávkových kancelárií?",
      answer:
        "Momentálne sa výhry v stávkových kanceláriách nezdaňujú. V ČR sa už platia dane aj z výhier a preto je veľmi pravdepodobné, že sa v budúcnosti dočkáme aj zdaňovania výhier v stávkových kanceláriách. Dobrou správou je, že v ČR sa platí daň až pri výhre nad 1 milión korún.",
    },
    {
      question:
        "Ktoré doklady totožnosti vyžadujú stávkové kancelárie na Slovensku?",
      answer:
        "Pre dokončenie overenia budete potrebovať dva doklady. Prvým je občiansky preukaz alebo pas a druhým je zvyčajne nevyužitý doklad z prvého výberu, kartička poistenca alebo vodičský preukaz. Pre cudzincov je potrebné povolenie k pobytu v SR. Pri registrácii do stávkovej kancelárie budete potrebovať hlavne e-mail a telefónne číslo (treba rátať s tým, že pri registrácii budete musieť zadať aj iné podrobnejšie osobné údaje ako je číslo občianskeho preukazu resp. rodné číslo). V prípade, že nemáte bankový účet na vlastné meno, tak vám ho odporúčame vytvoriť si ho (môžete vykonať aj po registrácii). Nie je dovolené posielať peniaze z cudzieho bankového účtu na váš hráčsky účet.",
    },
    {
      question:
        "Prečo sa mobilné aplikácie na stiahnutie pre hazard nenachádzajú v obchode Google Play?",
      answer:
        "Google vo svojom obchode neakceptuje aplikácie spoločností z oblasti hazardných hier. Vďaka politike Google si musíte aplikáciu (Apk) stiahnuť priamo na webstránke stávkovej kancelárie alebo nájsť iný spôsob. Apple svoje aplikácie ponúka priamo vo svojom obchode Apple Store (App pre iPhone a iPad).",
    },
    {
      question:
        "Je možné do stávkových kancelárií alebo kasín v SR vkladať peniaze prostredníctvom kryptomien ako je Bitcoin?",
      answer:
        "An0 pre kasino nie pre stavkove kancel8rie. Priamo to nie je možné, pretože žiadna stávková kancelária na Slovensku zatiaľ nevedie účty v kryptomene. Teoreticky je možné využitie elektronickej peňaženky Skrill, kde práve Skrill prevedie vašu kryptomenu na EURá a tieto peniaze potom môžete použiť na stávkovanie.",
    },
    {
      question: "Ktorá stávková kancelária je na slovenskom trhu najlepšia?",
      answer:
        "Podľa nášho názoru ide jednoznačne o stávkovú kanceláriu Tipsport. Konkurovať jej môže Fortuna, ale v Tipsporte máte najväčšiu komunitu tipérov a so stávkovými funkciami napredujú najrýchlejšie. Ide aj o najlepšiu voľbu z pohľadu prijímania stávok ako aj súťaží pre tipujúcich, do ktorých sa zapojíte aj úplne zadarmo.",
    },
    {
      question: "Ktoré kasíno je na slovenskom trhu najlepšie?",
      answer:
        "Podľa nášho názoru ide jednoznačne o stávkovú kanceláriu Tipsport. Konkurovať jej môže Fortuna, ale v Tipsporte máte najväčšiu komunitu tipérov a so stávkovými funkciami napredujú najrýchlejšie. Ide aj o najlepšiu voľbu z pohľadu prijímania stávok ako aj súťaží pre tipujúcich, do ktorých sa zapojíte aj úplne zadarmo.",
    },
  ],
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
