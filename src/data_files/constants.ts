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
      title: "Pri registrácii uveďte svoje pravdivé osobné údaje",
      content: `Pri registrácii v kasíne alebo stávkovej spoločnosti vždy použite svoje skutočné osobné údaje a overte, že všetky poskytnuté informácie sú správne a pravdivé. Kasína a stávkové spoločnosti zvyčajne overujú totožnosť hráčov pri prvej žiadosti o výber. Väčšina kasín a stávkových spoločností vyžaduje povinnú KYC procedúru (poznaj svojho zákazníka), ktorá zahŕňa kontrolu dokladov, ako sú občiansky preukaz alebo pas. Použitie presných osobných údajov je kľúčové, pretože tento proces nemožno obísť, a ak zadáte nesprávne údaje, pravdepodobne nebudete môcť vybrať svoje výhry.`,
    },
    {
      title: "Používajte platobné metódy registrované na vaše meno",
      content: `Uistite sa, že platobné metódy, ako sú bankové účty, kreditné karty alebo elektronické peňaženky, sú registrované na vaše meno. Použitie platobnej metódy inej osoby pri vkladoch do kasín alebo stávkových spoločností môže viesť k zablokovaniu účtu a strate výhier.`,
    },
    {
      title:
        "Ako nájsť spoľahlivé kasína a stávkové spoločnosti s atraktívnymi bonusmi",
      content: `Hráči často hľadajú bonusy pri výbere kasín alebo stávkových spoločností. Naše recenzie a zoznamy ponúkajú podrobnosti o dostupných bonusoch, vrátane bonusov bez nutnosti vkladu. Bonusy by však nemali byť vaším jediným kritériom výberu. Zvážte reputáciu platformy a spôsob, akým sa správa k hráčom. Vysoké bonusy od nespoľahlivých kasín alebo stávkových spoločností sú zbytočné, ak si nemôžete vybrať svoje výhry. Naše recenzie vám pomôžu nájsť dôveryhodné platformy a vyhnúť sa bežným problémom.`,
    },
    {
      title: "Hrajte a tipujte zodpovedne a vedzte, kedy skončiť",
      content: `Hazardné hry môžu byť zábavné, ale veľmi rýchlo sa môžu stať závislosťou. Hazardné hry a stávkovanie nie sú garantovaným spôsobom, ako zarobiť peniaze. Ak vyhráte, vyberte svoje výhry a prestaňte hrať alebo stávkovať. Pokračovanie v hraní alebo stávkovaní pravdepodobne povedie k stratám. Majte na pamäti riziká závislosti a v prípade potreby vyhľadajte pomoc. Prečítajte si naše rady na bezpečné hranie a stávkovanie a naučte sa, ako minimalizovať straty pri zodpovednom prístupe.`,
    },
  ],
  cz: [
    {
      title: "Zadejte své pravdivé osobní údaje",
      content: `Při registraci do kasina nebo sázkové kanceláře vždy použijte své skutečné osobní údaje a ověřte, že všechny poskytnuté informace odpovídají skutečnosti. Kasina a sázkové kanceláře obvykle ověřují totožnost hráčů při první žádosti o výběr. Většina kasin a sázkových kanceláří vyžaduje povinný proces KYC (Poznej svého zákazníka), který zahrnuje kontrolu dokladů, jako je občanský průkaz nebo pas. Použití správných osobních údajů je zásadní, protože tento proces nelze obejít, a pokud uvedete nesprávné údaje, pravděpodobně nebudete moci vybrat své výhry.`,
    },
    {
      title: "Používejte platební metody registrované na vaše jméno",
      content: `Ujistěte se, že platební metody, jako jsou bankovní účty, kreditní karty nebo elektronické peněženky, jsou registrovány na vaše jméno. Použití platební metody jiné osoby pro vklady do kasin nebo sázkových kanceláří může vést k uzavření účtu a ztrátě výher.`,
    },
    {
      title:
        "Jak najít spolehlivá kasina a sázkové kanceláře s atraktivními bonusy",
      content: `Hráči často hledají bonusy při výběru kasin nebo sázkových kanceláří. Naše recenze a seznamy nabízejí podrobnosti o dostupných bonusech, včetně bonusů bez vkladu. Bonusy by však neměly být vaším jediným kritériem výběru. Zvažte pověst platformy a způsob, jakým se chová k hráčům. Vysoké bonusy od nespolehlivých kasin nebo sázkových kanceláří jsou k ničemu, pokud si nemůžete vybrat své výhry. Naše recenze vám pomohou najít důvěryhodné platformy a vyhnout se běžným problémům.`,
    },
    {
      title: "Hrajte a sázejte zodpovědně a vězte, kdy přestat",
      content: `Hazardní hry mohou být zábavné, ale velmi rychle se mohou stát závislostí. Hazardní hry a sázení nejsou v žádném případě zaručeným způsobem, jak vydělat peníze. Pokud vyhrajete, vyberte své výhry a přestaňte hrát nebo sázet. Pokračování ve hře nebo sázení pravděpodobně povede ke ztrátám. Buďte si vědomi rizik závislosti a v případě potřeby vyhledejte pomoc. Přečtěte si naše rady na bezpečné hraní a sázení a naučte se, jak minimalizovat ztráty při zodpovědném přístupu.`,
    },
  ],
  en: [
    {
      title: "Provide Accurate and Truthful Personal Information",
      content: `When registering at a casino or betting company, always use your real personal information and verify that all provided details match and are real. Casinos and betting companies typically verify player identity during the first withdrawal request. Most casinos and betting companies initiate a mandatory KYC (Know Your Customer) process that involves checking documents like an ID or passport. Using accurate personal information is critical as this process cannot be bypassed and you will not likely be able to withdraw your winnings.`,
    },
    {
      title: "Use Payment Methods Registered in Your Name",
      content: `Ensure that the payment methods you use, such as bank accounts, credit cards, or e-wallets, are registered in your name. Using someone else’s payment method for deposits into casinos or betting companies can lead to account closure and forfeiture of winnings.`,
    },
    {
      title:
        "How to Find Reliable Casinos and Betting Companies with Attractive Bonuses",
      content: `Players often look for bonuses when choosing casinos or betting companies. Our reviews and lists provide details on available bonuses, including no-deposit bonuses. However, bonuses should not be your only selection criterion. Consider the platform’s reputation and treatment of players. High bonuses from untrustworthy casinos or betting companies are worthless if you can't withdraw your winnings. Use our reviews to find reliable platforms and avoid common pitfalls.`,
    },
    {
      title: "Play and Bet Responsibly and Know When to Withdraw",
      content: `Gambling can be fun but it can also become addiction very quickly. Gambling and betting are not in any way guaranteed way to earn money. If you win, withdraw your funds and stop playing or betting. Continuing to gamble or place bets will likely result in losses. Be mindful of the risks of addiction and seek help if needed. Read our guides for tips on safe gambling and betting and learn about minimizing losses while acting responsibly.`,
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
        "Ponúkajú Slovenské stávkové kanceláre a kasína bonus bez vkladu?",
      answer: `Tento druh bonusu pre online stávky je ojedinelý no pomerne častý v sfére kasín, Jedná sa ale hlavne o menší bonus s cieľom dostať zákazníka na stránku aby si mohol vyskúšať hry. Výhodou je, že nemusíte vkladať žiadne peniaze a môžete si vyskúšať hry zadarmo. Výhru z bonusu bez nutnosti vkladu je potrebné pretočiť podľa podmienok stávkovej kancelárie alebo kasína.`,
    },
    {
      question: "Zdaňujú sa výhry z online stávkových kancelárií alebo kasína?",
      answer:
        "Momentálne sa výhry v stávkových kanceláriách a kasínach na Slovensku nezdaňujú. No napríklad v Českej republike sa však už platia dane aj z výhier a nedá sa vylúčiť že sa tohto nedočkáme aj na Slovensku. Dobrou správou je, že aj pri takejto legislatíve daň až pri výhre sa bude platiť až nad istú sumu, napríklad v Čechách je to nad 1 milión korún (40,000 EUR).",
    },
    {
      question:
        "Ktoré doklady totožnosti vyžadujú stávkové kancelárie a kasína na Slovensku?",
      answer:
        "Prvotným je občiansky preukaz alebo pas a druhým je zvyčajne kartička poistenca alebo vodičský preukaz. Pre cudzincov je potrebné povolenie k pobytu na Slovensku. Pri registrácii do stávkovej kancelárie alebo kasína budete potrebovať hlavne e-mail a telefónne číslo. Takisto budete potrebovať váš vlastný bankový účet, resp. účet vo vašom mene. Nie je dovolené posielať peniaze z cudzieho bankového účtu na váš hráčsky účet.",
    },
    {
      question:
        "Prečo sa mobilné aplikácie na stiahnutie pre hazard nenachádzajú v obchode Google Play?",
      answer:
        "Google vo svojom obchode neakceptuje aplikácie spoločností z oblasti hazardných hier. Je možné si aplikáciu (Apk) stiahnuť priamo na stránke spolčnosti alebo väčšina stávkových kancelárií a kasín má responzívne webové rozhranie ktoré umožňuje stránku pohodlne používať aj cez mobilné zariadnenia nie len na počítači. Toto obmedzenie platí len pre Android, Apple svoje aplikácie ponúka priamo v Apple Store.",
    },
    {
      question:
        "Je možné do stávkových kancelárií alebo kasín na Slovensku vkladať peniaze prostredníctvom kryptomien ako je Bitcoin?",
      answer:
        "Existuje viacero kasín na Slovensku aj celosvetovo ktoré túto možnosť ponúkajú. Sú tu metódy ako Skrill, kde vaše kryptomeny budú prevedené na eurá.",
    },
    {
      question: "Ktorá stávková kancelária je na Slovensku najlepšia?",
      answer:
        "Podľa nášho názoru najlepšia stávková kancelária je Tipsport. Radíme ho na Slovensku za jednotku v kategórii kasíno aj stávková kancelária a to vďaka dobrým dôvodom. Okrem veľmi atraktívneho vstupného bonusu a najväčšej komunity tipérov sa Tipsport môže pýšiť vysokým indexom bezpečnosti a prehľadným rozhraním aplikácie, ktoré ponúka širokú škálu športov.",
    },
    {
      question: "Ktoré kasíno je na Slovensku najlepšie?",
      answer:
        "Podľa nášho názoru najlepšie kasíno je Tipsport. Radíme ho na Slovensku za jednotku v kategórii kasíno aj stávková kancelária a to vďaka dobrým dôvodom. Okrem veľmi atraktívneho vstupného bonusu a zdravej komunity hráčov sa Tipsport môže pýšiť vysokým indexom bezpečnosti a prehľadným rozhraním aplikácie, ktoré ponúka širokú škálu hier.",
    },
  ],
  en: [
    {
      question:
        "Do Slovak betting companies and casinos offer no-deposit bonuses?",
      answer: `This type of bonus for online betting is rare but quite common in the casino sector. It is usually a smaller bonus aimed at attracting customers to try the games on the platform. The advantage is that you don’t need to deposit any money and can try games for free. Winnings from no-deposit bonuses must be wagered according to the terms of the betting company or casino.`,
    },
    {
      question: "Are winnings from online betting companies or casinos taxed?",
      answer:
        "Currently, winnings in Slovak betting companies and casinos are not taxed. However, in the Czech Republic, taxes are already applied to winnings, and it's possible that Slovakia may follow suit. The good news is that even with such legislation, taxes would likely apply only to winnings above a certain threshold, such as the 1 million CZK (40,000 EUR) threshold in the Czech Republic.",
    },
    {
      question:
        "What identification documents are required by Slovak betting companies and casinos?",
      answer:
        "Typically, an ID card or passport is required, along with a second document like a health insurance card or driver's license. For foreigners, a residence permit in Slovakia is necessary. To register with a betting company or casino, you'll also need an email address and a phone number. Additionally, you'll need a personal bank account in your name; transferring money from another person’s account to your player account is not allowed.",
    },
    {
      question: "Why aren’t gambling apps available on Google Play?",
      answer:
        "Google does not allow gambling apps in its store. However, you can download apps (APK files) directly from the company’s website. Most betting companies and casinos also offer responsive websites that work well on mobile devices as well as on desktops. This restriction applies only to Android devices, as Apple allows gambling apps in its App Store.",
    },
    {
      question:
        "Can I deposit money into Slovak betting companies or casinos using cryptocurrencies like Bitcoin?",
      answer:
        "Several casinos in Slovakia and worldwide offer this option. Methods like Skrill can be used to convert your cryptocurrency into euros.",
    },
    {
      question: "Which betting company is the best in Slovakia?",
      answer:
        "In our opinion, the best betting company in Slovakia is Tipsport. It ranks as the number one betting company and casino in the country for good reasons. Besides offering an attractive welcome bonus and having the largest community of bettors, Tipsport boasts a high security index and a user-friendly app interface that covers a wide range of sports.",
    },
    {
      question: "Which casino is the best in Slovakia?",
      answer:
        "In our opinion, the best casino in Slovakia is Tipsport. It ranks as the number one casino and betting company in the country for good reasons. In addition to an attractive welcome bonus and a thriving player community, Tipsport offers a high security index and a user-friendly app interface with a wide range of games.",
    },
  ],
  cz: [
    {
      question: "Nabízejí české sázkové kanceláře a kasina bonus bez vkladu?",
      answer: `Tento typ bonusu je v oblasti online sázek vzácný, ale poměrně běžný v sektoru kasin. Jedná se obvykle o menší bonus, jehož cílem je přilákat zákazníky k vyzkoušení her na platformě. Výhodou je, že nemusíte vkládat žádné peníze a můžete si hry vyzkoušet zdarma. Výhry z bonusu bez vkladu je nutné prosázet podle podmínek sázkové kanceláře nebo kasina.`,
    },
    {
      question: "Zdaňují se výhry z online sázkových kanceláří nebo kasin?",
      answer:
        "Momentálně se výhry v českých sázkových kancelářích a kasinech daní. Na Slovensku však zatím výhry dani nepodléhají. Je možné, že se tato legislativa v budoucnu změní. I při takové legislativě se daň obvykle vztahuje na výhry nad určitou částku, například v Česku nad 1 milion korun (40 000 EUR).",
    },
    {
      question:
        "Jaké doklady totožnosti požadují české sázkové kanceláře a kasina?",
      answer:
        "Obvykle je vyžadován občanský průkaz nebo pas a druhý doklad, například kartička zdravotní pojišťovny nebo řidičský průkaz. Pro cizince je nutné povolení k pobytu v České republice. Při registraci budete také potřebovat emailovou adresu, telefonní číslo a bankovní účet vedený na vaše jméno.",
    },
    {
      question: "Proč nejsou hazardní aplikace dostupné na Google Play?",
      answer:
        "Google ve svém obchodě nepovoluje hazardní aplikace. Tyto aplikace si však můžete stáhnout přímo z webu dané společnosti. Většina sázkových kanceláří a kasin má responzivní webové rozhraní, které je přizpůsobené mobilním zařízením. Toto omezení platí pouze pro Android, protože Apple nabízí tyto aplikace přímo v App Store.",
    },
    {
      question:
        "Lze v českých sázkových kancelářích nebo kasinech vkládat kryptoměny jako Bitcoin?",
      answer:
        "Několik kasin v Česku i po celém světě tuto možnost nabízí. Pomocí metod jako Skrill lze kryptoměny převést na koruny.",
    },
    {
      question: "Která sázková kancelář je v Česku nejlepší?",
      answer:
        "Podle našeho názoru je nejlepší sázkovou kanceláří Tipsport. Řadíme ji na první místo mezi sázkovými kancelářemi i kasiny díky atraktivnímu vstupnímu bonusu, největší komunitě sázkařů a vysokému bezpečnostnímu standardu. Aplikace Tipsportu je přehledná a nabízí široký výběr sportů.",
    },
    {
      question: "Které kasino je v Česku nejlepší?",
      answer:
        "Podle našeho názoru je nejlepší kasinovou platformou Tipsport. Díky atraktivním bonusům, silné hráčské komunitě a vysokému indexu bezpečnosti se jedná o špičku na trhu. Jejich aplikace je přehledná a nabízí široký výběr her.",
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
