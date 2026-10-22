// /components/Prices/ExtraServicesPrices.jsx
// Витя создай файл /components/Prices/ExtraServicesPrices.jsx
const PRIMARY = "#60FF1E";

const services = [
  {
    title: "Сложная погрузка",
    desc: "Авто в кювете, на бордюре, заблокирован руль или коробка, нужен лебёдочный подтяг.",
    price: "от 20 руб",
  },
  {
    title: "Ожидание / простой эвакуатора",
    desc: "Простой на месте более 15–20 минут: ожидание ГАИ, страховой или владельца авто.",
    price: "от 10 руб / 30 мин",
  },
  {
    title: "Ночной выезд",
    desc: "Работа эвакуатора в ночное время (обычно с 22:00 до 06:00), когда вызывов меньше, а рисков больше.",
    price: "+10–20 руб к заказу",
  },
  {
    title: "Дополнительные точки погрузки/выгрузки",
    desc: "Если по пути нужно заехать на несколько адресов для погрузки или выгрузки.",
    price: "индивидуально",
  },
  {
    title: "Перевозка авто без владельца",
    desc: "Оформление документов, фотоотчёт, передача машины на СТО или стоянку без присутствия хозяина.",
    price: "индивидуально",
  },
];

export default function ExtraServicesPrices() {
  return (
    <section className="relative bg-black py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="mb-6 sd:mb-8 max-w-3xl">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold text-white mb-2">
            Стоимость дополнительных услуг эвакуатора
          </h2>
          <h3 className="text-[15px] sd:text-[16px] font-medium text-white/80 mb-3">
            Когда добавляется оплата за сложную погрузку и простой
          </h3>
          <p className="text-[13px] sd:text-[14px] text-white/70">
            Помимо базового тарифа,{" "}
            <span className="font-semibold">стоимость услуг эвакуатора</span>{" "}
            может включать доплаты за сложные условия погрузки, длительный
            простой или ночной выезд. Это стандартная практика работы{" "}
            <span className="font-semibold">автоэвакуатора</span> и заранее
            оговаривается с клиентом.
          </p>
        </div>

        <div className="grid gap-5 sd:grid-cols-2">
          {services.map((s, idx) => (
            <article
              key={idx}
              className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-linear-to-br from-[#020617] via-[#020617] to-[#0B1120] p-4 sd:p-5 shadow-[0_16px_55px_rgba(0,0,0,0.85)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 0 0, rgba(96,255,30,0.32), transparent 55%)",
                }}
              />
              <div className="relative z-10 flex flex-1 flex-col">
                <h4 className="mb-2 text-[15px] sd:text-[16px] font-semibold text-white">
                  {s.title}
                </h4>
                <p className="mb-3 text-[13px] text-white/75">{s.desc}</p>
                <p
                  className="mt-auto text-[13px] font-extrabold"
                  style={{ color: PRIMARY }}
                >
                  {s.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-[12px] sd:text-[13px] text-white/60 max-w-3xl">
          <span className="font-semibold">
            Стоимость автоэвакуатора и дополнительных опций
          </span>{" "}
          всегда проговаривается до начала работ. Если ситуация требует
          нестандартной погрузки, оператор сразу предупредит об ориентировочной
          доплате.
        </p>
      </div>
    </section>
  );
}
