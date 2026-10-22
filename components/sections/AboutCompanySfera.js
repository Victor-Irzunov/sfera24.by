// /components/sections/AboutCompanySfera.jsx — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ Секция "О компании Sfera24"
// ✅ H2 + H3 для SEO/AEO
// ✅ Изображение: /fon/about-sfera24.webp
// ✅ На компьютере изображение слева под заголовком, текст обтекает изображение
// ✅ На мобильной: заголовок → изображение → текст
// ✅ Без use client, без лишней логики

import Image from "next/image";

const ABOUT_IMAGE = "/fon/about-sfera24.webp";

const POINTS = [
  "Проверка вентиляционных каналов",
  "Проверка дымовых каналов",
  "Испытания естественной вентиляции",
  "Гидродинамическая прочистка канализации",
];

export default function AboutCompanySfera() {
  return (
    <section
      id="about-company"
      className="relative overflow-hidden bg-white py-14 text-slate-950 sd:py-20"
      aria-labelledby="about-company-title"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#00d2ef]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-slate-200/60 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-[#00d2ef]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
              О компании
            </p>

            <h2
              id="about-company-title"
              className="mt-5 text-[34px] font-black leading-[1.06] tracking-[-0.03em] text-slate-950 sd:text-[56px]"
            >
              О компании{" "}
              <span className="text-[#00AFC4]">Sfera24</span>
            </h2>

            <h3 className="mt-4 text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Специализированная компания по проверке вентиляционных и дымовых
              каналов, испытанию естественной вентиляции и прочистке
              канализации в Минске и Минской области.
            </h3>
          </div>

          <div className="mt-9 text-[15px] font-medium leading-relaxed text-slate-700 sd:text-[17px] sd:leading-[1.85]">
            <div className="mb-6 overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 shadow-[0_22px_70px_rgba(15,23,42,0.10)] sd:float-left sd:mb-4 sd:mr-8 sd:w-[43%] lg:w-[40%]">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Специалист Sfera24 выполняет проверку вентиляционных каналов и прочистку канализации"
                  fill
                  sizes="(max-width: 767px) 100vw, 460px"
                  className="object-cover"
                  quality={78}
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/20 bg-white/85 p-4 shadow-lg backdrop-blur-md">
                    <div className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#00AFC4]">
                      Sfera24
                    </div>
                    <div className="mt-1 text-sm font-black leading-tight text-slate-950 sd:text-base">
                      Безопасная работа вентиляции, дымовых каналов и
                      канализации
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              <strong className="font-black text-slate-950">Sfera24</strong> —
              специализированная компания, оказывающая услуги по проверке
              дымовых и вентиляционных каналов, испытанию систем вентиляции с
              естественным побуждением, а также гидродинамической прочистке
              канализации мойкой высокого давления. Мы работаем с квартирами,
              частными домами, жилыми комплексами, административными зданиями,
              кафе, ресторанами, торговыми, складскими и производственными
              объектами.
            </p>

            <p className="mt-5">
              В работе используем профессиональное оборудование для диагностики,
              проверки тяги, оценки состояния каналов и устранения засоров в
              трубопроводах. Специалисты выезжают на объект, определяют задачу,
              выполняют необходимые работы и дают понятные рекомендации по
              дальнейшей эксплуатации инженерных систем.
            </p>

            <p className="mt-5">
              Мы соблюдаем требования действующих нормативов и по результатам
              выполненных работ предоставляем необходимые документы. Наша цель —
              обеспечить безопасную эксплуатацию вентиляционных, дымовых и
              канализационных систем, быстро устранить проблему с тягой, запахом
              или засором и помочь клиенту избежать повторных аварийных
              ситуаций.
            </p>

            <div className="clear-both" />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {POINTS.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-slate-200 bg-[#F6FAFC] px-4 py-4 text-sm font-bold text-slate-800"
              >
                <span className="mr-2 text-[#00AFC4]">✓</span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}