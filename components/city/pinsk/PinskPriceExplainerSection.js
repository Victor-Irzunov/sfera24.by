// /components/city/pinsk/PinskPriceExplainerSection.jsx — ПОЛНОСТЬЮ
// ✅ Perf: Server Component (без "use client")
// ✅ UI: фоновые изображения (desktop/mobile) + градиенты + SVG (/public/svg/*.svg)
// ⚠️ Положи картинки в /public/fon/ и svg в /public/svg/ (пути ниже)

import Image from "next/image";

const BG_DESKTOP = "/fon/cena-mebeli-na-zakaz-pinsk.webp";
const BG_MOBILE = "/fon/cena-mebeli-na-zakaz-pinsk-mobile.webp";

const FACTORS = [
  {
    title: "Размеры и компоновка",
    text: "Чем сложнее конструкция и больше модулей — тем больше материалов и работы.",
    icon: "/svg/size.svg",
    grad: "from-amber-400/22 via-yellow-300/10 to-transparent",
  },
  {
    title: "Материалы фасадов",
    text: "Плёнка/эмаль/шпон/HPL — разные бюджеты и требования к уходу и износостойкости.",
    icon: "/svg/materials.svg",
    grad: "from-cyan-400/22 via-sky-300/10 to-transparent",
  },
  {
    title: "Фурнитура",
    text: "Петли, направляющие, подъёмники, системы хранения — влияют на комфорт и срок службы.",
    icon: "/svg/hinge.svg",
    grad: "from-indigo-400/22 via-violet-300/10 to-transparent",
  },
  {
    title: "Встроенность",
    text: "Ниши, кривые стены, коммуникации требуют точной подгонки и дополнительных работ.",
    icon: "/svg/furniture3.svg",
    grad: "from-emerald-400/22 via-green-300/10 to-transparent",
  },
  {
    title: "Монтаж и логистика",
    text: "Этаж/лифт/занос, сложность установки, дополнительные крепления и регулировка.",
    icon: "/svg/delivery.svg",
    grad: "from-rose-400/22 via-pink-300/10 to-transparent",
  },
];

const EXAMPLES = [
  {
    title: "Шкаф-купе в нишу (пример)",
    text: "Цена зависит от высоты, наполнения (полки/ящики/штанги), дверей (зеркало/ЛДСП/комбинация) и фурнитуры.",
    badge: "встроенная мебель на заказ",
    icon: "/svg/wardrobe.svg",
  },
  {
    title: "Кухня под заказ (пример)",
    text: "Влияют фасады, столешница, количество выдвижных систем, техника (встройка), подсветка и фартук.",
    badge: "изготовление мебели под заказ",
    icon: "/svg/kitchen.svg",
  },
  {
    title: "Офисный комплект (пример)",
    text: "Столы/тумбы/шкафы: стоимость зависит от износостойкости материалов, кабель-менеджмента и размеров.",
    badge: "офисная мебель под заказ",
    icon: "/svg/office.svg",
  },
];

const QUICK_LIST = [
  "Что нужно сделать: кухня / шкаф / прихожая / офис / мягкая мебель.",
  "Примерные размеры (ширина × высота × глубина) или план/фото места.",
  "Материалы/цвет (если есть) и уровень бюджета (эконом/средний/премиум).",
  "Встроенная ли конструкция (ниша/потолок/коммуникации) и где будет стоять.",
  "Условия монтажа: этаж, лифт, удобство заноса.",
];

