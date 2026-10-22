// /components/city/mikashevichi/MikashevichiMiniPortfolioSection.jsx — ПОЛНОСТЬЮ
import Image from "next/image";

const ITEMS = [
  {
    title: "Кухня: компактно и функционально",
    text: "Хранение до потолка, удобный рабочий треугольник, защита от влаги.",
    img: "/portfolio/kuhni/35.webp",
    anchor: "kukhni",
    icon: "/svg/kitchen.svg",
  },
  {
    title: "Шкаф-купе: максимум хранения",
    text: "Секции под верхнюю одежду и обувь, ящики, зеркало, мягкое закрывание.",
    img: "/portfolio/shkaf-kupe/18.webp",
    anchor: "shkafy",
    icon: "/svg/wardrobe.svg",
  },
  {
    title: "Офис: стол + хранение",
    text: "Кабель-менеджмент, износостойкие материалы, аккуратные кромки.",
    img: "/portfolio/mebel-dlya-ofisa/11.webp",
    anchor: "ofis",
    icon: "/svg/office.svg",
  },
  {
    title: "Мягкая зона: кровать/диван",
    text: "Подбор ткани и наполнения под износостойкость и комфорт.",
    img: "/portfolio/mebel-v-spalnyu/14.webp",
    anchor: "myagkaya",
    icon: "/svg/sofa.svg",
  },
];

export default function MikashevichiMiniPortfolioSection() {
  return (
    <section className="bg-black py-16 sd:py-14" id="portfolio-mini-mikashevichi">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(135deg,rgba(22,182,198,0.08)_0%,rgba(253,183,35,0.06)_45%,rgba(99,102,241,0.05)_100%)]" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.18),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.18),transparent_60%)] blur-2xl" />

          <div className="relative pt-11">
            <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
              Мини-портфолио: решения для Микашевичей
            </h2>
            <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
              Ниже — примеры решений (часть может быть типовыми по запросам клиентов). Итоговую комплектацию подберём под
              ваш размер и бюджет.
            </p>

            <div className="mt-7 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-4">
              {ITEMS.map((x) => (
                <article
                  key={x.title}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
                  id={x.anchor}
                >
                  <div className="relative aspect-4/3 bg-slate-100">
                    <Image
                      src={x.img}
                      alt={`${x.title} — мебель на заказ в Микашевичах`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      quality={70}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 opacity-45 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.32))]" />

                    <div className="absolute left-3 top-3">
                      <div className="h-10 w-10 rounded-2xl bg-white/85 border border-white/60 flex items-center justify-center shadow-sm">
                        <Image src={x.icon} alt="Мебель под заказ" width={20} height={20} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-extrabold text-slate-900">{x.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.text}</p>

                    <div className="mt-3 h-px bg-[linear-gradient(90deg,rgba(22,182,198,0.75),rgba(253,183,35,0.35),transparent)]" />

                    <p className="mt-3 text-xs text-slate-500">
                      <span className="font-script text-[#16b6c6] font-bold">Честно:</span> подберём материалы и
                      комплектацию под ваш бюджет — без навязывания.
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-700">
              <span className="font-script text-[#16b6c6] font-bold">Хотите похожее?</span> Пришлите фото/пример — сделаем
              расчёт и предложим варианты материалов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}