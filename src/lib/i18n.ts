export const locales = ["mk", "en", "sq"] as const;

export type Locale = (typeof locales)[number];
export type PageKey = "home" | "about" | "contact";

export const localeConfig: Record<Locale, { code: Locale; label: string; flag: string }> = {
  mk: { code: "mk", label: "Македонски", flag: "🇲🇰" },
  en: { code: "en", label: "English", flag: "🇬🇧" },
  sq: { code: "sq", label: "Shqip", flag: "🇦🇱" },
};

export const siteCopy = {
  mk: {
    nav: { home: "Почетна", about: "За нас", contact: "Контакт" },
    footer: { navigation: "Навигација", contact: "Контакт", rights: "Сите права задржани." },
    home: {
      hero: {
        title: "Грга Транс",
        subtitle: "Поврзувајќи дестинации, градејќи доверба",
      },
      services: [
        {
          title: "Контејнерски транспорт",
          desc: "Сигурен и ефикасен транспорт на контејнери за вашиот товарен и логистички синџир.",
        },
        {
          title: "Транспорт со церада",
          desc: "Флексибилен и безбеден транспорт на разни видови стока со возила опремени со церада за оптимална заштита.",
        },
        {
          title: "Киперски транспорт",
          desc: "Брз и сигурен транспорт на рефусни материјали, песок, камен и земја со современа киперска флота.",
        },
        {
          title: "Цистерна",
          desc: "Професионален транспорт на течни материјали со специјализирани цистерни кои ги исполнуваат сите стандарди.",
        },
        {
          title: "Комбе до 2 тони",
          desc: "Брзи и практични испораки за помали товарии и пратки со возила со носивост до 2 тони.",
        },
      ],
      stats: {
        label: "За нас",
        heading: "Повеќе од две децении искуство",
        items: ["Вработени", "Возила", "Складишта", "Изминати километри"],
        paragraphs: [
          "Од нашето основање во 1999 година, Грга Транс расте заедно со своите клиенти, градејќи партнерства засновани на доверба, точност и професионализам. Нашата флота од модерни транспортни возила секојдневно поминува километри низ Македонија и регионот.",
          "Со искусен тим возачи и логистичари, секоја пратка ја извршуваме сигурно, навреме и со највисок стандард на безбедност.",
        ],
      },
      gallery: { label: "Галерија", heading: "Нашата работа во акција" },
    },
    about: {
      label: "За нас",
      slides: [
        {
          title: "Добредојдовте",
          text: "Добредојдовте во GRGA Trans, компанија со долгогодишно искуство, сигурност и професионален пристап во областа на транспортот и логистиката.",
        },
        {
          title: "Нашата приказна",
          text: "Компанијата е основана во 1999 година со основна дејност товарен патен транспорт, со посебен фокус на киперски транспорт, како на домашниот, така и на меѓународниот пазар. Благодарение на посветеноста, квалитетната услуга и довербата од клиентите, низ годините успешно се развивавме и го проширивме опсегот на нашите услуги.",
        },
        {
          title: "Решенија за киперски транспорт",
          text: "Денес, GRGA Trans нуди комплетни решенија поврзани со киперскиот транспорт, вклучувајќи: \n- транспорт на различни видови материјали, \n- утовар и истовар, \n- ископи, \n- дробење и обработка на минерални суровини во рударството.",
        },
        {
          title: "Современа механизација и стручен тим",
          text: "Со современа механизација, стручен тим и постојано инвестирање во развојот, компанијата успешно одговара на потребите и на најсложените проекти.",
        },
        {
          title: "Лиценцирана и овластена компанија",
          text: "Од 2020 година, компанијата е лиценцирана и овластена за управување со неопасен отпад, што опфаќа собирање, утовар и транспорт согласно сите законски стандарди и еколошки прописи.",
        },
        {
          title: "Нашата мисија",
          text: "Нашата мисија е да обезбедиме сигурна, навремена и професионална услуга, градејќи долгорочна доверба со нашите партнери и клиенти. Со повеќе од две децении искуство, GRGA Trans претставува стабилен и доверлив партнер во областа на транспортот, рударството и логистичките услуги.",
        },
      ],
    },
    contact: {
      label: "Контакт",
      heading: "Стапете во контакт",
      intro:
        "Тука сме за вашите прашања, понуди и соработки. Изберете го најпогодниот начин за контакт.",
      cards: [
        {
          title: "Телефон",
          items: [
            { label: "076/552-462", href: "tel:076552462" },
            { label: "075/746-066", href: "tel:075746066" },
          ],
        },
        {
          title: "Локација",
          items: ["ул. Маршал Тито б.б", "2333 Спанчево", "Северна Македонија"],
        },
        {
          title: "Email",
          items: [
            { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
            { label: "contact@grga.mk", href: "mailto:contact@grga.mk" },
          ],
        },
      ],
      form: {
        label: "Контактирајте нѐ",
        heading: "Контакт форма",
        name: "Име и презиме",
        namePlaceholder: "Вашето име",
        email: "Email",
        emailPlaceholder: "primer@email.com",
        message: "Порака",
        messagePlaceholder: "Кажете ни како можеме да помогнеме...",
        submit: "Испрати порака",
        sending: "Се испраќа...",
        success: "Пораката е испратена! Ќе ве контактираме наскоро.",
        errors: {
          name: "Внесете валидно име (до 100 знаци).",
          email: "Внесете валидна email адреса.",
          message: "Пораката е задолжителна (до 1000 знаци).",
        },
      },
    },
    meta: {
      home: {
        title: "Грга Транс — Почетна",
        description: "Грга Транс — киперски транспорт во и надвор од државата од 1999 година.",
        ogTitle: "Грга Транс — Поврзувајќи дестинации, градејќи доверба",
        ogDescription:
          "Професионален киперски транспорт за јаглен, песок, камен и градежни материјали.",
      },
      about: {
        title: "За нас — Грга Транс",
        description:
          "Запознајте го Грга Транс — компанија со повеќе од 25 години искуство во киперскиот транспорт.",
        ogTitle: "За нас — Грга Транс",
        ogDescription: "Историја, мисија и тим на Грга Транс.",
      },
      contact: {
        title: "Контакт — Грга Транс",
        description: "Стапете во контакт со Грга Транс — телефон, email и локација.",
        ogTitle: "Контакт — Грга Транс",
        ogDescription: "Контактирајте нѐ за киперски транспорт и логистички услуги.",
      },
    },
  },
  en: {
    nav: { home: "Home", about: "About", contact: "Contact" },
    footer: { navigation: "Navigation", contact: "Contact", rights: "All rights reserved." },
    home: {
      hero: { title: "Grga Trans", subtitle: "Connecting destinations, building trust" },
      services: [
        {
          title: "Container transport",
          desc: "Reliable and efficient container transport for your supply chain.",
        },
        {
          title: "Curtainsider transport",
          desc: "Flexible and safe transport of various goods with tipper trucks for optimal protection.",
        },
        {
          title: "Tipper transport",
          desc: "Fast and secure transport of bulk materials, sand, stone, and earth with a modern tipper fleet.",
        },
        {
          title: "Dumper transport",
          desc: "Professional transport of liquid materials with specialized tankers that meet all standards.",
        },
        {
          title: "Van transport up to 2 tons",
          desc: "Quick and practical deliveries for smaller loads and parcels with vehicles up to 2 tons.",
        },
      ],
      stats: {
        label: "About us",
        heading: "More than two decades of experience",
        items: ["Employees", "Vehicles", "Warehouses", "Kilometers driven"],
        paragraphs: [
          "Since 1999, Grga Trans has grown with its clients, building partnerships based on trust, accuracy, and professionalism. Our fleet of modern transport trucks covers kilometers every day across North Macedonia and the region.",
          "With an experienced team of drivers and logistics specialists, we deliver every shipment safely, on time, and with the highest safety standards.",
        ],
      },
      gallery: { label: "Gallery", heading: "Our work in action" },
    },
    about: {
      label: "About Us",
      slides: [
        {
          title: "Welcome",
          text: "Welcome to GRGA Trans, a company with years of experience, reliability, and a professional approach in the field of transport and logistics.",
        },
        {
          title: "Our Story",
          text: "The company was founded in 1999 with its core activity being road freight transport, with a special focus on tipper/tipping transport, both in the domestic and international markets. Thanks to our dedication, high-quality service, and the trust of our clients, we have successfully developed and expanded the scope of our services over the years.",
        },
        {
          title: "Tipper Transport Solutions",
          text: "Today, GRGA Trans offers complete solutions related to tipper transport, including: \n- transport of various types of materials, \n- loading and unloading, \n- excavations, \n- crushing and processing of mineral raw materials in mining.",
        },
        {
          title: "Modern Machinery and Expert Team",
          text: "With modern machinery, an expert team, and continuous investment in development, the company successfully responds to the needs of even the most complex projects.",
        },
        {
          title: "Licensed and Authorized Company",
          text: "Since 2020, the company has been licensed and authorized for non-hazardous waste management, which includes collection, loading, and transport in accordance with all legal standards and environmental regulations.",
        },
        {
          title: "Our Mission",
          text: "Our mission is to provide reliable, timely, and professional service, building long-term trust with our partners and clients. With more than two decades of experience, GRGA Trans represents a stable and reliable partner in the field of transport, mining, and logistics services.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Get in touch",
      intro:
        "We are here for your questions, offers, and partnerships. Choose the most convenient way to contact us.",
      cards: [
        {
          title: "Phone",
          items: [
            { label: "076/552-462", href: "tel:076552462" },
            { label: "075/746-066", href: "tel:075746066" },
          ],
        },
        {
          title: "Location",
          items: ["st. Marshal Tito no. no", "2333 Spanchevo", "North Macedonia"],
        },
        {
          title: "Email",
          items: [
            { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
            { label: "contact@grga.mk", href: "mailto:contact@grga.mk" },
          ],
        },
      ],
      form: {
        label: "Reach out",
        heading: "Contact form",
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "name@example.com",
        message: "Message",
        messagePlaceholder: "Tell us how we can help...",
        submit: "Send message",
        sending: "Sending...",
        success: "Your message has been sent! We will contact you soon.",
        errors: {
          name: "Enter a valid name (up to 100 characters).",
          email: "Enter a valid email address.",
          message: "Message is required (up to 1000 characters).",
        },
      },
    },
    meta: {
      home: {
        title: "Grga Trans — Home",
        description: "Grga Trans — dumper transport in and outside the country since 1999.",
        ogTitle: "Grga Trans — Connecting destinations, building trust",
        ogDescription:
          "Professional dumper transport for coal, sand, stone, and construction materials.",
      },
      about: {
        title: "About — Grga Trans",
        description:
          "Meet Grga Trans — a company with more than 25 years of dumper transport experience.",
        ogTitle: "About — Grga Trans",
        ogDescription: "History, mission, and team of Grga Trans.",
      },
      contact: {
        title: "Contact — Grga Trans",
        description: "Contact Grga Trans — phone, email, and location.",
        ogTitle: "Contact — Grga Trans",
        ogDescription: "Contact us for dumper transport and logistics services.",
      },
    },
  },
  sq: {
    nav: { home: "Kreu", about: "Rreth nesh", contact: "Kontakt" },
    footer: {
      navigation: "Navigim",
      contact: "Kontakt",
      rights: "Të gjitha të drejtat e rezervuara.",
    },
    home: {
      hero: { title: "Grga Trans", subtitle: "Lidhim destinacione, ndërtojmë besim" },
      services: [
        {
          title: "Transport me kontejnerë",
          desc: "Transport i besueshëm dhe efikas i kontejnerëve për zinxhirin tuaj të furnizimit.",
        },
        { title: "Transport rëre", desc: "Dorëzim rëre në kantierë dhe fabrika në mbarë vendin." },
        {
          title: "Transport me kamionë me tenda",
          desc: "Transport fleksibël dhe i sigurt i mallrave të ndryshme me kamionë të pajisur me tenda për mbrojtje optimale.",
        },
        {
          title: "Cisternë",
          desc: "Transport profesional i materialeve të lëngshme me cisterna të specializuara që përmbushin të gjitha standardet.",
        },
        {
          title: "Transport me kamionë me tipper",
          desc: "Transport i shpejtë dhe i sigurt i materialeve në masë, rërës, gurit dhe tokës me një flotë moderne kamionësh me tipper.",
        },
      ],
      stats: {
        label: "Rreth nesh",
        heading: "Më shumë se dy dekada përvojë",
        items: ["Punonjës", "Automjete", "Magazina", "Kilometra të përshkuara"],
        paragraphs: [
          "Që nga viti 1999, Grga Trans është rritur bashkë me klientët e saj, duke ndërtuar partneritete të bazuara në besim, saktësi dhe profesionalizëm. Flota jonë me kamionë modernë transporti përshkon kilometra çdo ditë në Maqedoninë e Veriut dhe në rajon.",
          "Me një ekip me përvojë shoferësh dhe specialistësh logjistike, çdo dërgesë e kryejmë në mënyrë të sigurt, në kohë dhe me standardet më të larta të sigurisë.",
        ],
      },
      gallery: { label: "Galeria", heading: "Puna jonë në veprim" },
    },
    about: {
      label: "Rreth Nesh",
      slides: [
        {
          title: "Mirëseerdhët",
          text: "Mirëseerdhët në GRGA Trans, një kompani me përvojë shumëvjeçare, besueshmëri dhe qasje profesionale në fushën e transportit dhe logjistikës.",
        },
        {
          title: "Historia Jonë",
          text: "Kompania u themelua në vitin 1999 me veprimtari kryesore transportin rrugor të mallrave, me fokus të veçantë në transportin me kipar (me rrokullisje), si në tregun vendas ashtu edhe në atë ndërkombëtar. Falë përkushtimit, shërbimit cilësor dhe besimit të klientëve, gjatë viteve jemi zhvilluar me sukses dhe kemi zgjeruar gamën e shërbimeve tona.",
        },
        {
          title: "Zgjidhje për Transportin me Kipar",
          text: "Sot, GRGA Trans ofron zgjidhje të plota lidhur me transportin me kipar, duke përfshirë: \n- transportin e llojeve të ndryshme të materialeve, \n- ngarkimin dhe shkarkimin, \n- gërmimet, \n- thërrmimin dhe përpunimin e lëndëve të para minerale në miniera.",
        },
        {
          title: "Makineri Moderne dhe Ekip Ekspertësh",
          text: "Me makineri moderne, një ekip ekspertësh dhe investime të vazhdueshme në zhvillim, kompania u përgjigjet me sukses nevojave të projekteve më komplekse.",
        },
        {
          title: "Kompani e Licencuar dhe e Autorizuar",
          text: "Nga viti 2020, kompania është e licencuar dhe e autorizuar për menaxhimin e mbetjeve jorrezikshme, gjë që përfshin grumbullimin, ngarkimin dhe transportin në përputhje me të gjitha standardet ligjore dhe rregulloret mjedisore.",
        },
        {
          title: "Misioni Ynë",
          text: "Misioni ynë është të ofrojmë shërbim të sigurt, në kohë dhe profesional, duke ndërtuar besim afatgjatë me partnerët dhe klientët tanë. Me më shumë se dy dekada përvojë, GRGA Trans përfaqëson një partner stabil dhe të besueshëm në fushën e transportit, minierave dhe shërbimeve logjistike.",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      heading: "Na kontaktoni",
      intro:
        "Jemi këtu për pyetjet, ofertat dhe bashkëpunimet tuaja. Zgjidhni mënyrën më të përshtatshme për të na kontaktuar.",
      cards: [
        {
          title: "Telefon",
          items: [
            { label: "076/552-462", href: "tel:076552462" },
            { label: "075/746-066", href: "tel:075746066" },
          ],
        },
        {
          title: "Vendndodhja",
          items: ["Rr. Marshal Tito b.b", "2333 Spanchevo", "Maqedonia e Veriut"],
        },
        {
          title: "Email",
          items: [
            { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
            { label: "contact@grga.mk", href: "mailto:contact@grga.mk" },
          ],
        },
      ],
      form: {
        label: "Na shkruani",
        heading: "Formulari i kontaktit",
        name: "Emri dhe mbiemri",
        namePlaceholder: "Emri juaj",
        email: "Email",
        emailPlaceholder: "name@example.com",
        message: "Mesazhi",
        messagePlaceholder: "Na tregoni si mund t'ju ndihmojmë...",
        submit: "Dërgo mesazhin",
        sending: "Duke u dërguar...",
        success: "Mesazhi juaj u dërgua! Do t'ju kontaktojmë së shpejti.",
        errors: {
          name: "Shkruani një emër të vlefshëm (deri në 100 karaktere).",
          email: "Shkruani një adresë email të vlefshme.",
          message: "Mesazhi është i detyrueshëm (deri në 1000 karaktere).",
        },
      },
    },
    meta: {
      home: {
        title: "Grga Trans — Kryefaqja",
        description: "Grga Trans — transport me dumper brenda dhe jashtë vendit që nga viti 1999.",
        ogTitle: "Grga Trans — Lidhim destinacione, ndërtojmë besim",
        ogDescription:
          "Transport profesional me dumper për qymyr, rërë, gur dhe materiale ndërtimi.",
      },
      about: {
        title: "Rreth nesh — Grga Trans",
        description:
          "Njihuni me Grga Trans — një kompani me më shumë se 25 vjet përvojë në transportin me dumper.",
        ogTitle: "Rreth nesh — Grga Trans",
        ogDescription: "Historia, misioni dhe ekipi i Grga Trans.",
      },
      contact: {
        title: "Kontakt — Grga Trans",
        description: "Na kontaktoni me Grga Trans — telefon, email dhe vendndodhje.",
        ogTitle: "Kontakt — Grga Trans",
        ogDescription: "Na kontaktoni për shërbime transporti dhe logjistike me dumper.",
      },
    },
  },
} as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : "mk";
}

export function getPageFromPathname(pathname: string): PageKey {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const localizedPath = cleanPath.replace(/^\/(en|sq)(?=\/|$)/, "") || "/";

  if (localizedPath === "/" || localizedPath === "") return "home";
  if (localizedPath === "/za-nas") return "about";
  if (localizedPath === "/kontakt") return "contact";
  return "home";
}

export function getPathForLocale(locale: Locale, page: PageKey): string {
  const base = locale === "mk" ? "" : `/${locale}`;
  if (page === "home") return base || "/";
  if (page === "about") return `${base}/za-nas`;
  return `${base}/kontakt`;
}

export function getLocalizedNav(locale: Locale) {
  return [
    { page: "home" as const, label: siteCopy[locale].nav.home },
    { page: "about" as const, label: siteCopy[locale].nav.about },
    { page: "contact" as const, label: siteCopy[locale].nav.contact },
  ];
}

export function getPageMeta(locale: Locale, page: PageKey) {
  return siteCopy[locale].meta[page];
}

export function getLocaleCopy(locale: Locale) {
  return siteCopy[locale];
}
