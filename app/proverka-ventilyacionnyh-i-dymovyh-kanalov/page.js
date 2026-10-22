// /app/proverka-dymovyh-i-ventilyacionnyh-kanalov/page.js — ПОЛНОСТЬЮ
// ✅ SEO-страница под основной запрос: проверка дымовых и вентиляционных каналов
// ✅ Основной гео-запрос: проверка дымовых и вентиляционных каналов в Минске
// ✅ Коммерческий кластер: акт проверки, цена, выезд, проверка тяги
// ✅ Серверная страница
// ✅ Hero без лишнего JS для скорости на мобильных
// ✅ JSON-LD: WebSite, WebPage, BreadcrumbList, LocalBusiness, Service, FAQPage
// ✅ Естественное распределение ключей без переспама
// ✅ Оптимизация под SEO и AEO по Минску

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import config from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";
import AutoOpenCeilingLeadModalTrigger from "@/components/modals/AutoOpenCeilingLeadModalTrigger";
import AboutCompanySfera from "@/components/sections/AboutCompanySfera";
import InspectionPriceSection from "@/components/sections/InspectionPriceSection";
import VentilationTestingSection from "@/components/sections/VentilationTestingSection";
import VentilationCleaningSection from "@/components/sections/VentilationCleaningSection";
import CooperationBenefitsSection from "@/components/sections/CooperationBenefitsSection";
import CallMasterMinskSection from "@/components/sections/CallMasterMinskSection";

const MobileCalcEdgeButton = dynamic(() =>
  import("@/components/ui/MobileCalcEdgeButton")
);

const Zahvat = dynamic(() => import("@/components/MainSections/Zahvat"));
const Otzyvy = dynamic(() => import("@/components/MainSections/Otzyvy"));
const GiftCountdownBar = dynamic(() =>
  import("@/components/promo/GiftCountdownBar")
);
const Social = dynamic(() => import("@/components/social/Social"));
const PhoneBottom = dynamic(() => import("@/components/phoneBotton/PhoneBottom"));

const SITE_URL = (config?.siteUrl || "https://sfera24.by").replace(/\/+$/, "");
const PAGE_PATH = "/proverka-dymovyh-i-ventilyacionnyh-kanalov";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const brand = (config?.brand || "Sfera24.by").toString().trim();
const companyName = (config?.companyName || "Sfera24").toString().trim();

const ogImage = config?.ogImage || "/og/1200x630.webp";
const absOg = `${SITE_URL}${ogImage}`;

const HERO_BG_DESKTOP =
  "/fon/proverka-dymovyh-i-ventilyacionnyh-kanalov-desktop.webp";
const HERO_BG_MOBILE =
  "/fon/proverka-dymovyh-i-ventilyacionnyh-kanalov-mobile.webp";

const city = "Минск";
const region = "Минская область";

const title =
  "Проверка дымовых и вентиляционных каналов в Минске | Акт проверки";

const description =
  "Проверка дымовых и вентиляционных каналов в Минске. Осмотр дымоходов, вентканалов, проверка тяги, обследование вентиляции, оформление акта.";

const h1 = "Проверка дымовых и вентиляционных каналов в Минске";

const pageLead =
  "Проводим проверку дымоходов, вентиляционных каналов и вентканалов в квартирах, частных домах, школах, организациях и коммерческих помещениях. По результату осмотра оформляется акт проверки технического состояния.";

const keywords = [
  "проверка дымовых и вентиляционных каналов",
  "проверка дымовых и вентиляционных каналов минск",
  "проверка вентиляционных каналов минск",
  "проверка дымоходов минск",
  "проверка дымоходов и вентиляционных каналов минск",
  "акт проверки дымовых и вентиляционных каналов",
  "акт проверки вентиляционных каналов",
  "акт проверки дымохода",
  "проверка тяги вентиляции",
  "проверка тяги в дымоходе",
  "обследование дымовых и вентиляционных каналов",
];

const badges = [
  "Цена по договорённости",
  "Выезд по Минску и району",
  "Акт проверки",
  "Проверка тяги",
  "Осмотр дымоходов",
  "Проверка вентканалов",
];

