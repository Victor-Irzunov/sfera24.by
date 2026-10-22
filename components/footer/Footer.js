// /components/footer/Footer.js — ПОЛНОСТЬЮ
// ✅ Серверная компонента
// ✅ Переписано под Sfera24.by
// ✅ Темы: проверка вентиляционных и дымовых каналов + прочистка канализации
// ✅ Только 4 основные страницы
// ✅ УНП полностью убран
// ✅ Без грузчиков, переездов и лишних городов
// ✅ Современный footer с SEO-ссылками и контактами

import Image from "next/image";
import Link from "next/link";
import config from "@/config/config";
import RunningLineFooter from "../runningLine/RunningLineFooter";

const BG_DESKTOP = "/fon/footer.webp";
const BG_MOBILE = "/fon/footer-mobile.webp";

const FOOTER_LINKS = [
  { label: "Главная", href: "/" },
  {
    label: "Проверка вентиляционных и дымовых каналов",
    href: "/proverka-ventilyacionnyh-i-dymovyh-kanalov",
  },
  {
    label: "Прочистка канализации",
    href: "/prochistka-kanalizacii",
  },
  { label: "Контакты", href: "/kontakty" },
];

const POPULAR_SERVICES = [
  "Проверка вентиляционных каналов",
  "Проверка дымовых каналов",
  "Испытания естественной вентиляции",
  "Акт проверки вентиляции",
  "Прочистка канализации",
  "Гидродинамическая промывка канализации",
  "Устранение засоров",
  "Мойка высокого давления",
];

const ADVANTAGES = [
  "Работаем по Минску и Минской области",
  "Современное оборудование",
  "Официальные документы",
  "Срочный выезд",
  "Для физических и юридических лиц",
  "Опытные специалисты",
];

const OBJECTS = [
  "Квартиры",
  "Частные дома",
  "Офисы",
  "Кафе и рестораны",
  "Торговые объекты",
  "Производственные помещения",
];

const VLINES = ["28.75%", "51.25%", "76.25%"];

