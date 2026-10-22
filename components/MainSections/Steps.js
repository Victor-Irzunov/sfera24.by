// /components/MainSections/Steps.jsx — ПОЛНОСТЬЮ
// ✅ Премиум-секция "Steps": проект + строительство под ключ (Москва/МО)
// ✅ H2/H3 + AEO (короткие ответы, понятные этапы) + аккуратное закрытие кластеров (sr-only)
// ✅ Видео НЕ тормозит мобилу:
//    - client component + IntersectionObserver
//    - видео рендерится и получает src ТОЛЬКО когда секция попала в зону видимости
//    - preload="none", autoplay + loop + muted + playsInline (без кнопок)
// ✅ Изображения .webp (пути укажи; файлы добавишь в /public/steps/… и /public/video/…)

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import BtnComp from "@/components/btn/BtnComp";

const STEPS = [
  {
    n: "01",
    title: "Выезд и замер участка",
    text: "Фиксируем размеры, привязки к дому, коммуникации, доступ техники. Учитываем розу ветров и сценарий использования.",
    icon: "/svg/measure.svg",
  },
  {
    n: "02",
    title: "ТЗ + планировка + стиль",
    text: "Подбираем формат: беседка / навес / патио. Привязываем комплекс к архитектуре дома и участку, чтобы выглядело «как в журнале».",
    icon: "/svg/plan.svg",
  },
  {
    n: "03",
    title: "Проект (узлы, материалы, безопасность)",
    text: "Проектируем печной узел, дымоход, вентиляцию и примыкания. Закладываем материалы и эргономику рабочей зоны.",
    icon: "/svg/project.svg",
  },
  {
    n: "04",
    title: "Смета и договор (этапность)",
    text: "Фиксируем комплектацию, этапы и сроки. Прозрачно показываем, что влияет на цену: фундамент, кладка, отделка, коммуникации.",
    icon: "/svg/contract.svg",
  },
  {
    n: "05",
    title: "Фундамент и подготовка основания",
    text: "Основание под кирпич и конструкцию делаем по проекту — это ресурс и стабильность. Грамотно готовим площадку под навес/беседку.",
    icon: "/svg/foundation.svg",
  },
  {
    n: "06",
    title: "Кладка/монтаж комплекса",
    text: "Барбекю/мангал (кирпич/комбо), казан/коптильня — по ТЗ. Делаем аккуратные швы, правильные зазоры, надёжные узлы.",
    icon: "/svg/masonry.svg",
  },
  {
    n: "07",
    title: "Навес/беседка + коммуникации",
    text: "Каркас, кровля, свет, розетки, при необходимости — вода/мойка. Вся отделка в едином стиле.",
    icon: "/svg/canopy.svg",
  },
  {
    n: "08",
    title: "Сдача объекта и первая растопка",
    text: "Проверяем тягу, узлы, выдаём рекомендации по эксплуатации. Ваша зона готова принимать гостей.",
    icon: "/svg/finish.svg",
  },
];

function StepCard({ s }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/7">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-28 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/0 to-black/20" />
      </div>

      <div className="relative p-6 sd:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-black/30">
              {/* svg icon */}
              <Image src={s.icon} alt="Мебель под заказ" width={22} height={22} />
            </span>
            <div className="min-w-0">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                этап {s.n}
              </div>
              <h3 className="mt-1 font-brand font-semibold text-lg sd:text-xl leading-snug">
                {s.title}
              </h3>
            </div>
          </div>

          <div className="shrink-0 text-white/40 font-semibold">{s.n}</div>
        </div>

        <p className="mt-3 text-sm sd:text-[15px] text-white/75 leading-relaxed">
          {s.text}
        </p>
      </div>
    </article>
  );
}

