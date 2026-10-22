// /components/city/shared/CityLinksSection.jsx — ПОЛНОСТЬЮ
// ✅ Перелинковка: область ↔ города + /o-nas + /kontakty
// ✅ currentCity — чтобы не показывать ссылку на текущую страницу

import Link from "next/link";

const ACCENT = "#16b6c6";

const CITIES = [
  { name: "Брест", href: "/brest" },
  { name: "Пинск", href: "/pinsk" },
  { name: "Лунинец", href: "/luninets" },
  { name: "Микашевичи", href: "/mikashevichi" },
];

export default function CityLinksSection({ currentCity = "" }) {
  return (
    <section className="bg-white py-10 sd:py-12" aria-label="Навигация по разделам и городам">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sd:p-8 shadow-sm">
          <h2 className="text-xl sd:text-2xl font-extrabold text-slate-900 text-center">
            Мебель на заказ по Брестской области
          </h2>
          <h3 className="mt-2 text-sm sd:text-base text-slate-600 text-center">
            Перейдите на страницу своего города или узнайте больше о компании.
          </h3>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link
              href="/"
              className="btn rounded-full bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100"
              aria-label="На главную: мебель по Брестской области"
            >
              Область (главная)
            </Link>

            {CITIES.filter((c) => c.name !== currentCity).map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="btn rounded-full border-0"
                style={{ backgroundColor: "rgba(22,182,198,0.10)", color: "#08343a" }}
                aria-label={`Мебель на заказ в ${c.name}`}
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 h-px w-full bg-slate-200/80" />

          <div className="mt-6 flex flex-col sd:flex-row items-center justify-center gap-3">
            <Link
              href="/o-nas"
              className="btn rounded-full border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
              aria-label="О нас"
            >
              О нас →
            </Link>
            <Link
              href="/kontakty"
              className="btn rounded-full border-0"
              style={{ backgroundColor: ACCENT, color: "#052a2f" }}
              aria-label="Контакты"
            >
              Контакты →
            </Link>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Подсказка: чтобы точнее рассчитать стоимость, подготовьте фото места установки и примерные размеры.
          </p>
        </div>
      </div>
    </section>
  );
}