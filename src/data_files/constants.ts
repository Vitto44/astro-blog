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
      "Najatraktívnejšie bonusové ponuky od overených stávkových stránok a kasín. Ponúkame prehľadné recenzie, praktické návody na získanie bonusov a aktuálne informácie o trendoch v stávkovaní. Využite naše tipy a zvýšte svoje šance na výhru!",
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
  },
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
      imageSrc: "/src/images/reward.png",
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
      title: "Vklady a výbery v stávkových kanceláriách",
      content: `
    Dostať finančné prostriedky na hráčsky účet je často veľmi jednoduchá úloha, pretože prostredníctvom platobných kariet ide o chvíľkovú záležitosť. Existuje však skupina ľudí, ktorá svojou kreditnou kartou (resp. debetnou platobnou kartou) nechce platiť na internete. Aké má klient v takomto prípade možnosti?

Stávkové kancelárie na Slovensku sú skôr (aspoň zatiaľ) zástancom klasických platobných metód, pretože ani populárna elektronická peňaženka Skrill nie je dostupná u všetkých operátorov. Pre čo najrýchlejší spôsob (porovnateľný s rýchlosťou platby cez platobnú kartu) sa najviac využíva okamžitý bankový prevod (tzv. ePlatby).
`,
      imageSrc: "/src/images/transaction.png",
      imageAlt: "Exclusive benefits",
    },
    {
      title: "Aké sú poplatky pri vkladoch a výberoch a podmienky pre výplatu?",
      content: `
    Poplatky sa vo väčšine prípadov neplatia (mala by ich znášať stávková kancelária), ale v prípade platobných kariet alebo Paysafecard môžu byť vklady spoplatnené.

Výplaty sú vo väčšine prípadov bez poplatkov, ale tu treba skôr sledovať minimálne čiastky, ktoré jednotlivé metódy vyžadujú. V porovnávacej tabuľke si môžete pozrieť poplatky v jednotlivých stávkových kanceláriách. 

Aby ste mohli vybrať peniaze zo stávkovej kancelárie, musíte mať overený hráčsky účet. Je nutné si dávať pozor najmä na fakt, že nie všetky platobné metódy, ktoré ste použili pre vklad sa dajú použiť aj pri výbere.
`,
      imageSrc: "/src/images/tuition.png",
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
    {
      title: "Najčastejšie otázky a odpovede",
      content: ` 
  <ol class="space-y-8 text-neutral-700 dark:text-neutral-400 mt-8 md:mx-28">
    <!-- Question 5 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Ponúka slovenská stávková kancelária bonus bez nutnosti vkladu?
    </h3>
    <p class="text-start mt-2">
      Tento druh bonusu pre online stávky je skôr výnimočný, ale pre spoločnosti poskytujúce kurzové stávky nemusí byť stávka zadarmo bez vkladu úplne nereálna (najčastejšie bol bonus bez vkladu poskytovaný od Tipsportu).
    </p>
  </li>
  <!-- Question 1 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Dajú sa na území Slovenska využívať zahraničné stávkové kancelárie?
    </h3>
    <p class="text-start mt-2">
      Teoreticky je možné hrať v stávkových kanceláriách bez slovenskej licencie, ak prijímajú hráčov zo SR.
      Slovenské úrady (URHH) bojujú s nelegálnym hazardom (napr. blokovaním web stránok a bankových účtov), preto
      tipovanie u nelegálnych bookmakerov nemôžeme odporučiť.
    </p>
  </li>
 
  <!-- Question 3 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Zdaňujú sa výhry z online stávkových kancelárií?
    </h3>
    <p class="text-start mt-2">
      Momentálne sa výhry v stávkových kanceláriách nezdaňujú. V ČR sa už platia dane aj z výhier a preto je veľmi
      pravdepodobné, že sa v budúcnosti dočkáme aj zdaňovania výhier v stávkových kanceláriách. Dobrou správou je,
      že v ČR sa platí daň až pri výhre nad 1 milión korún.
    </p>
  </li>
  <!-- Question 4 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Ktoré doklady totožnosti vyžadujú stávkové kancelárie na Slovensku?
    </h3>
    <p class="text-start mt-2">
      Pre dokončenie overenia budete potrebovať dva doklady. Prvým je občiansky preukaz alebo pas a druhým je
      zvyčajne nevyužitý doklad z prvého výberu, kartička poistenca alebo vodičský preukaz. Pre cudzincov je
      potrebné povolenie k pobytu v SR.
    </p>
    <p class="text-start mt-2">
      Pri registrácii do stávkovej kancelárie budete potrebovať hlavne e-mail a telefónne číslo (treba rátať s tým,
      že pri registrácii budete musieť zadať aj iné podrobnejšie osobné údaje ako je číslo občianskeho preukazu
      resp. rodné číslo).
      V prípade, že nemáte bankový účet na vlastné meno, tak vám ho odporúčame vytvoriť si ho (môžete vykonať aj po registrácii). Nie je dovolené posielať peniaze z cudzieho bankového účtu na váš hráčsky účet.
    </p>
  </li>
  <!-- Question 6 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Prečo sa mobilné aplikácie na stiahnutie pre hazard nenachádzajú v obchode Google Play?
    </h3>
    <p class="text-start mt-2">
      Google vo svojom obchode neakceptuje aplikácie spoločností z oblasti hazardných hier. Vďaka politike Google si musíte aplikáciu (Apk) stiahnuť priamo na webstránke stávkovej kancelárie alebo nájsť iný spôsob.
    </p>
    <p class="text-start mt-2">
      Apple svoje aplikácie ponúka priamo vo svojom obchode Apple Store (App pre iPhone a iPad).
    </p>
  </li>
 
  <!-- Question 8 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Je možné do stávkových kancelárií alebo kasín v SR vkladať peniaze prostredníctvom kryptomien ako je Bitcoin?
    </h3>
    <p class="text-start mt-2">
      An0 pre kasino nie pre stavkove kancel8rie. Priamo to nie je možné, pretože žiadna stávková kancelária na Slovensku zatiaľ nevedie účty v kryptomene. Teoreticky je možné využitie elektronickej peňaženky Skrill, kde práve Skrill prevedie vašu kryptomenu na EURá a tieto peniaze potom môžete použiť na stávkovanie.
    </p>
  </li>
  <!-- Question 9 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Ktorá stávková kancelária je na slovenskom trhu najlepšia?
    </h3>
    <p class="text-start mt-2">
      Podľa nášho názoru ide jednoznačne o stávkovú kanceláriu Tipsport. Konkurovať jej môže Fortuna, ale v Tipsporte máte najväčšiu komunitu tipérov a so stávkovými funkciami napredujú najrýchlejšie.
    </p>
    <p class="text-start mt-2">
      Ide aj o najlepšiu voľbu z pohľadu prijímania stávok ako aj súťaží pre tipujúcich, do ktorých sa zapojíte aj úplne zadarmo.
    </p>
  </li>
  <!-- Question 10 -->
  <li>
    <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-300 underline">
      Dá sa odstrániť oznámenie o výhrach a prehrách, ktoré zobrazujú stávkové kancelárie v SR?
    </h3>
    <p class="text-start mt-2">
      Bohužiaľ informácie o vašich podaných stávkach za uplynulé obdobie nie je možné odstrániť, pretože to vyžaduje zákon. Tento informačný panel je otravný, pretože sa zobrazuje 5 sekúnd po každom prihlásení.
    </p>
    <p class="text-start mt-2">
      Určite by sme všetci prijali, keby sa táto informácia zobrazila jedenkrát za deň a nie pri každom prihlásení do web stránky resp. mobilnej aplikácie.
    </p>
  </li>
</ol>
`,
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
