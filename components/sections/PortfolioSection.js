// /components/sections/PortfolioSection.js — ПОЛНОСТЬЮ
// ✅ Полностью переписано под тему: грузчики в Беларуси
// ✅ Верхний текст, CTA и подписи адаптированы под услуги грузчиков
// ✅ В модалке изображение на всю ширину без внутренних паддингов
// ✅ Стрелки ниже изображения
// ✅ Ниже стрелок добавлен призыв и телефон
// ✅ Кнопки закрытия есть сверху и снизу
// ✅ Логика не сломана
// ✅ SEO-friendly контент под запросы: грузчики, услуги грузчиков, грузчики на час, грузчики с машиной, переезды

"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import config from "@/config/config";

function clampIndex(i, len) {
  if (len <= 0) return 0;
  return (i + len) % len;
}

const PORTFOLIO_COUNT = 14;
const PRIMARY = "#ffde01";
const SECONDARY = "#2a2929";

export default function PortfolioSection({
  title = "Наши грузчики в работе",
  description = "Показываем примеры работ: погрузка и разгрузка, помощь при переезде, вынос мебели, перевозка мебели с грузчиками, подъём вещей на этаж и работа грузчиков с машиной.",
}) {
  const items = useMemo(() => {
    return Array.from({ length: PORTFOLIO_COUNT }, (_, idx) => {
      const i = idx + 1;

      return {
        key: `portfolio-${i}`,
        src: `/portfolio/${i}.webp`,
        alt: `Услуги грузчиков в Беларуси — фото ${i}`,
        caption: `Грузчики в работе · Фото ${i}`,
      };
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(
    () => setActive((p) => clampIndex(p - 1, items.length)),
    [items.length]
  );

  const next = useCallback(
    () => setActive((p) => clampIndex(p + 1, items.length)),
    [items.length]
  );

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  const phone = config?.phone1 || "+375 29 000-00-00";
  const phoneLink = config?.phone1Link || "+375290000000";

  return (
    <section
      className="w-full bg-white"
      id="portfolio"
      aria-label="Фото работ грузчиков"
    >
      {/* ===== Верх: заголовок + описание ===== */}
      <div className="px-4 pt-12 sm:px-6 sm:pt-14 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em]"
            style={{
              borderColor: "rgba(255,222,1,0.45)",
              backgroundColor: "rgba(255,222,1,0.16)",
              color: SECONDARY,
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: PRIMARY }}
            />
            Фото выполненных работ
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-[#2a2929] sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-[#2a2929]/70 sm:text-lg">
            {description}
          </p>
        </div>
      </div>

      {/* ===== Грид фото ===== */}
      <div className="mt-10 sm:mt-12">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <button
              key={it.key}
              type="button"
              onClick={() => {
                setActive(idx);
                setOpen(true);
              }}
              className="group relative w-full overflow-hidden bg-[#2a2929] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffde01]"
              aria-label={`Открыть фото работы грузчиков ${idx + 1}`}
            >
              <div className="relative aspect-16/10">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
                />

                <span className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />

                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-md">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: PRIMARY }}
                  />
                  Работа {idx + 1}
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 py-4">
                  <div className="text-sm font-semibold text-white">
                    Услуги грузчиков
                  </div>

                  <div className="mt-1 text-xs text-white/65">
                    Погрузка, разгрузка, переезд, мебель
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Текст и призыв под фото ===== */}
      <div className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-black/5 bg-linear-to-b from-white to-[#f7f6f1] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto] lg:items-stretch">
            <div className="p-7 sm:p-10">
              <h3 className="text-xl font-black text-[#2a2929] sm:text-2xl">
                Нужны грузчики для переезда, мебели или разгрузки?
              </h3>

              <p className="mt-3 max-w-3xl leading-relaxed text-[#2a2929]/68">
                Предоставим грузчиков под вашу задачу: вынести мебель,
                погрузить вещи, разгрузить машину, поднять на этаж бытовую
                технику, помочь при квартирном или офисном переезде. Можно
                заказать одного грузчика на час, бригаду грузчиков или
                грузчиков с машиной для перевозки мебели и вещей.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`tel:${phoneLink}`}
                  className="inline-flex h-12 items-center justify-center rounded-full px-7 font-black text-[#2a2929] transition-opacity hover:opacity-90"
                  style={{ backgroundColor: PRIMARY }}
                  aria-label={`Позвонить по номеру ${phone}`}
                >
                  Позвонить: {phone}
                </a>

                <span className="text-sm text-[#2a2929]/55">
                  Грузчики • Погрузка • Разгрузка • Переезды
                </span>
              </div>
            </div>

            <div className="relative flex min-h-36 items-center justify-center bg-[#2a2929] px-7 py-8 text-white sm:px-10">
              <div
                className="absolute -left-12 top-1/2 hidden h-28 w-28 -translate-y-1/2 rotate-45 bg-[#ffde01]/12 lg:block"
                aria-hidden="true"
              />

              <div className="relative text-center">
                <div className="text-4xl font-black leading-none text-[#ffde01]">
                  {PORTFOLIO_COUNT}
                </div>

                <div className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  фото
                  <br />
                  работ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO скрытый текст */}
        <div className="sr-only">
          <h2>Фото работ грузчиков</h2>
          <p>
            Фото работ грузчиков, услуги грузчиков, грузчики на час, грузчики с
            машиной, погрузка и разгрузка, квартирный переезд с грузчиками,
            офисный переезд с грузчиками, перевозка мебели с грузчиками, вынос
            мебели, подъём вещей на этаж, помощь при переезде.
          </p>
        </div>
      </div>

      {/* ===== Модалка ===== */}
      {open ? (
        <div
          className="fixed inset-0 z-9999 overflow-y-auto bg-black/88 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото работы грузчиков"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="min-h-screen w-full">
            <div className="relative w-full">
              {/* Верхняя кнопка закрыть */}
              <div className="sticky top-0 z-30 flex justify-end px-3 py-3 sm:px-5">
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/95 px-5 text-sm font-bold text-black shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Закрыть"
                >
                  Закрыть ×
                </button>
              </div>

              {/* Изображение на всю ширину */}
              <div className="relative w-full">
                <div className="relative aspect-16/11 w-full sm:aspect-16/8 lg:aspect-16/7">
                  <Image
                    src={items[active]?.src}
                    alt={items[active]?.alt || "Фото работы грузчиков"}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Контент под изображением */}
              <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-8 pt-5 sm:px-6 sm:pt-6">
                {/* Стрелки ниже изображения */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Предыдущее фото"
                  >
                    <Image
                      src="/svg/arrow-left.svg"
                      alt="Назад"
                      width={20}
                      height={20}
                    />
                  </button>

                  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                    {active + 1} / {items.length}
                  </div>

                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Следующее фото"
                  >
                    <Image
                      src="/svg/arrow-right.svg"
                      alt="Вперёд"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>

                {/* Подпись */}
                <div className="mt-5 text-center text-white">
                  <p className="text-base font-semibold sm:text-lg">
                    {items[active]?.caption || "Грузчики в работе"}
                  </p>

                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
                    Нужны грузчики для погрузки, разгрузки, выноса мебели,
                    подъёма на этаж или переезда? Подберём нужное количество
                    грузчиков, при необходимости добавим машину и удобное время
                    выполнения работ.
                  </p>
                </div>

                {/* Телефон */}
                <div className="mt-6">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-extrabold text-[#2a2929] shadow-[0_12px_35px_rgba(255,222,1,0.28)] transition-opacity hover:opacity-90 sm:text-base"
                    style={{ backgroundColor: PRIMARY }}
                    aria-label={`Позвонить по номеру ${phone}`}
                  >
                    Позвонить: {phone}
                  </a>
                </div>

                {/* Нижняя кнопка закрыть */}
                <button
                  type="button"
                  onClick={close}
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Закрыть просмотр"
                >
                  Закрыть просмотр
                </button>

                <p className="mt-4 text-center text-xs text-white/50">
                  Используйте клавиши ← → для переключения, Esc — закрыть
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}