// /components/Transport/TransportPricingExamples.jsx
// Витя создай файл /components/Transport/TransportPricingExamples.jsx

import Link from "next/link";

const PRIMARY = "#60FF1E";

export default function TransportPricingExamples() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sd:px-6">
        <div className="sd:max-w-4xl">
          <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold">
            Стоимость перевозки автомобиля: примеры маршрутов
          </h2>
          <h3 className="mb-4 text-[16px] sd:text-[18px] font-semibold text-white/90">
            Прозрачная формула цены и понятные расчёты
          </h3>

          <p className="mb-4 text-[14px] sd:text-[15px] text-white/70">
            Для каждого заказа мы{" "}
            <span className="font-semibold">
              рассчитываем стоимость перевозки авто
            </span>{" "}
            индивидуально: учитываем расстояние, тип автомобиля и сложность
            погрузки. Базовая формула:{" "}
            <span style={{ color: PRIMARY }}>
              выезд эвакуатора + цена за км + допуслуги (если нужны)
            </span>
            .
          </p>

          <div className="grid gap-4 sd:grid-cols-3">
            <ExampleCard
              title="Могилёв → Минск"
              distance="~200 км"
              desc="Перевозка купленного авто из Минска в Могилёв или наоборот. Чёткий расчёт за каждый км."
            />
            <ExampleCard
              title="Могилёв → область"
              distance="30–80 км"
              desc="Доставка машины на дачу, в деревню, на СТО или склад за городом."
            />
            <ExampleCard
              title="Город → Город"
              distance="по Беларуси"
              desc="Перевозка автомобиля между любыми городами — по согласованному маршруту."
            />
          </div>

          <p className="mt-5 text-[13px] sd:text-[14px] text-white/65">
            Подробные тарифы смотрите на странице{" "}
            <Link
              href="/ceny-evakuatora-mogilev"
              className="font-semibold underline decoration-dotted underline-offset-4"
              style={{ color: PRIMARY }}
            >
              «Цены на эвакуатор в Могилёве»
            </Link>
            . Там можно{" "}
            <span className="font-semibold">
              рассчитать стоимость эвакуатора
            </span>{" "}
            и понять примерный бюджет ещё до звонка.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExampleCard({ title, distance, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
      <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/60">
        Пример маршрута
      </p>
      <p className="font-semibold text-white">{title}</p>
      <p className="mb-1 text-white/60">Дистанция: {distance}</p>
      <p className="text-white/80">{desc}</p>
    </div>
  );
}
