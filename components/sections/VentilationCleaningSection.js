// /components/sections/VentilationCleaningSection.jsx

import Image from "next/image";

const cleaningItems = [
  {
    title: "Прочистка вентиляционных каналов",
    text: "Удаляем загрязнения, пыль, налёт и возможные засоры внутри вентканалов. Такая прочистка помогает восстановить нормальную тягу и снизить риск повторных проблем с вентиляцией.",
    points: [
      "прочистка вентиляционных каналов",
      "прочистка вентканалов",
      "чистка вентиляционных каналов",
    ],
  },
  {
    title: "Чистка вентиляции в квартире",
    text: "Если в квартире плохо работает вытяжка, появляется запах из вентиляции или есть обратная тяга, после проверки может потребоваться чистка вентиляционного канала.",
    points: [
      "чистка вентиляции в квартире",
      "прочистка вентиляции в квартире",
      "чистка вентканалов в квартире",
    ],
  },
  {
    title: "Чистка вентиляции для кафе и производства",
    text: "Для кафе, кухонь, производственных и коммерческих помещений актуальна чистка воздуховодов, вытяжки и вентиляции от жира, пыли и эксплуатационных загрязнений.",
    points: [
      "чистка вентиляции в кафе",
      "чистка вентиляции от жира",
      "чистка воздуховодов вентиляции",
    ],
  },
];

export default function VentilationCleaningSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-14 sd:py-20"
      aria-labelledby="ventilation-cleaning-title"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#2b7fff]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00AFC4]/10 blur-[90px]" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-[#00AFC4]/25 bg-[#00AFC4]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
            Дополнительные работы
          </p>

          <h2
            id="ventilation-cleaning-title"
            className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
          >
            Прочистка вентиляционных каналов и воздуховодов
          </h2>
        </div>

        {/* ===== Mobile image под заголовком ===== */}
        <div className="relative mt-7 overflow-hidden rounded-[28px] border border-slate-200 shadow-[0_16px_55px_-38px_rgba(0,0,0,0.35)] sd:hidden">
          <Image
            src="/fon/prochistka-ventilyacionnyh-kanalov-mobile.webp"
            alt="Прочистка вентиляционных каналов, чистка вентиляции в квартире и воздуховодов"
            width={900}
            height={1200}
            className="h-auto w-full object-cover"
            sizes="100vw"
          />
        </div>

        <div className="mx-auto mt-7 max-w-6xl">
          {/* ===== Desktop image с обтеканием текста ===== */}
          <div className="relative mb-5 ml-0 hidden w-full max-w-130 overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-[0_22px_70px_-42px_rgba(0,0,0,0.45)] sd:float-right sd:mb-7 sd:ml-8 sd:block">
            <Image
              src="/fon/prochistka-ventilyacionnyh-kanalov.webp"
              alt="Прочистка вентиляционных каналов и воздуховодов после проверки вентиляции"
              width={900}
              height={620}
              className="h-auto w-full object-cover"
              sizes="(min-width: 991px) 520px, 100vw"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/20 bg-black/45 px-4 py-3 text-white backdrop-blur-md">
              <p className="text-[13px] font-bold leading-snug">
                Чистка вентканалов, вытяжки и воздуховодов при слабой тяге,
                запахе или загрязнении системы.
              </p>
            </div>
          </div>

          <h3 className="text-[22px] font-black leading-tight text-slate-950 sd:text-[32px]">
            Если проверка показала загрязнение каналов, слабую тягу или запах,
            может потребоваться прочистка вентиляции
          </h3>

          <p className="mt-5 text-[16px] leading-relaxed text-slate-600 sd:text-[18px]">
            Если во время проверки выявлены загрязнения, засоры, слабая тяга
            или запах, может потребоваться прочистка вентиляционных каналов,
            чистка вытяжки, воздуховодов или системы вентиляции. Этот блок
            закрывает смежные запросы по чистке вентиляции, но не размывает
            основную страницу под проверку дымовых и вентиляционных каналов.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sd:text-[17px]">
            Прочистка помогает восстановить нормальный воздухообмен, убрать
            часть загрязнений внутри канала и снизить вероятность повторного
            появления неприятного запаха. Для квартир, кафе, производств и
            коммерческих объектов подход к чистке подбирается после осмотра.
          </p>

          <div className="clear-both" />
        </div>

        <div className="mt-9 grid gap-4 sd:grid-cols-3">
          {cleaningItems.map((item, index) => (
            <article
              key={item.title}
              className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_55px_-38px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#00AFC4]/35 sd:p-6"
            >
              <div className="absolute right-5 top-5 text-[52px] font-black leading-none text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border border-[#00AFC4]/20 bg-[#00AFC4]/10">
                <span className="h-3 w-3 rounded-full bg-[#00AFC4] shadow-[0_0_20px_rgba(0,175,196,0.7)]" />
              </div>

              <h3 className="relative text-[21px] font-black leading-tight text-slate-950 sd:text-[25px]">
                {item.title}
              </h3>

              <p className="relative mt-4 flex-1 text-[14px] leading-relaxed text-slate-600 sd:text-[15px]">
                {item.text}
              </p>

              <ul className="relative mt-5 grid gap-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-[13px] font-semibold leading-snug text-slate-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2b7fff]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#2b7fff]/15 bg-slate-50 p-5 shadow-[0_16px_55px_-42px_rgba(0,0,0,0.32)] sd:p-7">
          <div className="grid gap-5 sd:grid-cols-[1fr_auto] sd:items-center">
            <div>
              <h3 className="text-[22px] font-black leading-tight text-slate-950 sd:text-[30px]">
                Нужна чистка вентиляции после проверки?
              </h3>

              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600 sd:text-[17px]">
                Проведём осмотр, определим причину слабой тяги, запаха или
                загрязнения и подскажем, нужна ли прочистка вентиляционных
                каналов, вытяжки или воздуховодов.
              </p>
            </div>

            <a
              href="#zakhvat"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-linear-to-r from-[#2b7fff] to-[#00AFC4] px-7 text-center text-[14px] font-black text-white shadow-[0_16px_40px_rgba(0,175,196,0.28)] transition hover:scale-[1.02] sd:min-w-65"
            >
              Заказать консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}