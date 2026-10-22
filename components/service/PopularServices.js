// /components/service/PopularServices.jsx — ПОЛНОСТЬЮ (автоплей + стрелки на мобилке)
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PRIMARY_COLOR = "#60FF1E";

const SERVICES = [
  {
    id: "evakuator-mogilev",
    title: "Эвакуатор Могилёв 24/7",
    priceLabel: "от",
    priceValue: "79",
    priceCurrency: "руб",
    description:
      "Круглосуточный эвакуатор по Могилёву и области: быстрый выезд, аккуратная погрузка, недорогие тарифы.",
    href: "/",
    image: "/images/services/evakuator-mogilev.webp",
    imageAlt: "Эвакуатор в Могилёве перевозит легковой автомобиль",
  },
  {
    id: "ceny-evakuatora-mogilev",
    title: "Цены на эвакуатор",
    priceLabel: "от",
    priceValue: "79",
    priceCurrency: "руб",
    description:
      "Понятные цены на эвакуатор: стоимость по городу и за город, цена за км и примеры расчёта маршрутов.",
    href: "/ceny-evakuatora-mogilev",
    image: "/images/services/ceny-evakuatora-mogilev.webp",
    imageAlt: "Таблица с ценами на услуги эвакуатора",
  },
  {
    id: "perevozka-avto-evakuatorom",
    title: "Перевозка автомобилей",
    priceLabel: "от",
    priceValue: "79",
    priceCurrency: "руб",
    description:
      "Перевозка автомобилей эвакуатором по Могилёву и всей Беларуси: город–город, доставка купленных машин.",
    href: "/perevozka-avto-evakuatorom",
    image: "/images/services/perevozka-avto-evakuatorom.webp",
    imageAlt: "Эвакуатор перевозит автомобиль по трассе",
  },
  {
    id: "evakuaciya-motociklov-mogilev",
    title: "Эвакуация мотоциклов",
    priceLabel: "от",
    priceValue: "69",
    priceCurrency: "руб",
    description:
      "Эвакуация и перевозка мотоциклов и мототехники: спортбайки, кроссовые мото, питбайки, аккуратная фиксация.",
    href: "/evakuaciya-motociklov-mogilev",
    image: "/images/services/evakuaciya-motociklov-mogilev.webp",
    imageAlt: "Мотоцикл, закреплённый на платформе эвакуатора",
  },
  {
    id: "avtopomoshch-tehpomoshch-mogilev",
    title: "Автопомощь и техпомощь",
    priceLabel: "от",
    priceValue: "49",
    priceCurrency: "руб",
    description:
      "Автопомощь и техпомощь на дороге 24/7: прикурить авто, замена колеса, подвоз топлива, мелкий ремонт.",
    href: "/avtopomoshch-tehpomoshch-mogilev",
    image: "/images/services/avtopomoshch-tehpomoshch-mogilev.webp",
    imageAlt: "Мастер оказывает техпомощь на дороге у автомобиля",
  },
  {
    id: "vnedorozhnaya-evakuaciya",
    title: "Внедорожная эвакуация",
    priceLabel: "от",
    priceValue: "69",
    priceCurrency: "руб",
    description:
      "Внедорожная эвакуация и эвакуатор с лебёдкой: выезд за город, вытаскивание авто из снега, грязи и кювета.",
    href: "/vnedorozhnaya-evakuaciya",
    image: "/images/services/vnedorozhnaya-evakuaciya.webp",
    imageAlt: "Эвакуатор с лебёдкой вытаскивает машину из грязи",
  },
];


