// /components/city/brest/BrestMiniPortfolioSection.jsx — ПОЛНОСТЬЮ
// ✅ Мини-портфолио для Бреста (H2/H3)
// ✅ Берём “парадные” категории: кухни + гостиные
// ✅ Лёгкая сетка, без модалки (минимальный JS). Ссылка на #portfolio (если нужна общая портфолио ниже)

import Image from "next/image";

const ACCENT = "#16b6c6";

// ✅ Подстрой под свои реальные файлы.
// Если у тебя фото лежат так: /public/portfolio/kuhni/1.webp ... /55.webp
// и /public/portfolio/mebel-v-gostinuyu/1.webp ... /21.webp
const ITEMS = [
  // кухни (пример 6 шт)
  { src: "/portfolio/kuhni/1.webp", alt: "Кухня на заказ — пример 1" },
  { src: "/portfolio/kuhni/6.webp", alt: "Кухня на заказ — пример 2" },
  { src: "/portfolio/kuhni/12.webp", alt: "Кухня на заказ — пример 3" },
  { src: "/portfolio/kuhni/18.webp", alt: "Кухня на заказ — пример 4" },
  { src: "/portfolio/kuhni/26.webp", alt: "Кухня на заказ — пример 5" },
  { src: "/portfolio/kuhni/33.webp", alt: "Кухня на заказ — пример 6" },

  // гостиные (пример 6 шт)
  { src: "/portfolio/mebel-v-gostinuyu/1.webp", alt: "Гостиная мебель — пример 1" },
  { src: "/portfolio/mebel-v-gostinuyu/4.webp", alt: "Гостиная мебель — пример 2" },
  { src: "/portfolio/mebel-v-gostinuyu/7.webp", alt: "Гостиная мебель — пример 3" },
  { src: "/portfolio/mebel-v-gostinuyu/10.webp", alt: "Гостиная мебель — пример 4" },
  { src: "/portfolio/mebel-v-gostinuyu/15.webp", alt: "Гостиная мебель — пример 5" },
  { src: "/portfolio/mebel-v-gostinuyu/19.webp", alt: "Гостиная мебель — пример 6" },
];

export default function BrestMiniPortfolioSection() {
  return (
    <section className="bg-white py-12 sd:py-16" id="brest-portfolio" aria-label="Портфолио мебели в Бресте">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl sd:text-4xl font-extrabold text-slate-900 tracking-tight">
            Проекты для Бреста — примеры работ
          </h2>
          <h3 className="mt-3 text-base sd:text-lg text-slate-600">
            Кухни и гостиные решения: примеры компоновки, фасадов, фурнитуры и аккуратного монтажа.
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-1 sd:grid-cols-3 gap-3 sd:gap-4">
          {ITEMS.map((it, idx) => (
            <div
              key={it.src}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  loading="lazy"
                  quality={72}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-2">
                <div className="rounded-xl bg-white/85 backdrop-blur px-3 py-2 border border-white/40">
                  <p className="text-[12px] font-semibold text-slate-900 line-clamp-1">
                    {idx < 6 ? "Кухня на заказ" : "Гостиная мебель"}
                  </p>
                  <p className="text-[11px] text-slate-600 line-clamp-1">
                    пример {idx + 1}
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 sd:p-8">
          <p className="text-sm sd:text-base text-slate-700">
            Нужен похожий проект в Бресте? Подберём материалы и фурнитуру под бюджет и сделаем расчёт по фото/размерам.
          </p>
          <div className="mt-4 flex flex-col sd:flex-row gap-3">
            <a
              href="#zakhvat"
              className="btn rounded-full border-0 px-7"
              style={{ backgroundColor: ACCENT, color: "#052a2f" }}
              aria-label="Оставить заявку на расчёт мебели в Бресте"
            >
              Получить расчёт →
            </a>
            <a
              href="#portfolio"
              className="btn rounded-full bg-white border border-slate-200 px-7 text-slate-900 hover:bg-slate-50"
              aria-label="Перейти на портфолио"
            >
              Больше работ →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}