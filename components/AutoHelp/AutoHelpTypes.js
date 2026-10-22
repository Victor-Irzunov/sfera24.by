// /components/AutoHelp/AutoHelpTypes.jsx
// Витя создай файл /components/AutoHelp/AutoHelpTypes.jsx

const PRIMARY = "#60FF1E";

const cards = [
  {
    title: "Прикурить автомобиль",
    items: [
      "разряженный аккумулятор",
      "машина долго стояла или забыли свет",
      "безопасное прикуривание с защитой электроники",
    ],
  },
  {
    title: "Колесо и домкрат",
    items: [
      "замена спущенного колеса",
      "установка запаски или «докатки»",
      "помощь, если нет инструмента или домкрата",
    ],
  },
  {
    title: "Открыть автомобиль",
    items: [
      "ключи остались в салоне или багажнике",
      "замёрзшие или заевшие замки",
      "открытие без повреждения личинок и стекла",
    ],
  },
  {
    title: "Топливо и мелкий ремонт",
    items: [
      "подвезём бензин или дизель на дорогу",
      "поможем с проводами, мелкими поломками",
      "подскажем, когда уже нужен эвакуатор",
    ],
  },
];

export default function AutoHelpTypes() {
  return (
    <section className="relative bg-black py-14 sd:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto px-4 sd:px-6">
        <header className="mb-8 sd:mb-10 max-w-3xl">
          <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold text-white">
            Виды автопомощи: что мы делаем на месте
          </h2>
          <h3 className="text-[15px] sd:text-[17px] font-medium text-white/80">
            Автопомощь и авто помощь — это быстрый выезд специалиста, который
            <span className="font-semibold"> решает проблему без эвакуатора</span>, если
            это возможно.
          </h3>
        </header>

        <div className="grid gap-5 sd:grid-cols-2">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-[#050505] via-[#090909] to-[#030303] p-6 sd:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-[90px] opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ background: PRIMARY }}
              />
              <h4 className="relative mb-3 text-[17px] sd:text-[19px] font-semibold text-white">
                {card.title}
              </h4>
              <ul className="relative space-y-1.5 text-[13px] sd:text-[14px] text-white/75">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="mt-1 h-1.5 w-1.5 rounded-full"
                      style={{ background: PRIMARY }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
