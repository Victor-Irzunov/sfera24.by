// /components/sections/EmergencySewerCleaning.jsx — ПОЛНОСТЬЮ
// ✅ Серверный компонент
// ✅ SEO-блок: срочная прочистка канализации
// ✅ H2 + H3 для AEO/SEO
// ✅ Фоновое изображение desktop + mobile
// ✅ Без use client, без лишнего JS
// ✅ Адаптив под мобильную версию
// ⚠️ Изображения:
// /public/fon/srochnaya-prochistka-kanalizacii.webp
// /public/fon/srochnaya-prochistka-kanalizacii-mobile.webp

import Image from "next/image";
import Link from "next/link";
import config from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";

const BG_DESKTOP = "/fon/srochnaya-prochistka-kanalizacii.webp";
const BG_MOBILE = "/fon/srochnaya-prochistka-kanalizacii-mobile.webp";

const PROBLEMS = [
  "вода не уходит",
  "забилась канализация",
  "засорился унитаз",
  "появился запах",
  "стоки поднимаются обратно",
  "нужен срочный выезд",
];

const STEPS = [
  {
    title: "Уточняем проблему",
    text: "Спросим, где засор: унитаз, раковина, ванна, стояк или выпуск канализации.",
  },
  {
    title: "Подбираем способ",
    text: "Определяем, что лучше использовать: сантехнический трос или гидродинамическую промывку.",
  },
  {
    title: "Выезжает мастер",
    text: "Мастер приезжает на объект, проверяет доступ и приступает к устранению засора.",
  },
];

export default function EmergencySewerCleaning() {
  const phone = config?.phone1 || "+375 29 749-38-17";
  const phoneLink = config?.phone1Link || "+375297493817";

  return (
    <section
      id="srochnaya-prochistka"
      className="relative overflow-hidden bg-slate-950 py-14 text-white sd:py-20"
      aria-labelledby="emergency-sewer-title"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 hidden sd:block">
          <Image
            src={BG_DESKTOP}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={78}
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 sd:hidden">
          <Image
            src={BG_MOBILE}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
            quality={72}
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-slate-950/72" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/40 to-slate-950/15" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-transparent to-slate-950/45" />

        <div className="absolute -left-36 top-10 h-96 w-96 rounded-full bg-[#00d2ef]/16 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-110 w-110 rounded-full bg-white/8 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.055] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] bg-size-[28px_28px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ===== LEFT ===== */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00d2ef]" />
              Срочный выезд по Минску
            </p>

            <h2
              id="emergency-sewer-title"
              className="mt-5 max-w-4xl text-[34px] font-black leading-[1.05] tracking-[-0.035em] text-white sd:text-[58px]"
            >
              Срочная прочистка{" "}
              <span className="text-[#00d2ef]">канализации</span>
            </h2>

            <h3 className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-white/80 sd:text-xl">
              Если канализация забилась внезапно, вода не уходит, появился
              неприятный запах или стоки поднимаются обратно, можно вызвать
              мастера на срочную прочистку. Быстро определяем причину засора и
              подбираем безопасный способ устранения.
            </h3>

            <div className="mt-7 flex flex-wrap gap-2">
              {PROBLEMS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[12px] font-bold text-white/85 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BtnComp
                title="Вызвать мастера"
                index={4101}
                name="Срочная прочистка канализации"
                bg
                w
              />

              <a
                href={`tel:${phoneLink}`}
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-7 text-[15px] font-black text-slate-950 shadow-lg transition hover:bg-[#00d2ef]"
                aria-label={`Позвонить для срочной прочистки канализации ${phone}`}
              >
                Позвонить: {phone}
              </a>
            </div>
          </div>

          {/* ===== RIGHT CARD ===== */}
          <div className="relative">
            <div className="rounded-[30px] border border-white/15 bg-white/10 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.35)] backdrop-blur-md sd:p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-[#00d2ef] text-slate-950 shadow-lg shadow-[#00d2ef]/20">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="m13 2-8 12h6l-1 8 9-13h-6l1-7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#00d2ef]">
                    Что делать
                  </div>
                  <h3 className="mt-1 text-2xl font-black leading-tight text-white">
                    Забился унитаз или канализация?
                  </h3>
                </div>
              </div>

              <p className="text-sm font-medium leading-relaxed text-white/72 sd:text-base">
                Не заливайте много химии и не пытайтесь разбирать трубы без
                понимания причины. Если вода стоит, поднимается обратно или
                появился сильный запах — лучше вызвать мастера.
              </p>

              <div className="mt-6 space-y-3">
                {STEPS.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-2xl border border-white/12 bg-black/25 p-4"
                  >
                    <div className="flex gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00d2ef]/15 text-sm font-black text-[#00d2ef]">
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="text-base font-black text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-white/65">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <Link
                href="#prices"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-black text-white transition hover:border-[#00d2ef] hover:bg-[#00d2ef] hover:text-slate-950"
              >
                Посмотреть цены →
              </Link>
            </div>
          </div>
        </div>

        <div className="sr-only">
          <h2>Срочная прочистка канализации в Минске</h2>
          <p>
            Срочная прочистка канализации, прочистка канализации срочно,
            забилась канализация, засорился унитаз, забился унитаз что делать,
            устранение засоров канализации в Минске, срочный выезд мастера.
          </p>
        </div>
      </div>
    </section>
  );
}