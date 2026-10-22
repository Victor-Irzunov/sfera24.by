// /components/modals/AutoOpenLoadersLeadModalTrigger.jsx — ПОЛНОСТЬЮ
// ✅ Очень лёгкий trigger
// ✅ Никакой тяжёлой формы до открытия
// ✅ Внутренняя модалка грузится только когда нужна
// ✅ Показ через 60 секунд
// ✅ Не повторяется в рамках одной вкладки
// ✅ Можно безопасно подключать только на страницах грузчиков
// ✅ Переписано под услуги грузчиков

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LoadersLeadModalInner = dynamic(
  () => import("@/components/modals/LoadersLeadModalInner"),
  { ssr: false }
);

const AUTO_OPEN_DELAY = 60 * 1000;
const SESSION_KEY = "loadersLeadModalShown";

export default function AutoOpenLoadersLeadModalTrigger({ phone, phoneLink }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = window.sessionStorage.getItem(SESSION_KEY) === "1";
    if (alreadyShown) return;

    let timerId = null;
    let idleId = null;

    const startTimer = () => {
      timerId = window.setTimeout(() => {
        setIsOpen(true);
        window.sessionStorage.setItem(SESSION_KEY, "1");
      }, AUTO_OPEN_DELAY);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startTimer);
    } else {
      startTimer();
    }

    return () => {
      if (timerId) window.clearTimeout(timerId);

      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <LoadersLeadModalInner
      phone={phone}
      phoneLink={phoneLink}
      onClose={() => setIsOpen(false)}
    />
  );
}