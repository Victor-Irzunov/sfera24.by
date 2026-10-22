// /components/city/brest/BrestHowWeWorkSection.jsx — ПОЛНОСТЬЮ
// ✅ Уникальный блок “Как работаем в Бресте” (H2/H3)
// ✅ Красивый дизайн: бирюзовые градиенты (#16b6c6) + читаемые нейтрали
// ✅ Без адреса
// ✅ Perf: без "use client", без next/image

const ACCENT = "#16b6c6";

const ITEMS = [
  {
    title: "Выезд замерщика в Брест",
    badge: "1–2 дня",
    desc: "Согласуем удобное время и выезжаем на замер обычно в течение 1–2 дней. На месте проверяем стены/ниши/коммуникации и фиксируем размеры.",
    points: ["Согласование времени заранее", "Проверяем ниши/стены/коммуникации", "Фиксируем размеры и привязки"],
    icon: "📏",
  },
  {
    title: "Проект и расчёт без сюрпризов",
    badge: "фиксируем цену",
    desc: "Собираем комплектацию (материалы/фасады/фурнитура), делаем проект и финальный расчёт. Фиксируем стоимость и сроки до запуска в работу.",
    points: ["Комплектация под бюджет", "Проект + спецификация", "Сроки и цена до старта"],
    icon: "🧩",
  },
  {
    title: "Доставка и монтаж в день установки",
    badge: "под ключ",
    desc: "Привозим изделие под монтаж, аккуратно устанавливаем, регулируем двери/ящики, проверяем механизмы. Даём рекомендации по уходу и сервису.",
    points: ["Доставка под монтаж", "Установка и регулировка", "Проверка механизмов + рекомендации"],
    icon: "🛠️",
  },
];

export default function BrestHowWeWorkSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 sd:py-16"
      id="brest-how"
      aria-label="Как работаем в Бресте — мебель на заказ"
    >
      {/* Декоративный фон секции */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 h-130 w-130 rounded-full blur-3xl opacity-[0.22]"
          style={{ background: ACCENT }}
        />
        <div
          className="absolute -bottom-44 -right-44 h-155 w-155 rounded-full blur-3xl opacity-[0.16]"
          style={{ background: ACCENT }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/85 to-white" />
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(900px_circle_at_35%_25%,rgba(22,182,198,0.18),transparent_55%)]" />
      </div>

      <div className="container mx-auto">
        {/* Заголовок */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs sd:text-sm font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
            Замер → проект → изготовление → монтаж
          </div>

          <h2 className="mt-4 text-3xl sd:text-4xl font-extrabold text-slate-900 tracking-tight">
            Как работаем в Бресте
          </h2>

          <h3 className="mt-3 text-base sd:text-lg text-slate-700">
            Понятный процесс без лишних этапов: аккуратно, по договорённости и с понятной комплектацией.
          </h3>
        </div>

        {/* Карточки */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sd:gap-6">
          {ITEMS.map((it, idx) => (
            <Card key={it.title} item={it} index={idx} />
          ))}
        </div>

        {/* Нижний акцентный блок */}
        <div className="mt-10 sd:mt-12 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-[2px] p-6 sd:p-8 shadow-sm">
          <div className="flex flex-col sd:flex-row sd:items-center sd:justify-between gap-4">
            <div>
              <p className="text-base sd:text-lg font-extrabold text-slate-900">
                Хотите понять цену до замера?
              </p>
              <p className="mt-1 text-sm text-slate-700 max-w-2xl">
                Пришлите фото места установки и примерные размеры — подскажем порядок стоимости и предложим варианты
                материалов и фурнитуры.
              </p>
            </div>

            <a
              href="#zakhvat"
              className="btn rounded-full border-0 px-7"
              style={{ backgroundColor: ACCENT, color: "#052a2f" }}
              aria-label="Оставить заявку на расчёт мебели в Бресте"
            >
              Оставить заявку →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, index }) {
  // чуть разный тон для “разнообразия” (но всё в одной палитре)
  const tintA = index === 0 ? 0.18 : index === 1 ? 0.14 : 0.12;
  const tintB = index === 0 ? 0.08 : index === 1 ? 0.10 : 0.06;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-[2px] p-6 sd:p-7 shadow-sm">
      {/* фон карточки */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl"
          style={{ background: `rgba(22,182,198,${tintA})` }}
        />
        <div
          className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `rgba(22,182,198,${tintB})` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/55 via-white/70 to-white/85" />
      </div>

      {/* верх */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border"
              style={{
                borderColor: "rgba(22,182,198,0.30)",
                background:
                  "linear-gradient(180deg, rgba(22,182,198,0.18) 0%, rgba(22,182,198,0.06) 100%)",
              }}
              aria-hidden="true"
            >
              <span className="text-xl">{item.icon}</span>
            </span>

            <span
              className="badge badge-outline text-xs font-bold"
              style={{
                borderColor: "rgba(22,182,198,0.35)",
                color: "#0b5b64",
                backgroundColor: "rgba(22,182,198,0.06)",
              }}
            >
              {item.badge}
            </span>
          </div>

          <h3 className="mt-4 text-lg sd:text-xl font-extrabold text-slate-900 leading-snug">
            {item.title}
          </h3>
        </div>

        {/* номер */}
        <div className="shrink-0">
          <div
            className="rounded-2xl border px-3 py-2"
            style={{
              borderColor: "rgba(22,182,198,0.22)",
              background: "rgba(255,255,255,0.65)",
            }}
          >
            <span className="text-xs font-extrabold text-slate-700">0{index + 1}</span>
          </div>
        </div>
      </div>

      {/* текст */}
      <p className="mt-3 text-sm sd:text-[15px] text-slate-700 leading-relaxed">
        {item.desc}
      </p>

      <div className="mt-5 h-px w-full bg-slate-200/80" />

      {/* пункты */}
      <ul className="mt-4 space-y-2">
        {item.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-slate-800">
            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>

      {/* микро-низ */}
      <div className="mt-6 flex items-center justify-between text-[12px] text-slate-500">
        <span>Мебель на заказ · Брест</span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
          этап 0{index + 1}
        </span>
      </div>
    </article>
  );
}