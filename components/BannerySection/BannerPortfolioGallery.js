// /components/portfolio/NeonPortfolioGallery.jsx — ПОЛНОСТЬЮ
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import phoneNumbers from "@/config/config";

const CITY = "Минск";

const DEFAULT_ITEMS = [
  {
    src: "/bannery/portfolio/banner.webp",
    alt: "Печать баннеров в Минск — широкоформатный рекламный баннер на фасаде здания",
    title: "Печать баннеров в Минск",
    tag: "Фасадный баннер • 16:9 • Улица",
    desc: "Широкоформатный баннер на фасаде: плотная баннерная ткань, аккуратная натяжка и читаемый заголовок. Хорошо работает для магазинов, акций и услуг в городе.",
  },
  {
    src: "/bannery/portfolio/pechat-bannerov.webp",
    alt: "Печать баннеров в Минск — баннер на здании в центре города, дневной свет",
    title: "Фасадный баннер в центре",
    tag: "Баннерная ткань • Улица • Дневной свет",
    desc: "Пример размещения на городской улице: ровная натяжка, люверсы по периметру, яркая печать. Видно, как баннер читается на расстоянии.",
  },
  {
    src: "/bannery/portfolio/pechat-bannerov-2.webp",
    alt: "Виниловый баннер — макро текстуры материала и печати, качество плетения",
    title: "Текстура и качество печати",
    tag: "Макро • Плетение • Сольвент/экосольвент",
    desc: "Крупный план показывает фактуру винила, четкость текста и стабильность цвета. Такой баннер выдерживает улицу, ветер и перепады погоды.",
  },
  {
    src: "/bannery/portfolio/pechat-bannerov-3.webp",
    alt: "Баннеры в типографии — рулоны готовых баннеров на столе, подготовка к выдаче",
    title: "Готовые баннеры в типографии",
    tag: "Портфолио • Рулоны • Производство",
    desc: "Рулоны готовых баннеров после печати и проверки. Удобно для крупных тиражей, сезонных акций и сетевых заказов.",
  },

  {
    src: "/bannery/portfolio/banner-tury-v-egipet.webp",
    alt: "Баннер туристического агентства в Минск — пальма и море, призыв «Горящие туры в Египет!»",
    title: "Туры в Египет",
    tag: "Уличный баннер • Советская • 16:9",
    desc: "Яркий туристический баннер с морем и пальмой. Контрастный текст хорошо читается на уровне глаз прохожих и привлекает внимание в солнечную погоду.",
  },
  {
    src: "/bannery/portfolio/banner-tury-v-egipet-2.webp",
    alt: "Туристический баннер «Горящие туры в Египет!» — уличная установка, дневной свет",
    title: "Горящие туры — уличная установка",
    tag: "Каркас • Улица • 16:9",
    desc: "Пример баннера на металлическом каркасе: надежное крепление, аккуратные люверсы, яркие цвета и чистая геометрия полотна.",
  },

  {
    src: "/bannery/portfolio/banner-pervaya-trenirovka-besplatno.webp",
    alt: "Баннер фитнес-центра в Минск — «Первая тренировка бесплатно!» на ограждении спорткомплекса",
    title: "Фитнес-центр",
    tag: "Ограждение • Мотивация • 16:9",
    desc: "Динамичный баннер для спорта: сильный оффер, фото атлетов и высококонтрастный текст. Хорош для стадионов, залов и спортплощадок.",
  },

  {
    src: "/bannery/portfolio/banner-kvartiry-v-novostrojke.webp",
    alt: "Строительный баннер-сетка в Минск — «Квартиры в новостройке», текстура сетки и рендер дома",
    title: "Квартиры в новостройке",
    tag: "Баннер-сетка • Стройка • 16:9",
    desc: "Баннер-сетка для строительных объектов: меньше парусность, хорошая читаемость и презентация проекта. Подходит для ограждений и фасадов стройки.",
  },

  {
    src: "/bannery/portfolio/banner-magazina-platev.webp",
    alt: "Баннер магазина одежды в Минск — «Скидки 30%», реклама новой коллекции платьев",
    title: "Магазин одежды — скидки",
    tag: "Фасад • Акция • 16:9",
    desc: "Рекламный баннер для витрины/фасада: крупный оффер, модели и чистый дизайн. Отлично подходит для распродаж и сезонных коллекций.",
  },

  {
    src: "/bannery/portfolio/banner-strizhki-manikyur.webp",
    alt: "Ролл-ап баннер в салоне красоты в Минск — услуги «Маникюр» и «Стрижки», интерьер",
    title: "Ролл-ап для салона красоты",
    tag: "Ролл-ап • Интерьер • 9:16",
    desc: "Мобильная конструкция для торгового зала: аккуратный ролл-ап с услугами. Удобен для входной зоны, стойки администратора и акций.",
  },

  {
    src: "/bannery/portfolio/banner-detskogo-magazina.webp",
    alt: "Баннер для детского магазина в Минск — крупный план люверсов и прошитых краев, качество крепления",
    title: "Детский магазин — крепления",
    tag: "Люверсы • Прошивка • Макро",
    desc: "Крупный план показывает люверсы, прошивку и усиленный край. Это важно для долговечности баннера на улице и надежного натяжения.",
  },

  {
    src: "/bannery/portfolio/banner-avtoservisa.webp",
    alt: "Баннер автосервиса в Минск — автомобиль и услуги «Шиномонтаж, диагностика», индустриальный стиль",
    title: "Автосервис",
    tag: "Индустриальный стиль • 4:3 • Улица",
    desc: "Баннер рядом с СТО: строгий дизайн, понятные услуги и визуал автомобиля. Хорошо работает как ориентир и реклама на въезде/у ворот.",
  },
  {
    src: "/bannery/portfolio/banner-avto.webp",
    alt: "Уличный баннер для авто тематики в Минск — реклама услуг, городской фон",
    title: "Авто-баннер на улице",
    tag: "Уличная реклама • Баннер • Каркас",
    desc: "Пример баннера для авто-направления: четкая подача, видимость в потоке и понятный смысл для проезжающих и пешеходов.",
  },

  {
    src: "/bannery/portfolio/banner-avtomojki.webp",
    alt: "Баннер автомойки в Минск — вертикальная растяжка на фасаде, вечерняя подсветка",
    title: "Автомойка — фасадная растяжка",
    tag: "Вертикальный баннер • Подсветка • 9:16",
    desc: "Вертикальный баннер на фасаде: заметен издалека, особенно вечером с подсветкой. Удобно для ТЦ, автомоек и сервисных зон.",
  },
  {
    src: "/bannery/portfolio/banner-avtomojka-2.webp",
    alt: "Вертикальный баннер автомойки в Минск — динамичная перспектива снизу вверх, вечернее освещение",
    title: "Автомойка — динамичная перспектива",
    tag: "Фасад • Перспектива • 9:16",
    desc: "Съемка снизу вверх подчеркивает масштаб растяжки. Хороший вариант, когда важно выделиться на фасаде и быстро донести услугу.",
  },
];

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function BannerPortfolioGallery({ items = DEFAULT_ITEMS }) {
  const normalized = useMemo(
    () => (Array.isArray(items) && items.length ? items : DEFAULT_ITEMS),
    [items]
  );

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef(null);

  const active = normalized[activeIndex];

  const openModal = (idx) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + normalized.length) % normalized.length);
  const next = () => setActiveIndex((i) => (i + 1) % normalized.length);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, normalized.length]);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus?.();
  }, [open]);

  const telHref = `tel:${phoneNumbers.phone1Link}`;

  return (
    <section
      id="portfolio-bannery-grodno"
      className="relative overflow-hidden bg-base-100 py-12 sd:py-16"
    >
      <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container mx-auto px-0 sd:px-6">
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-500 shadow-[0_0_18px_rgba(217,70,239,0.75)]" />
            <p className="xz:text-xs text-xs sd:text-sm font-medium text-base-content/80">
              Работы • Баннеры • {CITY}
            </p>
          </div>

          <h2 className="mt-5 xz:text-xl text-2xl sd:text-4xl font-semibold leading-tight text-base-content">
            Баннеры в {CITY}: печать и изготовление
          </h2>

          <p className="mt-4 xz:text-xs text-sm sd:text-base text-base-content/70">
            Нажмите на фото, чтобы открыть просмотр.{" "}
            <span className="font-medium text-base-content">← → листают</span>, Esc
            закрывает.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sd:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {normalized.map((it, idx) => (
            <button
              key={`${it.src}-${idx}`}
              type="button"
              onClick={() => openModal(idx)}
              className="
                group relative overflow-hidden rounded-3xl
                border border-base-300 bg-base-100
                shadow-sm transition
                hover:-translate-y-0.5 hover:shadow-xl
                text-left
              "
              aria-label={`Открыть фото: ${it.title || it.alt}`}
            >
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent opacity-90" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="xz:text-xs text-sm font-semibold text-white truncate">
                      {it.title || "Проект"}
                    </p>
                    <p className="xz:text-xs text-xs text-white/80 truncate">
                      {it.tag || `Баннеры • ${CITY}`}
                    </p>
                    {it.desc ? (
                      <p className="mt-2 hidden sd:block text-xs text-white/70 line-clamp-2">
                        {it.desc}
                      </p>
                    ) : null}
                  </div>

                  <span className="badge badge-outline border-white/40 text-white/90 xz:text-xs shrink-0">
                    Смотреть
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-base-300 bg-base-100 p-6 sd:p-8 shadow-sm">
          <div className="flex flex-col gap-4 sd:flex-row sd:items-center sd:justify-between">
            <div>
              <h3 className="xz:text-base text-lg sd:text-xl font-semibold text-base-content">
                Нужен баннер под ваш размер и задачу?
              </h3>
              <p className="mt-1 xz:text-xs text-sm text-base-content/70">
                Посчитаем стоимость по размеру и макету (или сделаем дизайн), подберём
                материал, плотность, люверсы и способ крепления.
              </p>
            </div>
            <div className="flex flex-col sd:flex-row gap-2">
              <a href={telHref} className="btn btn-primary rounded-2xl">
                Позвонить
              </a>
              <a
                href={telHref}
                className="btn btn-outline rounded-2xl border-base-300"
              >
                {phoneNumbers.phone1}
              </a>
            </div>
          </div>
        </div>
      </div>

      {open && active && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center p-3 sd:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фото портфолио"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            ref={dialogRef}
            tabIndex={-1}
            className="
              relative w-full max-w-6xl overflow-hidden
              rounded-3xl border border-white/10 bg-base-100 shadow-2xl
            "
          >
            <div className="flex items-start justify-between gap-3 border-b border-base-200 px-4 sd:px-6 py-3">
              <div className="min-w-0">
                <p className="xz:text-xs text-sm font-semibold text-base-content truncate">
                  {active.title || active.alt}
                </p>
                <p className="xz:text-xs text-xs text-base-content/60 truncate">
                  {active.tag || `Баннеры • ${CITY}`}
                </p>
                {active.desc ? (
                  <p className="mt-2 sd:block xz:hidden xz:text-xs text-xs sd:text-sm text-base-content/75">
                    {active.desc}
                  </p>
                ) : null}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="btn btn-sm sd:btn-md btn-ghost rounded-2xl text-4xl text-black"
                  onClick={prev}
                  aria-label="Предыдущее фото"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="btn btn-sm sd:btn-md btn-ghost rounded-2xl text-4xl text-black"
                  onClick={next}
                  aria-label="Следующее фото"
                >
                  →
                </button>
                <button
                  type="button"
                  className="btn btn-sm sd:btn-md btn-primary rounded-2xl"
                  onClick={closeModal}
                  aria-label="Закрыть"
                >
                  Закрыть
                </button>
              </div>
            </div>

            <div className="relative bg-black">
              <div className="relative h-[68vh] min-h-[360px] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="border-t border-white/10 bg-black/40 px-4 sd:px-6 py-3 text-white">
                <div className="flex flex-col sd:flex-row sd:items-center sd:justify-between gap-2">
                  <p className="xz:text-xs text-xs text-white/80">
                    Клик по фону закрывает • Esc закрывает • ← → листают
                  </p>
                  <a
                    href={telHref}
                    className="btn btn-sm sd:btn-md rounded-2xl btn-outline border-white/25 text-white hover:border-white/40"
                    aria-label={`Позвонить ${phoneNumbers.phone1}`}
                  >
                    Заказать: {phoneNumbers.phone1}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
