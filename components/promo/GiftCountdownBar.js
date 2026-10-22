// /components/promo/GiftCountdownBar.js

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PRIMARY = "#2b7fff";
const SECONDARY = "#00AFC4";
const START_SECONDS = 90;

export default function GiftCountdownBar() {
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);
  const [barVisible, setBarVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!barVisible) return;

    setSecondsLeft(START_SECONDS);

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setBarVisible(false);
          setModalOpen(true);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [barVisible]);

  const secs = String(secondsLeft % 90).padStart(2, "0");

  return (
    <>
      {/* ===== Плашка снизу — только мобилка ===== */}
      {barVisible && secondsLeft > 0 && (
        <div className="fixed bottom-10 left-3 right-3 z-40 sd:hidden">
          <div className="flex justify-start">
            <div className="relative flex items-center gap-3 rounded-[999px] border border-white/10 bg-linear-to-r from-[#06152a] via-[#020812] to-[#06222a] px-3 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.9)]">
              {/* Таймер */}
              <div
                className="flex flex-col items-center justify-center rounded-2xl border bg-black/85 px-3 py-1"
                style={{
                  borderColor: "rgba(0,175,196,0.7)",
                  boxShadow: "0 0 22px rgba(43,127,255,0.25)",
                }}
              >
                <span className="text-[8px] uppercase tracking-[0.12em] text-white/70">
                  До бонуса
                </span>

                <span
                  className="text-[18px] font-extrabold leading-none"
                  style={{ color: SECONDARY }}
                >
                  00:{secs}
                </span>
              </div>

              {/* Иконка + текст */}
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src="/svg/gift-box.svg"
                    alt="Бонус на проверку вентиляционных и дымовых каналов, прочистку канализации в Минске"
                    fill
                    className="object-contain animate-bounce"
                    sizes="40px"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[13px] font-extrabold leading-tight text-white">
                    Получите бонус
                  </span>

                  <span className="text-[10px] leading-tight text-white/70">
                    На проверку и прочистку
                  </span>
                </div>
              </div>

              {/* Закрыть */}
              <button
                type="button"
                aria-label="Скрыть предложение"
                onClick={() => setBarVisible(false)}
                className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[14px] text-white/70 hover:bg-white/20"
              >
                ×
              </button>

              {/* Свечение */}
              <div
                className="pointer-events-none absolute inset-x-6 -bottom-4 h-6 blur-xl opacity-70"
                style={{
                  background: `radial-gradient(circle at 50% 0, ${SECONDARY}, ${PRIMARY}, transparent 65%)`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ===== Модалка с бонусом — только мобилка ===== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 sd:hidden">
          <div
            className="pointer-events-none absolute -top-10 left-0 h-64 w-64 rounded-full blur-[120px] opacity-55"
            style={{ background: PRIMARY }}
          />

          <div
            className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full blur-[140px] opacity-45"
            style={{ background: SECONDARY }}
          />

          <div className="relative mx-6 w-full max-w-sm rounded-3xl border border-white/12 bg-linear-to-b from-[#071a33] via-[#030914] to-[#00141a] px-5 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.95)]">
            {/* Закрыть */}
            <button
              type="button"
              aria-label="Закрыть окно"
              onClick={() => setModalOpen(false)}
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm text-white/80 hover:bg-white/20"
            >
              ×
            </button>

            {/* Иконка */}
            <div className="mb-3 mt-1 flex justify-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border bg-black/70"
                style={{
                  borderColor: "rgba(0,175,196,0.7)",
                  boxShadow:
                    "0 0 26px rgba(43,127,255,0.45), 0 0 44px rgba(0,175,196,0.3)",
                }}
              >
                <Image
                  src="/svg/gift-box.svg"
                  alt="Бонус на услуги по проверке вентиляции, дымоходов и прочистке канализации"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="mb-2 text-center text-[22px] font-extrabold text-white sd:text-[24px]">
              Ваш бонус — скидка{" "}
              <span style={{ color: SECONDARY }}>10%</span>
            </h2>

            <p className="mb-3 text-center text-[13px] leading-relaxed text-white/80 sd:text-[14px]">
              Вы получили{" "}
              <span className="font-semibold" style={{ color: SECONDARY }}>
                скидку 10% на услуги
              </span>{" "}
              по проверке вентиляционных и дымовых каналов, а также прочистке
              канализации в Минске.
            </p>

            <div className="mt-2 rounded-2xl border border-white/12 bg-black/70 px-4 py-3">
              <p className="text-[12px] leading-relaxed text-white/70">
                При обращении{" "}
                <span className="font-semibold">напомните про скидку</span> и
                назовите кодовое слово:
              </p>

              <p
                className="mt-2 text-center text-[18px] font-extrabold uppercase tracking-[0.16em]"
                style={{ color: SECONDARY }}
              >
                СФЕРА - 10
              </p>

              <p className="mt-2 text-center text-[11px] leading-snug text-white/55">
                Менеджер применит скидку 10% к заказу на проверку каналов или
                прочистку канализации.
              </p>
            </div>

            <div className="mt-4 grid gap-2 text-[11px] text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/4 px-3 py-2">
                Проверка вентиляционных каналов
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 px-3 py-2">
                Проверка дымовых каналов
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 px-3 py-2">
                Прочистка канализации в Минске
              </div>
            </div>

            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="mt-5 w-full rounded-full px-6 py-3 text-[13px] font-extrabold tracking-wide striped-shining-button"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`,
                color: "#ffffff",
                boxShadow:
                  "0 14px 40px rgba(43,127,255,0.42), 0 10px 32px rgba(0,175,196,0.28)",
              }}
            >
              Понятно, спасибо
            </button>
          </div>
        </div>
      )}
    </>
  );
}