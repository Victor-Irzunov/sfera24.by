"use client";

import phoneNumbers from "@/config/config";
import Image from "next/image";

export default function Iphone() {
  return (
    <section
      aria-labelledby="instagram-heading"
      className="relative overflow-hidden py-16 sd:py-24 rounded-3xl sd:my-6 xz:my-0 bg-white"
    >
      {/* Праздничный градиентный фон */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-br from-pink-100 via-purple-100 to-sky-100"
      />
      {/* Светящиеся пятна */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-fuchsia-300/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-teal-300/40 blur-3xl"
      />
      {/* Конфетти */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,.2),transparent_40%)]"
      />

      <div className="container mx-auto px-4 sd:px-8">
        <div className="text-center">
          <h2
            id="instagram-heading"
            className="text-primary sd:text-5xl xz:text-3xl font-extrabold tracking-tight drop-shadow-sm"
          >
            Следите за нами в Instagram
          </h2>
          <p className="mt-3 text-gray-700 sd:text-lg xz:text-sm">
            Фото с праздников, новинки программ, акции и закулисье подготовки.
            Присоединяйтесь к нашему празднику каждый день!
          </p>
        </div>

        <div className="mt-10 sd:mt-14 grid sd:grid-cols-2 gap-10 items-center">
          {/* Телефон с подсветкой */}
          <div className="relative mx-auto sd:mx-0 w-full sd:max-w-[520px] max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-fuchsia-300 via-amber-200 to-sky-300 blur-2xl opacity-60"
            />
            <Image
              src="/background/iphone.webp"
              alt="Наш Instagram: @vasilisina_skazka"
              width={750}
              height={1250}
              className="w-full rounded-[2.5rem] shadow-2xl ring-1 ring-purple-200 object-cover"
              priority
              sizes="(max-width: 768px) 90vw, 520px"
            />
            {/* Мигающие огоньки вокруг */}
            <div className="absolute -top-4 -right-2 h-6 w-6 rounded-full bg-amber-400 animate-pulse" />
            <div className="absolute -bottom-6 left-6 h-5 w-5 rounded-full bg-pink-400 animate-pulse" />
            <div className="absolute -bottom-3 right-12 h-4 w-4 rounded-full bg-sky-400 animate-pulse" />
          </div>

          {/* CTA блок */}
          <div className="text-center sd:text-left">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-4 py-2 ring-1 ring-purple-100 shadow-sm">
              <span className="text-gray-600 sd:text-base xz:text-sm">
                Будьте в курсе анонсов и розыгрышей
              </span>
              <span className="hidden sd:inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-700 text-xs font-semibold">
                ежедневные сторис
              </span>
            </div>

            <div className="mt-6 flex sd:flex-row xz:flex-col items-center sd:items-start gap-4">
              <a
                href="https://www.instagram.com/vasilisina_skazka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-fuchsia-500 via-purple-500 to-sky-500 px-6 py-4 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Открыть профиль Instagram @vasilisina_skazka"
              >
                <Image
                  src="/svg/instagram.svg"
                  alt="Мебель под заказ"
                  width={28}
                  height={28}
                  className="opacity-95 group-hover:scale-110 transition-transform"
                />
                <span>@vasilisina_skazka</span>
              </a>

              <a
                href={`tel:${phoneNumbers.phone1Link}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-14 py-4 text-primary font-semibold ring-1 ring-purple-200 hover:ring-purple-300 shadow"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current"
                  aria-hidden="true"
                >
                  <path d="M6.6 10.8c1.3 2.5 3.2 4.4 5.7 5.7l2-2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.6a1 1 0 0 1 1 1v3.1a1 1 0 0 1-1 1C10.9 20.9 3.1 13.1 3.1 3.6a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1c.03 1.2.23 2.4.6 3.5a1 1 0 0 1-.25 1l-1.75 1.7z" />
                </svg>
                Консультация
              </a>
            </div>

            {/* Маленькие подписи */}
            <ul className="mt-6 text-gray-600 sd:text-base xz:text-sm space-y-1">
              <li>• Реальные фото с праздников и отзывов</li>
              <li>• Анонсы новых программ и скидки</li>
              <li>• Закулисье подготовки и идеи для ДР</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
