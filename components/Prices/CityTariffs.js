// /components/Prices/CityTariffs.jsx
// Витя создай файл /components/Prices/CityTariffs.jsx
const PRIMARY = "#60FF1E";

export default function CityTariffs() {
  return (
    <section className="relative bg-[#050505] py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="mb-6 sd:mb-8 max-w-3xl">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold text-white mb-2">
            Цены на эвакуатор по городу Могилёв
          </h2>
          <h3 className="text-[15px] sd:text-[16px] font-medium text-white/75 mb-3">
            Базовые тарифы на подачу и пробег по городу
          </h3>
          <p className="text-[13px] sd:text-[14px] text-white/70">
            Для{" "}
            <span className="font-semibold">эвакуатора по городу Могилёв</span>{" "}
            действует фиксированная стоимость подачи и включённого пробега. Это
            позволяет заранее понимать ориентировочные{" "}
            <span className="font-semibold">цены на эвакуатор по городу</span>{" "}
            без сюрпризов и скрытых доплат.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-[#111111] via-[#050505] to-[#020617] shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
          <div className="border-b border-white/10 bg-black/40 px-4 sd:px-6 py-3 flex flex-col sd:flex-row sd:items-center sd:justify-between gap-2">
            <h4 className="text-[15px] sd:text-[16px] font-semibold text-white">
              Тарифы по Могилёву
            </h4>
            <p className="text-[12px] sd:text-[13px] text-white/60">
              Все суммы ориентировочные, точная цена зависит от адреса и
              ситуации.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-[13px] sd:text-[14px] text-white/80">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 sd:px-6 py-3 font-semibold">Услуга</th>
                  <th className="px-4 sd:px-6 py-3 font-semibold">
                    Что входит
                  </th>
                  <th className="px-4 sd:px-6 py-3 font-semibold text-right">
                    Цена от, руб
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5/70 bg-black/40">
                  <td className="px-4 sd:px-6 py-3 align-top">
                    Эвакуатор по городу
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-white/70">
                    Подача эвакуатора по Могилёву + базовый пробег по городу до
                    10 км.
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-right font-extrabold">
                    69
                  </td>
                </tr>

                <tr className="border-b border-white/5/70 bg-black/30">
                  <td className="px-4 sd:px-6 py-3 align-top">
                    Дополнительный пробег по городу
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-white/70">
                    Каждый последующий километр после включённого лимита в
                    пределах Могилёва.
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-right font-extrabold">
                    +1–2
                  </td>
                </tr>

                <tr className="bg-black/20">
                  <td className="px-4 sd:px-6 py-3 align-top">
                    Эвакуация по городу ночью
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-white/70">
                    Работа эвакуатора с 22:00 до 06:00. Включает подачу и
                    погрузку авто по городу.
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-right font-extrabold">
                    79+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-4 sd:px-6 py-4 bg-black/60">
            <p className="text-[12px] sd:text-[13px] text-white/65">
              Точные{" "}
              <span className="font-semibold">
                расценки эвакуатора по городу
              </span>{" "}
              зависят от адреса подачи, сложности погрузки и конечной точки. Вы
              можете заранее уточнить, сколько стоит эвакуатор по вашему
              маршруту — оператор озвучит диапазон цены до подачи машины.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
