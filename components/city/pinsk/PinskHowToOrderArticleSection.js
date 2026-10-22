// /components/city/pinsk/PinskHowToOrderArticleSection.jsx — ПОЛНОСТЬЮ
// ✅ SEO: H2/H3, ключи “мебель на заказ / мебель под заказ / изготовление мебели” + гео “Пинск”
// ✅ AEO: структура “шаги + чек-листы + FAQ-like блоки” (короткие ответы внутри статьи)
// ✅ Perf: Server Component, один next/image, без тяжёлых либ
// ✅ UI: тёмный фон, градиенты с #16b6c6, выделенные блоки, в конце призыв с tel/мессенджерами из config

import Image from "next/image";
import config from "@/config/config";

const IMG_DESKTOP = "/fon/kak-zakazat-mebel-v-pinske.webp"; // положи в /public/fon/
const IMG_MOBILE = "/fon/kak-zakazat-mebel-v-pinske-mobile.webp"; // положи в /public/fon/

const CHECKLIST = {
  common: [
    "Размеры места установки (Ш×В×Г) или фото с рулеткой",
    "Пожелания по материалам/цвету (или 2–3 примера, что нравится)",
    "Что должно храниться внутри (полки/ящики/штанги/техника)",
    "Условия монтажа: этаж, лифт, ширина проёмов/заноса",
    "Желаемый бюджетный уровень: эконом / средний / премиум",
  ],
  kitchen: [
    "Длина по стенам + высота до потолка",
    "Где будут мойка/плита/холодильник (и размеры техники)",
    "Нужны ли выдвижные системы, карго, сушка, подсветка",
    "Материал столешницы и фартука (если есть пожелания)",
  ],
  hallway: [
    "Длина стены в прихожей + место под зеркало/сиденье",
    "Нужно ли место под обувь, верхнюю одежду, антресоль",
    "Глубина шкафа: стандарт/узкий формат",
  ],
  living: [
    "Размер ТВ + где будут розетки/кабели",
    "Сколько закрытого/открытого хранения нужно",
    "Нужны ли подсветка, витрины, стекло",
  ],
  office: [
    "Сколько рабочих мест и какая техника (ПК/МФУ/мониторы)",
    "Кабель-менеджмент (каналы/люки/органайзеры)",
    "Повышенная износостойкость столешниц/кромок",
  ],
  business: [
    "Нагрузка и поток людей (кафе/магазин/офис)",
    "Влагостойкость/чистка (фасады/столешницы)",
    "Сроки и этапность монтажа (без остановки работы)",
  ],
};

