// /components/sections/SewerPrices.jsx — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ Секция цен под "прочистка канализации в Минске"
// ✅ H2 + H3 для SEO/AEO
// ✅ Цены из массива
// ✅ Адаптив: таблица на desktop, карточки на mobile
// ✅ Цены снижены на 1–9 BYN относительно примера конкурентов
// ✅ Текст переписан, не копирует конкурента

const PRICE_GROUPS = [
  {
    title: "Гидродинамическая прочистка в квартире или частном доме",
    subtitle:
      "Одна точка подключения или участок канализации до 20 погонных метров.",
    rows: [
      {
        service: "Диаметр 32–40 мм",
        price: "от 145 BYN",
      },
      {
        service: "Диаметр 50 мм",
        price: "от 150 BYN",
      },
      {
        service: "Диаметр 110 мм — кухонная труба",
        price: "от 195 BYN",
      },
      {
        service: "Диаметр 110 мм — общий выпуск из дома",
        price: "от 195 BYN",
      },
      {
        service: "Дополнительная точка",
        price: "от 65 BYN",
      },
    ],
  },
  {
    title: "Электромеханическое устранение засора",
    subtitle:
      "Подходит для локальных засоров в квартире, доме или на небольшом участке трубопровода.",
    rows: [
      {
        service: "Диаметр 50 мм",
        price: "от 194 BYN",
      },
      {
        service: "Диаметр 110 мм — кухонная труба",
        price: "от 293 BYN",
      },
      {
        service: "Диаметр 110 мм — общий выпуск из дома",
        price: "от 196 BYN",
      },
      {
        service: "Дополнительная точка",
        price: "от 72 BYN",
      },
    ],
  },
  {
    title: "Сложная прочистка труб под камеру",
    subtitle:
      "Извлечение посторонних предметов, строительных остатков, плотных отложений и солевого налёта.",
    rows: [
      {
        service: "Диаметр 40–50 мм",
        price: "от 344 BYN",
      },
      {
        service: "Диаметр 110 мм",
        price: "от 442 BYN",
      },
    ],
  },
  {
    title: "Ручная очистка канализационного колодца",
    subtitle:
      "Удаление корней, песка, строительного мусора и посторонних предметов до 0.25 м³.",
    rows: [
      {
        service: "Один канализационный колодец",
        price: "от 294 BYN",
      },
    ],
  },
  {
    title: "Гидродинамическая прочистка для организаций",
    subtitle:
      "Для общепита, магазинов, аптек, товариществ собственников, производственных и коммерческих объектов.",
    rows: [
      {
        service: "Диаметр 32–50 мм",
        price: "от 373 BYN",
      },
      {
        service: "Диаметр 110–250 мм",
        price: "от 374 BYN",
      },
    ],
  },
  {
    title: "Электромеханическая прочистка для коммерческих объектов",
    subtitle:
      "Для объектов с повышенной нагрузкой на канализацию и регулярной эксплуатацией трубопровода.",
    rows: [
      {
        service: "Диаметр 40–50 мм",
        price: "от 375 BYN",
      },
      {
        service: "Диаметр 110–250 мм",
        price: "от 372 BYN",
      },
      {
        service: "Диаметр 110–250 мм — удаление корней",
        price: "от 592 BYN",
      },
    ],
  },
  {
    title: "Прочистка труб под камеру для организаций",
    subtitle:
      "Работы на объектах общепита, торговли, аптек, ТС и производственных помещений.",
    rows: [
      {
        service: "Диаметр 40–50 мм",
        price: "от 594 BYN",
      },
      {
        service: "Диаметр 110–250 мм",
        price: "от 593 BYN",
      },
      {
        service: "Диаметр 110–150 мм — солевые отложения, стояк, 1 этаж",
        price: "от 994 BYN",
      },
      {
        service: "Диаметр 32–110 мм — солевые отложения, лежак, 1 этаж",
        price: "от 992 BYN",
      },
      {
        service: "Диаметр 90–150 мм — ливневая канализация с кровли",
        price: "от 995 BYN",
      },
    ],
  },
  {
    title: "Разморозка канализации горячей водой",
    subtitle:
      "Гидродинамическая промывка горячей водой до 80°C для частных и коммерческих объектов.",
    rows: [
      {
        service: "Квартира или частный дом, диаметр 50–200 мм",
        price: "от 294 BYN",
      },
      {
        service: "Коммерческий объект, диаметр 50–250 мм",
        price: "от 594 BYN",
      },
    ],
  },
  {
    title: "Видеодиагностика канализации",
    subtitle:
      "Осмотр трубы камерой для поиска засора, повреждения, смещения стыков или постороннего предмета.",
    rows: [
      {
        service: "Квартира или дом, диаметр 40–50 мм",
        price: "от 194 BYN",
      },
      {
        service: "Квартира или дом, диаметр 110–150 мм",
        price: "от 195 BYN",
      },
      {
        service: "Коммерческий объект, диаметр 40–50 мм",
        price: "от 374 BYN",
      },
      {
        service: "Коммерческий объект, диаметр 110–150 мм",
        price: "от 372 BYN",
      },
      {
        service: "Коммерческий объект, диаметр 200–250 мм",
        price: "от 493 BYN",
      },
    ],
  },
];

