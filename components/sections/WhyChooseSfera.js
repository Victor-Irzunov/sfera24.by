// /components/sections/WhyChooseSfera.jsx — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ Блок: Почему выбирают Sfera24.by
// ✅ H2 + H3 для SEO/AEO
// ✅ Иконки через /svg/...svg
// ✅ Современный светлый дизайн
// ✅ Адаптив под мобильную версию

import Image from "next/image";

const ADVANTAGES = [
  {
    title: "Минск и Минская область",
    text: "Выезжаем на объекты в Минске и по Минской области: квартиры, дома, офисы, кафе, склады и производственные помещения.",
    icon: "/svg/location2.svg",
  },
  {
    title: "Современное оборудование",
    text: "Используем профессиональное оборудование для проверки каналов, диагностики вентиляции и гидродинамической прочистки труб.",
    icon: "/svg/equipment.svg",
  },
  {
    title: "Официальные документы",
    text: "По результатам работ предоставляем необходимые документы, акты и рекомендации по дальнейшей эксплуатации систем.",
    icon: "/svg/document.svg",
  },
  {
    title: "Срочный выезд",
    text: "Быстро принимаем заявку, уточняем задачу и направляем специалиста при проблемах с тягой, запахом или засором канализации.",
    icon: "/svg/time.svg",
  },
  {
    title: "Физические и юридические лица",
    text: "Работаем с частными клиентами, организациями, управляющими компаниями, торговыми и промышленными объектами.",
    icon: "/svg/users.svg",
  },
  {
    title: "Опытные специалисты",
    text: "Специалисты знают особенности вентиляционных, дымовых и канализационных систем на жилых и коммерческих объектах.",
    icon: "/svg/specialist.svg",
  },
];

export default function WhyChooseSfera() {
  return (
    <section
      className="relative overflow-hidden bg-[#F6FAFC] py-14 sd:py-20"
      aria-labelledby="why-sfera-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#00d2ef]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-slate-300/20 blur-3xl" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4] shadow-sm">
            Преимущества Sfera24.by
          </p>

          <h2
            id="why-sfera-title"
            className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
          >
            Почему выбирают{" "}
            <span className="text-[#00AFC4]">Sfera24.by</span>
          </h2>

          <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
            Проверяем вентиляционные и дымовые каналы, выполняем испытания
            естественной вентиляции и прочищаем канализацию профессиональным
            оборудованием.
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sd:mt-14 sd:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#00d2ef]/35 hover:shadow-[0_24px_70px_rgba(15,23,42,0.11)] sd:p-6"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#00d2ef]/0 blur-2xl transition duration-300 group-hover:bg-[#00d2ef]/12" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00d2ef]/10 ring-1 ring-[#00d2ef]/15 transition duration-300 group-hover:scale-105 group-hover:bg-[#00d2ef]/15">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="mb-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-500">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Sfera24
                </span>

                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-[#00AFC4] transition duration-300 group-hover:bg-[#00AFC4] group-hover:text-white">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}