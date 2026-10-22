// /components/city/brest/BrestPriceExplainerSection.jsx — ПОЛНОСТЬЮ
// ✅ Темная секция (реально тёмная) + градиенты #16b6c6
// ✅ Фон-картинка (desktop + mobile) через next/image
// ✅ Добавлено изображение возле заголовка (справа на desktop, сверху на mobile)
// ✅ Необычный дизайн: стекло, неон, “сеточка”, контрастные карточки
// ✅ Без конкретных BYN
// ✅ Perf: без "use client", фон lazy, quality умеренный

import Image from "next/image";

const ACCENT = "#16b6c6";

// ✅ Замени на свои пути
const BG_DESKTOP = "/fon/brest-price-bg.webp";
const BG_MOBILE = "/fon/brest-price-bg-mobile.webp";

// ✅ Картинка возле заголовка (поставь любую “по теме”: кухня/шкаф/фрагмент интерьера)
const HERO_SIDE_IMG = "/portfolio/mebel-v-vannuyu/10.webp";

const FACTORS = [
  {
    title: "Размеры и планировка",
    desc: "Ниши, углы, коммуникации, высота до потолка — всё влияет на сложность, раскрой и объём материалов.",
    hint: "Чем больше нестандартных узлов — тем больше точной подгонки.",
  },
  {
    title: "Материалы и фасады",
    desc: "ЛДСП/МДФ, плёнка/эмаль, стекло/шпон — разные уровни стоимости, ухода и стойкости к износу.",
    hint: "Фасады обычно сильнее всего меняют бюджет проекта.",
  },
  {
    title: "Фурнитура и механизмы",
    desc: "Петли, доводчики, направляющие, подъёмники — это комфорт, тишина и ресурс на годы.",
    hint: "Качественная фурнитура = меньше регулировок и скрипов.",
  },
  {
    title: "Комплектация",
    desc: "Подсветка, системы хранения, корзины, сушка, бутылочницы — добавляют удобство и влияют на итог.",
    hint: "Лучше выбрать 2–3 “умных” опции, чем переплатить за лишнее.",
  },
];

const EXAMPLES = [
  {
    title: "Кухня линейная ~3 м",
    desc: "Базовый формат для квартиры: эргономика, продуманная рабочая зона, надёжные механизмы.",
    note: "Цена зависит от фасадов, столешницы и встраиваемой техники (если предусмотрена).",
    bullets: ["Фасады (уровень/покрытие)", "Столешница (толщина/материал)", "Фурнитура (дотяжка/подъёмники)"],
  },
  {
    title: "Шкаф в нишу ~2.4 м",
    desc: "Встроенный шкаф до потолка с наполнением под одежду и хозяйственный блок.",
    note: "Сильнее всего влияет тип дверей и наполнение (полки/штанги/ящики).",
    bullets: ["Двери (купе/распашные)", "Наполнение (ящики/корзины)", "Подгонка под ниши/углы"],
  },
];

