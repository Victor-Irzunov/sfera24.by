// /app/prochistka-kanalizacii/page.js — ПОЛНОСТЬЮ
// ✅ SEO-страница под основной запрос: прочистка канализации
// ✅ Основной гео-запрос: прочистка канализации в Минске
// ✅ Второй кластер: устранение засоров Минск
// ✅ Технологический кластер: гидродинамическая прочистка канализации
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
import SewerPrices from "@/components/sections/SewerPrices";
import SewerCleaningMethods from "@/components/sections/SewerCleaningMethods";
import EmergencySewerCleaning from "@/components/sections/EmergencySewerCleaning";
import AboutCompanySfera from "@/components/sections/AboutCompanySfera";
import CleaningMethods from "@/components/sections/CleaningMethods";
import CooperationBenefitsSection from "@/components/sections/CooperationBenefitsSection";
import CallMasterMinskSection from "@/components/sections/CallMasterMinskSection";

const MobileCalcEdgeButton = dynamic(() =>
  import("@/components/ui/MobileCalcEdgeButton")
);

const Zahvat = dynamic(() => import("@/components/MainSections/Zahvat"));
const Otzyvy = dynamic(() => import("@/components/MainSections/Otzyvy"));
const GiftCountdownBar = dynamic(() => import("@/components/promo/GiftCountdownBar"));
const Social = dynamic(() => import("@/components/social/Social"));
const PhoneBottom = dynamic(() => import("@/components/phoneBotton/PhoneBottom"));

const SITE_URL = (config?.siteUrl || "https://sfera24.by").replace(/\/+$/, "");
const PAGE_PATH = "/prochistka-kanalizacii";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const brand = (config?.brand || "Sfera24.by").toString().trim();
const companyName = (config?.companyName || "Sfera24").toString().trim();

const ogImage = config?.ogImage || "/og/1200x630.webp";
const absOg = `${SITE_URL}${ogImage}`;

const HERO_BG_DESKTOP = "/fon/prochistka-kanalizacii-minsk-desktop.webp";
const HERO_BG_MOBILE = "/fon/prochistka-kanalizacii-minsk-mobile.webp";

const city = "Минск";
const region = "Минская область";

const title = "Прочистка канализации в Минске — устранение засоров | Цена";

const description =
  "Прочистка канализации в Минске и Минском районе. Устраняем засоры в квартирах, частных домах и на объектах. Гидродинамическая промывка труб, срочный выезд, цена заранее.";

const h1 = "Прочистка канализации в Минске";

const pageLead =
  "Быстро устраняем засоры канализации в квартирах, частных домах, кафе, офисах и на коммерческих объектах. Прочищаем трубы, унитазы, раковины, ванны и стояки. Используем сантехнический трос и гидродинамическую промывку канализации высоким давлением.";

const keywords = [
  "прочистка канализации",
  "прочистка канализации Минск",
  "прочистка канализации в Минске",
  "прочистка канализации Минский район",
  "устранение засоров Минск",
  "устранение засоров канализации",
  "гидродинамическая прочистка канализации",
  "гидродинамическая прочистка канализации Минск",
  "гидродинамическая промывка труб",
  "прочистка труб канализации",
  "прочистка унитаза",
  "прочистка раковины",
  "прочистка стояка",
  "срочная прочистка канализации",
];

const badges = [
  "Срочный выезд",
  "Минск и Минский район",
  "Квартиры и дома",
  "Коммерческие объекты",
  "Гидродинамическая прочистка",
  "Цена до начала работ",
];

const problems = [
  "Вода плохо уходит из раковины, ванны или душевой",
  "Засорился унитаз или канализационный выпуск",
  "Появился неприятный запах из канализации",
  "Засор повторяется после обычной прочистки",
  "Нужна промывка труб высоким давлением",
  "Требуется срочно восстановить слив на объекте",
];

const services = [
  {
    title: "Устранение засоров канализации",
    text: "Прочищаем бытовые и эксплуатационные засоры в трубах, унитазах, раковинах, ваннах, душевых, стояках и выпусках канализации.",
  },
  {
    title: "Гидродинамическая прочистка",
    text: "Промываем трубы водой под высоким давлением, удаляем жир, ил, песок, налёт и отложения на стенках трубопровода.",
  },
  {
    title: "Механическая прочистка тросом",
    text: "Используем сантехнический трос для локального устранения засора, когда нужно быстро восстановить проходимость трубы.",
  },
  {
    title: "Прочистка канализации на объектах",
    text: "Работаем с квартирами, частными домами, кафе, офисами, магазинами, складами и другими коммерческими помещениями.",
  },
];

const objects = [
  "Квартиры",
  "Частные дома",
  "Кафе и рестораны",
  "Офисы",
  "Магазины",
  "Коммерческие объекты",
];

const steps = [
  "Принимаем заявку",
  "Уточняем проблему",
  "Согласуем выезд",
  "Проводим диагностику",
  "Устраняем засор",
  "Проверяем слив",
  "Даем рекомендации",
];

