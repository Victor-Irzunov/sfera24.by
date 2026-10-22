// /components/Prices/PriceFaqPayment.jsx
// Витя создай файл /components/Prices/PriceFaqPayment.jsx
const PRIMARY = "#60FF1E";

const faqItems = [
  {
    q: "Какие способы оплаты эвакуатора доступны?",
    a: "Обычно возможна оплата наличными, банковской картой и по безналичному расчёту (для юрлиц). Перед вызовом уточняем, какой способ удобен именно вам.",
  },
  {
    q: "Вы даёте чек или акт выполненных работ?",
    a: "Да, по запросу мы предоставляем чек или акт выполненных работ — это важно при возмещении расходов страховой или для отчётности.",
  },
  {
    q: "Нужна ли предоплата за эвакуацию?",
    a: "В большинстве случаев предоплата не требуется. При дальних поездках по Беларуси или нестандартных заказах можем попросить частичную предоплату.",
  },
  {
    q: "Входит ли в цену погрузка и выгрузка авто?",
    a: "Базовая погрузка и выгрузка легкового автомобиля входит в стоимость. Дополнительная доплата может потребоваться при сложной эвакуации (кювет, грязь, заблокированные колёса).",
  },
  {
    q: "Как понять, за что я плачу?",
    a: "Мы заранее проговариваем: подача эвакуатора, пробег по городу или за город, стоимость эвакуатора за км и возможные допуслуги. Финальную сумму вы узнаёте до начала погрузки.",
  },
];

export default function PriceFaqPayment() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="mb-6 sd:mb-8 max-w-3xl">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold text-white mb-2">
            Вопросы по оплате и стоимости эвакуатора
          </h2>
          <h3 className="text-[15px] sd:text-[16px] font-medium text-white/80 mb-3">
            Как формируется цена и какие есть варианты оплаты
          </h3>
          <p className="text-[13px] sd:text-[14px] text-white/70">
            Ниже собраны частые вопросы о том,{" "}
            <span className="font-semibold">сколько стоит эвакуатор</span>, как
            проходит оплата и в каких случаях добавляются допуслуги. Это
            поможет лучше понимать{" "}
            <span className="font-semibold">стоимость эвакуации автомобиля</span>{" "}
            и{" "}
            <span className="font-semibold">стоимость услуг эвакуатора</span> в
            целом.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-white/10 bg-[#020617] px-4 sd:px-5 py-3 sd:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <h4 className="text-[14px] sd:text-[15px] font-semibold text-white">
                  {item.q}
                </h4>
                <span
                  className="flex min-h-6 min-w-6 items-center justify-center rounded-full text-[16px] text-white/75 group-open:rotate-45 transition-transform"
                  style={{ backgroundColor: "rgba(148,163,184,0.25)" }}
                >
                  +
                </span>
              </summary>
              <p className="mt-2 text-[13px] sd:text-[14px] text-white/75 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-[12px] sd:text-[13px] text-white/55 max-w-3xl">
          Если у вас остались вопросы о том, как рассчитывается{" "}
          <span className="font-semibold">
            стоимость доставки авто эвакуатором
          </span>{" "}
          или{" "}
          <span className="font-semibold">
            стоимость автоэвакуатора за km
          </span>
          , вы всегда можете уточнить детали у оператора по телефону или через
          форму на этой странице.
        </p>
      </div>
    </section>
  );
}
