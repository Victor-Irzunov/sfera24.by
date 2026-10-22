// /components/sections/SewerCleaningMethods.jsx — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ Секция под SEO: методы прочистки канализации
// ✅ H2 + H3 для AEO/SEO
// ✅ Изображение под заголовком
// ✅ На компьютере изображение слева и текст обтекает изображение
// ✅ На мобильной: заголовок → изображение → текст/карточки
// ✅ Без use client, без лишнего JS

import Image from "next/image";

const METHOD_IMAGE = "/fon/prochistka-kanalizacii-gidrodinamicheskaya.webp";

const SERVICES = [
  {
    title: "Устранение засоров канализации",
    text: "Прочищаем бытовые и эксплуатационные засоры в трубах, унитазах, раковинах, ваннах, душевых, стояках и выпусках канализации.",
  },
  {
    title: "Гидродинамическая прочистка",
    text: "Промываем трубы водой под высоким давлением, удаляем жир, ил, песок, налёт и плотные отложения на стенках трубопровода.",
  },
  {
    title: "Механическая прочистка тросом",
    text: "Используем сантехнический трос для локального устранения засора, когда нужно быстро восстановить нормальный слив воды.",
  },
  {
    title: "Прочистка канализации на объектах",
    text: "Работаем с квартирами, частными домами, кафе, офисами, магазинами, складами и другими коммерческими помещениями.",
  },
];

const MARKERS = [
  "засоры в трубах",
  "прочистка унитаза",
  "прочистка раковины",
  "промывка стояков",
  "гидродинамическая промывка",
  "срочный выезд по Минску",
];

export default function SewerCleaningMethods() {
  return (
    <section
      id="methods"
      className="relative overflow-hidden bg-[#F6FAFC] py-14 text-slate-950 sd:py-20"
      aria-labelledby="sewer-methods-title"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00d2ef]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4] shadow-sm">
              Методы прочистки канализации
            </p>

            <h2
              id="sewer-methods-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
            >
              Прочистка труб тросом и{" "}
              <span className="text-[#00AFC4]">
                гидродинамической промывкой
              </span>
            </h2>

            <h3 className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Подбираем способ прочистки под конкретную ситуацию: локальный
              засор можно устранить сантехническим тросом, а для сложных и
              повторяющихся засоров чаще подходит гидродинамическая прочистка
              канализации водой под высоким давлением.
            </h3>
          </div>

          <div className="mt-8 text-[15px] font-medium leading-relaxed text-slate-700 sd:text-[17px] sd:leading-[1.8]">
            <div className="mb-6 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.10)] sd:float-left sd:mb-4 sd:mr-8 sd:w-[44%] lg:w-[40%]">
              <div className="relative aspect-16/10 w-full">
                <Image
                  src={METHOD_IMAGE}
                  alt="Гидродинамическая прочистка канализации мойкой высокого давления"
                  fill
                  sizes="(max-width: 767px) 100vw, 480px"
                  className="object-cover"
                  quality={78}
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md">
                    <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#00AFC4]">
                      Высокое давление
                    </div>
                    <div className="mt-1 text-sm font-black leading-tight text-slate-950 sd:text-base">
                      Промывка труб от жира, ила, песка и плотных отложений
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              <strong className="font-black text-slate-950">
                Прочистка канализации в Минске
              </strong>{" "}
              начинается с уточнения проблемы: где появился засор, как быстро
              уходит вода, есть ли запах, подтопление или повторяющиеся
              аварийные ситуации. После этого специалист подбирает подходящий
              метод — механическую прочистку тросом или гидродинамическую
              промывку труб.
            </p>

            <p className="mt-5">
              Механический способ чаще применяют для локального устранения
              засора в раковине, ванной, унитазе, сифоне, внутренней трубе или
              небольшом участке канализации. Такой вариант подходит, когда нужно
              быстро восстановить нормальный слив воды и убрать препятствие в
              конкретной точке.
            </p>

            <p className="mt-5">
              <strong className="font-black text-slate-950">
                Гидродинамическая прочистка канализации
              </strong>{" "}
              используется при сложных засорах, жировых отложениях, иле, песке,
              налёте на стенках труб и повторяющихся проблемах со сливом. Вода
              под высоким давлением промывает трубопровод по длине участка и
              помогает восстановить его пропускную способность.
            </p>

            <div className="clear-both" />
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, idx) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#00d2ef]/35 hover:shadow-[0_22px_70px_rgba(15,23,42,0.10)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#00d2ef]/0 blur-2xl transition duration-300 group-hover:bg-[#00d2ef]/12" />

                <div className="relative">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00d2ef]/10 text-sm font-black text-[#00AFC4]">
                    {idx + 1}
                  </div>

                  <h3 className="text-lg font-black leading-tight tracking-[-0.02em] text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {MARKERS.map((marker) => (
              <span
                key={marker}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-bold text-slate-600 shadow-sm"
              >
                {marker}
              </span>
            ))}
          </div>

          <div className="sr-only">
            <h2>
              Прочистка канализации в Минске тросом и гидродинамической
              промывкой
            </h2>
            <p>
              Устранение засоров канализации в Минске, прочистка труб,
              прочистка унитаза, прочистка раковины, гидродинамическая
              прочистка канализации, промывка труб мойкой высокого давления,
              срочный выезд по Минску и Минскому району.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}