// /components/Transport/IntercityTransport.jsx

const PRIMARY = "#60FF1E";

export default function IntercityTransport() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sd:px-6">
        <div className="sd:max-w-4xl">
          <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold">
            Междугородняя перевозка авто и выезд в другие города
          </h2>
          <h3 className="mb-3 text-[16px] sd:text-[18px] font-semibold text-white/90">
            Маршруты Могилёв — Минск и по всей Беларуси
          </h3>

          <p className="mb-3 text-[14px] sd:text-[15px] text-white/70">
            Мы выполняем{" "}
            <span className="font-semibold">
              перевозку машины из города в город
            </span>{" "}
            по всей Беларуси. Часто работаем по маршрутам{" "}
            <span className="font-semibold">Могилёв — Минск</span> и обратно, а
            также в другие областные и районные центры.
          </p>

          <p className="mb-4 text-[13px] sd:text-[14px] text-white/65">
            Если нужен <strong>эвакуатор в другой город</strong> или{" "}
            <strong>эвакуатор за город</strong>, мы заранее просчитываем
            расстояние, обсуждаем время выезда, делаем понятный расчёт:
            <span className="font-semibold">
              {" "}
              выезд + цена эвакуатора за км
            </span>
            . Вы сразу понимаете итоговый бюджет без скрытых плат.
          </p>

          <div className="grid gap-4 sd:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
              <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/60">
                Пример маршрута
              </p>
              <p className="font-semibold text-white">Могилёв → Минск</p>
              <p className="mt-1 text-white/70">
                Заберём машину от дома/СТО и доставим по указанному адресу в
                столице. Согласуем время подачи и место разгрузки заранее.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
              <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/60">
                Популярные направления
              </p>
              <p className="text-white/80">
                Могилёв — Гомель, Витебск, Брест, Минск, Орша и другие города
                Беларуси. Возможны маршруты в обратную сторону.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
              <p className="mb-1 text-[11px] uppercase tracking-[0.16em] text-white/60">
                Для кого
              </p>
              <p className="text-white/80">
                Перевозка авто после покупки, поломки в дороге, переезда в
                другой город или длительного хранения.
              </p>
            </div>
          </div>

          <p className="mt-5 text-[13px] sd:text-[14px] text-white/65">
            Для точного расчёта маршрута и{" "}
            <span className="font-semibold">стоимости доставки авто</span>{" "}
            назовите оператору города отправления и назначения, марку/модель
            машины и примерные сроки.
          </p>
        </div>
      </div>
    </section>
  );
}