const heroServices = [
  "Проверка дымовых каналов",
  "Проверка вентиляционных каналов",
  "Проверка дымоходов",
  "Обследование вентканалов",
  "Проверка тяги",
  "Оформление акта",
];

const problems = [
  "Нужен акт проверки дымовых и вентиляционных каналов",
  "Плохо работает вентиляция в квартире или доме",
  "Появился запах из вентиляции или обратная тяга",
  "Нужно проверить дымоход в частном доме",
  "Требуется осмотр вентканалов в организации",
  "Нужна проверка перед подключением или эксплуатацией оборудования",
];

const services = [
  {
    title: "Проверка вентиляционных каналов",
    text: "Проверяем состояние вентиляционных каналов, наличие тяги, загрязнения, засоры, обратную тягу и эффективность работы естественной вентиляции.",
  },
  {
    title: "Проверка дымовых каналов и дымоходов",
    text: "Осматриваем дымовые каналы и дымоходы, проверяем тягу, проходимость, техническое состояние и наличие факторов, которые могут мешать безопасной эксплуатации.",
  },
  {
    title: "Акт проверки технического состояния",
    text: "По результату осмотра может быть оформлен акт проверки дымовых и вентиляционных каналов, акт на вентканалы или акт проверки дымохода.",
  },
  {
    title: "Обследование дымоходов и вентканалов",
    text: "Проводим обследование дымовых и вентиляционных каналов в квартирах, частных домах, школах, организациях и коммерческих помещениях.",
  },
];

const objects = [
  "Квартиры",
  "Частные дома",
  "Многоквартирные дома",
  "Школы",
  "Организации",
  "Коммерческие помещения",
];

const documents = [
  "Акт проверки дымовых и вентиляционных каналов",
  "Акт проверки вентиляционных каналов",
  "Акт проверки дымохода",
  "Акт обследования вентиляционных каналов",
  "Акт обследования дымохода",
  "Акт технического состояния каналов",
];

const steps = [
  {
    title: "Принимаем заявку",
    text: "Вы оставляете заявку или звоните, кратко описываете объект и задачу: проверка, акт, плохая тяга, запах или обследование каналов.",
  },
  {
    title: "Уточняем объект",
    text: "Уточняем адрес в Минске или Минском районе, тип объекта, количество каналов, необходимость акта и особенности доступа.",
  },
  {
    title: "Выезжаем на проверку",
    text: "Специалист приезжает на объект, осматривает дымовые и вентиляционные каналы, проверяет тягу и техническое состояние.",
  },
  {
    title: "Фиксируем результат",
    text: "После проверки сообщаем результат, даём рекомендации и при необходимости оформляем акт проверки технического состояния.",
  },
];

