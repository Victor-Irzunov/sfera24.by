// /app/layout.js — ПОЛНОСТЬЮ
// SEO архитектура под: Проверка вентиляционных и дымовых каналов + прочистка канализации в Минске
// Бренд: Sfera24
// Фокус: только Минск (без размывания по РБ)
// Оптимизация: mobile speed + AEO + локальное SEO

import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import TelegramChat from "@/components/telegramChat/TelegramChat";
import config from "@/config/config";
import { GoogleTagManager } from "@next/third-parties/google";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f1f1f",
};

/* ================= BASE ================= */

const SITE_URL = (config?.siteUrl || "http://sfera24.by/").replace(/\/$/, "");
const metadataBaseUrl = new URL(SITE_URL);

const businessName = (config?.brand || config?.companyName || "Sfera24").trim();

const ogImage = config?.ogImage || "/og/1200x630.webp";
const absOg = `${SITE_URL}${ogImage}`;

/* ================= SEO CORE ================= */

const titleMain =
  "Проверка вентиляционных и дымовых каналов, прочистка канализации в Минске | Sfera24";

const descriptionMain =
  "Проверка вентиляционных и дымовых каналов в Минске, испытания естественной вентиляции и гидродинамическая прочистка канализации. Квартиры, дома, бизнес и промышленные объекты. Срочный выезд, официальные документы.";

const keywordsMain = [
  "проверка вентиляционных каналов Минск",
  "проверка дымовых каналов Минск",
  "прочистка канализации Минск",
  "гидродинамическая прочистка канализации",
  "прочистка труб Минск",
  "испытание вентиляции Минск",
  "очистка канализации цена Минск",
  "проверка тяги вентиляции",
];

/* ================= CITY (FOCUSED ONLY MINSK) ================= */

const cityPages = [
  {
    name: "Минск",
    url: `${SITE_URL}/`,
  },
];

/* ================= PRICING (PSYCHOLOGICAL) ================= */

const pricing = {
  ventilation: {
    primaryCheck: "69.90",
    annualCheck: "59.90",
    combinedCheck: "39.90",
  },
  sewer: {
    privateFrom: "144.90",
    businessFrom: "269.90",
  },
};

/* ================= BUSINESS PHONE ================= */

const businessPhone = (config?.phone1Link || "").toString().trim();

/* ================= JSON-LD: LOCAL BUSINESS ================= */

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}#sfera24`,
  name: businessName || "Sfera24",
  url: `${SITE_URL}/`,
  telephone: businessPhone || undefined,
  image: [absOg],
  priceRange: "от 39.90 BYN",
  areaServed: {
    "@type": "City",
    name: "Минск",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BY",
    addressLocality: "Минск",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги Sfera24 в Минске",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Проверка вентиляционных и дымовых каналов",
        price: pricing.ventilation.primaryCheck,
        priceCurrency: "BYN",
        url: `${SITE_URL}/proverka-ventilyacionnyh-i-dymovyh-kanalov`,
      },
      {
        "@type": "Offer",
        name: "Прочистка канализации",
        price: pricing.sewer.privateFrom,
        priceCurrency: "BYN",
        url: `${SITE_URL}/prochistka-kanalizacii`,
      },
    ],
  },
};

/* ================= WEB SITE ================= */

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: `${SITE_URL}/`,
  name: businessName,
  inLanguage: "ru-BY",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

/* ================= WEB PAGE ================= */

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}#webpage`,
  url: `${SITE_URL}/`,
  name: titleMain,
  description: descriptionMain,
  inLanguage: "ru-BY",
  isPartOf: {
    "@id": `${SITE_URL}#website`,
  },
  about: {
    "@id": `${SITE_URL}#sfera24`,
  },
  mainEntity: {
    "@id": `${SITE_URL}#sfera24`,
  },
  significantLink: cityPages.map((c) => c.url),
};

/* ================= BREADCRUMBS ================= */

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
  ],
};

/* ================= FAQ (AEO OPTIMIZED) ================= */

const jsonLdFaqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Как часто нужно проверять вентиляционные каналы?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Рекомендуется проводить проверку вентиляционных и дымовых каналов не реже одного раза в год для жилых объектов и чаще для коммерческих помещений.",
      },
    },
    {
      "@type": "Question",
      name: "Когда нужна прочистка канализации?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Прочистка канализации требуется при замедленном сливе воды, появлении запахов или полном засоре труб. В Минске чаще всего используется гидродинамическая промывка.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько стоит прочистка канализации в Минске?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Стоимость начинается от ${pricing.sewer.privateFrom} BYN для физических лиц и от ${pricing.sewer.businessFrom} BYN для организаций.`,
      },
    },
  ],
};

/* ================= META ================= */

export const metadata = {
  metadataBase: metadataBaseUrl,
  title: {
    default: titleMain,
  },
  description: descriptionMain,
  keywords: keywordsMain,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: titleMain,
    description: descriptionMain,
    url: `${SITE_URL}/`,
    siteName: businessName,
    locale: "ru_BY",
    type: "website",
    images: [
      {
        url: absOg,
        width: 1200,
        height: 630,
        alt: "Sfera24 — вентиляция и канализация Минск",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleMain,
    description: descriptionMain,
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

/* ================= LAYOUT ================= */

export default function RootLayout({ children }) {
  return (
    <html lang="ru-BY">
      <head>
        <GoogleTagManager gtmId="GTM-5NHNXSNK" />
        <meta name="google-site-verification" content="fqN9w7PK5y2nckJgKNbACdjovYrYGammlkQd-NFunrg" />
      </head>
      <body className="antialiased">
        {/* LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBusiness),
          }}
        />

        {/* Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />

        {/* WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebPage),
          }}
        />

        {/* Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumbs),
          }}
        />

        {/* FAQ (AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdFaqPage),
          }}
        />

        <Header />
        {children}
        <Footer />

         {/* <TelegramChat /> */}
      </body>
    </html>
  );
}