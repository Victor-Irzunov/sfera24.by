// /components/city/mikashevichi/MikashevichiHowWeWorkSection.jsx — ПОЛНОСТЬЮ
import Image from "next/image";
import Link from "next/link";

const MICROAREAS = ["Центр", "Район вокзала", "Новая застройка", "Частный сектор", "Промзона (ориентир)"];

const STEPS = [
  {
    title: "Быстрый расчёт по фото",
    text: "Фото/пример + размеры — и мы даём вилку цены и варианты материалов.",
    icon: "/svg/calc.svg",
    accent: "from-[#16b6c6]/20 via-sky-300/10 to-transparent",
  },
  {
    title: "Замер в Микашевичах по записи",
    text: "Обычно 1–2 дня. Уточняем нюансы помещения и будущего монтажа.",
    icon: "/svg/ruler.svg",
    accent: "from-amber-400/20 via-yellow-300/10 to-transparent",
  },
  {
    title: "Проект и согласование",
    text: "Компоновка, фасады, фурнитура, цвета. Фиксируем бюджет и сроки.",
    icon: "/svg/layout.svg",
    accent: "from-indigo-400/20 via-violet-300/10 to-transparent",
  },
  {
    title: "Изготовление и монтаж",
    text: "Доставка, установка, регулировка. Сдаём изделие “под ключ”.",
    icon: "/svg/tools.svg",
    accent: "from-emerald-400/20 via-green-300/10 to-transparent",
  },
];

export default function MikashevichiHowWeWorkSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="how-we-work-mikashevichi">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.22),transparent_60%)] blur-2xl" />
            <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.20),transparent_60%)] blur-2xl" />
            <div className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(135deg,rgba(22,182,198,0.06)_0%,rgba(253,183,35,0.06)_45%,rgba(99,102,241,0.05)_100%)]" />
          </div>

          <div className="relative flex flex-col sd:flex-row sd:items-end sd:justify-between gap-4">
            <div>
              <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
                Как делаем мебель под заказ в Микашевичах
              </h2>
              <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
                Сначала расчёт, затем замер и проект, после — изготовление и монтаж. Всё прозрачно: вы заранее понимаете
                бюджет и сроки.
              </p>
            </div>

            <Link href="#zakhvat" className="btn btn-primary rounded-full px-6 self-start sd:self-auto">
              Получить расчёт
            </Link>
          </div>

          <div className="relative mt-7 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-slate-200 bg-white/85 p-5 overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${s.accent}`} />
                <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(500px_circle_at_15%_0%,rgba(255,255,255,0.65),transparent_55%)]" />

                <div className="relative flex items-start gap-3">
                  <div className="shrink-0">
                    <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                      <Image src={s.icon} alt="Мебель под заказ" width={22} height={22} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.text}</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute left-5 right-5 bottom-4 h-px bg-[linear-gradient(90deg,rgba(22,182,198,0.55),rgba(253,183,35,0.35),rgba(99,102,241,0.35),transparent)]" />
              </div>
            ))}
          </div>

          <div className="relative mt-7 rounded-2xl border border-slate-200 bg-white p-5 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(700px_circle_at_0%_0%,rgba(22,182,198,0.12),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(700px_circle_at_100%_0%,rgba(253,183,35,0.10),transparent_55%)]" />

            <div className="relative flex items-start gap-3">
              <div className="shrink-0">
                <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                  <Image src="/svg/map-pin.svg" alt="Мебель под заказ" width={22} height={22} />
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-lg font-extrabold text-slate-900">Зона обслуживания по Микашевичам</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Выезжаем по городу и ближайшим районам. Если вы из другого города — посмотрите страницы по области: там
                  есть перелинковка.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {MICROAREAS.map((x) => (
                    <span
                      key={x}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                      {x}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  * Это ориентир для логистики, без «переспама». Если ваш адрес не из списка — всё равно выезжаем по
                  Микашевичам.
                </p>
              </div>
            </div>
          </div>

          <p className="relative mt-6 text-center text-xl sd:text-2xl font-extrabold text-slate-900">
            <span className="font-script text-[#16b6c6]">Делаем “как для себя” — с аккуратной подгонкой</span>
          </p>
        </div>
      </div>
    </section>
  );
}