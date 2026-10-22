// /components/city/brest/BrestPopularOrdersSection.jsx — ПОЛНОСТЬЮ
// ✅ Уникальный блок “Популярные заказы в Бресте” (H2/H3)
// ✅ Закрывает интенты: кухни, шкафы-купе, прихожие, гостиные, офис, мягкая
// ✅ Добавлены изображения в каждую карточку (desktop+mobile через next/image)
// ✅ Акцент #16b6c6, читаемая палитра + лёгкие градиенты
// ✅ Perf: без "use client", images lazy, priority только у первых 2

import Image from "next/image";

const ACCENT = "#16b6c6";

// ✅ Поменяй пути под свои файлы (лучше webp). Можно хранить в /public/images или /public/fon
const CARDS = [
  {
    title: "Кухни в новостройках",
    desc: "Оптимизируем хранение, подбираем фасады и столешницу под бюджет, продумываем технику и подсветку.",
    tags: ["проект", "эргономика", "фурнитура"],
    imgDesktop: "/portfolio/kuhni/4.webp",
    imgMobile: "/portfolio/kuhni/4.webp",
    alt: "Кухня на заказ в Бресте — пример проекта",
  },
  {
    title: "Шкафы-купе и встроенные шкафы",
    desc: "В нишу, по стене, до потолка. С наполнением под вещи, обувь, бытовую технику и хозяйственный блок.",
    tags: ["в нишу", "до потолка", "наполнение"],
    imgDesktop: "/portfolio/shkaf-kupe/10.webp",
    imgMobile: "/portfolio/shkaf-kupe/10.webp",
    alt: "Шкаф-купе и встроенный шкаф на заказ в Бресте",
  },
  {
    title: "Прихожие",
    desc: "Шкаф + обувница + зеркало + сиденье. Учитываем грязную зону и износостойкие материалы.",
    tags: ["обувница", "зеркало", "стойкость"],
    imgDesktop: "/portfolio/prihozhaya/1.webp",
    imgMobile: "/portfolio/prihozhaya/1.webp",
    alt: "Прихожая на заказ в Бресте — мебель под размеры",
  },
  {
    title: "Гостиные и ТВ-зоны",
    desc: "Тумбы под ТВ, панели, витрины, стеллажи — в едином стиле под интерьер и освещение.",
    tags: ["тв-зона", "стиль", "подсветка"],
    imgDesktop: "/portfolio/mebel-v-gostinuyu/13.webp",
    imgMobile: "/portfolio/mebel-v-gostinuyu/13.webp",
    alt: "Гостиная и ТВ-зона на заказ в Бресте",
  },
  {
    title: "Офисная мебель",
    desc: "Столы, шкафы, тумбы, ресепшн. Важно: износостойкость, кабель-менеджмент, удобство посадки.",
    tags: ["практично", "кабели", "надолго"],
    imgDesktop: "/portfolio/mebel-dlya-ofisa/14.webp",
    imgMobile: "/portfolio/mebel-dlya-ofisa/14.webp",
    alt: "Офисная мебель на заказ в Бресте — столы и шкафы",
  },
  {
    title: "Мягкая мебель (по запросу)",
    desc: "Диваны и кресла под габариты комнаты: ткань/фактура/наполнение — под задачи семьи и детей.",
    tags: ["размер", "ткань", "комфорт"],
    imgDesktop: "/portfolio/mebel-v-spalnyu/20.webp",
    imgMobile: "/portfolio/mebel-v-spalnyu/20.webp",
    alt: "Мягкая мебель на заказ в Бресте — диван и кресло",
  },
];

export default function BrestPopularOrdersSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 sd:py-16"
      id="brest-popular"
      aria-label="Популярные заказы мебели в Бресте"
    >
      {/* мягкий фон секции */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -left-44 top-8 h-130520px] rounded-full blur-3xl opacity-[0.16]"
          style={{ background: ACCENT }}
        />
        <div
          className="absolute -right-44 bottom-0 h-155 w-155 rounded-full blur-3xl opacity-[0.12]"
          style={{ background: ACCENT }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white" />
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-3xl sd:text-4xl font-extrabold text-slate-900 tracking-tight">
            Популярные заказы в Бресте
          </h2>
          <h3 className="mt-3 text-base sd:text-lg text-slate-700">
            Что чаще всего заказывают под индивидуальные размеры: практичные решения для квартиры и дома.
          </h3>
        </div>

        <div className="mt-8 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-3 gap-4 sd:gap-6">
          {CARDS.map((c, idx) => (
            <PopularCard key={c.title} card={c} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularCard({ card, priority }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Изображение */}
      <div className="relative h-44 sd:h-48">
        {/* Desktop */}
        <Image
          src={card.imgDesktop}
          alt={card.alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hidden sd:block object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          quality={72}
        />
        {/* Mobile */}
        <Image
          src={card.imgMobile}
          alt={card.alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="100vw"
          className="sd:hidden object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
          quality={68}
        />

        {/* затемнение + бирюзовый блик для “дорогого” вида */}
        <div className="absolute inset-0 bg-black/10" />
        <div
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-2xl opacity-30"
          style={{ background: ACCENT }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/35 via-black/10 to-transparent" />

        {/* чип */}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-[2px]"
            style={{
              borderColor: "rgba(255,255,255,0.35)",
              backgroundColor: "rgba(0,0,0,0.35)",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
            в Бресте
          </span>
        </div>
      </div>

      {/* Контент */}
      <div className="relative p-6">
        <h3 className="text-lg font-extrabold text-slate-900">{card.title}</h3>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{card.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {card.tags.map((t) => (
            <span
              key={t}
              className="badge badge-outline"
              style={{
                borderColor: "rgba(22,182,198,0.30)",
                color: "#0b5b64",
                backgroundColor: "rgba(22,182,198,0.06)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 h-px w-full bg-slate-200/80" />

        <p className="mt-4 text-xs text-slate-600">
          Подскажем материалы и фурнитуру под бюджет — без навязывания лишнего.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold" style={{ color: ACCENT }}>
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
          заказать под ключ
        </div>
      </div>

      {/* тонкая рамка-подсветка при наведении */}
      <span
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-black/10"
        aria-hidden="true"
      />
    </article>
  );
}