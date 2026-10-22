// /components/city/luninets/LuninetsMiniPortfolioSection.jsx — ПОЛНОСТЬЮ
import Image from "next/image";

const ITEMS = [
  {
    title: "Кухня: практичная компоновка",
    text: "Выдвижные системы, влагостойкие материалы, удобные зоны хранения.",
    img: "/portfolio/kuhni/38.webp",
  },
  {
    title: "Шкаф-купе: хранение без хаоса",
    text: "Секции под одежду, бельё и обувь, аккуратные фасады, надёжная фурнитура.",
    img: "/portfolio/shkaf-kupe/33.webp",
  },
  {
    title: "Прихожая: компактно и удобно",
    text: "Зеркало, обувница, крючки, антресоль — под ваш коридор.",
    img: "/portfolio/prihozhaya/29.webp",
  },
  {
    title: "Офис: стол + тумба",
    text: "Износостойкие материалы, кабель-менеджмент, эргономика.",
    img: "/portfolio/mebel-dlya-ofisa/1.webp",
  },
];

export default function LuninetsMiniPortfolioSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="portfolio-mini-luninets">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(135deg,rgba(22,182,198,0.08)_0%,rgba(253,183,35,0.07)_45%,rgba(99,102,241,0.06)_100%)]" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.18),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.20),transparent_60%)] blur-2xl" />

          <div className="relative">
            <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
              Мини-портфолио: решения для Лунинца
            </h2>
            <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
              Ниже — примеры решений (часть может быть типовыми по запросам клиентов). Итоговую комплектацию подберём под
              ваш размер и бюджет.
            </p>

            <div className="mt-7 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-4">
              {ITEMS.map((x) => (
                <article key={x.title} className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
                  <div className="relative aspect-4/3 bg-slate-100">
                    <Image
                      src={x.img}
                      alt={`${x.title} — мебель на заказ в Лунинце`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      quality={70}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 opacity-40 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.25))]" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-extrabold text-slate-900">{x.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-700">
              <span className="font-script text-secondary font-bold sd:text-2xl xz:text-xl">Хотите так же?</span> Пришлите фото/пример — сделаем
              расчёт и предложим варианты материалов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}