export default function Steps() {
  // ====== Lazy video (autoplay+loop), не грузим до прокрутки ======
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          setIsInView(true);
          obs.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "220px 0px 220px 0px", // заранее подгружаем, но не на первом экране
        threshold: 0.06,
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const VIDEO = useMemo(
    () => ({
      poster: "/steps/steps-poster.webp", // добавь в /public/steps/steps-poster.webp
      mp4: "/video/steps-showreel.mp4", // добавь в /public/video/steps-showreel.mp4
    }),
    []
  );

  return (
    <section
      ref={sectionRef}
      id="steps"
      className="relative overflow-hidden bg-black text-white"
      aria-label="Этапы: проект и строительство мангальной зоны под ключ в Москве и МО"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -right-24 h-140 w-140 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-140 w-140 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] bg-size-[26px_26px]" />
      </div>

      <div className="relative container mx-auto px-4 sd:px-6 py-14 sd:py-20">
        {/* header */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="uppercase tracking-[0.24em] xz:text-[10px] sd:text-xs text-white/60">
            проектирование • строительство • под ключ • москва и мо
          </p>

          <h2 className="mt-3 font-brand font-bold xz:text-3xl sd:text-5xl leading-tight">
            Как мы делаем проект и строительство под ключ
          </h2>

          <h3 className="mt-4 xz:text-sm sd:text-lg text-white/75">
            Премиальный результат — это не «дорого», а{" "}
            <span className="text-white/90 font-semibold">грамотно спроектировано</span>:
            узлы, безопасность, пропорции и аккуратная отделка. Ниже — этапы, которые
            гарантируют качество.
          </h3>
        </div>

        {/* video + quick answers */}
        <div className="mt-10 sd:mt-12 mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-primary/14 blur-3xl" />
              <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/45" />
            </div>

            <div className="relative grid xz:grid-cols-1 sd:grid-cols-[1.05fr_0.95fr]">
              {/* VIDEO */}
              <div className="relative">
                <div className="relative h-60 sd:h-88">
                  {!isInView ? (
                    <>
                      <Image
                        src={VIDEO.poster}
                        alt="Процесс: проект и строительство зоны барбекю под ключ"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-black/35" />
                    </>
                  ) : (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      poster={VIDEO.poster}
                      playsInline
                      muted
                      loop
                      autoPlay
                      preload="none"
                    >
                      {/* если будет webm — раскомментируй */}
                      {/* <source src={VIDEO.webm} type="video/webm" /> */}
                      <source src={VIDEO.mp4} type="video/mp4" />
                    </video>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/0" />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="badge border border-white/18 bg-black/35 text-white">
                      Видео
                    </span>
                    <span className="badge border border-white/18 bg-black/35 text-white">
                      {isInView ? "Воспроизводится" : "загрузится при прокрутке"}
                    </span>
                  </div>
                </div>
              </div>

              {/* AEO quick blocks */}
              <div className="p-6 sd:p-8">
                <h3 className="font-brand font-semibold xz:text-xl sd:text-2xl">
                  Коротко: что влияет на цену и сроки
                </h3>

                <p className="mt-2 text-sm sd:text-base text-white/75 leading-relaxed">
                  Мы не “угадываем” стоимость. Смета формируется из архитектуры зоны,
                  печного узла, фундамента, отделки и коммуникаций.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Цена
                    </div>
                    <p className="mt-2 text-sm text-white/78">
                      Зависит от формата (беседка/навес/патио), типа комплекса (кирпич/комбо),
                      отделки, света/воды и сложности участка.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Сроки
                    </div>
                    <p className="mt-2 text-sm text-white/78">
                      Проект обычно 1–3 дня, строительство часто 7–21 день — зависит от объёма,
                      погодных условий и комплектации.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sd:flex-row items-center justify-start gap-3">
                  <BtnComp
                    title="Получить проект и смету"
                    index={700}
                    name="Этапы — проект и смета (мангальная зона/барбекю) Москва/МО"
                    short
                    img
                    center
                  />

                </div>

                <p className="mt-3 text-[11px] text-white/55">
                  Видео не грузится до прокрутки — не влияет на скорость первого экрана на мобильном.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* steps grid */}
        <div className="mt-12 sd:mt-16 grid xz:grid-cols-1 sd:grid-cols-2 gap-5 sd:gap-6">
          {STEPS.map((s) => (
            <StepCard key={s.n} s={s} />
          ))}
        </div>

        {/* bottom premium note */}
        <div className="mt-12 sd:mt-16 mx-auto max-w-5xl text-center">
          <div className="rounded-[28px] border border-white/12 bg-white/5 backdrop-blur-md p-6 sd:p-8">
            <h3 className="font-brand font-semibold xz:text-xl sd:text-2xl">
              Начинаем с проекта — чтобы итог был статусным, безопасным и удобным
            </h3>
            <p className="mt-2 text-sm sd:text-base text-white/75">
              Подбираем формат и материалы под участок и фасад дома. Делаем аккуратные узлы,
              правильную вентиляцию/дымоход и отделку без компромиссов.
            </p>

            <div className="mt-6 flex flex-col sd:flex-row items-center justify-center gap-3">
              <BtnComp
                title="Рассчитать стоимость"
                index={702}
                name="Расчёт стоимости — мангальная зона под ключ (Москва/МО)"
                short
                img
                center
              />
              <BtnComp
                title="Вызвать замерщика"
                index={703}
                name="Замер участка — мангальная зона/зона барбекю (Москва/МО)"
                consult
                img
                center
              />
            </div>
          </div>
        </div>

        {/* SEO: аккуратно закрываем кластеры без переспама */}
        <div className="sr-only">
          мангальная зона под ключ
          беседка с мангальной зоной под ключ
          мангальная зона с навесом под ключ
          мангальная зона под ключ цена
          беседка с мангальной зоной цена под ключ
          мангальная зона из кирпича под ключ
          мангальная зона купить под ключ
          мангальная зона на даче под ключ
          мангальная зона под ключ московская область
          строительство мангальной зоны под ключ
        </div>
      </div>
    </section>
  );
}
