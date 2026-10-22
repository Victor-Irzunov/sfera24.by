// /components/sections/BannerPrices.jsx

import React from "react";

const BannerPrices = () => {
  return (
    <section className="w-full bg-white text-slate-900 py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        {/* Заголовки */}
        <h2 className="text-2xl xz:text-3xl sd:text-4xl font-semibold text-slate-900">
          Стоимость баннерной рекламы в Минск
        </h2>
        <h3 className="mt-3 text-sm sd:text-base text-slate-600 max-w-2xl">
          Ориентировочные минимальные цены на печать баннеров и размещение
          баннерной рекламы в Минск. Фактическая стоимость зависит от размеров,
          материалов, сроков и условий монтажа.
        </h3>

        {/* Таблица цен */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full table-auto border-collapse text-xs sd:text-sm lg:text-base">
            <thead>
              <tr className="bg-[#FFD203] text-black uppercase">
                <th className="px-2 py-3 sd:px-3 border border-slate-200 text-left">
                  Вид услуги
                </th>
                <th className="px-2 py-3 sd:px-3 border border-slate-200 text-left">
                  Что включено
                </th>
                <th className="px-2 py-3 sd:px-3 border border-slate-200 text-left whitespace-nowrap">
                  Цена от, руб.
                </th>
                <th className="px-2 py-3 sd:px-3 border border-slate-200 text-left">
                  Единица
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Печать баннеров */}
              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Печать баннера эконом
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Баннерная ткань, полноцветная печать
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 10 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за м²
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Печать баннера стандарт 440–510 г/м²
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Плотная ткань, широкоформатная печать
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 14 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за м²
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Печать баннерной сетки
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Сетка для фасадов и строительных лесов
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 14 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за м²
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Печать баннера BACKLIT
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Баннер для световых коробов (подсветка сзади)
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 18 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за м²
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Печать баннера для билборда 6×3 м
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Виниловый плакат для щита 3×6 м
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 210 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за плакат
                </td>
              </tr>

              {/* Отделка и доп. работы */}
              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Установка люверсов
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Металлические люверсы по периметру баннера
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 0,7 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за шт.
                </td>
              </tr>

              {/* Размещение баннеров */}
              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Размещение баннера на билборде 3×6 м
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Аренда щита под баннер в Минск
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 300 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за месяц
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Билборды в городе (3×6 м)
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Размещение баннерной рекламы на щитах в Минск
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 14 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за сутки
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Рекламные растяжки-баннеры 12×0,9 м
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Размещение над дорогой / на путепроводах
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 55,7 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за сутки
                </td>
              </tr>

              <tr className="even:bg-slate-50/70">
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Баннер-брандмауэр на фасаде здания
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  Крупноформатный баннер на фасаде дома
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200 font-semibold">
                  от 750 руб.
                </td>
                <td className="px-2 py-2 sd:px-3 sd:py-3 border border-slate-200">
                  за размещение
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Уточняющий текст */}
        <p className="mt-6 text-xs sd:text-sm text-slate-600 max-w-3xl">
          *Все цены указаны по открытым прайс-листам компаний Минск и носят
          ориентировочный характер. Итоговая стоимость баннерной рекламы зависит
          от точных размеров, тиража, выбранного материала, срока размещения,
          сложности монтажа и действующих акций. Для точного расчёта лучше всего
          отправить размеры баннера, место размещения и желаемый срок показа.
        </p>
      </div>
    </section>
  );
};

export default BannerPrices;
