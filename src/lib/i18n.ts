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
          title: "Транспорт на јаглен",
          desc: "Сигурен и навремен превоз на јаглен за енергетски и индустриски потреби.",
        },
        {
          title: "Транспорт на песок",
          desc: "Достава на песок до градилишта и фабрики низ целата држава.",
        },
        {
          title: "Транспорт на камен",
          desc: "Превоз на дробен камен и градежни агрегати со современа киперска флота.",
        },
      ],
      stats: {
        label: "За нас",
        heading: "Повеќе од две децении искуство",
        items: ["Вработени", "Возила", "Складишта", "Изминати километри"],
        paragraphs: [
          "Од нашето основање во 1999 година, Грга Транс расте заедно со своите клиенти, градејќи партнерства засновани на доверба, точност и професионализам. Нашата флота од модерни киперски возила секојдневно поминува километри низ Македонија и регионот.",
          "Со искусен тим возачи и логистичари, секоја пратка ја извршуваме сигурно, навреме и со највисок стандард на безбедност.",
        ],
      },
      gallery: { label: "Галерија", heading: "Нашата работа во акција" },
    },
    about: {
      label: "За нас",
      slides: [
        {
          title: "Нашата приказна",
          text: "Грга Транс е основана во 1999 година со визија да обезбеди сигурен и професионален киперски транспорт. Над две децении подоцна, продолжуваме да ги поврзуваме градилиштата, рудниците и фабриките низ целата држава.",
        },
        {
          title: "Модерна флота",
          text: "Располагаме со над 21 кипер и специјализирани возила. Редовно ги одржуваме и обновуваме за да гарантираме безбедност, ефикасност и минимално влијание врз животната средина.",
        },
        {
          title: "Искусен тим",
          text: "Нашите 30+ вработени се срцето на компанијата. Возачите со долгогодишно искуство, логистичарите и техничкиот персонал работат заедно за да обезбедат секоја пратка да стигне навреме.",
        },
        {
          title: "Нашите вредности",
          text: "Доверба, точност и безбедност. Овие три принципи ги водат сите наши одлуки — од изборот на возила, преку планирањето на рутите, до односот со клиентите и партнерите.",
        },
        {
          title: "Поглед напред",
          text: "Продолжуваме да инвестираме во нови возила, дигитални системи за следење и обука на нашиот тим. Целта ни е да останеме лидер во киперскиот транспорт во регионот.",
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
            { label: "070/309-403", href: "tel:070309403" },
            { label: "076/552-462", href: "tel:076552462" },
            { label: "075/746-066", href: "tel:075746066" },
          ],
        },
        {
          title: "Локација",
          items: ["ул. Пример 123", "2300 Кочани", "Северна Македонија"],
        },
        {
          title: "Email",
          items: [
            { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
            { label: "contact@grga-trans.com", href: "mailto:contact@grga-trans.com" },
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
          title: "Coal transport",
          desc: "Reliable and timely coal transport for energy and industrial needs.",
        },
        {
          title: "Sand transport",
          desc: "Sand delivery to construction sites and factories nationwide.",
        },
        {
          title: "Stone transport",
          desc: "Transport of crushed stone and construction aggregates with a modern dumper fleet.",
        },
      ],
      stats: {
        label: "About us",
        heading: "More than two decades of experience",
        items: ["Employees", "Vehicles", "Warehouses", "Kilometers driven"],
        paragraphs: [
          "Since 1999, Grga Trans has grown with its clients, building partnerships based on trust, accuracy, and professionalism. Our fleet of modern dump trucks covers kilometers every day across North Macedonia and the region.",
          "With an experienced team of drivers and logistics specialists, we deliver every shipment safely, on time, and with the highest safety standards.",
        ],
      },
      gallery: { label: "Gallery", heading: "Our work in action" },
    },
    about: {
      label: "About us",
      slides: [
        {
          title: "Our story",
          text: "Grga Trans was founded in 1999 with a vision to provide reliable and professional dumper transport. More than two decades later, we continue connecting construction sites, mines, and factories across the country.",
        },
        {
          title: "Modern fleet",
          text: "We operate more than 21 dump trucks and specialized vehicles. We maintain and renew them regularly to ensure safety, efficiency, and minimal environmental impact.",
        },
        {
          title: "Experienced team",
          text: "Our 30+ employees are the heart of the company. Experienced drivers, logistics staff, and technicians work together to make sure every shipment arrives on time.",
        },
        {
          title: "Our values",
          text: "Trust, precision, and safety. These three principles guide every decision we make, from vehicle selection to route planning and our relationships with clients and partners.",
        },
        {
          title: "Looking ahead",
          text: "We keep investing in new vehicles, digital tracking systems, and team training. Our goal is to remain a leader in dumper transport in the region.",
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
            { label: "070/309-403", href: "tel:070309403" },
            { label: "076/552-462", href: "tel:076552462" },
            { label: "075/746-066", href: "tel:075746066" },
          ],
        },
        { title: "Location", items: ["Example St. 123", "2300 Kochani", "North Macedonia"] },
        {
          title: "Email",
          items: [
            { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
            { label: "contact@grga-trans.com", href: "mailto:contact@grga-trans.com" },
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
          title: "Transport qymyri",
          desc: "Transport i besueshëm dhe në kohë i qymyrit për nevoja energjetike dhe industriale.",
        },
        { title: "Transport rëre", desc: "Dorëzim rëre në kantierë dhe fabrika në mbarë vendin." },
        {
          title: "Transport guri",
          desc: "Transport i gurit të thyer dhe agregateve të ndërtimit me flotë moderne dumpersh.",
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
      label: "Rreth nesh",
      slides: [
        {
          title: "Historia jonë",
          text: "Grga Trans u themelua në vitin 1999 me vizionin për të ofruar transport të besueshëm dhe profesional me dumper. Më shumë se dy dekada më vonë, vazhdojmë të lidhim kantierët, minierat dhe fabrikat në mbarë vendin.",
        },
        {
          title: "Flotë moderne",
          text: "Ne disponojmë mbi 21 kamionë dumper dhe automjete të specializuara. I mirëmbajmë dhe i rinovojmë rregullisht për të garantuar siguri, efikasitet dhe ndikim minimal në mjedis.",
        },
        {
          title: "Ekip me përvojë",
          text: "30+ punonjësit tanë janë zemra e kompanisë. Shoferë me përvojë, staf logjistik dhe teknikë punojnë së bashku që çdo dërgesë të arrijë në kohë.",
        },
        {
          title: "Vlerat tona",
          text: "Besimi, saktësia dhe siguria. Këto tre parime udhëheqin çdo vendim, nga zgjedhja e automjeteve deri te planifikimi i rrugëve dhe marrëdhëniet me klientët dhe partnerët.",
        },
        {
          title: "Duke ecur përpara",
          text: "Vazhdojmë të investojmë në automjete të reja, sisteme digjitale gjurmimi dhe trajnimin e ekipit. Qëllimi ynë është të mbetemi lider në transportin me dumper në rajon.",
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
            { label: "070/309-403", href: "tel:070309403" },
            { label: "076/552-462", href: "tel:076552462" },
            { label: "075/746-066", href: "tel:075746066" },
          ],
        },
        { title: "Vendndodhja", items: ["Rr. Shembull 123", "2300 Koçan", "Maqedonia e Veriut"] },
        {
          title: "Email",
          items: [
            { label: "grgadoo99@gmail.com", href: "mailto:grgadoo99@gmail.com" },
            { label: "contact@grga-trans.com", href: "mailto:contact@grga-trans.com" },
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
