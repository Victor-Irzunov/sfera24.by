// /components/Offroad/OffroadWinchSection.jsx
// Витя создай файл /components/Offroad/OffroadWinchSection.jsx

import Image from "next/image";

const PRIMARY = "#60FF1E";

export default function OffroadWinchSection() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="container mx-auto px-0 sd:px-6">
        <div className="grid gap-8 sd:grid-cols-[1.2fr_1fr] sd:items-center">
          <div>
            <h2 className="text-[22px] sd:text-[28px] font-extrabold mb-3">
              Эвакуатор с лебёдкой для сложных случаев
            </h2>
            <h3 className="text-[14px] sd:text-[16px] font-medium text-white/80 mb-4">
              Когда нужен{" "}
              <span className="font-semibold" style={{ color: PRIMARY }}>
                эвакуатор с лебёдкой
              </span>
              : машина в кювете, на боку, села в грязь или сугроб, опасно
              подъезжать близко.
            </h3>
            <p className="text-[13px] sd:text-[15px] text-white/75 mb-4">
              Используем мощную электрическую лебёдку, мягкие стропы и точки
              крепления, которые позволяют бережно тянуть машину, не рвя бампер
              и не деформируя кузов. Работаем аккуратно, согласовывая каждый
              шаг с владельцем.
            </p>
            <ul className="space-y-2 text-[13px] sd:text-[14px] text-white/75">
              <li className="flex gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: PRIMARY }}
                />
                <span>вытащим авто из кювета, канавы или обочины;</span>
              </li>
              <li className="flex gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: PRIMARY }}
                />
                <span>используем длинные стропы для работы на расстоянии;</span>
              </li>
              <li className="flex gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: PRIMARY }}
                />
                <span>при необходимости фиксируем авто от опрокидывания;</span>
              </li>
              <li className="flex gap-2">
                <span
                  className="mt-1.5 h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: PRIMARY }}
                />
                <span>
                  каждый шаг продумываем с точки зрения безопасности людей и
                  машины.
                </span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative h-60 sd:h-72 overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
              <Image
                src="/offroad/winch-1.webp"
                alt="Эвакуатор с лебёдкой вытаскивает авто"
                fill
                className="object-cover"
                sizes="(min-width: 992px) 420px, 100vw"
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-8 -left-6 h-32 w-32 rounded-full blur-[90px] opacity-60"
              style={{ background: PRIMARY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
