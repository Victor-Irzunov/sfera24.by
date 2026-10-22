// /components/AutoHelp/AutoHelpPrices.jsx

const PRIMARY = "#60FF1E";

const priceItems = [
  {
    title: "Выезд мастера и базовая автопомощь",
    subtitle: "Прикурить, осмотр, простая диагностика",
    price: "от 69 руб",
    details: [
      "приезд по Могилёву и ближайшим пригородам",
      "проверка аккумулятора и контактов",
      "рекомендации, что делать дальше",
    ],
  },
  {
    title: "Подвоз топлива и запуск двигателя",
    subtitle: "Если заглохли или кончилось топливо",
    price: "от 49 руб",
    details: [
      "доставка бензина или дизеля до вашей машины",
      "помощь с запуском двигателя после дозаправки",
      "контроль, что авто уверенно едет дальше",
    ],
  },
  {
    title: "Колесо, домкрат, замок, мелкий ремонт",
    subtitle: "Решаем типичные проблемы на месте",
    price: "от 39 руб",
    details: [
      "замена колеса или помощь с домкратом",
      "вскрытие авто при забытых ключах",
      "подтяжка клемм, мелкие работы по электрике",
    ],
  },
];

export default function AutoHelpPrices() {
  return (
    <section className="relative bg-black py-16 sd:py-20">
      {/* мягкое свечение под секцией */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-180px] h-72 blur-[140px] opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 0, rgba(96,255,30,0.5), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sd:px-6 relative">
        <header className="max-w-3xl mb-10">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] sd:text-[11px] uppercase tracking-[0.16em] text-white/70">
            Цены на автопомощь и техпомощь
          </p>

          <h2 className="mt-3 text-[22px] sd:text-[30px] font-extrabold text-white">
            Сколько стоит автопомощь в Могилёве
          </h2>

          <h3 className="mt-3 text-[14px] sd:text-[16px] text-white/80">
            Вызвать автопомощь и{" "}
            <span className="font-semibold">техпомощь на дороге</span> можно
            круглосуточно. Базовый выезд мастера по Могилёву —{" "}
            <span className="font-semibold" style={{ color: PRIMARY }}>
              от 69 руб
            </span>
            , далее стоимость зависит от ситуации: прикурить, подвоз топлива,
            замена колеса или другой вид{" "}
            <span className="font-semibold">авто помощи на дороге</span>.
          </h3>
        </header>

        <div className="grid gap-5 sd:grid-cols-3">
          {priceItems.map((item, idx) => (
            <article
              key={idx}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-linear-to-br from-[#050505] via-[#080808] to-[#020202] p-5 sd:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* неоновая плашка цены */}
              <div className="mb-4 inline-flex items-center justify-between rounded-full bg-black/70 px-3 py-1 border border-white/10">
                <span className="text-[11px] uppercase tracking-[0.16em] text-white/60">
                  Тариф
                </span>
                <span
                  className="text-[15px] sd:text-[17px] font-extrabold px-3 py-1 rounded-full shadow-[0_0_28px_rgba(96,255,30,0.7)]"
                  style={{ backgroundColor: PRIMARY, color: "#000000" }}
                >
                  {item.price}
                </span>
              </div>

              <h4 className="text-[16px] sd:text-[18px] font-bold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-[12px] sd:text-[13px] text-white/70 mb-4">
                {item.subtitle}
              </p>

              <ul className="mt-auto space-y-1.5 text-[12px] sd:text-[13px] text-white/75">
                {item.details.map((d, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: PRIMARY }}
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {/* декоративное кольцо в углу */}
              <div
                className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full border border-[rgba(96,255,30,0.45)] opacity-40"
              />
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-[12px] sd:text-[13px] text-white/55">
          Точные{" "}
          <span className="font-semibold">
            расценки на автопомощь и техпомощь
          </span>{" "}
          зависят от адреса, времени суток и сложности работ. Перед выездом
          мастер озвучит стоимость по телефону, а на месте вы сами решите —
          достаточно автопомощи или нужен{" "}
          <span className="font-semibold">вызов буксира / эвакуатора</span>.
        </p>
      </div>
    </section>
  );
}