const PRICE_FACTORS = [
  "удалённость объекта от МКАД",
  "срочность и ночное время выезда",
  "доступ к месту выполнения работ",
  "необходимость пропусков или согласований на объекте",
  "состояние труб, просадки и смещения стыков",
  "плотность загрязнений и состав отложений",
  "наличие строительных смесей, песка, корней или посторонних предметов",
  "отсутствие ревизий и сложный доступ к канализации",
];

export default function SewerPrices() {
  return (
    <section
      id="prices"
      className="relative overflow-hidden bg-[#F6FAFC] py-14 text-slate-950 sd:py-20"
      aria-labelledby="sewer-prices-title"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00d2ef]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4] shadow-sm">
            Стоимость работ
          </p>

          <h2
            id="sewer-prices-title"
            className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
          >
            Цены на{" "}
            <span className="text-[#00AFC4]">
              прочистку канализации в Минске
            </span>
          </h2>

          <h3 className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
            Стоимость зависит от диаметра трубы, сложности засора, способа
            прочистки и доступа к канализации. Перед началом работ мастер
            уточняет задачу и согласовывает цену.
          </h3>
        </div>

        <div className="mt-10 space-y-5 sd:mt-14">
          {PRICE_GROUPS.map((group, groupIndex) => (
            <article
              key={group.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.07)]"
            >
              <div className="border-b border-slate-200 bg-white px-5 py-5 sd:px-7">
                <div className="flex flex-col gap-3 sd:flex-row sd:items-start sd:justify-between">
                  <div>
                    <div className="mb-2 inline-flex rounded-full bg-[#00d2ef]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#00AFC4]">
                      Раздел {groupIndex + 1}
                    </div>

                    <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-slate-950 sd:text-2xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm font-medium leading-relaxed text-slate-600">
                      {group.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== DESKTOP TABLE ===== */}
              <div className="hidden sd:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-left">
                      <th className="border-b border-slate-200 px-7 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-slate-500">
                        Вид работ
                      </th>
                      <th className="w-52 border-b border-slate-200 px-7 py-4 text-right text-[12px] font-black uppercase tracking-[0.16em] text-slate-500">
                        Цена
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {group.rows.map((row) => (
                      <tr
                        key={`${group.title}-${row.service}`}
                        className="transition hover:bg-[#00d2ef]/5"
                      >
                        <td className="border-b border-slate-100 px-7 py-4 text-[15px] font-semibold leading-relaxed text-slate-800">
                          {row.service}
                        </td>

                        <td className="border-b border-slate-100 px-7 py-4 text-right text-[18px] font-black text-[#00AFC4]">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ===== MOBILE CARDS ===== */}
              <div className="grid grid-cols-1 gap-3 p-4 sd:hidden">
                {group.rows.map((row) => (
                  <div
                    key={`${group.title}-${row.service}`}
                    className="rounded-2xl border border-slate-200 bg-[#F6FAFC] p-4"
                  >
                    <div className="text-[13px] font-bold leading-relaxed text-slate-800">
                      {row.service}
                    </div>

                    <div className="mt-3 inline-flex rounded-full bg-white px-4 py-2 text-[16px] font-black text-[#00AFC4] shadow-sm">
                      {row.price}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)] sd:p-7">
            <h3 className="text-2xl font-black tracking-[-0.02em] text-slate-950">
              Что может повлиять на стоимость
            </h3>

            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600 sd:text-base">
              Финальная цена зависит не только от диаметра трубы. На стоимость
              влияет доступ к канализации, расстояние до объекта, сложность
              загрязнений и состояние системы.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {PRICE_FACTORS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-[#F6FAFC] px-3 py-3 text-sm font-bold text-slate-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00d2ef]/10 text-[12px] text-[#00AFC4]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#00d2ef]/20 bg-slate-950 p-5 text-white shadow-[0_22px_70px_rgba(15,23,42,0.16)] sd:p-7">
            <p className="inline-flex rounded-full bg-[#00d2ef]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#00d2ef]">
              Важно
            </p>

            <h3 className="mt-4 text-2xl font-black tracking-[-0.02em]">
              Точную цену мастер назовёт до начала работ
            </h3>

            <p className="mt-4 text-sm font-medium leading-relaxed text-white/75 sd:text-base">
              По телефону можно назвать ориентировочную стоимость. Точная цена
              определяется после уточнения задачи: где находится засор, какой
              диаметр трубы, есть ли ревизия, нужен ли трос, видеодиагностика
              или гидродинамическая промывка канализации.
            </p>

            <a
              href="#zahvat"
              className="mt-6 inline-flex h-13 items-center justify-center rounded-full bg-[#00d2ef] px-6 text-sm font-black text-slate-950 transition hover:bg-white"
            >
              Узнать цену →
            </a>
          </div>
        </div>

        <div className="sr-only">
          <h2>Цены на прочистку канализации в Минске</h2>
          <p>
            Прочистка канализации в Минске, устранение засоров труб,
            гидродинамическая прочистка канализации, электромеханическая
            прочистка, видеодиагностика канализации, разморозка канализации,
            прочистка труб в квартире, частном доме и на коммерческих объектах.
          </p>
        </div>
      </div>
    </section>
  );
}