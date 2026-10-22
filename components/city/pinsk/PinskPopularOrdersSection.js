// /components/city/pinsk/PinskPopularOrdersSection.jsx — ПОЛНОСТЬЮ
// ✅ Perf: Server Component (без "use client")
// ✅ UI: изображения (webp) + SVG (/public/svg/*.svg) + мягкие градиенты
// ⚠️ Положи картинки в /public/fon/ и svg в /public/svg/ (пути ниже)

import Image from "next/image";

const HERO_DESKTOP = "/fon/populyarnaya-mebel-na-zakaz-pinsk.webp";
const HERO_MOBILE = "/fon/populyarnaya-mebel-na-zakaz-pinsk-mobile.webp";

const POPULAR = [
  {
    title: "Кухни на заказ",
    text: "Планировка под вашу технику и привычки: рабочий треугольник, выдвижные системы, влагостойкие материалы.",
    tags: ["мебель на заказ", "изготовление мебели под заказ"],
    icon: "/svg/kitchen.svg",
    grad: "from-amber-400/20 via-yellow-300/10 to-transparent",
  },
  {
    title: "Шкафы-купе и гардеробные",
    text: "Рациональная организация хранения: секции, корзины, штанги, подсветка, зеркала, безопасная фурнитура.",
    tags: ["встроенная мебель на заказ", "мебель по индивидуальному заказу"],
    icon: "/svg/wardrobe.svg",
    grad: "from-cyan-400/20 via-sky-300/10 to-transparent",
  },
  {
    title: "Прихожие и мебель в нишу",
    text: "Компактно и функционально: обувницы, крючки, антресоли, фасады, которые легко чистить.",
    tags: ["корпусная мебель на заказ", "мебель под заказ"],
    icon: "/svg/hallway.svg",
    grad: "from-indigo-400/20 via-violet-300/10 to-transparent",
  },
  {
    title: "Офисная мебель",
    text: "Столы, тумбы, шкафы, стойки. Подбираем решения по износостойкости и бюджету, учитываем кабель-менеджмент.",
    tags: ["офисная мебель на заказ", "офисная мебель под заказ"],
    icon: "/svg/office.svg",
    grad: "from-emerald-400/20 via-green-300/10 to-transparent",
  },
  {
    title: "Мягкая мебель",
    text: "Диваны, кровати, мягкие панели. Подберём ткань/износостойкость, наполнение, механизм трансформации.",
    tags: ["мягкая мебель на заказ", "заказать мебель"],
    icon: "/svg/furniture2.svg",
    grad: "from-rose-400/20 via-pink-300/10 to-transparent",
  },
  {
    title: "Гостиные и ТВ-зоны",
    text: "Модули под размеры стены, акустику и хранение. Аккуратные зазоры, скрытые крепления, безопасные кромки.",
    tags: ["изготовление мебели на заказ", "мебель заказать"],
    icon: "/svg/tv.svg",
    grad: "from-sky-400/20 via-cyan-300/10 to-transparent",
  },
];

export default function PinskPopularOrdersSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="popular-pinsk">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white shadow-sm overflow-hidden">
          {/* фоновые градиенты */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.26),transparent_60%)] blur-2xl" />
            <div className="absolute -bottom-32 -left-28 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.18),transparent_60%)] blur-2xl" />
            <div className="absolute inset-0 opacity-[0.35] bg-[linear-gradient(135deg,rgba(253,183,35,0.06)_0%,rgba(22,182,198,0.06)_35%,rgba(99,102,241,0.05)_70%,rgba(255,255,255,0)_100%)]" />
          </div>

          {/* ===== TOP IMAGE (desktop/mobile) ===== */}
          <div className="relative">
            {/* Desktop image */}
            <div className="relative hidden sd:block h-65">
              <Image
                src={HERO_DESKTOP}
                alt="Популярная мебель на заказ в Пинске — кухни, шкафы, прихожие, офис и мягкая мебель"
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center"
                quality={72}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_30%_30%,transparent_35%,rgba(0,0,0,.55)_100%)]" />
            </div>

            {/* Mobile image */}
            <div className="relative sd:hidden h-55">
              <Image
                src={HERO_MOBILE}
                alt="Популярная мебель на заказ в Пинске — кухни, шкафы, прихожие, офис и мягкая мебель"
                fill
                sizes="100vw"
                className="object-cover object-center"
                quality={90}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-transparent" />
            </div>

            {/* Заголовок поверх картинки */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-6 sd:p-8">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sd:text-sm text-white/90 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#fdb723]" />
                  Пинск • что чаще всего заказывают
                </p>

                <h2 className="mt-3 text-2xl sd:text-3xl font-extrabold text-white leading-tight">
                  Популярные заказы мебели в Пинске
                </h2>

                <p className="mt-2 text-sm sd:text-base text-white/85 max-w-3xl">
                  Эти категории чаще всего заказывают, когда ищут <strong>мебель на заказ</strong> и{" "}
                  <strong>мебель под заказ</strong> в Пинске. Внутри делаем под ваш размер, бюджет и материалы.
                </p>
              </div>
            </div>
          </div>

          {/* ===== CONTENT ===== */}
          <div className="relative p-6 sd:p-8">
            <div className="mt-2 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR.map((c) => (
                <article
                  key={c.title}
                  className="
                    group relative rounded-2xl border border-slate-200 bg-white/85 p-5
                    overflow-hidden
                    shadow-[0_10px_30px_rgba(2,6,23,0.06)]
                    hover:shadow-[0_16px_44px_rgba(2,6,23,0.10)]
                    transition-shadow
                  "
                >
                  {/* градиент внутри карточки */}
                  <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${c.grad}`} />
                  <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(520px_circle_at_15%_0%,rgba(255,255,255,0.7),transparent_55%)]" />

                  <div className="relative flex items-start gap-3">
                    {/* icon */}
                    <div className="shrink-0">
                      <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                        <Image src={c.icon} alt="Мебель под заказ" width={22} height={22} />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.text}</p>
                    </div>
                  </div>

                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="
                          inline-flex items-center gap-2 rounded-full
                          border border-slate-200 bg-white/90
                          px-3 py-1 text-[11px] text-slate-700
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#fdb723,#16b6c6)]" />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* тонкий акцент снизу */}
                  <div className="pointer-events-none absolute left-5 right-5 bottom-4 h-px bg-[linear-gradient(90deg,rgba(253,183,35,0.60),rgba(22,182,198,0.45),rgba(99,102,241,0.35),transparent)]" />
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5">
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                    <Image src="/svg/information.svg" alt="Мебель под заказ" width={22} height={22} />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-slate-900">Подсказка для точного расчёта</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Укажите примерные размеры, желаемые материалы/цвет и что хотите хранить внутри — так точнее попадём в
                    бюджет и быстрее предложим варианты.
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    SVG должны лежать в <span className="font-mono">/public/svg/</span>:{" "}
                    <span className="font-mono">
                      kitchen.svg, wardrobe.svg, hall.svg, office.svg, sofa.svg, tv.svg, tip.svg
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* мягкая нижняя подсветка контейнера */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(253,183,35,0.05),rgba(22,182,198,0.04))]" />
        </div>
      </div>
    </section>
  );
}