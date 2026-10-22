// /components/header/Header.js — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ Без use client
// ✅ Только 4 страницы
// ✅ Белая шапка на компьютере
// ✅ Прозрачная шапка на мобильной
// ✅ Без лишних пунктов, городов, длинных описаний и мусора

import Image from "next/image";
import Link from "next/link";
import phoneNumbers from "@/config/config";

const NAV_ITEMS = [
  {
    label: "Главная",
    href: "/",
  },
  {
    label: "Проверка вентиляции",
    href: "/proverka-ventilyacionnyh-i-dymovyh-kanalov",
  },
  {
    label: "Прочистка канализации",
    href: "/prochistka-kanalizacii",
  },
  {
    label: "Контакты",
    href: "/kontakty",
  },
];

export default function Header() {
  const phone = phoneNumbers?.phone1 || "+375 29 749-38-17";
  const phoneLink = phoneNumbers?.phone1Link || "+375297493817";
  const brand = phoneNumbers?.brand || "Sfera24.by";

  const telegram = phoneNumbers?.telegram || "";
  const whatsapp = phoneNumbers?.whatsapp || "";
  const viber = phoneNumbers?.viber || "";

  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full">
      {/* ===== DESKTOP ===== */}
      <div className="sd:block xz:hidden">
        <div className="bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
          <div className="container mx-auto flex h-20 items-center justify-between gap-8 px-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={`На главную страницу ${brand}`}
            >
              <Image
                src="/logo/logo-2.webp"
                alt={`${brand} — проверка вентиляции и прочистка канализации`}
                width={190}
                height={58}
                className="h-14 w-auto"
                priority
              />
            </Link>

            <nav aria-label="Основная навигация">
              <ul className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              {telegram ? (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200"
                  aria-label="Написать в Telegram"
                >
                  <Image
                    src="/svg/telegram.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                </a>
              ) : null}

              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200"
                  aria-label="Написать в WhatsApp"
                >
                  <Image
                    src="/svg/whatsapp.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                </a>
              ) : null}

              {viber ? (
                <a
                  href={viber}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition hover:bg-slate-200"
                  aria-label="Написать в Viber"
                >
                  <Image
                    src="/svg/viber.svg"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden="true"
                  />
                </a>
              ) : null}

              <a
                href={`tel:${phoneLink}`}
                className="ml-2 inline-flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-primary hover:text-black"
                aria-label={`Позвонить ${phone}`}
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="sd:hidden xz:block">
        <div className="drawer drawer-end">
          <input
            id="mobile-nav-drawer"
            type="checkbox"
            className="drawer-toggle"
          />

          <div className="drawer-content">
            <div className="bg-transparent px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center"
                  aria-label={`На главную страницу ${brand}`}
                >
                  <Image src='/logo/logo.webp' alt='Логотип' width={200} height={100} />
                </Link>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${phoneLink}`}
                    className="inline-flex h-9 items-center justify-center rounded-2xl bg-white px-4 text-sm font-extrabold text-slate-950 shadow-lg"
                    aria-label={`Позвонить ${phone}`}
                  >
                    {phoneLink}
                  </a>

                  <label
                    htmlFor="mobile-nav-drawer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-black/25 backdrop-blur-md"
                    aria-label="Открыть меню"
                  >
                    <Image
                      src="/svg/menu.svg"
                      alt=""
                      width={22}
                      height={22}
                      aria-hidden="true"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="drawer-side z-50">
            <label
              htmlFor="mobile-nav-drawer"
              aria-label="Закрыть меню"
              className="drawer-overlay bg-slate-950/70"
            />

            <div className="flex h-full w-[86vw] max-w-88 flex-col bg-white text-slate-950">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
                <Link
                  href="/"
                  className="text-xl font-extrabold tracking-tight"
                  aria-label={`На главную страницу ${brand}`}
                >
                  {brand}
                </Link>

                <label
                  htmlFor="mobile-nav-drawer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100"
                  aria-label="Закрыть меню"
                >
                  <Image
                    src="/svg/close.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                  />
                </label>
              </div>

              <nav aria-label="Мобильная навигация" className="flex-1 px-5 py-5">
                <ul className="space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4 text-[15px] font-bold text-slate-900"
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-slate-100 px-5 pb-10">
                <a
                  href={`tel:${phoneLink}`}
                  className="flex h-13 w-full items-center justify-center rounded-2xl bg-slate-950 text-base font-extrabold text-white"
                  aria-label={`Позвонить ${phone}`}
                >
                  {phone}
                </a>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {telegram ? (
                    <a
                      href={telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 items-center justify-center rounded-2xl bg-slate-100"
                      aria-label="Telegram"
                    >
                      <Image
                        src="/svg/telegram.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}

                  {whatsapp ? (
                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 items-center justify-center rounded-2xl bg-slate-100"
                      aria-label="WhatsApp"
                    >
                      <Image
                        src="/svg/whatsapp.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}

                  {viber ? (
                    <a
                      href={viber}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 items-center justify-center rounded-2xl bg-slate-100"
                      aria-label="Viber"
                    >
                      <Image
                        src="/svg/viber.svg"
                        alt=""
                        width={18}
                        height={18}
                        aria-hidden="true"
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}