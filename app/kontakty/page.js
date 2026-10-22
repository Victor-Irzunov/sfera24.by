// /app/kontakty/page.js — ПОЛНОСТЬЮ
// ✅ Контакты Sfera24.by
// ✅ SEO/AEO под: проверка вентиляционных и дымовых каналов + прочистка канализации
// ✅ Фокус: Минск и Минская область
// ✅ Server Component
// ✅ Метаданные + JSON-LD: ContactPage + BreadcrumbList + LocalBusiness
// ✅ Быстрый Hero через picture без лишнего JS
// ✅ Без карты — лучше для mobile speed
// ✅ Изображения: /fon/...webp, иконки: /svg/...svg

import Image from "next/image";
import Link from "next/link";
import BtnComp from "@/components/btn/BtnComp";
import Social from "@/components/social/Social";
import PhoneBottom from "@/components/phoneBotton/PhoneBottom";
import GiftCountdownBar from "@/components/promo/GiftCountdownBar";
import config from "@/config/config";

/* ================= SEO ================= */

const SITE_URL = (config?.siteUrl || "https://sfera24.by").replace(/\/+$/, "");
const PAGE_PATH = "/kontakty";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const brand = (config?.brand || "Sfera24.by").toString().trim();
const companyName = (config?.companyName || "Sfera24").toString().trim();

const ogImage = config?.ogImage || "/og/1200x630.webp";
const absOg = `${SITE_URL}${ogImage}`;

const pageTitle =
  "Контакты Sfera24.by — проверка вентиляции, дымоходов и прочистка канализации в Минске";

const pageDescription =
  "Контакты Sfera24.by в Минске. Проверка вентиляционных и дымовых каналов, акт проверки, обследование вентиляции, проверка тяги и гидродинамическая прочистка канализации. Заявки 08:00–20:00.";

