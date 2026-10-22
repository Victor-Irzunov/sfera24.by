// /components/Prices/PricesIntro.jsx
// Витя создай/замени файл /components/Prices/PricesIntro.jsx полностью

import Image from "next/image";
import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function PricesIntro() {
  return (
    <section className="relative overflow-hidden bg-black pt-72 pb-11 sd:py-20 z-0">
      {/* ФОНОВОЕ ИЗОБРАЖЕНИЕ */}
      {/* Мобильная версия */}
      <div className="pointer-events-none absolute inset-0 -z-20 sd:hidden">
        <Image
          src="/fon/prices-hero-mobile.webp"   // <— если файл .png
          alt="Ночной Могилёв и эвакуатор"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Десктоп-версия */}
      <div className="pointer-events-none absolute inset-0 hidden sd:block -z-20">
        <Image
          src="/fon/prices-hero-desktop.webp"  // <— если файл .png
          alt="Ночной Могилёв и эвакуатор"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Тёмный градиент для читабельности текста */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-black/40 via-black/68 to-black/80" />

      {/* Светящиеся пятна поверх фона */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full blur-[120px] opacity-40"
        style={{ background: PRIMARY }}
      />
      <div
        className="pointer-events-none absolute bottom-[-120px] -right-20 h-96 w-96 rounded-full blur-[140px] opacity-30"
        style={{ background: "#0EA5E9" }}
      />

      <div className="relative container mx-auto px-2 sd:px-6 sd:pt-44 xz:pt-0">
        <header className="max-w-4xl">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 sd:text-[11px] xz:text-[9px] uppercase tracking-[0.16em] text-white/70">
            Цены и тарифы на услуги эвакуатора
          </p>

          <h1 className="text-3xl sd:text-5xl font-extrabold leading-tight text-white mb-3">
            Цены на эвакуатор в Могилёве — тарифы и расчёт стоимости
          </h1>

          <h2 className="text-[17px] sd:text-[19px] font-semibold text-white/85 mb-4">
            Сколько стоит эвакуатор в Могилёве по городу и за город
          </h2>

          <h3 className="text-[14px] sd:text-[15px] font-medium text-white/70 mb-6">
            По городу Могилёв стоимость эвакуатора начинается примерно{" "}
            <span className="font-semibold" style={{ color: PRIMARY }}>
              от 39 руб
            </span>{" "}
            за подачу и базовый пробег. За город и по трассе цена рассчитывается
            по формуле: выезд +{" "}
            <span className="font-semibold">цена эвакуатора за км</span>.
          </h3>

          <h4 className="text-[13px] sd:text-[14px] text-white/65 mb-8">
            Все расценки прозрачные:{" "}
            <span className="font-semibold">
              без скрытых доплат и мелкого шрифта
            </span>
            . Перед подачей эвакуатора мы озвучиваем ориентировочную стоимость,
            а окончательная цена проговаривается с водителем до погрузки авто.
          </h4>

          <div className="flex flex-col gap-3 sd:flex-row sd:items-center sd:gap-5">
            <a
              href={`tel:${phoneNumbers.phone1Link || ""}`}
              className="striped-shining-button inline-flex items-center justify-center rounded-full px-8 sd:px-10 py-3.5 sd:py-4 text-[16px] sd:text-[18px] font-extrabold tracking-wide shadow-[0_18px_50px_rgba(96,255,30,0.6)]"
              style={{ backgroundColor: PRIMARY, color: "#000000" }}
            >
              {phoneNumbers.phone1 || "Позвонить и узнать цену"}
            </a>
            <p className="text-[12px] sd:text-[13px] text-white/60">
              Скажем ориентировочную{" "}
              <span className="font-semibold">стоимость эвакуатора</span> по
              Могилёву и области за 1–2 минуты.
            </p>
          </div>
        </header>
      </div>
    </section>
  );
}
