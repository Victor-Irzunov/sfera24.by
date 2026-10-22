// /components/sections/CleaningMethods.jsx

import Image from "next/image";

const methods = [
  {
    title: "Механическая прочистка тросом",
    text: "Подходит для бытовых засоров в раковине, ванной, унитазе и коротких участках труб. Трос помогает пробить пробку и восстановить нормальный слив воды.",
    icon: "/svg/sewer-cable.svg",
  },
  {
    title: "Гидродинамическая промывка",
    text: "Используется при сложных засорах, жировых отложениях и длинных трубопроводах. Вода под давлением очищает внутренние стенки труб.",
    icon: "/svg/hydro-cleaning.svg",
  },
  {
    title: "Прочистка труб от жира",
    text: "Актуальна для кухни, кафе, ресторанов и коммерческих объектов, где в трубах постепенно скапливаются жир, налёт и остатки пищи.",
    icon: "/svg/grease-cleaning.svg",
  },
  {
    title: "Профилактическая чистка канализации",
    text: "Помогает избежать повторных засоров, неприятного запаха и аварийных ситуаций. Особенно полезна для старых труб и объектов с высокой нагрузкой.",
    icon: "/svg/preventive-cleaning.svg",
  },
];

export default function CleaningMethods() {
  return (
    <section
      className="relative overflow-hidden bg-[#07111f] py-14 text-white sm:py-16 lg:py-20"
      aria-labelledby="cleaning-methods-title"
    >
      <div className="absolute inset-0">
        <Image
          src="/fon/prochistka-kanalizacii-methods.webp"
          alt="Способы прочистки канализации тросом и гидродинамической промывкой"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-brrom-[#07111f] via-[#07111f]/95 to-[#0f2f4f]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            Подбор способа после осмотра
          </p>

          <h2
            id="cleaning-methods-title"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Способы прочистки канализации
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg">
            Для бытовых засоров часто используется механическая прочистка
            тросом. При сложных засорах, жировых отложениях и длинных участках
            труб применяется гидродинамическая промывка канализации. Способ
            подбирается после осмотра.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {methods.map((method, index) => (
            <article
              key={method.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div className="absolute right-4 top-4 text-5xl font-black text-white/5">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/15 ring-1 ring-cyan-300/25">
                <Image
                  src={method.icon}
                  alt=""
                  width={30}
                  height={30}
                  className="h-8 w-8 object-contain"
                />
              </div>

              <h3 className="text-xl font-extrabold leading-snug text-white">
                {method.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
                {method.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-center shadow-xl shadow-cyan-950/30 sm:p-6 lg:mt-12">
          <p className="text-base font-semibold leading-7 text-cyan-50 sm:text-lg">
            Выполняем прочистку канализации тросом, гидродинамическую прочистку
            труб, промывку канализации и чистку засоров труб на бытовых и
            коммерческих объектах.
          </p>
        </div>
      </div>
    </section>
  );
}