const faqItems = [
  {
    q: "Сколько стоит прочистка канализации в Минске?",
    a: "Стоимость зависит от сложности засора, типа объекта, доступа к трубам, длины участка и способа прочистки. Перед началом работ специалист уточняет задачу и озвучивает цену заранее.",
  },
  {
    q: "Вы устраняете засоры срочно?",
    a: "Да, возможен срочный выезд по Минску и Минскому району. Срочная прочистка особенно актуальна, если вода не уходит, появился запах, затопление или канализация полностью перестала работать.",
  },
  {
    q: "Какие засоры канализации можно устранить?",
    a: "Можно устранить засоры из жира, волос, остатков пищи, ила, песка, налёта, бытового мусора и других отложений. Способ прочистки подбирается после уточнения проблемы.",
  },
  {
    q: "Что такое гидродинамическая прочистка канализации?",
    a: "Гидродинамическая прочистка — это промывка труб водой под высоким давлением. Метод помогает не только пробить засор, но и очистить внутренние стенки труб от жира, ила и отложений.",
  },
  {
    q: "Чем гидродинамическая промывка лучше обычного троса?",
    a: "Трос чаще устраняет локальный засор, а гидродинамическая промывка дополнительно промывает стенки трубы по длине участка. Это снижает риск быстрого повторного засора.",
  },
  {
    q: "Можно ли прочистить канализацию в квартире?",
    a: "Да, выполняем прочистку канализации в квартирах: раковины, ванны, душевые, унитазы, кухонные сливы, стояки и внутренние трубы при наличии доступа.",
  },
  {
    q: "Работаете ли вы с частными домами?",
    a: "Да, выполняем прочистку канализации в частных домах, коттеджах и таунхаусах. Можем устранить засор и выполнить гидродинамическую промывку труб при подходящих условиях доступа.",
  },
  {
    q: "Работаете ли вы с кафе, офисами и организациями?",
    a: "Да, обслуживаем коммерческие объекты: кафе, рестораны, офисы, магазины, склады и производственные помещения. Для бизнеса особенно важна быстрая прочистка и восстановление работы канализации.",
  },
  {
    q: "Сколько времени занимает устранение засора?",
    a: "Простые засоры могут устраняться достаточно быстро. Сложные засоры, длинные участки труб или гидродинамическая промывка требуют больше времени. Точные сроки зависят от ситуации на объекте.",
  },
  {
    q: "Что делать, если засор появляется снова?",
    a: "Если засор повторяется, обычной прочистки может быть недостаточно. Часто нужна гидродинамическая промывка труб, чтобы убрать отложения на стенках и восстановить нормальную пропускную способность.",
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
        alt: "Прочистка канализации в Минске, устранение засоров и гидродинамическая промывка труб",
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
  const phoneLink = (config?.phone1Link || config?.phone1 || "").toString().trim();

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
            name: "Прочистка канализации",
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
        name: "Прочистка канализации в Минске",
        description:
          "Прочистка канализации в Минске и Минском районе: устранение засоров труб, унитазов, раковин, ванн, стояков, механическая прочистка и гидродинамическая промывка канализации высоким давлением.",
        serviceType: [
          "Прочистка канализации",
          "Устранение засоров",
          "Гидродинамическая прочистка канализации",
          "Гидродинамическая промывка труб",
          "Прочистка труб канализации",
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
        aria-label="Прочистка канализации в Минске"
      >
        <div className="absolute inset-0">
          <picture>
            <source media="(min-width: 991px)" srcSet={HERO_BG_DESKTOP} />

            <img
              src={HERO_BG_MOBILE}
              alt="Прочистка канализации в Минске, устранение засоров и гидродинамическая промывка труб"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        {/* <div className="absolute inset-0 bg-black/45" /> */}
        <div className="absolute inset-0 bg-linear-to-b from-black/52 via-black/10 to-black/40" />

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
                  alt={`${brand} — прочистка канализации в Минске`}
                  width={180}
                  height={54}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sd:text-xs">
              Прочистка канализации • Устранение засоров • Гидродинамическая промывка
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sd:text-7xl">
              Прочистка канализации
              <span className="block text-[#00d2ef]">в Минске</span>
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
                title="Вызвать мастера"
                index={3101}
                name="Заявка — прочистка канализации Минск"
                w
              />

              <BtnComp
                title="Узнать цену"
                index={3102}
                name="Узнать цену — прочистка канализации Минск"
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

      {/* ================= PROBLEMS ================= */}
      <section className="bg-white py-14 sd:py-20" aria-labelledby="problems-title">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-[#00d2ef]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
              Когда нужна прочистка
            </p>

            <h2
              id="problems-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
            >
              Устраняем засоры{" "}
              <span className="text-[#00AFC4]">любой сложности</span>
            </h2>

            <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Если вода плохо уходит, появился запах или канализация полностью
              забилась — лучше не ждать. Быстрая прочистка помогает избежать
              подтопления и повторных аварий.
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sd:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, idx) => (
              <article
                key={item}
                className="rounded-3xl border border-slate-200 bg-[#F6FAFC] p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00d2ef]/10 text-sm font-black text-[#00AFC4]">
                  {idx + 1}
                </div>

                <h3 className="text-lg font-black leading-tight text-slate-950">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <SewerCleaningMethods />

      <SewerPrices />

      {/* ================= OBJECTS + STEPS ================= */}
      <section className="bg-white py-14 sd:py-20" aria-labelledby="objects-title">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sd:p-8">
              <h2
                id="objects-title"
                className="text-[30px] font-black leading-tight tracking-[-0.03em] text-slate-950 sd:text-[42px]"
              >
                Где выполняем{" "}
                <span className="text-[#00AFC4]">прочистку канализации</span>
              </h2>

              <h3 className="mt-4 text-base font-medium leading-relaxed text-slate-600 sd:text-lg">
                Работаем с жилыми и коммерческими объектами в Минске и Минском
                районе. Устраняем засоры в бытовой, внутренней и наружной
                канализации при наличии доступа.
              </h3>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {objects.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-[#F6FAFC] px-4 py-4 text-sm font-bold text-slate-800"
                  >
                    <span className="mr-2 text-[#00AFC4]">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-slate-200 bg-[#F6FAFC] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sd:p-8">
              <h2 className="text-[30px] font-black leading-tight tracking-[-0.03em] text-slate-950 sd:text-[42px]">
                Как проходит{" "}
                <span className="text-[#00AFC4]">устранение засора</span>
              </h2>

              <h3 className="mt-4 text-base font-medium leading-relaxed text-slate-600 sd:text-lg">
                Процесс понятный: сначала уточняем проблему, затем специалист
                выбирает метод прочистки и проверяет результат после работ.
              </h3>

              <div className="mt-7 space-y-3">
                {steps.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00d2ef]/10 text-sm font-black text-[#00AFC4]">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CooperationBenefitsSection />

      {/* ================= SEO TEXT ================= */}
      <section className="bg-[#F6FAFC] py-14 sd:py-20" aria-labelledby="seo-title">
        <div className="container mx-auto">
          <div className="mx-auto max-w-6xl rounded-[34px] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] sd:p-10">
            <h2
              id="seo-title"
              className="text-[30px] font-black leading-tight tracking-[-0.03em] text-slate-950 sd:text-[44px]"
            >
              Прочистка канализации в Минске —{" "}
              <span className="text-[#00AFC4]">
                быстрое устранение засоров труб
              </span>
            </h2>

            <h3 className="mt-5 text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Sfera24.by выполняет прочистку канализации в Минске и Минском
              районе для квартир, частных домов и коммерческих объектов.
            </h3>

            <div className="mt-6 space-y-5 text-[15px] font-medium leading-relaxed text-slate-700 sd:text-[17px]">
              <p>
                Засор канализации может возникнуть из-за жировых отложений,
                волос, остатков пищи, ила, песка, налёта на стенках труб или
                неправильной эксплуатации системы. Если вода стала уходить
                медленно, появился запах или слив полностью перестал работать,
                лучше вызвать мастера и не пытаться решать проблему агрессивной
                химией.
              </p>

              <p>
                Мы выполняем механическую прочистку и гидродинамическую промывку
                канализации. Гидродинамический метод особенно полезен при
                сложных и повторяющихся засорах: вода под высоким давлением
                помогает очистить внутренние стенки трубы и восстановить
                нормальную пропускную способность.
              </p>

              <p>
                Перед началом работ специалист уточняет ситуацию, оценивает
                доступ к канализации и подбирает подходящий способ устранения
                засора. Цена согласуется заранее, а после прочистки проверяется
                нормальный уход воды.
              </p>
            </div>
          </div>
        </div>
      </section>



      <div id="zakhvat" />
      <Zahvat />

      <CallMasterMinskSection/>

      <AboutCompanySfera />

      <Otzyvy type="prochistka-kanalizacii" />

      <EmergencySewerCleaning />

      {/* ================= FAQ ================= */}
      <section className="bg-white py-14 sd:py-20" id="faq" aria-labelledby="faq-title">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-[#00d2ef]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
              FAQ
            </p>

            <h2
              id="faq-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
            >
              Вопросы по прочистке канализации
            </h2>

            <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Ответы на частые вопросы по устранению засоров, цене, срочному
              выезду и гидродинамической промывке труб.
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

      <CleaningMethods />

      <AutoOpenCeilingLeadModalTrigger phone={phone} phoneLink={phoneLink} />

      <MobileCalcEdgeButton
        index={3202}
        title="Узнать цену"
        name="Заявка с мобильной кнопки — прочистка канализации Минск"
        short
      />

      <GiftCountdownBar />
      <Social />
      <PhoneBottom />
    </main>
  );
}