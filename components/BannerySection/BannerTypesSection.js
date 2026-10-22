// /components/sections/BannerTypesSection.jsx — ПОЛНОСТЬЮ

import React from "react";
import Image from "next/image";

const CITY = "Минск";

const BannerTypesSection = () => {
  return (
    <section className="w-full bg-[#F5F6FA] py-12 sd:py-16">
      <div className="container mx-auto px-4 sd:px-6">
        {/* ШАПКА СЕКЦИИ */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white px-5 sd:px-8 py-7 sd:py-9 shadow-sm">
          {/* Декор */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#FFD203]/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-[#FFD203]/25 blur-2xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-[10px] sd:text-xs uppercase tracking-[0.18em]">
              <span className="inline-block h-2 w-2 rounded-full bg-[#FFD203]" />
              Баннерная реклама
            </span>

            <h2 className="mt-4 text-2xl xz:text-3xl sd:text-4xl font-semibold text-slate-900 leading-tight">
              Виды баннеров: какие бывают и где их используют
            </h2>

            <h3 className="mt-3 max-w-3xl text-sm sd:text-base text-slate-600">
              Баннерная реклама — один из самых гибких форматов наружной
              и интерьерной рекламы. Разберём основные виды баннеров,
              которые используют в {CITY} для магазинов, салонов, строительных
              объектов и интерьерного оформления.
            </h3>
          </div>
        </div>

        {/* ИЗОБРАЖЕНИЕ ВИДОВ БАННЕРОВ */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
            <div className="relative w-full">
              {/* ВАЖНО: используем width/height, чтобы картинка была видна */}
              <Image
                src="/NaruzhnayaReklama/vidy-bannerov.webp"
                alt="Разные виды баннеров: фасадный, над дорогой, билборд, интерьерный"
                width={1600}
                height={700}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ОСНОВНОЙ ТЕКСТ */}
        <article className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)]">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="space-y-7 text-sm sd:text-base leading-relaxed text-slate-700">
            {/* Фасадные и уличные баннеры */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#FFF6C7] px-3 py-1 text-[11px] sd:text-xs font-semibold text-slate-900 mb-3">
                Фасадные баннеры
              </div>
              <p>
                <strong>Фасадные баннеры</strong> — классический формат
                баннерной рекламы для магазинов, салонов и торговых точек.
                Такие баннеры размещают на стенах зданий, над витринами или
                рядом со входом. Они хорошо подходят для:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>объявлений о распродажах и акциях;</li>
                <li>оформления фасада без сложных конструкций;</li>
                <li>временной замены вывески при ремонте;</li>
                <li>запуска нового магазина или услуги.</li>
              </ul>
              <p className="mt-3">
                Фасадный баннер в {CITY} часто становится первым контактом
                клиента с вашим бизнесом — поэтому важно продумать дизайн:
                крупный заголовок, понятный оффер и контактные данные.
              </p>
            </section>

            {/* Баннеры через дорогу / растяжки */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#E0F2FE] px-3 py-1 text-[11px] sd:text-xs font-semibold text-sky-900 mb-3">
                Баннеры над дорогой (растяжки)
              </div>
              <p>
                <strong>Растяжки и баннеры через дорогу</strong> размещают над
                проезжей частью или на специальных опорах. Это один из самых
                заметных форматов в городской среде: баннер находится на уровне
                взгляда водителей и пешеходов.
              </p>
              <p className="mt-3">
                Такой вид баннера в {CITY} особенно эффективен для:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>массовых акций и сезонных распродаж;</li>
                <li>анонсов городских мероприятий и фестивалей;</li>
                <li>рекламы крупных торговых центров и гипермаркетов.</li>
              </ul>
              <p className="mt-3">
                Для растяжек используют прочную баннерную ткань с усиленным
                краем и надёжным креплением — конструкция должна выдерживать
                ветер и осадки.
              </p>
            </section>

            {/* Баннеры на билбордах */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#ECFDF3] px-3 py-1 text-[11px] sd:text-xs font-semibold text-emerald-900 mb-3">
                Баннеры на билбордах и щитах
              </div>
              <p>
                <strong>Билборд 3×6 м с баннером</strong> — один из самых узнаваемых
                форматов наружной рекламы. Баннер представляет собой
                сменное полотно, которое натягивается на щит.
              </p>
              <p className="mt-3">
                Этот вид баннерной рекламы используют для:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>имиджевых кампаний и продвижения бренда;</li>
                <li>рекламы автосалонов, банков, застройщиков;</li>
                <li>масштабных акций и событий.</li>
              </ul>
              <p className="mt-3">
                Билборд с баннером в {CITY} обеспечивает широкое охватное
                размещение и хорошо работает на трассах и магистралях.
              </p>
            </section>

            {/* Интерьерные баннеры */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#EDE9FE] px-3 py-1 text-[11px] sd:text-xs font-semibold text-indigo-900 mb-3">
                Интерьерные баннеры
              </div>
              <p>
                <strong>Интерьерные баннеры</strong> используют внутри торговых
                центров, шоурумов, офисов и выставочных стендов. Они печатаются
                с повышенным качеством и служат не только рекламой, но и
                элементом оформления пространства.
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>декор стен и зон ожидания;</li>
                <li>оформление выставок, презентаций, конференций;</li>
                <li>брендированные фоны для фото и видео.</li>
              </ul>
              <p className="mt-3">
                Интерьерный баннер в {CITY} часто печатают на более гладких
                материалах с точной цветопередачей, чтобы картинка выглядела
                аккуратно и премиально.
              </p>
            </section>

            {/* Ролл-апы и мобильные баннерные стенды */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#FFEFD5] px-3 py-1 text-[11px] sd:text-xs font-semibold text-amber-900 mb-3">
                Мобильные баннеры и ролл-апы
              </div>
              <p>
                <strong>Ролл-апы и мобильные баннерные стенды</strong> — удобный
                формат для тех, кто часто участвует в выставках, выездных
                презентациях и мероприятиях.
              </p>
              <p className="mt-3">
                Преимущества мобильных баннеров:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>быстрая сборка и разборка;</li>
                <li>компактное хранение и транспортировка;</li>
                <li>возможность менять полотно, сохраняя каркас.</li>
              </ul>
              <p className="mt-3">
                Ролл-ап с правильно продуманным дизайном — это аккуратная
                презентация бренда в любом месте: от торгового центра до
                деловой конференции.
              </p>
            </section>

            {/* Сетчатые баннеры и брендмауэры */}
            <section className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
              <div className="inline-flex items-center rounded-full bg-[#FEE2E2] px-3 py-1 text-[11px] sd:text-xs font-semibold text-rose-900 mb-3">
                Сетчатые баннеры и брендмауэры
              </div>
              <p>
                <strong>Сетчатые баннеры (mesh)</strong> и брендмауэры используют
                на больших фасадах и строительных лесах. За счёт структуры
                сетки такой баннер пропускает ветер и частично свет, снижая
                нагрузку на конструкцию.
              </p>
              <p className="mt-3">
                Это идеальный формат для:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>оформления зданий во время ремонта;</li>
                <li>крупноформатной имиджевой рекламы;</li>
                <li>длинных кампаний в людных местах {CITY}.</li>
              </ul>
              <p className="mt-3">
                Брендмауэр с сетчатым баннером позволяет превратить фасад
                в огромный рекламный носитель, заметный издалека.
              </p>
            </section>
          </div>

          {/* ПРАВАЯ КОЛОНКА – РЕЗЮМЕ / БЫСТРЫЕ ПОДСКАЗКИ */}
          <aside className="lg:pl-2">
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-slate-100 bg-white p-5 sd:p-6 shadow-sm">
                <p className="text-[11px] sd:text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Краткий гид
                </p>
                <h3 className="mt-2 text-lg sd:text-xl font-semibold text-slate-900">
                  Как выбрать вид баннера
                </h3>
                <ul className="mt-3 space-y-2 text-xs sd:text-sm text-slate-700">
                  <li>• Для фасада магазина — классический уличный баннер.</li>
                  <li>• Для сильного охвата — билборды и растяжки над дорогой.</li>
                  <li>• Для оформления внутри — интерьерные баннеры.</li>
                  <li>• Для мероприятий — мобильные стенды и ролл-апы.</li>
                  <li>• Для больших фасадов — сетчатые баннеры и брендмауэры.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#FFD203]/60 bg-linear-to-br from-[#FFF9D6] via-[#FFF3B5] to-[#FFE77A] p-5 sd:p-6 shadow-sm">
                <h3 className="text-base sd:text-lg font-semibold text-slate-900">
                  Виды баннеров и задачи бизнеса
                </h3>
                <p className="mt-3 text-xs sd:text-sm text-slate-800">
                  Выбор вида баннера в {CITY} зависит от локации, цели кампании
                  и бюджета. Важно не просто распечатать полотно, а подобрать
                  формат, который действительно будет заметен вашей аудитории:
                  пешеходам, водителям или посетителям внутри помещения.
                </p>
                <p className="mt-3 text-xs sd:text-sm text-slate-800">
                  Грамотная комбинация фасадных, интерьерных и уличных баннеров
                  позволяет построить целую систему коммуникации с клиентами —
                  от первого контакта на улице до оформления внутри точки
                  продаж.
                </p>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default BannerTypesSection;
