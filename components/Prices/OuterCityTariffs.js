// /components/Prices/OuterCityTariffs.jsx
// Витя создай файл /components/Prices/OuterCityTariffs.jsx
const PRIMARY = "#60FF1E";

export default function OuterCityTariffs() {
  return (
    <section className="relative bg-black py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="mb-6 sd:mb-8 max-w-3xl">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold text-white mb-2">
            Тарифы за город и по трассе
          </h2>
          <h3 className="text-[15px] sd:text-[16px] font-medium text-white/80 mb-3">
            Эвакуатор по области и межгород: цена за км и стоимость выезда
          </h3>
          <p className="text-[13px] sd:text-[14px] text-white/70">
            При выезде за пределы Могилёва{" "}
            <span className="font-semibold">стоимость эвакуатора</span>{" "}
            рассчитывается по формуле:{" "}
            <span className="font-semibold">
              выезд эвакуатора + цена эвакуатора за км
            </span>
            . Ниже — примерные{" "}
            <span className="font-semibold">расценки эвакуатора за км</span> по
            области и по межгороду.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#0B1120] via-[#020617] to-[#0F172A] shadow-[0_18px_60px_rgba(0,0,0,0.9)]">
          <div className="border-b border-white/10 bg-black/40 px-4 sd:px-6 py-3">
            <h4 className="text-[15px] sd:text-[16px] font-semibold text-white">
              Эвакуатор за город / по Беларуси
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-[13px] sd:text-[14px] text-white/80">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-4 sd:px-6 py-3 font-semibold">
                    Направление
                  </th>
                  <th className="px-4 sd:px-6 py-3 font-semibold">
                    Условия расчёта
                  </th>
                  <th className="px-4 sd:px-6 py-3 font-semibold text-right">
                    Цена, руб
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 bg-black/40">
                  <td className="px-4 sd:px-6 py-3 align-top">
                    Выезд за пределы Могилёва
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-white/70">
                    Подача эвакуатора в Могилёве + выезд за город до 10 км от
                    черты города.
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-right font-extrabold">
                    от 79
                  </td>
                </tr>

                <tr className="border-b border-white/5 bg-black/30">
                  <td className="px-4 sd:px-6 py-3 align-top">
                    Цена эвакуатора за 1 км (область)
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-white/70">
                    Каждые 1 км пути эвакуатора с загруженным авто по области.
                    <span className="block text-[12px] text-white/50 mt-1">
                      «эвакуатор цена за км», «стоимость 1 км эвакуатора»
                    </span>
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-right font-extrabold">
                    1.5–2.0
                  </td>
                </tr>

                <tr className="bg-black/20">
                  <td className="px-4 sd:px-6 py-3 align-top">
                    Межгород (по Беларуси)
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-white/70">
                    Дальние рейсы: Могилёв — Минск и другие города. Расчёт по
                    формуле: выезд +{" "}
                    <span className="font-semibold">
                      цена эвакуатора за километр
                    </span>{" "}
                    по маршруту.
                  </td>
                  <td className="px-4 sd:px-6 py-3 align-top text-right font-extrabold">
                    индивидуально
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-4 sd:px-6 py-4 bg-black/70">
            <p className="text-[12px] sd:text-[13px] text-white/65">
              Для точного расчёта{" "}
              <span className="font-semibold">
                стоимости эвакуатора за км
              </span>{" "}
              учитывается направление, состояние авто и необходимость в
              дополнительном оборудовании. Вы можете{" "}
              <span className="font-semibold">
                рассчитать стоимость эвакуатора
              </span>{" "}
              заранее через форму ниже или по телефону.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