const faqItems = [
  {
    q: "Сколько стоит проверка дымовых и вентиляционных каналов в Минске?",
    a: "Стоимость зависит от типа объекта, количества дымовых и вентиляционных каналов, необходимости оформления акта, сложности доступа и срочности выезда. Точную цену можно уточнить после описания объекта.",
  },
  {
    q: "Можно ли получить акт проверки дымовых и вентиляционных каналов?",
    a: "Да, по результату осмотра может быть оформлен акт проверки дымовых и вентиляционных каналов или акт технического состояния каналов.",
  },
  {
    q: "Проверяете ли вентиляционные каналы в квартире?",
    a: "Да, проводится проверка вентиляционных каналов в квартирах: проверяем тягу, состояние вентканала, возможную обратную тягу и причины плохой работы вентиляции.",
  },
  {
    q: "Проверяете ли дымоходы в частном доме?",
    a: "Да, можно заказать проверку дымохода в частном доме. Специалист осматривает канал, проверяет тягу, проходимость и техническое состояние дымохода.",
  },
  {
    q: "Когда нужна проверка дымоходов и вентканалов?",
    a: "Проверка нужна при плохой тяге, запахе из вентиляции, обратной тяге, перед отопительным сезоном, после ремонта, при подключении оборудования и для оформления акта.",
  },
  {
    q: "Что входит в проверку вентиляционных каналов?",
    a: "В проверку входит осмотр вентиляционного канала, проверка тяги, оценка состояния, выявление возможных засоров, обратной тяги и нарушений работы вентиляции.",
  },
  {
    q: "Что делать, если из вентиляции идёт запах?",
    a: "Нужно проверить тягу и состояние вентиляционного канала. Запах может появляться из-за загрязнения, обратной тяги, нарушений воздухообмена или проблем в общедомовой системе.",
  },
  {
    q: "Чем отличается проверка от прочистки каналов?",
    a: "Проверка показывает состояние каналов, наличие тяги и возможные проблемы. Прочистка выполняется отдельно, если канал загрязнён, забит или плохо пропускает воздух.",
  },
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: brand,
    title,
    description,
    locale: "ru_BY",
    images: [
      {
        url: absOg,
        width: 1200,
        height: 630,
        alt: "Проверка дымовых и вентиляционных каналов в Минске с оформлением акта",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absOg],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function buildJsonLd() {
  const phone = (config?.phone1 || "").toString().trim();
  const phoneLink = (config?.phone1Link || config?.phone1 || "")
    .toString()
    .trim();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: brand,
        inLanguage: "ru-BY",
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: title,
        headline: h1,
        description,
        inLanguage: "ru-BY",
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absOg,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumbs`,
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
            name: "Проверка дымовых и вентиляционных каналов",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}#localbusiness`,
        name: companyName,
        url: SITE_URL,
        telephone: phoneLink || phone || undefined,
        image: [absOg],
        priceRange: config?.priceRange || "BYN",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BY",
          addressRegion: region,
          addressLocality: city,
          streetAddress: config?.addressShort || "Минск и Минская область",
        },
        areaServed: [
          { "@type": "City", name: "Минск" },
          { "@type": "AdministrativeArea", name: "Минский район" },
          { "@type": "AdministrativeArea", name: "Минская область" },
        ],
        sameAs: [
          ...(config?.telegram ? [config.telegram] : []),
          ...(config?.whatsapp ? [config.whatsapp] : []),
          ...(config?.viber ? [config.viber] : []),
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Проверка дымовых и вентиляционных каналов в Минске",
        description:
          "Проверка дымовых и вентиляционных каналов в Минске: осмотр дымоходов, вентканалов, проверка тяги, обследование вентиляции и оформление акта проверки технического состояния.",
        serviceType: [
          "Проверка дымовых и вентиляционных каналов",
          "Проверка вентиляционных каналов",
          "Проверка дымоходов",
          "Проверка вентканалов",
          "Проверка тяги вентиляции",
          "Оформление акта проверки",
          "Обследование дымоходов и вентиляционных каналов",
        ],
        provider: {
          "@id": `${SITE_URL}#localbusiness`,
        },
        areaServed: [
          { "@type": "City", name: "Минск" },
          { "@type": "AdministrativeArea", name: "Минский район" },
          { "@type": "AdministrativeArea", name: "Минская область" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "BYN",
          availability: "https://schema.org/InStock",
          url: PAGE_URL,
        },
        url: PAGE_URL,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

export default function Page() {
  const jsonLd = buildJsonLd();

  const phone = (config?.phone1 || "+375 29 749-38-17").toString().trim();
  const phoneLink = (config?.phone1Link || config?.phone1 || "+375297493817")
    .toString()
    .trim();

  return (
    <main className="bg-white text-slate-900 xz:overflow-x-hidden sd:overflow-visible">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section
        id="top"
        className="relative min-h-[92vh] pb-14 pt-40 sd:min-h-screen sd:pt-52"
        aria-label="Проверка дымовых и вентиляционных каналов в Минске"
      >
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 991px)" srcSet={HERO_BG_DESKTOP} />

            <img
              src={HERO_BG_MOBILE}
              alt="Проверка дымовых и вентиляционных каналов в Минске, осмотр дымоходов, вентканалов и проверка тяги"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-black/62 via-black/20 to-black/55" />

        <div className="relative container mx-auto">
          <div className="mx-auto max-w-5xl text-center">
            <div className="flex justify-center sd:hidden">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label="На главную"
              >
                <Image
                  src="/logo/logo-2.webp"
                  alt={`${brand} — проверка дымовых и вентиляционных каналов в Минске`}
                  width={180}
                  height={54}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sd:text-xs">
              Проверка каналов • Акт проверки • Минск
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sd:text-7xl">
              Проверка дымовых и
              <span className="block text-[#53eafd]">
                вентиляционных каналов
              </span>
              <span className="block">в Минске</span>
            </h1>

            <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-relaxed text-white/95 sd:text-2xl">
              {pageLead}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sd:px-3.5 sd:py-1.5 sd:text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sd:flex-row">
              <BtnComp
                title="Заказать проверку"
                index={4101}
                name="Заявка — проверка дымовых и вентиляционных каналов Минск"
                w
              />

              <BtnComp
                title="Узнать стоимость"
                index={4102}
                name="Узнать стоимость — проверка дымовых и вентиляционных каналов Минск"
                w
                short
              />

              <a
                href={`tel:${phoneLink}`}
                className="btn h-14 w-full rounded-full bg-white px-7 text-[15px] font-bold text-black shadow-lg sd:w-auto"
                aria-label={`Позвонить ${phone}`}
              >
                Позвонить: {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= БЫСТРЫЕ УСЛУГИ ================= */}
      <section className="bg-white py-10 sd:py-14" aria-label="Что проверяем">
        <div className="container mx-auto">
          <div className="-mt-24 grid grid-cols-2 gap-3 relative z-10 sd:grid-cols-3 sd:gap-4">
            {heroServices.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_16px_50px_-32px_rgba(0,0,0,0.45)] sd:p-5"
              >
                <p className="text-[13px] font-bold leading-snug text-slate-950 sd:text-[16px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CooperationBenefitsSection/>

      {/* ================= ПРОВЕРКА С АКТОМ ================= */}
      <section className="bg-white py-14 sd:py-20" aria-labelledby="trust-title">
        <div className="container mx-auto">
          <div className="grid gap-8 sd:grid-cols-[0.95fr_1.05fr] sd:items-center">
            <div>
              <p className="inline-flex rounded-full border border-[#00AFC4]/25 bg-[#00AFC4]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
                Проверка с документом
              </p>

              <h2
                id="trust-title"
                className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
              >
                Проверяем дымоходы и вентиляционные каналы с оформлением акта
              </h2>

              <h3 className="mt-5 text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
                Осматриваем дымовые и вентиляционные каналы, проверяем тягу,
                состояние вентканалов и дымоходов. По результату проверки можно
                оформить акт технического состояния.
              </h3>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <BtnComp
                  title="Оставить заявку"
                  index={4103}
                  name="Заявка — акт проверки дымовых и вентиляционных каналов"
                  w
                />

                <a
                  href={`tel:${phoneLink}`}
                  className="btn h-14 rounded-full border border-slate-200 bg-white px-7 text-[15px] font-bold text-slate-950 shadow-sm"
                  aria-label={`Позвонить ${phone}`}
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-[0_12px_40px_-30px_rgba(0,0,0,0.3)]"
                >
                  <h3 className="text-[18px] font-black leading-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallMasterMinskSection/>

      {/* ================= КОГДА НУЖНА ПРОВЕРКА ================= */}
      <section
        className="bg-slate-950 py-14 text-white sd:py-20"
        aria-labelledby="when-title"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00d2ef]">
              Когда обращаться
            </p>

            <h2
              id="when-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-white sd:text-[52px]"
            >
              Когда нужна проверка дымовых и вентиляционных каналов
            </h2>

            <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/70 sd:text-xl">
              Проверка нужна при оформлении акта, плохой тяге, запахе из
              вентиляции, обратной тяге, после ремонта, перед отопительным
              сезоном и при эксплуатации оборудования.
            </h3>
          </div>

          <div className="mt-10 grid gap-3 sd:grid-cols-3">
            {problems.map((item, idx) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/6 p-5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-[#2b7fff] to-[#00AFC4] text-sm font-black text-white">
                  {idx + 1}
                </span>

                <h3 className="mt-4 text-[17px] font-bold leading-snug text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= АКТЫ И ДОКУМЕНТЫ ================= */}
      <section
        className="bg-white py-14 sd:py-20"
        aria-labelledby="documents-title"
      >
        <div className="container mx-auto">
          <div className="grid gap-8 sd:grid-cols-[1fr_1fr] sd:items-start">
            <div>
              <p className="inline-flex rounded-full border border-[#2b7fff]/20 bg-[#2b7fff]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2b7fff]">
                Акт проверки
              </p>

              <h2
                id="documents-title"
                className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
              >
                Акт проверки дымовых и вентиляционных каналов
              </h2>

              <h3 className="mt-5 text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
                По результату осмотра может быть оформлен акт проверки дымовых
                и вентиляционных каналов, акт на дымоход, акт на вентканалы или
                акт обследования вентиляции.
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Документ может потребоваться для подтверждения технического
                состояния каналов, эксплуатации оборудования, плановой проверки
                или устранения замечаний после осмотра.
              </p>
            </div>

            <div className="grid gap-3">
              {documents.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00AFC4]" />

                  <h3 className="text-[15px] font-bold leading-snug text-slate-950 sd:text-[17px]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InspectionPriceSection />

      {/* ================= ОБЪЕКТЫ ================= */}
      <section
        className="bg-white py-14 sd:py-20"
        aria-labelledby="objects-title"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#2b7fff]/20 bg-[#2b7fff]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2b7fff]">
              Объекты
            </p>

            <h2
              id="objects-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
            >
              Проверка вентиляции и дымоходов для разных объектов
            </h2>

            <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Работаем с квартирами, частными домами, многоквартирными домами,
              школами, организациями и коммерческими помещениями в Минске.
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sd:grid-cols-3">
            {objects.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-[0_12px_40px_-32px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-[16px] font-black text-slate-950 sd:text-[20px]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= КАК ПРОХОДИТ РАБОТА ================= */}
      <section
        className="bg-slate-950 py-14 text-white sd:py-20"
        aria-labelledby="steps-title"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00d2ef]">
              Этапы
            </p>

            <h2
              id="steps-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-white sd:text-[52px]"
            >
              Как проходит проверка дымовых и вентиляционных каналов
            </h2>

            <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/70 sd:text-xl">
              Работа выстроена просто: заявка, уточнение объекта, выезд,
              проверка тяги и состояния каналов, результат и акт при
              необходимости.
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sd:grid-cols-4">
            {steps.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/6 p-5"
              >
                <span className="text-[34px] font-black leading-none text-[#00d2ef]">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-[19px] font-black leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="zakhvat" />
      <Zahvat />

      <AboutCompanySfera />

      <Otzyvy type="proverka-dymovyh-i-ventilyacionnyh-kanalov" />

      <VentilationTestingSection />

      <VentilationCleaningSection/>

      {/* ================= FAQ ================= */}
      <section
        className="bg-white py-14 sd:py-20"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-[#00d2ef]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
              FAQ
            </p>

            <h2
              id="faq-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
            >
              Вопросы о проверке дымовых и вентиляционных каналов
            </h2>

            <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Ответы на частые вопросы про проверку дымоходов, вентиляционных
              каналов, акт, цену, тягу, запах и обратную тягу.
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sd:grid-cols-2 sd:gap-4">
            {faqItems.map((item, idx) => (
              <div
                key={item.q}
                className="collapse collapse-plus rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_-28px_rgba(0,0,0,0.25)]"
              >
                <input
                  type="checkbox"
                  aria-label={`Показать ответ на вопрос: ${item.q}`}
                />

                <div className="collapse-title flex items-start gap-3 pr-10">
                  <span className="mt-0.5 inline-flex min-h-7 min-w-7 items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs font-semibold text-black/70">
                    {idx + 1}
                  </span>

                  <div>
                    <h3 className="text-[15px] font-semibold leading-snug text-black sd:text-[16px]">
                      {item.q}
                    </h3>

                    <p className="mt-1 text-[12px] text-black/45 sd:text-[13px]">
                      Нажмите, чтобы раскрыть ответ
                    </p>
                  </div>
                </div>

                <div className="collapse-content">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sd:p-5">
                    <p className="text-[14px] leading-relaxed text-black/80 sd:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AutoOpenCeilingLeadModalTrigger phone={phone} phoneLink={phoneLink} />

      <MobileCalcEdgeButton
        index={4202}
        title="Узнать стоимость"
        name="Заявка с мобильной кнопки — проверка дымовых и вентиляционных каналов Минск"
        short
      />

      <GiftCountdownBar />
      <Social />
      <PhoneBottom />
    </main>
  );
}