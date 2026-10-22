// /components/Offroad/OffroadHero.jsx

import Image from "next/image";
import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function OffroadHero() {
  return (
    <section className="relative overflow-hidden bg-black pt-80 sd:pt-52 pb-14 sd:pb-28 z-10">
      {/* Фон: мобильный */}
      <div className="pointer-events-none absolute inset-0 -z-20 sd:hidden">
        <Image
          src="/fon/offroad-hero-mobile.webp"
          alt="Внедорожная эвакуация в Могилёве"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Фон: десктоп */}
      <div className="pointer-events-none absolute inset-0 -z-20 hidden sd:block">
        <Image
          src="/fon/offroad-hero-desktop.webp"
          alt="Эвакуатор с лебёдкой и внедорожная эвакуация"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* затемнение поверх фона */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-black/72 via-black/68 to-black/70" />

      {/* неоновое свечение */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full blur-[120px] opacity-50"
        style={{ background: PRIMARY }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-80 w-80 rounded-full blur-[150px] opacity-40"
        style={{ background: "#22d3ee" }}
      />

      <div className="relative container mx-auto px-0 sd:px-6">
        <header className="max-w-5xl">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] sd:text-[11px] uppercase tracking-[0.16em] text-white/70">
            Внедорожная эвакуация <span className="sd:block xz:hidden">и спецслучаи</span>
          </p>

          <h1 className="mt-3 text-[26px] sd:text-[36px] font-extrabold leading-tight">
            Внедорожная эвакуация и эвакуатор с лебёдкой в Могилёве
          </h1>

          <h2 className="mt-4 text-[15px] sd:text-[18px] font-medium text-white/85">
            Вытащим авто из грязи, поля, кювета или сугроба —{" "}
            <span style={{ color: PRIMARY }} className="font-semibold">
              аккуратно и с запасом по тяге
            </span>
            .
          </h2>

          <p className="mt-4 text-[13px] sd:text-[15px] text-white/75">
            Если застряли на даче, в поле, в лесу или на разбитой грунтовке —
            обычный эвакуатор не всегда справится. Для таких случаев у нас
            подготовленный эвакуатор с лебёдкой, удлинёнными стропами и
            опытом{" "}
            <span className="font-semibold">
              внедорожной эвакуации за городом
            </span>
            .
          </p>

          <div className="mt-6 flex flex-col gap-3 sd:flex-row sd:items-center sd:gap-5">
            <a
              href={`tel:${phoneNumbers.phone1Link || ""}`}
              className="striped-shining-button inline-flex items-center justify-center rounded-full px-8 sd:px-10 py-3.5 sd:py-4 text-[16px] sd:text-[18px] font-extrabold tracking-wide shadow-[0_20px_60px_rgba(96,255,30,0.75)]"
              style={{ backgroundColor: PRIMARY, color: "#000000" }}
            >
              {phoneNumbers.phone1 || "Позвонить эвакуатору"}
            </a>
            <p className="text-[12px] sd:text-[13px] text-white/70">
              Опишите, где вы застряли: поле, лес, дача,{" "}
              <span className="font-semibold">мы скажем примерную цену</span> и
              время прибытия эвакуатора.
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}