export default function PinskHowToOrderArticleSection() {
  const phone = (config?.phone1 || "").toString().trim();
  const phoneLink = (config?.phone1Link || config?.phone1 || "").toString().trim();

  const telegram = (config?.telegram || "").toString().trim();
  const whatsapp = (config?.whatsapp || "").toString().trim();
  const viber = (config?.viber || "").toString().trim();

  return (
    <section className="bg-[#060B14] py-12 sd:py-16" id="article-how-to-order-pinsk">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#070D18] shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
          {/* декоративные градиенты */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.32),transparent_62%)] blur-2xl" />
            <div className="absolute -bottom-32 -left-28 h-130 w-130 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.16),transparent_62%)] blur-2xl" />
            <div className="absolute inset-0 opacity-70 bg-[linear-gradient(135deg,rgba(22,182,198,0.10)_0%,rgba(22,182,198,0.04)_35%,rgba(255,255,255,0.02)_100%)]" />
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(1200px_circle_at_50%_20%,transparent_35%,rgba(0,0,0,.70)_100%)]" />
          </div>

          {/* header media */}
          <div className="relative">
            <div className="relative hidden sd:block h-80">
              <Image
                src={IMG_DESKTOP}
                alt="Как заказать мебель на заказ в Пинске — кухня, прихожая, гостиная, офис, кафе и магазин"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover object-center"
                quality={72}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-transparent" />
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_70%_20%,rgba(22,182,198,0.30),transparent_55%)]" />
            </div>

            <div className="relative sd:hidden h-60">
              <Image
                src={IMG_MOBILE}
                alt="Как заказать мебель на заказ в Пинске — кухня, прихожая, гостиная, офис, кафе и магазин"
                fill
                priority={false}
                sizes="100vw"
                className="object-cover object-center"
                quality={70}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/25 to-transparent" />
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(700px_circle_at_20%_20%,rgba(22,182,198,0.28),transparent_55%)]" />
            </div>

            <div className="absolute inset-0 flex items-end">
              <div className="w-full p-6 sd:p-8">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sd:text-sm text-white/90 backdrop-blur border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-[#16b6c6]" />
                  Пинск • мебель на заказ • пошаговая инструкция
                </p>

                {/* ✅ H2 */}
                <h2 className="mt-3 text-2xl sd:text-3xl font-extrabold text-white leading-tight">
                  Как заказать мебель в Пинске: кухню, прихожую, мебель в гостиную/комнату, офис, кафе или магазин
                </h2>

                <p className="mt-2 text-sm sd:text-base text-white/85 max-w-4xl">
                  Если вы ищете <strong>мебель на заказ</strong> или <strong>мебель под заказ</strong> в Пинске — важно
                  начать с правильных данных. Тогда предварительный расчёт будет точным, а изготовление и монтаж пройдут
                  без сюрпризов.
                </p>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="relative p-6 sd:p-8">
            {/* Блок 1: быстрые шаги */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sd:p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image src="/svg/steps.svg" alt="" width={22} height={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold text-white">Шаги заказа мебели под заказ в Пинске</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Мы работаем по понятному сценарию: сначала быстрый расчёт по фото и размерам, затем замер по записи,
                    проект, изготовление мебели и монтаж.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  ["1) Запрос", "Фото/пример + размеры + пожелания по материалам."],
                  ["2) Предрасчёт", "Даем вилку цены и варианты по бюджету."],
                  ["3) Замер", "Точно снимаем размеры, учитываем ниши/коммуникации."],
                  ["4) Проект + монтаж", "Согласуем и устанавливаем под ключ."],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1222] p-4"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(520px_circle_at_15%_0%,rgba(255,255,255,0.18),transparent_55%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(22,182,198,0.12),transparent_60%)]" />
                    <div className="relative">
                      <div className="text-sm font-extrabold text-white">{t}</div>
                      <div className="mt-2 text-sm text-white/80 leading-relaxed">{d}</div>
                    </div>
                    <div className="pointer-events-none absolute left-4 right-4 bottom-3 h-px bg-[linear-gradient(90deg,rgba(22,182,198,0.75),rgba(255,255,255,0.14),transparent)]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Блок 2: универсальный чек-лист */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sd:p-6 backdrop-blur">
                <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_0%_0%,rgba(22,182,198,0.22),transparent_55%)]" />
                <div className="flex items-start gap-3 relative">
                  <div className="h-11 min-w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Image src="/svg/checklist.svg" alt="" width={22} height={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      Что подготовить для точного расчёта (универсально)
                    </h3>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      Эти данные помогают точнее рассчитать <strong>изготовление мебели на заказ</strong> в Пинске ещё до
                      выезда замерщика.
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-white/85 relative">
                  {CHECKLIST.common.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Блок 3: быстрое “что вы получите” */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1222] p-5 sd:p-6">
                <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_100%_0%,rgba(22,182,198,0.22),transparent_55%)]" />
                <div className="flex items-start gap-3 relative">
                  <div className="h-11 min-w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Image src="/svg/star.svg" alt="" width={22} height={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">Что будет “в итоге”</h3>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      После согласования проекта вы получаете мебель, которая подходит по размерам, функционалу и
                      бюджету — с доставкой и монтажом.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sd:grid-cols-2 gap-3 relative">
                  {[
                    ["Проект", "Компоновка, материалы, фурнитура и визуальная логика."],
                    ["Смета", "Понятная цена: что входит и за что платите."],
                    ["Изготовление", "Аккуратная сборка и контроль по проекту."],
                    ["Монтаж", "Установка, регулировка, рекомендации по уходу."],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-extrabold text-white">{t}</div>
                      <div className="mt-2 text-sm text-white/80 leading-relaxed">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Блок 4: H3 по типам мебели (уникальные подпункты) */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 sd:p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image src="/svg/furniture.svg" alt="" width={22} height={22} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Как заказать кухню, прихожую, гостиную/комнату, офис, кафе или магазин
                  </h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Ниже — мини-чек-листы под разные задачи. Это помогает не терять время и быстрее получить точный
                    расчёт <strong>мебели под заказ</strong> в Пинске.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* кухня */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08101F] p-5" id="kukhni">
                  <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(22,182,198,0.18),transparent_60%)]" />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <Image src="/svg/kitchen.svg" alt="" width={20} height={20} />
                      <h3 className="text-base font-extrabold text-white">Кухня на заказ в Пинске</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      В кухне важны техника, вода/канализация и эргономика. Чем точнее исходные данные — тем точнее цена.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/85">
                      {CHECKLIST.kitchen.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* прихожая */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08101F] p-5">
                  <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(253,183,35,0.14),transparent_60%)]" />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <Image src="/svg/hall.svg" alt="" width={20} height={20} />
                      <h3 className="text-base font-extrabold text-white">Прихожая / мебель в нишу</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      Главная задача — компактность и удобство. Часто делаем обувницу, зеркало и место для мелочей.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/85">
                      {CHECKLIST.hallway.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* гостиная */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08101F] p-5">
                  <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(99,102,241,0.16),transparent_60%)]" />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <Image src="/svg/tv.svg" alt="" width={20} height={20} />
                      <h3 className="text-base font-extrabold text-white">Гостиная / комната (ТВ-зона, хранение)</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      Здесь важны кабели, розетки и глубина модулей. Делаем аккуратные зазоры и безопасные кромки.
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/85">
                      {CHECKLIST.living.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* офис + бизнес */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08101F] p-5" id="ofis">
                  <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(22,182,198,0.18),transparent_60%)]" />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <Image src="/svg/office.svg" alt="" width={20} height={20} />
                      <h3 className="text-base font-extrabold text-white">Офис / кафе / магазин</h3>
                    </div>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      Для коммерческих помещений важны износостойкость, простая чистка и монтаж без остановки работы.
                    </p>

                    <div className="mt-3 grid grid-cols-1 sd:grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-sm font-extrabold text-white">Офис</div>
                        <ul className="mt-2 space-y-2 text-sm text-white/85">
                          {CHECKLIST.office.map((t) => (
                            <li key={t} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                              <span className="leading-relaxed">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="text-sm font-extrabold text-white">Кафе / магазин</div>
                        <ul className="mt-2 space-y-2 text-sm text-white/85">
                          {CHECKLIST.business.map((t) => (
                            <li key={t} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16b6c6]" />
                              <span className="leading-relaxed">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-white/70">
                      <span className="font-script text-[#16b6c6] font-bold">Лайфхак:</span> если нужен монтаж “в ночь” или
                      по этапам — просто скажите, подстроимся.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-5 relative overflow-hidden rounded-2xl border border-white/10 bg-[#071022] p-6 sd:p-7">
              <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(22,182,198,0.30),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-55 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(253,183,35,0.18),transparent_60%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-60 bg-[linear-gradient(135deg,rgba(22,182,198,0.10),transparent_55%)]" />

              <div className="relative flex flex-col sd:flex-row sd:items-center sd:justify-between gap-4">
                <div>
                  <h3 className="text-xl sd:text-2xl font-extrabold text-white leading-tight">
                    Готовы заказать мебель на заказ в Пинске?
                  </h3>
                  <p className="mt-2 text-sm text-white/85 max-w-3xl">
                    Пришлите фото/пример и размеры — сделаем быстрый расчёт и запишем на замер.
                    <span className="block mt-1 text-white/70 text-xs">
                      Производство в Пинске · Доставка и монтаж по городу и области.
                    </span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={phoneLink ? `tel:${phoneLink}` : "#zakhvat"}
                    className="btn btn-primary rounded-full px-6"
                    aria-label="Позвонить"
                  >
                    {phone ? `Позвонить: ${phone}` : "Позвонить"}
                  </a>

                  {telegram ? (
                    <a
                      href={telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn rounded-full px-6 border border-white/15 bg-white/10 text-white hover:bg-white/15"
                      aria-label="Написать в Telegram"
                    >
                      Telegram
                    </a>
                  ) : null}

                 

                  {viber ? (
                    <a
                      href={viber}
                      className="btn rounded-full px-6 border border-white/15 bg-white/10 text-white hover:bg-white/15"
                      aria-label="Написать в Viber"
                    >
                      Viber
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 h-px bg-[linear-gradient(90deg,rgba(22,182,198,0.80),rgba(255,255,255,0.16),rgba(253,183,35,0.26),transparent)]" />

              <p className="mt-4 text-center text-xs text-white/70">
                <span className="font-script text-[#16b6c6] font-bold sd:text-2xl xz:text-xl">Подсказка:</span> если нет размеров — просто фото
                места установки, мы подскажем, что измерить.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}