function ServiceCard({ service }) {
  return (
    <div className="relative flex h-full flex-col rounded-[34px] bg-[#333333] text-white shadow-xl">
      {/* Картинка + плашка цены */}
      <div className="relative z-0 w-full rounded-[34px] rounded-b-none">
        <div className="relative h-[260px] w-full sd:h-[280px] rounded-t-[34px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 400px"
            className="h-full w-full object-cover"
          />
        </div>

      
        <div className="pointer-events-none z-10 absolute left-1/2 -bottom-6 flex -translate-x-1/2 items-center justify-center rounded-full bg-black px-4 py-2 text-sm sd:px-6 sd:py-3 sd:text-base">
          <span className="text-gray-200">{service.priceLabel}&nbsp;</span>
          <span className="text-lg font-extrabold tracking-wide sd:text-xl text-primary">
            {service.priceValue}
          </span>
          <span className="ml-1 text-gray-200">{service.priceCurrency}</span>
        </div>
      </div>

      {/* Текстовая часть */}
      <div className="flex flex-1 flex-col px-5 pb-8 pt-10 sd:px-6 sd:pb-10">
        <h3 className="mb-3 text-[19px] font-extrabold leading-snug sd:text-[22px]">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-300 sd:text-[15px]">
          {service.description}
        </p>
      </div>

      {/* Декоративное закругление + зелёная кнопка, как на макете */}
      <div className="absolute -bottom-2 right-0">
        <Link
          href={service.href}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-8 border-black sd:h-16 sd:w-16"
          style={{ backgroundColor: PRIMARY_COLOR }}
          aria-label={`Подробнее: ${service.title}`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5">
            <span className="block translate-x-px text-2xl text-black">
              &#8250;
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function PopularServices() {
  const [cardsPerView, setCardsPerView] = useState(1); // 1 на мобиле, 3 на sd+
  const [activePage, setActivePage] = useState(0);

  // Определяем кол-во карточек в ряду (адаптивно)
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 992) {
        // breakpoint sd
        setCardsPerView(3);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Дробим услуги на страницы (1 или 3 карточки на страницу)
  const pages = [];
  for (let i = 0; i < SERVICES.length; i += cardsPerView) {
    pages.push(SERVICES.slice(i, i + cardsPerView));
  }
  const totalPages = pages.length;

  const handleDotClick = (idx) => {
    setActivePage(idx);
  };

  const handleNext = () => {
    setActivePage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setActivePage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Если после ресайза активная страница "уехала" за пределы
  useEffect(() => {
    if (activePage >= totalPages) {
      setActivePage(0);
    }
  }, [totalPages, activePage]);

  // Автоплей: каждые 6 секунд перелистываем страницу
  useEffect(() => {
    if (totalPages <= 1) return;

    const id = setInterval(() => {
      setActivePage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(id);
  }, [totalPages]);

  return (
    <section className="bg-black py-10 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="mb-6 sd:mb-10 flex items-center justify-between gap-4">
          <h2 className="text-[26px] font-extrabold leading-tight text-white sd:text-[42px]">
            Популярные услуги
          </h2>

          {/* Стрелки навигации только на десктопе (справа от заголовка) */}
          <div className="hidden sd:flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333333] text-white"
              aria-label="Предыдущая услуга"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: PRIMARY_COLOR, color: "#000" }}
              aria-label="Следующая услуга"
            >
              ›
            </button>
          </div>
        </div>

        {/* Слайдер */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activePage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full shrink-0 pb-10">
                  <div
                    className={`grid gap-6 ${
                      cardsPerView === 3 ? "sd:grid-cols-3" : ""
                    }`}
                  >
                    {page.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Индикаторы — десктопная версия (без стрелок) */}
        <div className="mt-4 hidden items-center justify-center gap-2 sd:mt-6 sd:flex">
          {pages.map((_, idx) => {
            const isActive = idx === activePage;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                className={`h-2.5 rounded-full transition-all sd:h-3 ${
                  isActive ? "w-7" : "w-4"
                }`}
                style={{
                  backgroundColor: isActive ? PRIMARY_COLOR : "#555555",
                }}
                aria-label={`Перейти к слайду ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Мобильная навигация: стрелки + точки снизу */}
        <div className="mt-6 flex items-center justify-center gap-4 sd:hidden">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#333333] text-white"
            aria-label="Предыдущая услуга"
          >
            ‹
          </button>

          <div className="flex items-center justify-center gap-2">
            {pages.map((_, idx) => {
              const isActive = idx === activePage;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleDotClick(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    isActive ? "w-7" : "w-4"
                  }`}
                  style={{
                    backgroundColor: isActive ? PRIMARY_COLOR : "#555555",
                  }}
                  aria-label={`Перейти к слайду ${idx + 1}`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: PRIMARY_COLOR, color: "#000" }}
            aria-label="Следующая услуга"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
