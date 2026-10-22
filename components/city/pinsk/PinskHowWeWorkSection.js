// /components/city/pinsk/PinskHowWeWorkSection.jsx — ПОЛНОСТЬЮ
// ✅ Perf: Server Component (без "use client")
// ✅ UI: SVG-иконки (/public/svg/*.svg) + аккуратные градиенты (фон/бордер/блики)
// ⚠️ Важно: положи SVG в /public/svg/ (пути ниже)

import Image from "next/image";
import Link from "next/link";

const MICROAREAS = [
  "Центр",
  "Радужный",
  "Западный",
  "Восточный",
  "Жилгородок",
  "Район автовокзала",
  "Район ж/д вокзала",
];

const STEPS = [
  {
    title: "Быстрый расчёт по фото и размерам",
    text: "Скиньте фото/пример, размеры и что важно по функционалу. Подскажем по материалам и дадим вилку цены.",
    icon: "/svg/calc.svg",
    accent: "from-amber-400/25 via-yellow-300/10 to-transparent",
  },
  {
    title: "Замер в Пинске по записи",
    text: "Уточняем адрес и детали. Обычно выезд возможен в ближайшие 1–2 дня — согласуем удобное время.",
    icon: "/svg/roulette.svg",
    accent: "from-cyan-400/25 via-sky-300/10 to-transparent",
  },
  {
    title: "Проект и подбор материалов",
    text: "Готовим проект: компоновка, фурнитура, цвета/текстуры. Согласуем бюджет и сроки изготовления.",
    icon: "/svg/layout.svg",
    accent: "from-indigo-400/25 via-violet-300/10 to-transparent",
  },
  {
    title: "Изготовление, доставка и монтаж",
    text: "Собираем на производстве, привозим и устанавливаем. Регулируем фасады/двери, сдаём готовое изделие.",
    icon: "/svg/tools.svg",
    accent: "from-emerald-400/25 via-green-300/10 to-transparent",
  },
];

export default function PinskHowWeWorkSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="how-we-work-pinsk">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm overflow-hidden">
          {/* мягкие градиенты-фоновые блики */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.30),transparent_60%)] blur-2xl" />
            <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.22),transparent_60%)] blur-2xl" />
            <div className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(135deg,rgba(253,183,35,0.06)_0%,rgba(22,182,198,0.05)_35%,rgba(99,102,241,0.05)_70%,rgba(255,255,255,0)_100%)]" />
          </div>

          <div className="relative flex flex-col sd:flex-row sd:items-end sd:justify-between gap-4">
            <div>
              <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
                Как делаем мебель под заказ в Пинске
              </h2>
              <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
                Работает простой процесс: сначала быстрый расчёт и консультация, затем замер, проект и производство, и
                финально — доставка и монтаж. Это снижает риски по размеру, бюджету и срокам.
              </p>
            </div>

            <Link
              href="#zakhvat"
              className="btn btn-primary rounded-full px-6 self-start sd:self-auto"
              aria-label="Перейти к форме быстрого расчёта"
            >
              Получить расчёт
            </Link>
          </div>

          {/* шаги */}
          <div className="relative mt-7 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="
                  relative rounded-2xl border border-slate-200 bg-white/80 p-5
                  shadow-[0_10px_30px_rgba(2,6,23,0.06)]
                  overflow-hidden
                "
              >
                {/* градиентная подложка карточки */}
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${s.accent}`} />
                <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(500px_circle_at_15%_0%,rgba(255,255,255,0.65),transparent_55%)]" />

                <div className="relative flex items-start gap-3">
                  {/* иконка */}
                  <div className="shrink-0">
                    <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                      <Image src={s.icon} alt="Мебель под заказ" width={22} height={22} />
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-extrabold text-slate-900 leading-snug">{s.title}</div>
                    <div className="mt-2 text-sm text-slate-600 leading-relaxed">{s.text}</div>
                  </div>
                </div>

                {/* тонкая линия снизу как "акцент" */}
                <div className="pointer-events-none absolute left-5 right-5 bottom-4 h-px bg-[linear-gradient(90deg,rgba(253,183,35,0.55),rgba(22,182,198,0.45),rgba(99,102,241,0.35),transparent)]" />
              </div>
            ))}
          </div>

          {/* зона обслуживания */}
          <div className="relative mt-7 rounded-2xl border border-slate-200 bg-white/85 p-5 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(700px_circle_at_0%_0%,rgba(22,182,198,0.12),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(700px_circle_at_100%_0%,rgba(253,183,35,0.12),transparent_55%)]" />

            <div className="relative flex items-start gap-3">
              <div className="shrink-0">
                <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                  <Image src="/svg/map-pin.svg" alt="Мебель под заказ" width={22} height={22} />
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-lg font-extrabold text-slate-900">Зона обслуживания по Пинску</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Выезжаем по городу и ближайшим районам. Если вы из другого города — посмотрите наши страницы по области:
                  там есть перелинковка.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {MICROAREAS.map((x) => (
                    <span
                      key={x}
                      className="
                        inline-flex items-center gap-2 rounded-full
                        border border-slate-200 bg-white/90
                        px-3 py-1 text-xs text-slate-700
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[linear-gradient(135deg,#fdb723,#16b6c6)]" />
                      {x}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  * Список микрорайонов — ориентир для понимания логистики, не «переспам». Если ваш адрес не из списка —
                  всё равно выезжаем по Пинску.
                </p>
              </div>
            </div>
          </div>

          {/* подсказка по svg */}
          <div className="relative mt-5 text-xs text-slate-500">
            SVG-иконки должны лежать в <span className="font-mono">/public/svg/</span>:
            <span className="font-mono"> calc.svg, ruler.svg, layout.svg, tools.svg, map-pin.svg</span>
          </div>
        </div>
      </div>
    </section>
  );
}