// /components/sections/FullCycleProductionSection.jsx — ПОЛНОСТЬЮ
// Производство изделий из искусственного и натурального камня (Минск)

import Image from "next/image";

export default function FullCycleProductionSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <header className="mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            Современное производство полного цикла
          </h2>
          <h3 className="mt-3 text-center text-base sm:text-lg text-slate-600">
            Изделия из искусственного и натурального камня — от замера и подбора
            материала до монтажа «под ключ» в Минске и области.
          </h3>
        </header>

        {/* Сетка крест-накрест на десктопе */}
        <div className="grid gap-10 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-12 lg:gap-y-12">
          {/* Текст 1 — левый верхний блок */}
          <div className="text-sm sm:text-base leading-relaxed text-slate-600 lg:order-1 lg:row-start-1 lg:col-start-1">
            <p>
              Одно из главных конкурентных преимуществ компании{" "}
              <span className="font-semibold">kvarc.by</span> — собственное
              производство и контроль качества на каждом этапе: от раскроя слэбов
              (кварц, керамогранит, мрамор, гранит, кварцит и другие породы) до
              финишной полировки, кромок и узлов примыкания.
            </p>

            <p className="mt-4">
              Мы изготавливаем изделия по индивидуальным размерам: кухонные
              столешницы, столешницы для ванной, подоконники, стеновые панели,
              ступени и элементы облицовки. Подбираем материал и фактуру под
              задачу, согласуем раскладку рисунка, делаем аккуратные стыки и
              выполняем монтаж так, чтобы изделие выглядело дорого и служило
              долго.
            </p>
          </div>

          {/* Изображение 1 — правый верхний блок */}
          <div className="lg:order-2 lg:row-start-1 lg:col-start-2">
            <div className="relative pt-4">
              {/* контейнер без overflow, чтобы была видна жёлтая плашка */}
              <div className="relative overflow-hidden rounded-xl bg-slate-100">
                <div className="relative h-64 sm:h-80 lg:h-72">
                  <Image
                    src="/images/production-stone-work.webp"
                    alt="Производство изделий из камня: обработка столешницы в цеху"
                    fill
                    sizes="(min-width: 1024px) 38rem, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Жёлтая плашка поверх нижнего края картинки */}
              <div className="pointer-events-none absolute left-8 bottom-0 translate-y-1/2 sm:left-12">
                <div className="inline-flex flex-col items-start bg-[#FFD203] px-6 py-5 text-slate-900 shadow-lg sm:px-7 sm:py-6">
                  <p className="text-xs font-medium uppercase tracking-wide">
                    Опыт производства
                  </p>
                  <p className="mt-1 text-xl font-semibold">10+ лет</p>
                </div>

                {/* треугольник */}
                <div
                  className="mx-auto h-0 w-0 border-l-18 border-r-18 border-t-24 border-l-transparent border-r-transparent border-t-[#FFD203]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Изображение 2 — левый нижний блок */}
          <div className="lg:order-3 lg:row-start-2 lg:col-start-1">
            <div className="overflow-hidden rounded-xl bg-slate-100">
              <div className="relative h-64 sm:h-80 lg:h-72">
                <Image
                  src="/images/production-stone-packaging.webp"
                  alt="Упаковка и подготовка столешницы из камня к доставке"
                  fill
                  sizes="(min-width: 1024px) 38rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Текст 2 (преимущества) — правый нижний блок */}
          <div className="border-t border-slate-200 pt-8 lg:order-4 lg:row-start-2 lg:col-start-2 lg:border-t-0 lg:pt-0 lg:self-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Пункт 1 */}
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 12a4 4 0 1 0-4-4 4.005 4.005 0 0 0 4 4Zm0 2c-4.005 0-7 1.79-7 4v1h14v-1c0-2.21-2.995-4-7-4Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Подбор материала под задачу
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Учитываем нагрузку, влагу, уход и стиль: кварц, акрил,
                    керамогранит, гранит, мрамор, кварцит и др.
                  </p>
                </div>
              </div>

              {/* Пункт 2 */}
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4 7a2 2 0 0 1 2-2h12v14H6a2 2 0 0 1-2-2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 9h6m-6 4h4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Прозрачная смета и договор
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Фиксируем объём работ, материал, сроки, доставку и монтаж — без
                    скрытых доплат.
                  </p>
                </div>
              </div>

              {/* Пункт 3 */}
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M5 12.5 9 16l10-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Кромки, стыки и финиш «премиум»
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Делаем аккуратные кромки, примыкания, вырезы, полировку/мат —
                    чтобы изделие выглядело дорого.
                  </p>
                </div>
              </div>

              {/* Пункт 4 */}
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 text-slate-500">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 7v5l3 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Сроки, доставка и монтаж
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">
                    Организуем упаковку, доставку и установку. Доводим до результата,
                    а не «до отгрузки».
                  </p>
                </div>
              </div>
            </div>

            {/* Небольшая подпись (как маркетинговый акцент) */}
            <p className="mt-8 text-xs sm:text-sm text-slate-500">
              Результат — изделие, которое выглядит как на визуализациях: ровные
              плоскости, аккуратные узлы примыкания и правильные зазоры.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
