// /components/sections/MainServicesSfera.jsx — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ Секция "Наши услуги"
// ✅ H2 + H3 для SEO/AEO
// ✅ 2 большие карточки услуг
// ✅ Изображения через /fon/...webp
// ✅ Ссылки на две SEO-страницы
// ✅ Современный светлый дизайн, адаптив под мобильную

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Проверка дымовых и вентиляционных каналов",
    text: "Проверяем техническое состояние дымовых и вентиляционных каналов, проводим испытания естественной вентиляции, измеряем тягу и оформляем необходимые документы.",
    href: "/proverka-ventilyacionnyh-i-dymovyh-kanalov",
    image: "/fon/proverka-dymovyh-i-ventilyacionnyh-kanalov.webp",
    alt: "Проверка дымовых и вентиляционных каналов специалистом Sfera24",
    icon: "ventilation",
    items: [
      "Проверка вентиляционных каналов",
      "Проверка дымовых каналов",
      "Испытания естественной вентиляции",
      "Акт проверки",
      "Для квартир и домов",
      "Для организаций",
    ],
  },
  {
    title: "Прочистка канализации",
    text: "Устраняем засоры любой сложности. Выполняем гидродинамическую промывку труб мойкой высокого давления и механическую прочистку канализации.",
    href: "/prochistka-kanalizacii",
    image: "/fon/prochistka-kanalizacii-gidrodinamicheskaya.webp",
    alt: "Гидродинамическая прочистка канализации мойкой высокого давления",
    icon: "sewer",
    items: [
      "Гидродинамическая прочистка",
      "Устранение засоров",
      "Квартиры",
      "Частные дома",
      "Коммерческие объекты",
      "Срочный выезд",
    ],
  },
];

function ServiceIcon({ type }) {
  if (type === "ventilation") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 4v7.5a5 5 0 0 0 10 0V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 18c1.25-1 2.5-1 3.75 0s2.5 1 3.75 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 21c1.25-1 2.5-1 3.75 0s2.5 1 3.75 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 4v7.5a2 2 0 0 0 4 0V4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MainServicesSfera() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-14 text-slate-950 sd:py-20"
      aria-labelledby="main-services-title"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00d2ef]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#00d2ef]/25 bg-[#00d2ef]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
            Наши услуги
          </p>

          <h2
            id="main-services-title"
            className="mt-5 text-[34px] font-black leading-[1.06] tracking-[-0.03em] text-slate-950 sd:text-[56px]"
          >
            Основные <span className="text-[#00AFC4]">услуги</span>
          </h2>

          <h3 className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
            Sfera24 выполняет проверку вентиляционных и дымовых каналов, а также
            прочистку канализации для квартир, частных домов, организаций и
            коммерческих объектов.
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sd:mt-14 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-[#F6FAFC] shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#00d2ef]/40 hover:shadow-[0_28px_90px_rgba(15,23,42,0.13)]"
            >
              <div className="relative h-64 overflow-hidden sd:h-82">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  quality={78}
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-slate-950/25 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div className="inline-flex h-15 w-15 items-center justify-center rounded-3xl border border-white/20 bg-white/90 text-[#00AFC4] shadow-lg backdrop-blur-md">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/90 px-4 py-2 text-sm font-extrabold text-slate-950 shadow-lg backdrop-blur-md transition hover:bg-[#00AFC4] hover:text-white"
                    aria-label={`Подробнее: ${service.title}`}
                  >
                    Подробнее →
                  </Link>
                </div>
              </div>

              <div className="p-5 sd:p-7">
                <h3 className="max-w-xl text-[25px] font-black leading-tight tracking-[-0.03em] text-slate-950 sd:text-[34px]">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-2xl text-[15px] font-medium leading-relaxed text-slate-600 sd:text-[17px]">
                  {service.text}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm font-bold text-slate-700"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00d2ef]/10 text-[12px] text-[#00AFC4]">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex h-13 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-extrabold text-white transition hover:bg-[#00AFC4]"
                    aria-label={`Перейти на страницу: ${service.title}`}
                  >
                    Подробнее →
                  </Link>

                  <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Sfera24.by
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#00d2ef]/0 blur-3xl transition duration-300 group-hover:bg-[#00d2ef]/12" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}