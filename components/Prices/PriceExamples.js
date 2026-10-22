// /components/Prices/PriceExamples.jsx
// Витя создай файл /components/Prices/PriceExamples.jsx
const PRIMARY = "#60FF1E";

const examples = [
  {
    route: "Могилёв, центр → СТО в черте города",
    formula: "Подача эвакуатора + до 10 км по городу",
    price: "≈ 69–80 руб",
    note: "Типичная ситуация: авто не заводится во дворе или у офиса — доставляем на ближайшее СТО.",
  },
  {
    route: "Могилёв → Пригород (20–30 км от города)",
    formula: "Подача + выезд за город + 20–30 км × тариф за км",
    price: "≈ 100–140 руб",
    note: "Подходит при поломке на трассе недалеко от Могилёва или на даче.",
  },
  {
    route: "Могилёв → Минск",
    formula: "Подача + 190 км × тариф за км",
    price: "рассчитывается индивидуально",
    note: "Длительный межгород. Стоимость зависит от загруженности и временных рамок.",
  },
];

export default function PriceExamples() {
  return (
    <section className="relative bg-[#050505] py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="mb-6 sd:mb-8 max-w-3xl">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold text-white mb-2">
            Примеры расчёта стоимости эвакуатора
          </h2>
          <h3 className="text-[15px] sd:text-[16px] font-medium text-white/80 mb-3">
            Как формируется цена за эвакуатор в реальных ситуациях
          </h3>
          <p className="text-[13px] sd:text-[14px] text-white/70">
            Ниже — несколько примеров, как можно{" "}
            <span className="font-semibold">
              рассчитать стоимость эвакуатора
            </span>{" "}
            для типичных маршрутов. Это поможет понять,{" "}
            <span className="font-semibold">сколько стоит эвакуатор</span> в
            зависимости от расстояния и условий.
          </p>
        </div>

        <div className="grid gap-5 sd:grid-cols-3">
          {examples.map((item, idx) => (
            <article
              key={idx}
              className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-linear-to-b from-[#0B1120] via-[#020617] to-black p-4 sd:p-5 shadow-[0_16px_55px_rgba(0,0,0,0.85)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 0 0, rgba(96,255,30,0.35), transparent 60%)",
                }}
              />
              <div className="relative z-10 flex flex-1 flex-col">
                <h4 className="mb-2 text-[14px] sd:text-[15px] font-semibold text-white">
                  {item.route}
                </h4>
                <p className="mb-2 text-[12px] sd:text-[13px] text-white/70">
                  <span className="font-semibold" style={{ color: PRIMARY }}>
                    Формула:
                  </span>{" "}
                  {item.formula}
                </p>
                <p className="mb-3 text-[13px] sd:text-[14px] font-extrabold text-white">
                  {item.price}
                </p>
                <p className="text-[12px] sd:text-[13px] text-white/60">
                  {item.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-[12px] sd:text-[13px] text-white/60 max-w-3xl">
          Примеры приведены для понимания логики расчёта. Для точной суммы{" "}
          <span className="font-semibold">
            эвакуатор рассчитать стоимость
          </span>{" "}
          можно через форму ниже — оператор учтёт все детали маршрута и озвучит
          окончательные{" "}
          <span className="font-semibold">расценки эвакуатора</span>.
        </p>
      </div>
    </section>
  );
}