const pageKeywords = [
  "контакты Sfera24",
  "Sfera24.by контакты",
  "проверка вентиляционных каналов Минск",
  "проверка дымовых каналов Минск",
  "проверка дымоходов Минск",
  "акт проверки дымовых и вентиляционных каналов",
  "проверка тяги вентиляции",
  "обследование вентиляции Минск",
  "испытания вентиляции Минск",
  "прочистка канализации Минск",
  "гидродинамическая прочистка канализации",
  "промывка канализации Минск",
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  alternates: {
    canonical: PAGE_URL,
    languages: { "ru-BY": PAGE_URL },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: PAGE_URL,
    siteName: brand,
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: absOg,
        width: 1200,
        height: 630,
        alt: "Контакты Sfera24.by — проверка вентиляции, дымоходов и прочистка канализации в Минске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [absOg],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ================= IMAGES ================= */

const HERO_BG_DESKTOP = "/fon/kontakty-sfera24-desktop.webp";
const HERO_BG_MOBILE = "/fon/kontakty-sfera24-mobile.webp";
const TEAM_IMG_DESKTOP = "/fon/sfera24-specialist-desktop..webp";
const TEAM_IMG_MOBILE = "/fon/sfera24-specialist-mobile.webp";

/* ================= ICONS ================= */

const ICONS = {
  phone: "/svg/phone.svg",
  mail: "/svg/mail.svg",
  tg: "/svg/telegram.svg",
  wa: "/svg/whatsapp.svg",
  vb: "/svg/viber.svg",
  mapPin: "/svg/pin.svg",
  time: "/svg/clock.svg",
  shield: "/svg/shield.svg",
  speed: "/svg/rocket.svg",
  price: "/svg/price-tag.svg",
  tools: "/svg/tools.svg",
  document: "/svg/document.svg",
  ventilation: "/svg/ventilation.svg",
  sewer: "/svg/sewer.svg",
  check: "/svg/check.svg",
  quote: "/svg/quote.svg",
};

/* ================= DATA ================= */

const CONTACT_BADGES = [
  "Минск и Минская область",
  "Проверка вентканалов",
  "Проверка дымоходов",
  "Акт проверки",
  "Проверка тяги",
  "Прочистка канализации",
  "Заявки 08:00–20:00",
];

const CONTACT_CARDS = [
  {
    icon: ICONS.mapPin,
    title: "Зона выезда",
    text: config?.addressShort || "Минск и Минская область",
  },
  {
    icon: ICONS.time,
    title: "Режим работы",
    text:
      config?.workTimeFull ||
      "Приём заявок: 08:00–20:00 · Выезд по Минску и Минской области",
  },
  {
    icon: ICONS.document,
    title: "Документы",
    text: "Оформление акта проверки по результату осмотра",
  },
];

const BENEFITS = [
  {
    icon: ICONS.speed,
    title: "Быстрый ответ",
    text: "Уточняем задачу, объект, адрес, необходимость акта и подсказываем ориентировочную стоимость.",
  },
  {
    icon: ICONS.document,
    title: "Акт проверки",
    text: "После осмотра дымовых и вентиляционных каналов можно оформить документ по результату проверки.",
  },
  {
    icon: ICONS.ventilation,
    title: "Вентиляция и дымоходы",
    text: "Проверяем тягу, состояние вентканалов, дымовых каналов, наличие обратной тяги и проблем с воздухообменом.",
  },
  {
    icon: ICONS.sewer,
    title: "Прочистка канализации",
    text: "Принимаем заявки на механическую и гидродинамическую прочистку канализации для физлиц и организаций.",
  },
];

const SERVICES = [
  {
    title: "Проверка вентиляционных каналов",
    text: "Осмотр вентканалов, проверка тяги, оценка состояния и выявление причин слабой вытяжки.",
    href: "/proverka-dymovyh-i-ventilyacionnyh-kanalov",
  },
  {
    title: "Проверка дымовых каналов и дымоходов",
    text: "Проверка тяги, проходимости и технического состояния дымоходов в квартирах, домах и на объектах.",
    href: "/proverka-dymovyh-i-ventilyacionnyh-kanalov",
  },
  {
    title: "Акт проверки дымовых и вентиляционных каналов",
    text: "Оформление акта проверки технического состояния после осмотра каналов.",
    href: "/proverka-dymovyh-i-ventilyacionnyh-kanalov",
  },
  {
    title: "Обследование вентиляции",
    text: "Диагностика вентиляционных систем, обратной тяги, запаха, слабой вытяжки и нарушений воздухообмена.",
    href: "/proverka-dymovyh-i-ventilyacionnyh-kanalov",
  },
  {
    title: "Прочистка вентиляционных каналов",
    text: "Чистка вентканалов, вытяжки и воздуховодов при загрязнении, слабой тяге или запахе.",
    href: "/proverka-dymovyh-i-ventilyacionnyh-kanalov",
  },
  {
    title: "Прочистка канализации",
    text: "Устранение засоров, промывка труб, гидродинамическая прочистка канализации для квартир, домов и организаций.",
    href: "/prochistka-kanalizacii",
  },
];

const QUICK_CALC_ITEMS = [
  "Адрес объекта: Минск или Минская область.",
  "Что нужно: проверка вентканалов, дымохода, акт, обследование вентиляции или прочистка канализации.",
  "Тип объекта: квартира, частный дом, школа, организация, кафе, офис или производство.",
  "Количество каналов, дымоходов, вентканалов или точек канализации.",
  "Есть ли плохая тяга, запах, обратная тяга, засор или слабый слив.",
  "Нужна ли срочность и оформление документов после проверки.",
];

const PHONE_HELP_ITEMS = [
  "Сколько может стоить проверка дымовых и вентиляционных каналов.",
  "Когда нужен акт проверки и какие данные нужны для заявки.",
  "Что делать при запахе из вентиляции, обратной тяге или слабой вытяжке.",
  "Какая цена на прочистку канализации для физлиц и организаций.",
  "Нужна ли гидродинамическая промывка или достаточно обычной прочистки.",
];

const WHY_ORDER = [
  {
    title: "Сначала уточняем задачу",
    text: "Чтобы не называть случайную цену, уточняем объект, количество каналов, доступ, документы и срочность.",
  },
  {
    title: "Работаем с бытовыми и коммерческими объектами",
    text: "Принимаем заявки от квартир, частных домов, школ, кафе, офисов, организаций и производственных объектов.",
  },
  {
    title: "Закрываем несколько задач",
    text: "Можно обратиться по проверке вентиляции, дымоходов, акту проверки, обследованию, чистке вентиляции или канализации.",
  },
  {
    title: "Фокус на Минске",
    text: "Страница и заявки заточены под Минск и Минскую область без размывания географии по всей Беларуси.",
  },
];

const MAIN_SERVICE_NAMES = [
  "Проверка вентиляционных каналов",
  "Проверка дымовых каналов",
  "Проверка дымоходов",
  "Проверка вентканалов",
  "Проверка тяги вентиляции",
  "Акт проверки вентиляции",
  "Акт проверки дымохода",
  "Акт проверки дымовых и вентиляционных каналов",
  "Обследование вентиляции",
  "Диагностика вентиляционных систем",
  "Аэродинамические испытания вентиляции",
  "Замеры вентиляции",
  "Прочистка вентиляционных каналов",
  "Чистка вентиляции в квартире",
  "Чистка воздуховодов",
  "Прочистка канализации",
  "Гидродинамическая промывка канализации",
  "Устранение засоров канализации",
];

export default function ContactsPage() {
  const phone = (config?.phone1 || "+375 29 749-38-17").toString().trim();
  const phoneLink = (config?.phone1Link || "+375297493817").toString().trim();
  const email = (config?.email || "dubovecz.81@mail.ru").toString().trim();

  const telegram = (config?.telegram || "").toString().trim();
  const whatsapp = (config?.whatsapp || "").toString().trim();
  const viber = (config?.viber || "").toString().trim();

  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${PAGE_URL}#contactpage`,
    name: pageTitle,
    description: pageDescription,
    url: PAGE_URL,
    inLanguage: "ru-BY",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: brand,
      url: SITE_URL,
    },
    about: [
      "контакты Sfera24.by",
      "проверка вентиляционных каналов",
      "проверка дымовых каналов",
      "акт проверки дымовых и вентиляционных каналов",
      "прочистка канализации",
      "гидродинамическая промывка канализации",
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Контакты",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: companyName || brand,
    legalName: config?.legalName || companyName || brand,
    url: `${SITE_URL}/`,
    image: absOg,
    telephone: phoneLink || phone || undefined,
    email,
    priceRange: config?.priceRange || "BYN",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BY",
      addressRegion: "Минская область",
      addressLocality: "Минск",
      streetAddress: config?.addressShort || "Минск и Минская область",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Минск",
      },
      {
        "@type": "AdministrativeArea",
        name: "Минская область",
      },
      {
        "@type": "AdministrativeArea",
        name: "Минский район",
      },
    ],
    sameAs: [telegram, whatsapp, viber].filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneLink || phone || undefined,
        contactType: "customer service",
        areaServed: "Минск",
        availableLanguage: ["ru"],
      },
    ],
    makesOffer: MAIN_SERVICE_NAMES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        areaServed: {
          "@type": "City",
          name: "Минск",
        },
      },
    })),
  };

  return (
    <main className="bg-white text-slate-900 xz:overflow-x-hidden sd:overflow-visible">
      <JsonLd data={jsonLdContactPage} />
      <JsonLd data={jsonLdBreadcrumbs} />
      <JsonLd data={jsonLdLocalBusiness} />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[78vh] sd:min-h-[84vh]">
          <picture className="absolute inset-0">
            <source media="(min-width: 991px)" srcSet={HERO_BG_DESKTOP} />
            <img
              src={HERO_BG_MOBILE}
              alt={`Контакты ${brand} — проверка вентиляции, дымоходов и прочистка канализации в Минске`}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>

          <div className="absolute inset-0 bg-black/58" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-95"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(850px circle at 76% 18%, rgba(0,175,196,0.28), transparent 55%), radial-gradient(760px circle at 14% 12%, rgba(43,127,255,0.24), transparent 62%)",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.68))]" />

          <div className="relative container mx-auto px-4">
            <div className="mx-auto max-w-5xl pb-12 pt-36 text-center sd:pt-44">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sd:text-xs">
                Контакты • проверка каналов • прочистка канализации
              </p>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sd:text-6xl">
                Контакты {brand}
              </h1>

              <h2 className="mx-auto mt-5 max-w-4xl text-base font-semibold leading-relaxed text-white/92 sd:text-2xl">
                Проверка вентиляционных и дымовых каналов, оформление акта,
                обследование вентиляции и прочистка канализации в Минске.
              </h2>

              <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-white/80 sd:text-base">
                Позвоните или оставьте заявку — уточним объект, задачу,
                необходимость акта, количество каналов или характер засора и
                подскажем ориентировочную стоимость до выезда специалиста.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                {CONTACT_BADGES.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium text-white backdrop-blur-sm sd:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sd:flex-row sd:items-center">
                <a
                  href={`tel:${phoneLink}`}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 font-extrabold text-black shadow-lg sd:w-auto"
                  aria-label={`Позвонить в ${brand}`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Image src={ICONS.phone} alt="" width={18} height={18} />
                    {phone}
                  </span>
                </a>

                <div className="w-full sd:w-auto">
                  <BtnComp
                    title="Оставить заявку"
                    index={911}
                    name="Заявка со страницы Контакты Sfera24"
                    w
                    img={false}
                    short={false}
                  />
                </div>

                <div className="w-full sd:w-auto">
                  <BtnComp
                    title="Узнать стоимость"
                    index={912}
                    name="Узнать стоимость со страницы Контакты Sfera24"
                    w
                    img={false}
                    short
                  />
                </div>
              </div>

              <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-3 sd:grid-cols-3">
                {CONTACT_CARDS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white/10 px-5 py-4 text-left ring-1 ring-white/12 backdrop-blur-sm"
                  >
                    <p className="inline-flex items-center gap-2 text-sm font-extrabold text-white">
                      <Image src={item.icon} alt="" width={18} height={18} />
                      {item.title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,1))]" />
        </div>
      </section>

      {/* ================= CONTACT MAIN ================= */}
      <section className="py-12 sd:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.18)] sd:p-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#00AFC4]">
                Связь со специалистом
              </p>

              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sd:text-4xl">
                Связаться с нами проще всего по телефону
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-700 sd:text-[16px] sd:leading-8">
                Позвоните, и мы уточним, что требуется: проверка вентиляционных
                каналов, проверка дымохода, акт проверки, диагностика тяги,
                обследование вентиляции или прочистка канализации. После этого
                подскажем, какие данные нужны и от чего зависит стоимость.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${phoneLink}`}
                  className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center transition hover:bg-slate-100"
                  aria-label={`Позвонить ${phone}`}
                >
                  <div className="flex flex-col sd:flex-row">
                    <span className="mb-2 font-extrabold text-slate-900 sd:mb-0 sd:mr-2">
                      Телефон
                    </span>
                    <span className="font-extrabold text-slate-900">
                      {phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-center transition hover:bg-slate-100"
                  aria-label={`Написать на email ${email}`}
                >
                  <span className="break-all font-extrabold text-slate-900">
                    {email}
                  </span>
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sd:grid-cols-3">
                {whatsapp ? (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-center font-extrabold text-slate-900 transition hover:bg-slate-100"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Image src={ICONS.wa} alt="" width={18} height={18} />
                      WhatsApp
                    </span>
                  </a>
                ) : null}

                {viber ? (
                  <a
                    href={viber}
                    className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-center font-extrabold text-slate-900 transition hover:bg-slate-100"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Image src={ICONS.vb} alt="" width={18} height={18} />
                      Viber
                    </span>
                  </a>
                ) : null}

                {telegram ? (
                  <a
                    href={telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[22px] border border-slate-200 bg-slate-50 px-5 py-4 text-center font-extrabold text-slate-900 transition hover:bg-slate-100"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Image src={ICONS.tg} alt="" width={18} height={18} />
                      Telegram
                    </span>
                  </a>
                ) : null}
              </div>

              <div className="mt-6 rounded-[26px] border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-extrabold text-slate-900">
                  Что сообщить для быстрого расчёта
                </h3>

                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {QUICK_CALC_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 min-w-1.5 rounded-full bg-[#00AFC4]" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.18)] sd:p-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#2b7fff]">
                Услуги в Минске
              </p>

              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sd:text-4xl">
                Принимаем заявки на проверку каналов и прочистку канализации
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-700 sd:text-[16px] sd:leading-8">
                <strong>{brand}</strong> работает по Минску и Минской области:
                проверяем вентиляционные и дымовые каналы, оформляем акт
                проверки, диагностируем тягу и принимаем заявки на прочистку
                канализации.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3">
                {SERVICES.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#00AFC4] hover:shadow-[0_18px_60px_-36px_rgba(15,23,42,0.18)]"
                  >
                    <h3 className="text-base font-extrabold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {service.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE + BENEFITS ================= */}
      <section className="py-12 sd:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="relative min-h-90 overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_22px_70px_-38px_rgba(15,23,42,0.18)] sd:min-h-135">
              <picture>
                <source media="(min-width: 991px)" srcSet={TEAM_IMG_DESKTOP} />
                <img
                  src={TEAM_IMG_MOBILE}
                  alt={`Специалист ${brand} проверяет вентиляционные и дымовые каналы в Минске`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.05),rgba(15,23,42,.24))]" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-4 shadow-xl backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Специалисты {brand}
                </p>

                <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                  Проверка каналов, тяги и состояния вентиляции
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Уточняем задачу, выезжаем на объект и подсказываем решение по
                  результату осмотра.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_22px_70px_-38px_rgba(15,23,42,0.18)] sd:p-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
                Почему удобно обратиться
              </p>

              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sd:text-4xl">
                Один контакт для проверки вентиляции, дымоходов и канализации
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-700 sd:text-[16px] sd:leading-8">
                По одному телефону можно уточнить проверку дымовых и
                вентиляционных каналов, оформление акта, обследование
                вентиляции, чистку вентканалов и промывку канализации. Это
                удобно, когда нужно быстро понять причину проблемы и заказать
                нужную услугу.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sd:grid-cols-2">
                {BENEFITS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white">
                        <Image src={item.icon} alt="" width={20} height={20} />
                      </div>

                      <div>
                        <h3 className="text-base font-extrabold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] border border-[#00AFC4]/25 bg-[#00AFC4]/7 p-5">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Лучше всего позвонить перед заказом
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  По телефону быстрее всего понять, нужна проверка, акт,
                  обследование вентиляции, прочистка вентканала или промывка
                  канализации. Чем точнее описание, тем точнее расчёт.
                </p>

                <div className="mt-4 flex flex-col gap-3 sd:flex-row">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-6 font-extrabold text-white"
                  >
                    Позвонить сейчас
                  </a>

                  <div className="w-full sd:w-auto">
                    <BtnComp
                      title="Заказать расчёт"
                      index={913}
                      name="Заказать расчёт со страницы Контакты"
                      w
                      img={false}
                      short
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-6xl rounded-4xl border border-slate-200 bg-slate-50 p-6 sd:p-8">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-slate-500">
              Направления
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sd:text-4xl">
              Что можно заказать в {brand}
            </h2>

            <p className="mt-4 max-w-4xl text-[15px] leading-7 text-slate-700 sd:text-[16px] sd:leading-8">
              Основные направления — проверка вентиляционных и дымовых каналов
              в Минске, оформление актов, обследование вентиляции, проверка
              тяги, чистка вентиляции и гидродинамическая прочистка
              канализации.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sd:grid-cols-2 lg:grid-cols-3">
              {MAIN_SERVICE_NAMES.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 sd:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-slate-200 bg-linear-to-br from-slate-900 via-[#06243a] to-[#00343d] p-7 text-white shadow-[0_28px_90px_-42px_rgba(15,23,42,0.35)] sd:p-10">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#8ff5ff]">
                  Быстрая заявка
                </p>

                <h2 className="text-3xl font-extrabold leading-tight sd:text-5xl">
                  Нужна проверка каналов или прочистка канализации?
                </h2>

                <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
                  Позвоните в <strong>{brand}</strong> — уточним задачу,
                  подскажем ориентировочную стоимость и запишем заявку на
                  проверку вентиляции, дымоходов, оформление акта или прочистку
                  канализации в Минске.
                </p>

                <div className="mt-6 flex flex-col gap-3 sd:flex-row">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 font-extrabold text-black sd:w-auto"
                  >
                    {phone}
                  </a>

                  <div className="w-full sd:w-auto">
                    <BtnComp
                      title="Оставить заявку"
                      index={914}
                      name="Оставить заявку со страницы Контакты"
                      w
                      img={false}
                    />
                  </div>
                </div>

                <div className="mt-5 text-sm text-white/70">
                  <p>
                    <span className="font-semibold text-white/90">
                      Зона выезда:
                    </span>{" "}
                    {config?.addressShort || "Минск и Минская область"}
                  </p>

                  <p className="mt-1">
                    <span className="font-semibold text-white/90">Режим:</span>{" "}
                    {config?.workTimeFull ||
                      "Приём заявок: 08:00–20:00 · Выезд по Минску и Минской области"}
                  </p>

                  <p className="mt-1">
                    <span className="font-semibold text-white/90">Email:</span>{" "}
                    {email}
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-extrabold text-white">
                  Что можно обсудить сразу по телефону
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {PHONE_HELP_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00d2ef]" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-1 gap-3 sd:grid-cols-2">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 font-extrabold text-white transition hover:bg-white/15"
                  >
                    Позвонить
                  </a>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 font-extrabold text-white transition hover:bg-white/15"
                  >
                    Написать
                  </a>
                </div>

                <p className="mt-5 text-center text-xs text-white/60">
                  Чем точнее вы опишете объект и задачу, тем быстрее получится
                  рассчитать стоимость.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GiftCountdownBar />
      <Social />
      <PhoneBottom />
    </main>
  );
}