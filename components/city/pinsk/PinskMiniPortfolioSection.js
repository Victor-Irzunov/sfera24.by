// /components/city/pinsk/PinskMiniPortfolioSection.jsx — ПОЛНОСТЬЮ
import Image from "next/image";

const ITEMS = [
  {
    title: "Кухня в современном стиле",
    text: "Фасады: матовые. Фурнитура: доводчики. Продуманные зоны хранения.",
    img: "/portfolio/kuhni/34.webp",
  },
  {
    title: "Шкаф-купе в спальню",
    text: "Зеркальные/комбинированные двери, внутренние секции под одежду и бельё.",
    img: "/portfolio/shkaf-kupe/31.webp",
  },
  {
    title: "Прихожая с обувницей",
    text: "Удобная посадка, крючки, зеркало, антресоль. Лёгкие в уходе фасады.",
    img: "/portfolio/prihozhaya/19.webp",
  },
  {
    title: "Офисный стол и тумба",
    text: "Износостойкие материалы, кабель-канал, эргономика под рабочее место.",
    img: "/portfolio/mebel-dlya-ofisa/9.webp",
  },
];

export default function PinskMiniPortfolioSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="portfolio-mini-pinsk">
      <div className="container mx-auto">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm">
          <div className="flex flex-col sd:flex-row sd:items-end sd:justify-between gap-4">
            <div>
              <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
                Мини-портфолио: решения для Пинска
              </h2>
              <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
                Даже если у вас нет точного проекта — покажем варианты компоновки и материалов. Ниже — примеры решений
                (часть может быть типовыми по запросам клиентов).
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-4">
            {ITEMS.map((x) => (
              <article key={x.title} className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                <div className="relative aspect-4/3 bg-slate-100">
                  <Image
                    src={x.img}
                    alt={`${x.title} — мебель на заказ в Пинске`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                    quality={70}
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-extrabold text-slate-900">{x.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Важно: итоговая комплектация и цена зависят от размеров, материалов и фурнитуры. Сделаем расчёт под вашу
            задачу.
          </p>
        </div>
      </div>
    </section>
  );
}