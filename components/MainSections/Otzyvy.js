// /components/MainSections/Otzyvy.jsx — ПОЛНОСТЬЮ
// ✅ Универсальная секция отзывов для двух страниц
// ✅ type="prochistka-kanalizacii"
// ✅ type="proverka-ventilyacionnyh"
// ✅ Серверный компонент
// ✅ Изображения подставляются из нужной папки

import RunningOtzyvy from "../runningOtzyvy/RunningOtzyvy";

const CONTENT = {
  "prochistka-kanalizacii": {
    title: "Отзывы о прочистке канализации",
    subtitle:
      "Клиенты делятся впечатлениями о прочистке канализации, устранении засоров и гидродинамической промывке труб.",
    label: "прочистка канализации",
  },
  "proverka-ventilyacionnyh": {
    title: "Отзывы о проверке вентиляционных и дымовых каналов",
    subtitle:
      "Отзывы клиентов, которые обращались за проверкой вентиляции, дымовых каналов и оформлением необходимых документов.",
    label: "проверка вентиляции",
  },
};

export default function Otzyvy({ type = "prochistka-kanalizacii" }) {
  const content = CONTENT[type] || CONTENT["prochistka-kanalizacii"];

  return (
    <section
      className="relative z-0 w-full overflow-hidden bg-white pb-20 pt-14 sd:pb-24 sd:pt-18"
      id="otzyvy"
      aria-labelledby="reviews-title"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00d2ef]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-slate-200/60 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-[#00d2ef]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
            Отзывы клиентов
          </p>

          <h2
            id="reviews-title"
            className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
          >
            {content.title}
          </h2>

          <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
            {content.subtitle}
          </h3>
        </div>
      </div>

      <div className="relative mt-9 sd:mt-12">
        <RunningOtzyvy type={type} label={content.label} />
      </div>
    </section>
  );
}