// /components/AutoHelp/AutoHelpIntro.jsx

import Image from "next/image";
import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function AutoHelpIntro() {
  return (
    <section className="relative overflow-hidden bg-black z-10">
      {/* Фон: мобилка */}
      <div className="pointer-events-none absolute inset-0 -z-20 sd:hidden">
        <Image
          src="/fon/autopomosh-hero-mobile.webp"
          alt="Ночная автопомощь в Могилёве"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Фон: десктоп */}
      <div className="pointer-events-none absolute inset-0 -z-20 hidden sd:block">
        <Image
          src="/fon/autopomosh-hero-desktop.webp"
          alt="Ночная автопомощь в Могилёве"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* затемнение + неон */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-black/62 via-black/48 to-black/60" />
      <div
        className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full blur-[120px] opacity-50"
        style={{ background: PRIMARY }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-[-120px] h-96 w-96 rounded-full blur-[140px] opacity-30"
        style={{ background: "#0EA5E9" }}
      />

      <div className="relative container mx-auto px-4 sd:px-6 sd:pt-60 xz:pt-80 pb-14">
        <header className="max-w-3xl">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-black/45 px-3 py-1 sd:text-[11px] xz:text-[9px] uppercase tracking-[0.18em] text-white/70">
            Автопомощь и техпомощь на дороге
          </p>

          <h1 className="mb-3 text-[26px] sd:text-[36px] font-extrabold leading-tight text-white">
            Автопомощь и техпомощь на дороге в Могилёве
          </h1>

          <h2 className="mb-4 text-[17px] sd:text-[19px] font-semibold text-white/90">
            Поможем на месте, чтобы вы не тратили деньги на эвакуатор
          </h2>

          <p className="mb-3 text-[14px] sd:text-[15px] text-white/80">
            Автопомощь — это когда{" "}
            <span className="font-semibold">
              проблему можно решить прямо на дороге
            </span>
            : прикурить аккумулятор, заменить колесо, привезти топливо,
            открыть авто или устранить мелкую неисправность. Эвакуатор нужен
            только в том случае, если машину уже нельзя безопасно поставить на
            ход.
          </p>

          <p className="mb-7 text-[13px] sd:text-[14px] text-white/70">
            Мы работаем по Могилёву и области круглосуточно 24/7. Приезжаем как
            <span className="font-semibold"> выездная и «скорая» автопомощь</span>, чтобы
            помочь вам на дороге максимально быстро.
          </p>

          <div className="flex flex-col gap-3 sd:flex-row sd:items-center sd:gap-5">
            <a
              href={`tel:${phoneNumbers.phone1Link || ""}`}
              className="striped-shining-button inline-flex items-center justify-center rounded-full px-8 sd:px-10 py-3.5 sd:py-4 text-[16px] sd:text-[18px] font-extrabold tracking-wide shadow-[0_18px_50px_rgba(96,255,30,0.7)]"
              style={{ backgroundColor: PRIMARY, color: "#000000" }}
            >
              {phoneNumbers.phone1 || "Позвонить в автопомощь"}
            </a>
            <p className="text-[12px] sd:text-[13px] text-white/70">
              Расскажите ситуацию — подскажем,{" "}
              <span className="font-semibold">
                нужна автопомощь или сразу эвакуатор
              </span>
              .
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}