export default function BrestPriceExplainerSection() {
  return (
    <section
      className="relative overflow-hidden py-12 sd:py-16 text-white bg-black"
      id="brest-price"
      aria-label="Цена мебели в Бресте — из чего складывается"
    >
      {/* ===== ФОН (картинка) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Desktop */}
        <Image
          src={BG_DESKTOP}
          alt="Фон — мебель на заказ в Бресте"
          fill
          sizes="100vw"
          className="hidden sd:block object-cover object-center"
          quality={74}
          loading="lazy"
          style={{ filter: "saturate(1.05) contrast(1.08) brightness(0.85)" }}
        />
        {/* Mobile */}
        <Image
          src={BG_MOBILE}
          alt="Фон — мебель на заказ в Бресте"
          fill
          sizes="100vw"
          className="sd:hidden object-cover object-center"
          quality={68}
          loading="lazy"
          style={{ filter: "saturate(1.05) contrast(1.08) brightness(0.82)" }}
        />

        {/* ТЁМНЫЕ ОВЕРЛЕИ (чтобы фон был тёмным) */}
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/85" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(900px circle at 18% 22%, rgba(22,182,198,0.33), transparent 55%), radial-gradient(900px circle at 82% 70%, rgba(22,182,198,0.22), transparent 60%)",
          }}
        />

        {/* “сетка” */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="container mx-auto">
        {/* ===== HEADER (текст + картинка возле заголовка) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
              Брест • прозрачный расчёт • без “сюрпризов”
            </div>

            <h2 className="mt-4 text-3xl sd:text-4xl font-extrabold tracking-tight">
              Как формируется цена в Бресте
            </h2>

            <h3 className="mt-3 text-base sd:text-lg text-white/75">
              Понятно объясняем, что влияет на стоимость мебели под заказ и как выбрать комплектацию без переплат.
            </h3>

            {/* мини-подсказки */}
            <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-white/70">
              {["мебель на заказ", "мебель под заказ", "изготовление мебели", "корпусная и встроенная"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Картинка возле заголовка */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-16/10 sd:aspect-video">
                <Image
                  src={HERO_SIDE_IMG}
                  alt="Пример мебели — кухни и шкафы на заказ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                  quality={72}
                  loading="lazy"
                />
              </div>

              {/* Оверлей на изображении для “премиум” вида */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-black/10 to-black/45" />
              <div
                className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full blur-3xl opacity-35"
                style={{ background: ACCENT }}
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/85">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                  Пример работ (для визуального ориентира)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CONTENT GRID ===== */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sd:gap-6">
          {/* ЛЕВО — факторы */}
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/6 backdrop-blur-[6px] p-6 sd:p-7 shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
            <GlowBlob pos="left" />
            <GlowBlob pos="right" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sd:text-xl font-extrabold text-white">Главные факторы цены</h3>
                <p className="mt-2 text-sm text-white/70">
                  Стоимость складывается из комплектации: материалы + фурнитура + конструкция + монтаж.
                </p>
              </div>

              <span
                className="hidden sd:inline-flex shrink-0 rounded-2xl border px-3 py-2 text-[12px] font-bold"
                style={{
                  borderColor: "rgba(22,182,198,0.35)",
                  background: "linear-gradient(180deg, rgba(22,182,198,0.18), rgba(22,182,198,0.06))",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                разложим по пунктам
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {FACTORS.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-white/12 bg-black/30 p-4 hover:bg-black/36 transition"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-9 min-w-9 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: "rgba(22,182,198,0.35)",
                        background:
                          "linear-gradient(180deg, rgba(22,182,198,0.22) 0%, rgba(22,182,198,0.07) 100%)",
                      }}
                      aria-hidden="true"
                    >
                      <span className="inline-block h-2.5 min-w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                    </span>

                    <div className="min-w-0">
                      <p className="font-extrabold text-white">{f.title}</p>
                      <p className="mt-1 text-sm text-white/72 leading-relaxed">{f.desc}</p>
                      <p className="mt-2 text-xs text-white/55">
                        <span className="font-semibold" style={{ color: "rgba(22,182,198,0.95)" }}>
                          Совет:
                        </span>{" "}
                        {f.hint}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-px bg-white/10" />
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px] text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                без навязывания
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                понятная комплектация
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                срок и цена до старта
              </span>
            </div>
          </div>

          {/* ПРАВО — примеры “от” + CTA */}
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-linear-to-b from-white/7 via-white/5 to-white/6 backdrop-blur-[6px] p-6 sd:p-7 shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
            <GlowBlob pos="right" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg sd:text-xl font-extrabold text-white">Примеры, чтобы понять порядок</h3>
                <p className="mt-2 text-sm text-white/70">
                  Показываем, какие параметры сильнее всего “двигают” стоимость (без конкретных цен).
                </p>
              </div>
              <span
                className="inline-flex shrink-0 rounded-full px-3 py-1 text-[12px] font-extrabold"
                style={{
                  backgroundColor: "rgba(22,182,198,0.18)",
                  border: "1px solid rgba(22,182,198,0.35)",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                примеры “от”
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {EXAMPLES.map((e) => (
                <div key={e.title} className="rounded-2xl border border-white/12 bg-black/28 p-5">
                  <p className="text-base font-extrabold text-white">{e.title}</p>
                  <p className="mt-2 text-sm text-white/72 leading-relaxed">{e.desc}</p>

                  <div className="mt-3 grid gap-2">
                    {e.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 text-sm text-white/78">
                        <span
                          className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-white/55">{e.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/12 bg-black/30 p-5">
              <p className="text-sm text-white/80 leading-relaxed">
                Для быстрого расчёта достаточно: <b>размеров</b>, <b>фото места установки</b>, пожеланий по{" "}
                <b>фасадам</b> и <b>фурнитуре</b>.
              </p>

              <div className="mt-4 flex flex-col gap-3 sd:items-center">
                <a
                  href="#zakhvat"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 font-extrabold transition"
                  style={{
                    backgroundColor: ACCENT,
                    color: "#041f24",
                    boxShadow: "0 18px 50px rgba(22,182,198,0.35)",
                  }}
                  aria-label="Получить расчёт мебели в Бресте"
                >
                  Получить расчёт →
                </a>

                <span className="text-xs text-white/60">
                  Ответим по комплектации и срокам — без “размытых” цен.
                </span>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-[140%] -rotate-6 opacity-25 blur-2xl"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${ACCENT} 45%, transparent 100%)`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GlowBlob({ pos = "left" }) {
  const isLeft = pos === "left";
  return (
    <div
      className={`pointer-events-none absolute ${
        isLeft ? "-left-24 -top-20" : "-right-28 -top-24"
      } h-72 w-72 rounded-full blur-3xl opacity-25`}
      style={{ background: ACCENT }}
      aria-hidden="true"
    />
  );
}