export default function Footer() {
  const phone = config?.phone1 || "+375 29 749-38-17";
  const phoneLink = config?.phone1Link || "+375297493817";

  const BRAND = config?.brand || "Sfera24.by";
  const COMPANY_NAME = config?.companyName || "Sfera24";
  const SITE_URL = config?.siteUrl || "https://sfera24.by";
  const EMAIL = config?.email || "";
  const ADDRESS = config?.addressShort || "Минск и Минская область";
  const WORK_TIME =
    config?.workTimeFull ||
    "Приём заявок: 08:00–20:00 · Выезд по Минску и Минской области";

  const telegram = config?.telegram || "";
  const whatsapp = config?.whatsapp || "";
  const viber = config?.viber || "";

  const domain = SITE_URL.replace("https://", "")
    .replace("http://", "")
    .replace("/", "");

  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      id="contacts"
      aria-label={`Контакты — ${BRAND}`}
    >
      {/* ===== ФОН ===== */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src={BG_DESKTOP}
          alt=""
          fill
          sizes="100vw"
          className="hidden object-cover sd:block"
          quality={78}
          loading="lazy"
        />

        <Image
          src={BG_MOBILE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover sd:hidden"
          quality={72}
          loading="lazy"
        />

        <div className="absolute inset-0 bg-slate-950/32" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/10 via-slate-950/20 to-black" />

        <div className="absolute -right-28 -top-24 h-110 w-140 rounded-full bg-[#00d2ef]/14 blur-3xl" />
        <div className="absolute -left-32 -bottom-28 h-120 w-120 rounded-full bg-white/7 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] bg-size-[28px_28px]" />
      </div>

      {/* ===== КОНТЕНТ ===== */}
      <div className="relative z-10">
        <div className="h-20 sd:h-32 lg:h-40" />

        <div className="border-t border-white/15 bg-black/45 backdrop-blur-[2px]">
          <div className="container mx-auto">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                aria-hidden="true"
              >
                {VLINES.map((left) => (
                  <span
                    key={left}
                    className="absolute top-0 h-full w-px bg-white/10"
                    style={{ left }}
                  />
                ))}
              </div>

              <div className="grid gap-8 py-10 lg:grid-cols-[1.12fr_0.85fr_1fr_1fr]">
                {/* ===== COL 1 ===== */}
                <div>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-3"
                    aria-label={`На главную страницу ${BRAND}`}
                  >
                    <Image
                      src="/logo/logo-2.webp"
                      alt={`${BRAND} — проверка вентиляции и прочистка канализации`}
                      width={190}
                      height={58}
                      className="h-14 w-auto"
                      loading="lazy"
                    />
                  </Link>

                  <h3 className="mt-5 text-[26px] font-black uppercase tracking-[-0.02em] text-white sd:text-[34px]">
                    {domain}
                  </h3>

                  <p className="mt-3 max-w-md leading-relaxed text-white/82 xz:text-sm sd:text-lg">
                    Проверка вентиляционных и дымовых каналов, испытания
                    естественной вентиляции и гидродинамическая прочистка
                    канализации в Минске и Минской области.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="badge badge-outline border-white/25 text-white/80">
                      Вентиляция
                    </span>
                    <span className="badge badge-outline border-white/25 text-white/80">
                      Дымовые каналы
                    </span>
                    <span className="badge badge-outline border-white/25 text-white/80">
                      Канализация
                    </span>
                  </div>

                  <div className="mt-7 rounded-3xl border border-white/12 bg-white/6 p-5 backdrop-blur-sm">
                    <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#00d2ef]">
                      Как оставить заявку
                    </div>

                    <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-white/70">
                      <li>• Позвоните или напишите в мессенджер</li>
                      <li>• Укажите объект и нужную услугу</li>
                      <li>• Кратко опишите проблему</li>
                      <li>• Согласуем выезд специалиста</li>
                    </ul>
                  </div>
                </div>

                {/* ===== COL 2 ===== */}
                <div className="lg:pl-6">
                  <h4 className="text-[18px] font-bold text-white">
                    Страницы сайта
                  </h4>

                  <ul className="mt-5 space-y-3 text-[14px] text-white/75">
                    {FOOTER_LINKS.map((item) => (
                      <li key={`${item.href}-${item.label}`}>
                        <Link
                          href={item.href}
                          className="transition hover:text-[#00d2ef]"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 h-px bg-white/15" />

                  <div className="mt-6">
                    <h4 className="text-[16px] font-bold text-white">
                      Основные услуги
                    </h4>

                    <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-white/70">
                      {POPULAR_SERVICES.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ===== COL 3 ===== */}
                <div className="lg:pl-6">
                  <h4 className="text-[18px] font-bold text-white">
                    Где работаем
                  </h4>

                  <div className="mt-5">
                    <div className="text-[13px] text-white/65">
                      Регион обслуживания:
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="badge badge-outline border-white/25 text-white/80">
                        Минск
                      </span>
                      <span className="badge badge-outline border-white/25 text-white/80">
                        Минская область
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl border border-white/12 bg-white/6 p-5 text-[13px] leading-relaxed text-white/72 backdrop-blur-sm">
                    Работаем с жилыми, коммерческими и промышленными объектами.
                    Выполняем проверку каналов, испытания вентиляции, устранение
                    засоров и промывку труб профессиональным оборудованием.
                  </div>

                  <div className="mt-7 h-px bg-white/15" />

                  <div className="mt-6">
                    <h4 className="text-[16px] font-bold text-white">
                      Объекты
                    </h4>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {OBJECTS.map((item) => (
                        <li key={item}>
                          <span className="badge border-white/15 bg-white/8 text-white/75">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7">
                    <h4 className="text-[16px] font-bold text-white">
                      Преимущества
                    </h4>

                    <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-white/70">
                      {ADVANTAGES.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ===== COL 4 ===== */}
                <div className="lg:pl-6">
                  <h4 className="text-[18px] font-bold text-white">
                    Контакты
                  </h4>

                  <div className="mt-5 space-y-3 text-[13px] text-white/75">
                    <div>
                      Телефон:{" "}
                      <a
                        href={`tel:${phoneLink}`}
                        className="font-bold text-white transition hover:text-[#00d2ef]"
                        aria-label={`Позвонить ${phone}`}
                      >
                        {phone}
                      </a>
                    </div>

                    {EMAIL ? (
                      <div>
                        Email:{" "}
                        <a
                          href={`mailto:${EMAIL}`}
                          className="underline underline-offset-4 transition hover:text-[#00d2ef]"
                        >
                          {EMAIL}
                        </a>
                      </div>
                    ) : null}

                    <div>Регион: {ADDRESS}</div>
                    <div>Время: {WORK_TIME}</div>
                    <div>Компания: {COMPANY_NAME}</div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {telegram ? (
                      <a
                        href={telegram}
                        target="_blank"
                        rel="noreferrer"
                        className="badge badge-outline border-white/25 text-white/80 transition hover:border-[#00d2ef] hover:text-[#00d2ef]"
                        aria-label="Написать в Telegram"
                      >
                        Telegram
                      </a>
                    ) : null}

                    {whatsapp ? (
                      <a
                        href={whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="badge badge-outline border-white/25 text-white/80 transition hover:border-[#00d2ef] hover:text-[#00d2ef]"
                        aria-label="Написать в WhatsApp"
                      >
                        WhatsApp
                      </a>
                    ) : null}

                    {viber ? (
                      <a
                        href={viber}
                        className="badge badge-outline border-white/25 text-white/80 transition hover:border-[#00d2ef] hover:text-[#00d2ef]"
                        aria-label="Написать в Viber"
                      >
                        Viber
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-7 rounded-3xl border border-white/12 bg-white/6 p-5 backdrop-blur-sm">
                    <div className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#00d2ef]">
                      Оставить заявку
                    </div>

                    <p className="mt-3 text-[13px] leading-relaxed text-white/72">
                      Напишите, что нужно выполнить: проверку вентиляции,
                      проверку дымового канала, испытания естественной
                      вентиляции, прочистку канализации или гидродинамическую
                      промывку.
                    </p>

                    <a
                      href="#zahvat"
                      className="mt-5 inline-flex rounded-full border border-white/25 bg-white/8 px-5 py-2.5 text-[13px] font-bold text-white transition hover:border-[#00d2ef] hover:bg-[#00d2ef] hover:text-slate-950"
                    >
                      Оставить заявку →
                    </a>
                  </div>

                  <div className="mt-6 text-[12px] text-white/50">
                    Сайт: {domain}
                  </div>
                </div>
              </div>
            </div>

            <RunningLineFooter />

            {/* ===== НИЖНЯЯ ЧАСТЬ ===== */}
            <div className="border-t border-white/15 pb-24 pt-5 text-center text-[11px] leading-relaxed text-white/45">
              <p>Информация на сайте не является публичной офертой.</p>

              <p className="mt-2">
                {BRAND} · {new Date().getFullYear()}
              </p>

              <div className="sr-only">
                <h2>
                  Проверка вентиляционных и дымовых каналов, прочистка
                  канализации
                </h2>
                <p>
                  Sfera24.by выполняет проверку вентиляционных каналов,
                  проверку дымовых каналов, испытания систем вентиляции с
                  естественным побуждением, оформление документов по результатам
                  проверки, прочистку канализации, устранение засоров и
                  гидродинамическую промывку труб мойкой высокого давления в
                  Минске и Минской области.
                </p>
              </div>
            </div>
          </div>

          <aside className="mt-4 border-t border-white/10 pb-12 pt-4">
            <div className="container mx-auto text-center">
              <p className="text-white/40 xz:text-[10px] xz:font-light xs:text-xs xl:font-normal">
                Copyright © {new Date().getFullYear()} | Разработка
                <a
                  href="https://vi-tech.by"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00d2ef]/70 underline"
                >
                  {" "}
                  VI:TECH
                </a>
                . Информация на сайте не является публичной офертой и
                предоставляется исключительно в информационных целях.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
}