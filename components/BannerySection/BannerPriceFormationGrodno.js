// /components/sections/BannerPriceFormationGrodno.jsx — ПОЛНОСТЬЮ

import React from "react";

const CITY = "Минск";

const BannerPriceFormationGrodno = () => {
  return (
    <section className="w-full bg-[#F5F6FA] py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        {/* ШАПКА СЕКЦИИ */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white pb-8 pt-6 sd:py-8 px-5 sd:px-8 shadow-sm">
          {/* декоративные круги */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#FFD203]/40 blur-2xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-[#FFD203]/30 blur-2xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-[10px] sd:text-xs uppercase tracking-[0.18em]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FFD203]" />
              Баннерная реклама в {CITY}
            </span>

            <h2 className="mt-4 text-2xl xz:text-3xl sd:text-4xl font-semibold text-slate-900 leading-tight">
              Как формируется цена на баннер в {CITY} и от чего она зависит
            </h2>

            <h3 className="mt-3 max-w-3xl text-sm sd:text-base text-slate-600">
              Разбираем по шагам, из чего складывается стоимость изготовления и
              монтажа баннера: от материала и размеров до печати, крепления и
              сроков размещения. Статья поможет спланировать бюджет на баннерную
              рекламу и понимать, за что вы платите.
            </h3>
          </div>
        </div>

        {/* ОСНОВНАЯ СЕТКА */}
        <article className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)]">
          {/* ЛЕВАЯ КОЛОНКА – ОСНОВНОЙ ТЕКСТ */}
          <div className="space-y-8 text-sm sd:text-base leading-relaxed text-slate-700">
            {/* Блок 1 */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#FFF6C7] px-3 py-1 text-[11px] sd:text-xs font-semibold text-slate-800 mb-3">
                1. Базовые составляющие цены баннера
              </div>

              <p>
                Цена на баннер в {CITY} никогда не берётся &laquo;с потолка&raquo;.
                Она складывается из нескольких обязательных компонентов:
                <strong> материала баннерной ткани</strong>,{" "}
                <strong>площади изделия</strong>,{" "}
                <strong>типа печати</strong>,{" "}
                <strong>послепечатной обработки</strong> (люверсы, подгиб) и{" "}
                <strong>монтажных работ</strong>. Важны и дополнительные факторы:
                сложность дизайна, срочность, место размещения баннера.
              </p>

              <div className="mt-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200 px-4 py-3 text-xs sd:text-sm">
                <p className="font-mono">
                  <span className="font-semibold text-slate-900">
                    Итоговая стоимость баннера
                  </span>{" "}
                  ≈ материал + печать + обработка краёв + люверсы + монтаж
                </p>
              </div>
            </section>

            {/* Блок 2 */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#E0F2FE] px-3 py-1 text-[11px] sd:text-xs font-semibold text-sky-900 mb-3">
                2. Размер баннера и площадь
              </div>

              <p>
                <strong>Размер баннера</strong> — один из ключевых факторов цены.
                Чем больше площадь полотна, тем больше уходит материала и краски,
                тем выше итоговая стоимость. Для фасадов магазинов, торговых
                центров и строительных объектов в {CITY} часто используют баннеры
                от <strong>2×3 м</strong> до крупных полотен на весь пролёт здания.
              </p>

              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  маленькие баннеры (до 2 м²) — подходят для акций, указателей,
                  временных объявлений;
                </li>
                <li>
                  средние (от 2 до 10 м²) — классическая баннерная реклама для
                  фасадов магазинов и салонов;
                </li>
                <li>
                  крупноформатные баннеры (10+ м²) — для оформления фасадов,
                  строительных лесов, брендмауэров.
                </li>
              </ul>

              <p className="mt-3">
                При расчёте стоимости изготовление баннера в {CITY} обычно
                считают <strong>за квадратный метр</strong>, добавляя сверху
                стоимость обработки и дополнительных работ.
              </p>
            </section>

            {/* Блок 3 */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#ECFDF3] px-3 py-1 text-[11px] sd:text-xs font-semibold text-emerald-900 mb-3">
                3. Материал и плотность баннерной ткани
              </div>

              <p>
                Для наружной баннерной рекламы в {CITY} чаще всего используют{" "}
                <strong>ПВХ-баннерную ткань</strong> различной плотности.
                Плотность влияет на прочность, вес и долговечность полотна:
              </p>

              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong>Эконом-вариант</strong> — облегчённая ткань для
                  краткосрочных акций;
                </li>
                <li>
                  <strong>Стандарт 440–510 г/м²</strong> — оптимален для улицы,
                  фасадов и заборов;
                </li>
                <li>
                  <strong>Сетка (mesh)</strong> — используется на больших
                  площадях и фасадах, где важна парусность и ветровая нагрузка.
                </li>
              </ul>

              <p className="mt-3">
                Чем плотнее и долговечнее материал, тем дороже баннер. Но при
                этом он дольше сохраняет внешний вид, не рвётся и не провисает.
              </p>
            </section>

            {/* Блок 4 */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#FEE2E2] px-3 py-1 text-[11px] sd:text-xs font-semibold text-rose-900 mb-3">
                4. Качество печати и дизайн макета
              </div>

              <p>
                <strong>Печать баннера</strong> может быть стандартной или
                повышенного качества. Для акций и краткосрочной рекламы в {CITY}
                обычно достаточно стандартного разрешения, а для интерьерных
                баннеров и имиджевых проектов выбирают более детализацию.
              </p>

              <p className="mt-3">
                На цену влияет и работа дизайнера: адаптация логотипа, разработка
                макета, подготовка под печать. Грамотный макет делает{" "}
                <strong>баннер в {CITY} понятным и читаемым</strong>: крупный
                заголовок, один главный оффер, читабельный телефон и сайт.
              </p>
            </section>

            {/* Блок 5 */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#EDE9FE] px-3 py-1 text-[11px] sd:text-xs font-semibold text-indigo-900 mb-3">
                5. Обработка краёв, люверсы и крепление
              </div>

              <p>
                Чтобы баннер выдержал ветер и нагрузки, его{" "}
                <strong>обязательно усиливают</strong>: делают подгиб краёв,
                проклеивают или прошивают, устанавливают люверсы (металлические
                кольца). Всё это тоже входит в стоимость.
              </p>

              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>подгиб по периметру или только по верхнему краю;</li>
                <li>армировочная лента для больших размеров;</li>
                <li>люверсы через 30–50 см для надёжного крепления;</li>
                <li>крепёж: трос, хомуты, специальные крючки.</li>
              </ul>

              <p className="mt-3">
                Чем сложнее место крепления и выше требования к надёжности,
                тем больше времени уходит на подготовку и монтаж, а значит,
                растёт и цена баннера.
              </p>
            </section>

            {/* Блок 6 */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#FFEFD5] px-3 py-1 text-[11px] sd:text-xs font-semibold text-amber-900 mb-3">
                6. Монтаж баннера и особенности объекта
              </div>

              <p>
                <strong>Установка баннера</strong> — отдельная статья расходов.
                Один и тот же баннер можно повесить на забор за несколько минут
                или монтировать на высоте с автовышкой и промышленными
                альпинистами.
              </p>

              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>высота монтажа и необходимость спецтехники;</li>
                <li>тип поверхности: фасад, забор, стекло, каркас;</li>
                <li>доступность места: двор, проезжая часть, частная территория;</li>
                <li>нужно ли демонтировать старую рекламу.</li>
              </ul>

              <p className="mt-3">
                Всё это учитывается при расчёте стоимости работ. Поэтому
                при запросе цены на баннерную рекламу в {CITY} всегда
                спрашивают адрес и фото объекта.
              </p>
            </section>

            {/* Блок 7 – Итог */}
            <section className="rounded-3xl border border-[#FFD203]/60 bg-[#FFF9D6] p-5 sd:p-6 shadow-sm">
              <h3 className="text-lg sd:text-xl font-semibold text-slate-900">
                Итог: почему у баннеров всегда указано «от … руб.»
              </h3>
              <p className="mt-3">
                Стоимость баннера в {CITY} всегда рассчитывается индивидуально:
                слишком много факторов влияет на итоговую цену — от размера и
                материала до монтажа и срока размещения. Поэтому в прайсах
                честно указывают <strong>«от … руб. за м²»</strong>, а точную
                сумму называют после короткого брифа по вашему объекту.
              </p>
              <p className="mt-3">
                Чтобы получить корректный расчёт, достаточно отправить{" "}
                <strong>размер баннера, фото места размещения и желаемый срок</strong>
                службы. Это позволит подобрать оптимальное сочетание цены и
                качества именно под вашу задачу в {CITY}.
              </p>
            </section>
          </div>

          {/* ПРАВАЯ КОЛОНКА – РЕЗЮМЕ / ЧЕК-ЛИСТ */}
          <aside className="lg:pl-2">
            <div className="space-y-5 lg:sticky lg:top-24">
              {/* Чек-лист */}
              <div className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
                <p className="text-[11px] sd:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Кратко о главном
                </p>
                <h3 className="mt-2 text-lg sd:text-xl font-semibold text-slate-900">
                  Из чего складывается цена баннера
                </h3>
                <ul className="mt-3 space-y-2 text-xs sd:text-sm text-slate-700">
                  <li>• Размер и площадь баннера (м²)</li>
                  <li>• Плотность и тип баннерной ткани</li>
                  <li>• Качество и технология печати</li>
                  <li>• Обработка краёв, люверсы, усиление</li>
                  <li>• Сложность дизайна и макета</li>
                  <li>• Монтаж и особенности объекта</li>
                  <li>• Срочность изготовления и сезонность</li>
                </ul>
              </div>

              {/* Блок-подсказка */}
              <div className="rounded-3xl border border-[#FFD203]/60 bg-linear-to-br from-[#FFF9D6] via-[#FFF3B5] to-[#FFE77A] p-5 sd:p-6 shadow-sm">
                <h3 className="text-base sd:text-lg font-semibold text-slate-900">
                  Как сэкономить и не потерять в эффективности
                </h3>
                <ul className="mt-3 space-y-2 text-xs sd:text-sm text-slate-800">
                  <li>
                    • Чётко определите срок службы баннера: на акцию или на
                    несколько лет — от этого зависит выбор материала.
                  </li>
                  <li>
                    • Не экономьте на креплении и обработке — именно здесь
                    чаще всего рвутся дешёвые баннеры.
                  </li>
                  <li>
                    • Сразу заложите читаемый дизайн: крупный шрифт, минимум
                    текста, понятный оффер и контакты.
                  </li>
                  <li>
                    • Присылайте фото фасада — так проще подобрать оптимальный
                    формат и избежать лишних переделок.
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default BannerPriceFormationGrodno;
