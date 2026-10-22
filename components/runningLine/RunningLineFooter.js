// /components/sections/RunningLineFooter.jsx — ПОЛНОСТЬЮ
// ✅ Футер-бегущая строка: “дорого”, крупно, с разделителями
// ✅ Marquee = клиентский компонент

"use client";

import Marquee from "react-fast-marquee";
import phoneNumbers from "@/config/config";

const MESSAGES = [
  "Здравствуйте — звоните в любое время",
  "Бесплатная консультация и расчёт",
  "Работаем аккуратно и в срок",
  "Гарантия лучшей цены",
  "Только качественные услуги с гарантией",
];

export default function RunningLineFooter() {
  return (
    <section className="w-full sd:my-8 xz:my-2 text-secondary">
      <Marquee speed={50}  gradientWidth={80} pauseOnHover>
        <div className="flex items-center uppercase overflow-hidden">
          {MESSAGES.map((text, idx) => (
            <div key={idx} className="mx-8 flex items-center">
              <p className="text-5xl sd:text-7xl lg:text-8xl font-semibold leading-none tracking-tight">
                {text}
              </p>
              <span className="ml-10 inline-block h-3 w-3 rounded-full bg-current/40" />
            </div>
          ))}

          {/* Номер — как отдельный акцент в конце */}
          {phoneNumbers?.phone1 ? (
            <div className="mx-8 flex items-center">
              <p className="text-5xl sd:text-7xl lg:text-8xl font-semibold leading-none tracking-tight">
                {phoneNumbers.phone1}
              </p>
              <span className="ml-10 inline-block h-3 w-3 rounded-full bg-current/40" />
            </div>
          ) : null}
        </div>
      </Marquee>
    </section>
  );
}
