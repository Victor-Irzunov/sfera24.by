// /components/ui/MobileCalcEdgeButtonClient.jsx — ПОЛНОСТЬЮ

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/modal/Modal"), {
  ssr: false,
});

export default function MobileCalcEdgeButtonClient({
  index = 991,
  title = "Получить расчёт",
  name = "Быстрый расчёт",
  consult = false,
  short = true,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOpen = () => {
    setSelectedProduct(name || title);

    const modal = document.getElementById(`my_modal_${index}`);
    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label={title}
        className="
          fixed left-0 bottom-24 z-70
          flex items-center justify-center
          w-4 min-h-32
          rounded-r-[28px]
          bg-primary text-white
          shadow-[0_10px_28px_-12px_rgba(0,0,0,0.35)]
          border border-black/5 border-l-0
          active:scale-[0.98]
          transition-transform duration-200
          select-none
          sd:hidden
        "
      >
        <span
          className="
            block
            [writing-mode:vertical-rl]
            rotate-180
            text-black
            text-[11px]
            leading-none
            tracking-[0.02em]
            select-none
          "
        >
          Узнать стоимость
        </span>
      </button>

      <Modal
        selectedProduct={selectedProduct}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
        index={index}
        consult={consult}
        short={short}
      />
    </>
  );
}