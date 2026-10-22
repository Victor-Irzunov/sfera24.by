// /components/sections/InspectionPriceSection.jsx

import BtnComp from "@/components/btn/BtnComp";

const inspectionPrices = [
  {
    service: "Проверка вентиляционных каналов",
    includes: "Осмотр, проверка тяги, оценка состояния вентканалов",
    price: "от 60 руб.",
  },
  {
    service: "Проверка дымохода",
    includes: "Проверка тяги, проходимости и состояния дымового канала",
    price: "от 70 руб.",
  },
  {
    service: "Проверка дымоходов и вентканалов",
    includes: "Комплексная проверка каналов на объекте",
    price: "от 90 руб.",
  },
  {
    service: "Акт проверки",
    includes: "Оформление документа по результату осмотра",
    price: "по договорённости",
  },
  {
    service: "Обследование вентиляции",
    includes: "Диагностика обратной тяги, запаха, слабой вытяжки и засоров",
    price: "по договорённости",
  },
];



export default function InspectionPriceSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-14 sd:py-20"
      aria-labelledby="inspection-price-title"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#2b7fff]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00AFC4]/10 blur-[90px]" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#00AFC4]/25 bg-[#00AFC4]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
            Стоимость
          </p>

          <h2
            id="inspection-price-title"
            className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
          >
            Стоимость проверки дымовых и вентиляционных каналов в Минске
          </h2>

          <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
            Цена проверки зависит от объекта, количества каналов, необходимости
            оформления акта, сложности доступа, срочности выезда и объёма
            работ. Точную стоимость можно уточнить после описания объекта.
          </h3>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_55px_-38px_rgba(0,0,0,0.35)]">
          <div className="border-b border-slate-200 bg-linear-to-r from-[#071a33] via-[#06243a] to-[#00343d] px-5 py-5 text-white sd:px-7">
            <h3 className="text-[21px] font-black leading-tight sd:text-[28px]">
              Проверка дымоходов, вентканалов и оформление акта
            </h3>

            <p className="mt-2 max-w-4xl text-[14px] leading-relaxed text-white/75 sd:text-[15px]">
              Ниже указаны основные услуги по проверке вентиляционных каналов,
              дымоходов, обследованию вентиляции и подготовке документов по
              результату осмотра.
            </p>
          </div>

          {/* ===== Desktop table ===== */}
          <div className="hidden sd:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="w-[30%] px-6 py-4 text-[13px] font-black uppercase tracking-[0.08em] text-slate-500">
                    Услуга
                  </th>

                  <th className="w-[48%] px-6 py-4 text-[13px] font-black uppercase tracking-[0.08em] text-slate-500">
                    Что входит
                  </th>

                  <th className="w-[22%] px-6 py-4 text-right text-[13px] font-black uppercase tracking-[0.08em] text-slate-500">
                    Цена
                  </th>
                </tr>
              </thead>

              <tbody>
                {inspectionPrices.map((item, index) => (
                  <tr
                    key={item.service}
                    className={`border-t border-slate-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                    }`}
                  >
                    <td className="px-6 py-4 text-[15px] font-black leading-snug text-slate-950">
                      {item.service}
                    </td>

                    <td className="px-6 py-4 text-[15px] leading-relaxed text-slate-600">
                      {item.includes}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex rounded-full bg-[#00AFC4]/10 px-4 py-2 text-[16px] font-black text-[#007f91]">
                        {item.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ===== Mobile cards ===== */}
          <div className="grid gap-3 p-4 sd:hidden">
            {inspectionPrices.map((item) => (
              <article
                key={item.service}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-[16px] font-black leading-snug text-slate-950">
                  {item.service}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                  {item.includes}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Цена
                  </span>

                  <span className="rounded-full bg-[#00AFC4]/10 px-3 py-1.5 text-[15px] font-black text-[#007f91]">
                    {item.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

    
        <div className="mt-8 rounded-[28px] border border-[#2b7fff]/15 bg-white p-5 shadow-[0_16px_55px_-38px_rgba(0,0,0,0.35)] sd:p-7">
          <div className="grid gap-5 sd:grid-cols-[1fr_auto] sd:items-center">
            <div>
              <h3 className="text-[22px] font-black leading-tight text-slate-950 sd:text-[30px]">
                Нужно узнать точную стоимость?
              </h3>

              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600 sd:text-[17px]">
                Оставьте заявку — уточним объект, количество каналов,
                необходимость акта, доступ к дымоходу или вентканалам и
                подскажем итоговую цену до начала работ.
              </p>
            </div>

            <div className="sd:min-w-65">
              <BtnComp
                title="Узнать стоимость"
                index={4104}
                name="Узнать стоимость проверки дымовых и вентиляционных каналов"
                w
                short
              />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-[12px] leading-relaxed text-slate-500 sd:text-[13px]">
          Цены указаны ориентировочно. Итоговая стоимость зависит от адреса,
          типа объекта, количества каналов, сложности доступа, необходимости
          оформления акта и объёма работ.
        </p>
      </div>
    </section>
  );
}