export default function PinskPriceExplainerSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="price-pinsk">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* ===== Background image (desktop/mobile) ===== */}
          <div className="absolute inset-0">
            <div className="hidden sd:block absolute inset-0">
              <Image
                src={BG_DESKTOP}
                alt="Цена мебели на заказ в Пинске — от чего зависит стоимость"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center"
                quality={72}
                loading="lazy"
              />
            </div>
            <div className="sd:hidden absolute inset-0">
              <Image
                src={BG_MOBILE}
                alt="Цена мебели на заказ в Пинске — от чего зависит стоимость"
                fill
                sizes="100vw"
                className="object-cover object-center"
                quality={70}
                loading="lazy"
              />
            </div>

            {/* overlays: затемнение + фирменные градиенты */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/45 to-white/0" />
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(1100px_circle_at_30%_15%,rgba(253,183,35,0.32),transparent_55%)]" />
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_85%_25%,rgba(22,182,198,0.26),transparent_55%)]" />
            <div className="absolute inset-0 opacity-45 bg-[radial-gradient(950px_circle_at_55%_90%,rgba(99,102,241,0.18),transparent_60%)]" />
          </div>

          {/* ===== Header text on top of image ===== */}
          <div className="relative p-3 sd:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sd:text-sm text-white/90 backdrop-blur border border-white/10">
              <span className="h-2 w-2 rounded-full bg-[#fdb723]" />
              Пинск • быстрый расчёт цены по фото и размерам
            </p>

            <h2 className="mt-4 text-2xl sd:text-3xl font-extrabold text-white leading-tight">
              От чего зависит цена мебели на заказ в Пинске
            </h2>

            <p className="mt-3 text-sm sd:text-base text-white/85 max-w-3xl">
              Чтобы получить точный расчёт, важно понимать 5 факторов: размеры, материалы, фурнитура, встроенность и
              монтаж. Ниже — коротко и по делу.
            </p>

            {/* ===== Content card (glass) ===== */}
            <div className="mt-7 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-3 sd:p-6">
              {/* factors */}
              <div className="grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-5 gap-4">
                {FACTORS.map((f) => (
                  <div
                    key={f.title}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-4"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${f.grad}`} />
                    <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(520px_circle_at_20%_0%,rgba(255,255,255,0.45),transparent_55%)]" />

                    <div className="relative flex items-start gap-3">
                      <div className="shrink-0">
                        <div className="h-10 w-10 rounded-2xl bg-white/15 border border-white/15 flex items-center justify-center">
                          <Image src={f.icon} alt="Мебель под заказ" width={20} height={20} />
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-extrabold text-white leading-snug">{f.title}</div>
                        <div className="mt-2 text-sm text-white/80 leading-relaxed">{f.text}</div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute left-4 right-4 bottom-3 h-px bg-[linear-gradient(90deg,rgba(253,183,35,0.70),rgba(22,182,198,0.50),rgba(99,102,241,0.40),transparent)]" />
                  </div>
                ))}
              </div>

              {/* examples */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {EXAMPLES.map((e) => (
                  <div
                    key={e.title}
                    className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(255,255,255,0.35),transparent_55%)]" />

                    <div className="relative flex items-start gap-3">
                      <div className="shrink-0">
                        <div className="h-11 w-11 rounded-2xl bg-white/15 border border-white/15 flex items-center justify-center">
                          <Image src={e.icon} alt="Мебель под заказ" width={22} height={22} />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-extrabold text-white leading-snug">{e.title}</h3>
                        </div>

                        <div className="mt-2 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/85">
                          {e.badge}
                        </div>

                        <p className="mt-3 text-sm text-white/80 leading-relaxed">{e.text}</p>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute left-5 right-5 bottom-4 h-px bg-[linear-gradient(90deg,rgba(253,183,35,0.70),rgba(22,182,198,0.50),rgba(99,102,241,0.40),transparent)]" />
                  </div>
                ))}
              </div>

              {/* quick list */}
              <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5">
                <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_0%_0%,rgba(22,182,198,0.22),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_100%_0%,rgba(253,183,35,0.22),transparent_55%)]" />

                <div className="relative flex items-start gap-3">
                  <div className="shrink-0">
                    <div className="h-11 w-11 rounded-2xl bg-white/15 border border-white/15 flex items-center justify-center">
                      <Image src="/svg/tip.svg" alt="Мебель под заказ" width={22} height={22} />
                    </div>
                  </div>

                  <div className="w-full">
                    <h3 className="text-base font-extrabold text-white">
                      Что сказать для точного расчёта (в 30 секунд)
                    </h3>

                    <ul className="mt-3 space-y-2 text-sm text-white/85">
                      {QUICK_LIST.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#fdb723,#16b6c6)]" />
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 text-[11px] text-white/60">
                      SVG должны лежать в <span className="font-mono">/public/svg/</span>:{" "}
                      <span className="font-mono">
                        size.svg, materials.svg, hinge.svg, niche.svg, delivery.svg, wardrobe.svg, kitchen.svg, office.svg, tip.svg
                      </span>
                    </p>
                    <p className="mt-1 text-[11px] text-white/60">
                      Фоновые изображения: <span className="font-mono">/public/fon/cena-mebeli-na-zakaz-pinsk.webp</span>{" "}
                      и <span className="font-mono">/public/fon/cena-mebeli-na-zakaz-pinsk-mobile.webp</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* нижняя мягкая подсветка */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.10),rgba(255,255,255,0.22))]" />
          </div>
        </div>
      </div>
    </section>
  );
}