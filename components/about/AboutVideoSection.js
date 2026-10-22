// /components/about/AboutVideoSection.jsx — ПОЛНОСТЬЮ (адаптивный блок «Несколько слов о нас» с ленивой загрузкой видео)
"use client";

import { useEffect, useRef, useState } from "react";
import phoneNumbers from "@/config/config";

export default function AboutVideoSection() {
  const videoWrapperRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!videoWrapperRef.current) return;

    let observer;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // загружаем видео только один раз
          }
        },
        {
          root: null,
          threshold: 0.3,
        }
      );

      observer.observe(videoWrapperRef.current);
    } else {
      // Фолбэк для старых браузеров — просто показываем видео
      setIsInView(true);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const telHref = `tel:${phoneNumbers.phone1Link || ""}`;

  return (
    <section className="bg-black py-10 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="flex flex-col gap-8 sd:flex-row sd:items-stretch sd:gap-10">
          {/* Левая часть — видео */}
          <div
            ref={videoWrapperRef}
            className="sd:w-1/2 w-full rounded-[40px] overflow-hidden bg-black/40"
          >
            <div className="relative w-full h-full min-h-[260px] sd:min-h-[380px]">
              {isInView ? (
                <video
                  className="h-full w-full object-cover rounded-[40px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/video/video.mp4" type="video/mp4" />
                </video>
              ) : (
                // Плейсхолдер до загрузки видео
                <div className="h-full w-full rounded-[40px] bg-linear-to-br from-black via-zinc-900 to-zinc-800" />
              )}
            </div>
          </div>

          {/* Правая часть — текст */}
          <div className="sd:w-1/2 w-full text-white flex flex-col justify-between">
            <div>
              <h2 className="text-[26px] sd:text-[40px] font-extrabold leading-tight mb-4 sd:mb-6">
                Несколько слов о нас
              </h2>

              <div className="space-y-4 text-[14px] sd:text-[15px] leading-relaxed text-gray-100">
                <p>
                  Мы — профессиональная служба эвакуации автомобилей, работающая
                  в Могилёве и области. Для нас эвакуация — это помощь в сложный
                  момент, поддержка в непредвиденной ситуации и решение проблемы,
                  с которой водитель сталкивается один на один.
                </p>
                <p>
                  Наша команда — это опытные водители-эвакуаторщики, диспетчеры и
                  технические специалисты. Мы работаем круглосуточно, без
                  выходных, строго соблюдаем стандарты безопасности и аккуратно
                  обращаемся с любым автомобилем — от малолитражки до внедорожника
                  и коммерческого транспорта.
                </p>
                <p>
                  Мы ценим точность, оперативность и уважительное отношение к
                  каждому клиенту. Наша задача — не просто перевезти машину, а
                  сделать так, чтобы вы почувствовали себя спокойнее и увереннее.
                </p>
              </div>
            </div>

            {/* Кнопка с телефоном */}
            <div className="mt-6 sd:mt-8">
              <a
                href={telHref}
                className="inline-flex items-center justify-center striped-shining-button rounded-full px-8 sd:px-10 py-3 sd:py-4 text-[20px] sd:text-[24px] font-extrabold tracking-wide shadow-[0_12px_30px_rgba(96,255,30,0.45)]"
                style={{ backgroundColor: "#60FF1E", color: "#000000" }}
              >
                {phoneNumbers.phone1 || "Позвонить эвакуатору"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
