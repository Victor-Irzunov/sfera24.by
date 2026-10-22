// /app/page.js — ПОЛНОСТЬЮ
// ✅ Фон фиксирован и на компьютере, и на мобильной
// ✅ На мобильной НЕ используется bg-fixed, потому что он часто не работает
// ✅ Фон сделан через fixed <picture>
// ✅ Контент прокручивается поверх изображения
// ✅ Hero под Sfera24

import dynamic from "next/dynamic";
import phoneNumbers from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import BtnComp from "@/components/btn/BtnComp";
import PhoneBottom from "@/components/phoneBotton/PhoneBottom";
import Social from "@/components/social/Social";
import GiftCountdownBar from "@/components/promo/GiftCountdownBar";
import AutoOpenCeilingLeadModalTrigger from "@/components/modals/AutoOpenCeilingLeadModalTrigger";
import WhyChooseSfera from "@/components/sections/WhyChooseSfera";
import AboutCompanySfera from "@/components/sections/AboutCompanySfera";
import MainServicesSfera from "@/components/sections/MainServicesSfera";

const MobileCalcEdgeButton = dynamic(() =>
  import("@/components/ui/MobileCalcEdgeButton")
);

const Faq = dynamic(() => import("@/components/MainSections/Faq"));
const RunningLine = dynamic(() => import("@/components/runningLine/RunningLine"));
const Zahvat = dynamic(() => import("@/components/MainSections/Zahvat"));

export default function HomePage() {
  const phone = phoneNumbers?.phone1 || "+375 29 000 00 00";
  const phoneLink = phoneNumbers?.phone1Link || phone;
  const brand = phoneNumbers?.brand || "Sfera24";

  const badges = [
    "Минск и Минская область",
    "Официальные документы",
    "Срочный выезд",
    "Для физлиц и организаций",
    "Современное оборудование",
    "Проверка и прочистка",
  ];

  return (
    <main className="bg-white text-slate-900 xz:overflow-x-hidden sd:overflow-visible">
      <section
        id="top"
        className="relative min-h-[110svh] overflow-hidden pb-16 pt-28 sd:min-h-screen sd:pb-14 sd:pt-42"
        aria-label="Проверка вентиляционных и дымовых каналов, прочистка канализации в Минске"
      >
        <div className="pointer-events-none fixed inset-0 z-0 h-dvh w-full">
          <picture>
            <source
              media="(min-width: 991px)"
              srcSet="/fon/proverka-ventilyacii-prochistka-kanalizacii.webp"
            />

            <img
              src="/fon/proverka-ventilyacii-prochistka-kanalizacii-mobile.webp"
              alt="Проверка вентиляционных и дымовых каналов и прочистка канализации в Минске"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        <div className="pointer-events-none fixed inset-0 z-0 bg-linear-to-b from-black/60 via-black/15 to-black/35" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            <div className="sd:hidden xz:flex justify-center pt-0">
              <Link
                href="/"
                className="flex items-center gap-3"
                aria-label={`На главную страницу ${brand}`}
              >
                <Image
                  src="/logo/logo-2.webp"
                  alt={`${brand} — проверка вентиляции, дымовых каналов и прочистка канализации`}
                  width={180}
                  height={54}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            <p className="mt-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sd:text-xs">
              Вентиляция • Дымовые каналы • Канализация
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sd:text-7xl">
              Проверка вентиляционных и дымовых каналов,
              <span className="block text-[#00d2ef]">
                прочистка канализации в Минске
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-5xl text-base font-medium leading-relaxed text-white/95 sd:text-2xl">
              Выполняем проверку дымовых и вентиляционных каналов, испытания
              систем вентиляции с естественным побуждением, а также
              гидродинамическую прочистку канализации мойкой высокого давления.
              Работаем с квартирами, частными домами, коммерческими и
              промышленными объектами.
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
              <Link
                href="/proverka-ventilyacionnyh-i-dymovyh-kanalov"
                className="btn h-14 w-full rounded-full border-0 bg-primary px-7 text-[15px] font-bold text-white shadow-lg sd:w-auto"
                aria-label="Перейти на страницу проверки вентиляционных и дымовых каналов"
              >
                Проверка вентиляции
              </Link>

              <Link
                href="/prochistka-kanalizacii"
                className="btn h-14 w-full rounded-full bg-white px-7 text-[15px] font-bold text-black shadow-lg sd:w-auto"
                aria-label="Перейти на страницу прочистки канализации"
              >
                Прочистка канализации
              </Link>

              <BtnComp
                title="Оставить заявку"
                index={101}
                name="Заявка с главной Sfera24"
                w
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 bg-white">
        <RunningLine />

        <div id="zakhvat" />
        <Zahvat />

        <WhyChooseSfera />

        <AboutCompanySfera />

        <MainServicesSfera />

        <Faq />

        <Social />
        <PhoneBottom />

        <GiftCountdownBar />

        <AutoOpenCeilingLeadModalTrigger phone={phone} phoneLink={phoneLink} />

        <MobileCalcEdgeButton
          index={1201}
          title="Оставить заявку"
          name="Заявка с мобильной боковой кнопки Sfera24"
          short
        />
      </div>
    </main>
  );
}