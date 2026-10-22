// /components/btn/BtnComp.jsx — ПОЛНОСТЬЮ (обновлено: единый размер шрифта/кнопки, без изменения логики)

"use client";

import { useState } from "react";
import Modal from "../modal/Modal";
import Image from "next/image";

const BtnComp = ({
  title,
  index,
  center,
  name,
  consult,
  w,
  w2,
  bg,
  small,
  img,
  short,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    const modal = document.getElementById(`my_modal_${index}`);
    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    }
  };

  // ✅ делаем размер шрифта одинаковым (в обоих вариантах)
  const sizeClass = small
    ? "h-12 px-6 text-[15px]" // было text-sm
    : "h-14 px-7 text-[15px]";

  const className = `
    btn rounded-full border-none font-extrabold
    relative overflow-hidden shadow-none
    transition-all duration-300

    ${w2 ? "w-full" : "w-full"}
    ${w ? "xz:w-full sd:w-auto" : "xz:w-full sd:w-full"}
    ${sizeClass}
    ${bg ? "bg-primary text-black" : "bg-primary text-white"}
    hover:bg-orange-700
  `;

  return (
    <>
      <div className={`flex items-center ${center ? "justify-center" : ""} xz:w-full sd:w-auto`}>
        <button onClick={() => handleOrderClick(name || title)} className={className}>
          <span className="relative z-10 flex items-center justify-center gap-3">
            {title}
            {img && <Image src="/svg/arrow-white.svg" alt="Стрелка" width={20} height={20} />}
          </span>
        </button>
      </div>

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
};

export default BtnComp;
