// /components/sections/RunningLine.js — ПОЛНОСТЬЮ
// ✅ Переписано под Sfera24
// ✅ Темы: проверка вентиляционных каналов, дымовые каналы, прочистка канализации
// ✅ Без грузчиков и лишней информации
// ✅ Компонент остаётся клиентским, потому что react-fast-marquee работает на клиенте

"use client";

import Marquee from "react-fast-marquee";

const ITEMS = [
  "Проверка вентиляционных каналов",
  "Проверка дымовых каналов",
  "Испытания естественной вентиляции",
  "Акт проверки",
  "Прочистка канализации",
  "Гидродинамическая промывка",
  "Устранение засоров",
  "Мойка высокого давления",
  "Минск и Минская область",
  "Квартиры и частные дома",
  "Коммерческие объекты",
  "Срочный выезд",
];

export default function RunningLine() {
  return (
    <section
      className="w-full bg-white py-7 text-[#7D7D7E] sd:py-9"
      aria-label="Бегущая строка — проверка вентиляции и прочистка канализации"
    >
      <div className="mx-auto max-w-7xl px-4 sd:px-6">
        <Marquee speed={42} gradient gradientWidth={90} pauseOnHover>
          <div className="flex items-center">
            {ITEMS.map((text, idx) => (
              <div
                key={`${text}-${idx}`}
                className="mx-7 flex items-center sd:mx-10"
              >
                <h3 className="text-[22px] font-medium uppercase tracking-tight sd:text-[30px]">
                  {text}
                </h3>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}