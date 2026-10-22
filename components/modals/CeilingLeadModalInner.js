// /components/modals/CeilingLeadModalInner.jsx — ПОЛНОСТЬЮ
// ✅ Исправлены синтаксические ошибки JSX
// ✅ Исправлены Tailwind-классы
// ✅ FormSupport грузится только при открытии
// ✅ Анимация на mobile упрощена
// ✅ Две кнопки закрытия
// ✅ Телефон снизу
// ✅ Без лишних библиотек

"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";

const FormSupport = dynamic(() => import("@/components/Form/FormSupport"), {
  ssr: false,
  loading: () => (
    <div className="rounded-[28px] border border-white/10 bg-white/6text-center text-sm text-white/70 sd:p-6">
      Загрузка формы...
    </div>
  ),
});

export default function CeilingLeadModalInner({
  phone = "+375 29 000-00-00",
  phoneLink = "+375290000000",
  onClose,
}) {
  const floatingItems = useMemo(
    () => [
      {
        id: 1,
        size: 14,
        left: 6,
        duration: 14,
        delay: 0,
        opacity: 0.14,
        rotate: 8,
        color: "rgba(253,183,35,0.24)",
      },
      {
        id: 2,
        size: 18,
        left: 15,
        duration: 16,
        delay: 1.2,
        opacity: 0.16,
        rotate: 14,
        color: "rgba(22,182,198,0.22)",
      },
      {
        id: 3,
        size: 16,
        left: 28,
        duration: 18,
        delay: 2.1,
        opacity: 0.14,
        rotate: 18,
        color: "rgba(255,105,0,0.18)",
      },
      {
        id: 4,
        size: 20,
        left: 39,
        duration: 15,
        delay: 3.2,
        opacity: 0.16,
        rotate: 22,
        color: "rgba(168,85,247,0.18)",
      },
      {
        id: 5,
        size: 22,
        left: 52,
        duration: 19,
        delay: 1.4,
        opacity: 0.14,
        rotate: 10,
        color: "rgba(255,255,255,0.10)",
      },
      {
        id: 6,
        size: 16,
        left: 65,
        duration: 17,
        delay: 2.8,
        opacity: 0.16,
        rotate: 16,
        color: "rgba(253,183,35,0.20)",
      },
      {
        id: 7,
        size: 18,
        left: 78,
        duration: 20,
        delay: 4.1,
        opacity: 0.14,
        rotate: 28,
        color: "rgba(22,182,198,0.18)",
      },
      {
        id: 8,
        size: 14,
        left: 89,
        duration: 16,
        delay: 5.2,
        opacity: 0.12,
        rotate: 6,
        color: "rgba(255,255,255,0.10)",
      },
    ],
    []
  );

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 z-999 flex items-center justify-center p-3 sd:p-5"
        aria-modal="true"
        role="dialog"
        aria-label="Закажите расчет стоимости натяжного потолка под ключ"
      >
        <button
          type="button"
          aria-label="Закрыть модальное окно"
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-[3px]"
        />

        <div className="relative z-1 max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/14 bg-[#071019] text-white shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)]">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(253,183,35,0.18),transparent_28%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(22,182,198,0.16),transparent_30%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_38%,rgba(255,255,255,0.03))]" />
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] bg-size-[22px_22px]" />

            {floatingItems.map((item) => (
              <span
                key={item.id}
                className="ceiling-floating-item absolute -bottom-12 rounded-md"
                style={{
                  left: `${item.left}%`,
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  background: item.color,
                  opacity: item.opacity,
                  animationDuration: `${item.duration}s`,
                  animationDelay: `${item.delay}s`,
                  transform: `rotate(${item.rotate}deg)`,
                  boxShadow: "0 10px 30px rgba(255,255,255,0.04)",
                  backdropFilter: "blur(2px)",
                }}
              />
            ))}

            <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-[#fdb723]/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-[#16b6c6]/16 blur-3xl" />
            <div className="absolute left-1/2 top-1/3 h-28 w-28 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="relative max-h-[92vh] overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-end border-b border-white/10 bg-[#071019]/80 px-4 py-4 backdrop-blur-md">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/12"
              >
                <span className="text-base leading-none">✕</span>
                Закрыть
              </button>
            </div>

            <div className="px-4 pb-5 pt-5 sd:px-8 sd:pb-8">
              <div className="mx-auto max-w-2xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-md">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#fdb723] shadow-[0_0_0_5px_rgba(253,183,35,0.16)]" />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    Бесплатная консультация
                  </span>
                </div>

                <h2 className="mt-5 text-[28px] font-black leading-[1.05] text-white sd:text-[44px]">
                  Закажите расчет стоимости
                  <br className="hidden sd:block" /> натяжного потолка под ключ
                </h2>

                <h3 className="mt-4 text-[15px] leading-7 text-white/78 sd:text-lg">
                  Подскажем оптимальное решение под помещение, стиль интерьера
                  и ваш бюджет.
                </h3>
              </div>

              <div className="mt-7 grid gap-3 sd:grid-cols-3">
                {[
                  "Подберем оптимальный потолок под ваш бюджет",
                  "Предложим несколько вариантов",
                  "Сделаем скидку на заказ больше 30 кв.",
                ].map((text, index) => (
                  <div
                    key={text}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] px-4 py-4 text-left backdrop-blur-md"
                  >
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl"
                      style={{
                        backgroundColor:
                          index === 0
                            ? "rgba(253,183,35,0.16)"
                            : index === 1
                            ? "rgba(22,182,198,0.14)"
                            : "rgba(168,85,247,0.14)",
                      }}
                    />
                    <div className="relative flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-2.5 w-2.5 min-w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            index === 0
                              ? "#fdb723"
                              : index === 1
                              ? "#16b6c6"
                              : "#a855f7",
                        }}
                      />
                      <p className="text-sm leading-6 text-white/82">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[28px] border border-white/10 bg-white/6 p-4 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.7)] backdrop-blur-md sd:p-6">
                <FormSupport
                  selectedProduct="Расчет стоимости натяжного потолка под ключ"
                  closeModal={onClose}
                  btn="Получить расчет"
                  exit
                />
              </div>

              <div className="mt-6 flex flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/12"
                >
                  Закрыть окно
                </button>

                <a
                  href={`tel:${phoneLink}`}
                  className="text-center"
                  aria-label={`Позвонить по номеру ${phone}`}
                >
                  <span className="block text-[12px] uppercase tracking-[0.18em] text-white/50">
                    Или позвоните
                  </span>
                  <span className="mt-1 inline-block bg-linear-to-r from-[#fdb723] via-white to-[#16b6c6] bg-clip-text text-[24px] font-black text-transparent sd:text-[30px]">
                    {phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ceilingFloat {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate3d(18px, -45vh, 0) rotate(120deg);
            opacity: 0.9;
          }
          100% {
            transform: translate3d(-12px, -100vh, 0) rotate(260deg);
            opacity: 0;
          }
        }

        .ceiling-floating-item {
          animation-name: ceilingFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @media (max-width: 768px) {
          .ceiling-floating-item:nth-of-type(n + 5) {
            display: none;
          }

          .ceiling-floating-item {
            animation-duration: 18s !important;
            opacity: 0.1 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ceiling-floating-item {
            animation: none !important;
            opacity: 0.08 !important;
          }
        }
      `}</style>
    </>
  );
}