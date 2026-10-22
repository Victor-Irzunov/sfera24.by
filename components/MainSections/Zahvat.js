// /components/sections/Zahvat.js — ПОЛНОСТЬЮ
// ✅ Дизайн как на референсе: светлый премиальный CTA-блок
// ✅ Тема: проверка вентиляционных и дымовых каналов + прочистка канализации
// ✅ Без "use client" — серверный компонент
// ✅ FormZahvata не трогаем
// ✅ Фоновые изображения через next/image
// ✅ Оптимизировано под mobile speed
// ⚠️ Положи изображения в /public/fon/:
//    - /public/fon/zahvat-sfera24-desktop.webp
//    - /public/fon/zahvat-sfera24-mobile.webp

import Image from "next/image";
import Link from "next/link";
import phoneNumbers from "@/config/config";
import FormZahvata from "@/components/Form/FormZahvata";

const BG_DESKTOP = "/fon/zahvat-sfera24-desktop.webp";
const BG_MOBILE = "/fon/zahvat-sfera24-mobile.webp";

const BENEFITS = [
  {
    title: "Минск и Минская область",
    icon: "location",
  },
  {
    title: "Официальные документы",
    icon: "document",
  },
  {
    title: "Срочный выезд",
    icon: "time",
  },
  {
    title: "Для физлиц и организаций",
    icon: "users",
  },
];

function Icon({ type }) {
  if (type === "location") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M12 12.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3h7l4 4v14H7V3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.5 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "time") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21a9 9 0 1 0-8.2-12.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M3 5v4h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.5V12l3 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 19c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 19c0-1.8-1.1-3.3-2.7-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 4.4a3.2 3.2 0 0 1 0 6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Zahvat() {
  const phone = phoneNumbers?.phone1 || "+375 29 749-38-17";
  const phoneLink = phoneNumbers?.phone1Link || "+375297493817";
  const brand = phoneNumbers?.brand || "Sfera24";

  return (
    <section
      id="zahvat"
      aria-label="Оставить заявку на проверку вентиляции или прочистку канализации"
      className="relative overflow-hidden bg-[#F6FAFC] py-10 text-slate-950 sd:py-16"
    >
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] sd:rounded-[38px]">
          {/* ===== BACKGROUND ===== */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 hidden sd:block">
              <Image
                src={BG_DESKTOP}
                alt=""
                fill
                sizes="(max-width: 1200px) 100vw, 1400px"
                className="object-cover object-center"
                quality={78}
              />
            </div>

            <div className="absolute inset-0 sd:hidden">
              <Image
                src={BG_MOBILE}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                quality={74}
              />
            </div>

            {/* <div className="absolute inset-0 bg-linear-to-r from-white via-white/88 to-white/70" /> */}
            <div className="absolute inset-0 bg-linear-to-b from-white/60 via-transparent to-white/85" />
            <div className="absolute left-0 top-0 h-full w-[58%] bg-white/60 blur-2xl sd:w-[52%]" />
          </div>

          <div className="relative grid gap-8 px-3 py-7 sd:grid-cols-[1.05fr_0.95fr] sd:gap-10 sd:px-6 sd:py-12 lg:px-6">
            {/* ===== LEFT ===== */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#00AFC4]/35 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00AFC4]/10 text-[#00AFC4]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3a9 9 0 1 0 9 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M21 3a9 9 0 0 0-9 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 21a9 9 0 0 0 9-9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <span className="text-base font-extrabold tracking-tight text-slate-900">
                  {brand}
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl text-[34px] font-black leading-[1.04] tracking-[-0.03em] text-slate-950 sd:text-[54px]">
                Нужна проверка{" "}
                <span className="text-[#00AFC4]">вентиляции</span> или
                прочистка <span className="text-[#00AFC4]">канализации?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] font-medium leading-relaxed text-slate-600 sd:text-[19px]">
                Оставьте заявку — специалист свяжется с вами,
                проконсультирует и подберёт подходящее решение для квартиры,
                дома или коммерческого объекта.
              </p>

              <div className="mt-7 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                {BENEFITS.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 border-b border-slate-200/80 pb-3"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00AFC4]/10 text-[#00AFC4]">
                      <Icon type={item.icon} />
                    </span>

                    <span className="text-[14px] font-bold text-slate-800 sd:text-[15px]">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href="/proverka-ventilyacionnyh-i-dymovyh-kanalov"
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                  aria-label="Подробнее про проверку вентиляционных и дымовых каналов"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00AFC4] text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                    </span>

                    <span className="text-[14px] font-extrabold text-slate-950 sd:text-[15px]">
                      Проверка вентиляции
                    </span>
                  </span>

                  <span className="text-xl font-bold text-[#00AFC4] transition group-hover:translate-x-1">
                    ›
                  </span>
                </Link>

                <Link
                  href="/prochistka-kanalizacii"
                  className="group flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                  aria-label="Подробнее про прочистку канализации"
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00AFC4] text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M7 4v8a5 5 0 0 0 10 0V4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 18c1.2-1 2.5-1 3.7 0 1.2 1 2.5 1 3.8 0"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8 21c1.2-1 2.5-1 3.7 0 1.2 1 2.5 1 3.8 0"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <span className="text-[14px] font-extrabold text-slate-950 sd:text-[15px]">
                      Прочистка канализации
                    </span>
                  </span>

                  <span className="text-xl font-bold text-[#00AFC4] transition group-hover:translate-x-1">
                    ›
                  </span>
                </Link>
              </div>
            </div>

            {/* ===== RIGHT FORM CARD ===== */}
            <div className="relative z-10">
              <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl sd:rounded-[34px] sd:p-5">
                <div className="mb-5 flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#00AFC4]/10 text-[#00AFC4]">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <div>
                    <h3 className="text-2xl font-black tracking-[-0.02em] text-slate-950 sd:text-3xl">
                      Быстрая заявка
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      Ответим и подскажем решение
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-inner">
                  <FormZahvata />
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-sm text-slate-500">Или позвоните:</p>

                  <a
                    href={`tel:${phoneLink}`}
                    className="mt-1 inline-flex items-center gap-3 text-[24px] font-black tracking-[-0.02em] text-[#00AFC4] transition hover:text-slate-950"
                    aria-label={`Позвонить по номеру ${phone}`}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00AFC4]/10 text-[#00AFC4]">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M7.5 3.5h2.2c.5 0 .9.3 1 .7l.9 3.4c.1.4-.1.9-.5 1.1l-1.7 1c1 2 2.6 3.6 4.6 4.6l1-1.7c.2-.4.7-.6 1.1-.5l3.4.9c.4.1.7.5.7 1v2.4c0 .6-.4 1.1-1 1.2-7.7 1.1-14.4-5.6-13.3-13.3.1-.6.6-1 1.2-1Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {phone}
                  </a>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#00AFC4]/10 blur-3xl"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="sr-only">
            <h2>
              Оставить заявку на проверку вентиляционных и дымовых каналов или
              прочистку канализации
            </h2>
            <p>
              Sfera24 выполняет проверку вентиляционных каналов, проверку
              дымовых каналов, испытания вентиляции с естественным побуждением,
              а также прочистку канализации и гидродинамическую промывку труб
              мойкой высокого давления в Минске и Минской области.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}