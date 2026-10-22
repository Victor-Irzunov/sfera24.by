// /components/modal/Modal.jsx — ПОЛНОСТЬЮ (логика НЕ тронута, только форма внутри уже будет под стяжку)

"use client";

import { useEffect } from "react";
import FormSupport from "../Form/FormSupport";
import FormQuickCalc from "../Form/FormQuickCalc";

const Modal = ({ selectedProduct, isFormSubmitted, setIsFormSubmitted, index, consult, short }) => {
  useEffect(() => {
    const dialog = document.getElementById(`my_modal_${index}`);
    if (!dialog) return;

    const onOpen = () => {
      document.body.style.overflow = "hidden";
    };

    const onClose = () => {
      document.body.style.overflow = "";
      setIsFormSubmitted(false);
    };

    dialog.addEventListener("show", onOpen);
    dialog.addEventListener("close", onClose);

    return () => {
      dialog.removeEventListener("show", onOpen);
      dialog.removeEventListener("close", onClose);
    };
  }, [index, setIsFormSubmitted]);

  return (
    <dialog
      id={`my_modal_${index}`}
      className="
        fixed inset-0 z-1000
        m-0 p-0
        w-screen h-screen
        bg-transparent
      "
    >
      {/* BACKDROP */}
      <form method="dialog" className="fixed inset-0 bg-black/70 backdrop-blur-sm">
        <button aria-label="Закрыть" className="absolute inset-0" />
      </form>

      {/* SCROLL CONTAINER */}
      <div className="fixed inset-0 z-1001 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center px-3 py-6">
          {!isFormSubmitted ? (
            <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sd:p-8 text-black shadow-2xl">
              {/* CLOSE */}
              <form method="dialog">
                <button
                  aria-label="Закрыть"
                  className="absolute right-4 top-4 text-slate-400 hover:text-black text-xl"
                >
                  ✕
                </button>
              </form>

              <h2 className="text-center text-2xl font-semibold">
                {short ? "Быстрый расчёт" : "Оставить заявку"}
              </h2>

              <p className="mt-2 text-center text-sm text-slate-500">
                Специалист свяжется с вами в течение 10 минут
              </p>

              {consult && (
                <p className="mt-4 text-center text-xs uppercase text-emerald-600">
                  Бесплатная консультация
                </p>
              )}

              {short ? (
                <FormQuickCalc
                  selectedProduct={selectedProduct}
                  setIsFormSubmitted={setIsFormSubmitted}
                  btn="Отправить"
                />
              ) : (
                <FormSupport
                  selectedProduct={selectedProduct}
                  setIsFormSubmitted={setIsFormSubmitted}
                  btn="Отправить"
                />
              )}

              <p className="mt-4 text-center text-[11px] text-slate-400">
                Нажимая на кнопку, вы соглашаетесь с условиями обработки персональных данных.
              </p>
            </div>
          ) : (
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
              <p className="text-lg font-semibold text-emerald-600">Ваш запрос успешно отправлен!</p>
              <p className="mt-2 text-sm text-slate-600">Мы свяжемся с вами в ближайшее время.</p>

              <form method="dialog" className="mt-4">
                <button className="btn w-full rounded-full bg-primary text-black hover:bg-white border-none">
                  Закрыть
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
