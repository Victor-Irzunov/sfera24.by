// /components/sections/VentilationTestingSection.jsx

import Image from "next/image";

const testingItems = [
  {
    title: "Обследование вентиляционных систем",
    text: "Проводим обследование вентиляционных систем, проверяем работу вытяжной, естественной и приточно-вытяжной вентиляции.",
    points: [
      "осмотр вентиляционных каналов",
      "проверка вытяжной вентиляции",
      "диагностика естественной вентиляции",
    ],
  },
  {
    title: "Проверка эффективности работы вентиляции",
    text: "Оцениваем, насколько эффективно работает вентиляционная система, есть ли тяга, засоры, обратная тяга или нарушения воздухообмена.",
    points: [
      "проверка эффективности вентиляции",
      "проверка тяги и воздухообмена",
      "поиск причин слабой вытяжки",
    ],
  },
  {
    title: "Аэродинамические испытания вентиляции",
    text: "Для отдельных объектов могут потребоваться аэродинамические испытания вентиляционных систем, замеры вентиляции и протокол проверки.",
    points: [
      "аэродинамические испытания вентиляции",
      "замеры вентиляции",
      "протокол аэродинамических испытаний",
    ],
  },
];

const BG_DESKTOP = "/fon/obsledovanie-i-ispytaniya-ventilyacii.webp";
const BG_MOBILE = "/fon/obsledovanie-i-ispytaniya-ventilyacii-mobile.webp";

export default function VentilationTestingSection() {
  return (
    <section
      className="relative overflow-hidden py-14 text-white sd:py-20"
      aria-labelledby="ventilation-testing-title"
    >
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 991px)" srcSet={BG_DESKTOP} />

          <img
            src={BG_MOBILE}
            alt="Обследование вентиляционных систем, проверка эффективности вентиляции и аэродинамические испытания"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>

        {/* минимальное затемнение фона */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-linear-to-r from-[#03111f]/80 via-[#03111f]/35 to-[#03111f]/20" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8ff5ff] backdrop-blur-sm">
            Обследование вентиляции
          </p>

          <h2
            id="ventilation-testing-title"
            className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-white sd:text-[56px]"
          >
            Обследование и проверка эффективности вентиляции
          </h2>

          <h3 className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white/88 sd:text-xl">
            Проверяем работу вентиляционных систем, оцениваем тягу,
            воздухообмен, эффективность вытяжки и техническое состояние
            каналов. При необходимости выполняются замеры вентиляции и
            подготовка протокола проверки.
          </h3>
        </div>

        <div className="mt-10 grid gap-4 sd:grid-cols-3">
          {testingItems.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/15 bg-white/12 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/16 sd:p-6"
            >
              <div className="absolute right-5 top-5 text-[54px] font-black leading-none text-white/8">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-[#00AFC4]/35 bg-[#00AFC4]/18 shadow-[0_0_28px_rgba(0,175,196,0.22)]">
                <span className="h-3 w-3 rounded-full bg-[#00d2ef] shadow-[0_0_20px_rgba(0,210,239,0.9)]" />
              </div>

              <h3 className="relative text-[21px] font-black leading-tight text-white sd:text-[25px]">
                {item.title}
              </h3>

              <p className="relative mt-4 flex-1 text-[14px] leading-relaxed text-white/78 sd:text-[15px]">
                {item.text}
              </p>

              <ul className="relative mt-5 grid gap-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[13px] font-medium leading-snug text-white/82"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00d2ef]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-white/15 bg-white/12 p-5 backdrop-blur-md sd:p-7">
          <div className="grid gap-5 sd:grid-cols-[1fr_auto] sd:items-center">
            <div>
              <h3 className="text-[22px] font-black leading-tight text-white sd:text-[30px]">
                Нужна диагностика вентиляции на объекте?
              </h3>

              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-white/78 sd:text-[17px]">
                Выполняем обследование вентиляционных систем, проверку
                эффективности работы вентиляции, диагностику тяги, замеры
                вентиляции и испытания систем вентиляции для квартир, домов,
                организаций и коммерческих объектов.
              </p>
            </div>

            <a
              href="#zakhvat"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-linear-to-r from-[#2b7fff] to-[#00AFC4] px-7 text-center text-[14px] font-black text-white shadow-[0_16px_40px_rgba(0,175,196,0.35)] transition hover:scale-[1.02] sd:min-w-65"
            >
              Заказать обследование
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}