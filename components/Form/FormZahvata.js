// /components/Form/FormZahvata.jsx — ПОЛНОСТЬЮ
// ✅ Только BY номер: +375 XX XXX-XX-XX
// ✅ Используем общий PhoneInput (BY) из /components/Form/MaskPhone/PhoneInput
// ✅ Поправлена валидация (12 цифр: 375 + 9)
// ✅ Остальная логика формы не тронута

"use client";

import { sendOrderTelegram } from "@/http/telegramAPI";
import Link from "next/link";
import React, { useState } from "react";
import PhoneInput from "@/components/Form/MaskPhone/PhoneInput";

const FormZahvata = ({ setIsOpen, setActiveSendForm, selectedProduct }) => {
  const [tel, setTel] = useState("+375 ");
  const [message, setMessage] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ожидаем 12 цифр: 375 + 9 (код оператора 2 цифры + номер 7 цифр)
    const telDigitsOnly = tel.replace(/\D/g, "");
    if (telDigitsOnly.length !== 12 || !telDigitsOnly.startsWith("375")) {
      setAlertText("Введите номер телефона в формате: +375 XX XXX-XX-XX");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    let messageForm = `
<b>Заявка с сайта:</b>\n
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n
<b>Сообщение:</b> ${message || "Нет дополнительных сообщений"}
`;

    sendOrderTelegram(messageForm).then((data) => {
      if (data.ok) {
        window.location.href = "/thank-you";
        setTimeout(() => setActiveSendForm(false), 4000);
        setIsOpen(false);
      }
    });
  };

  return (
    <div className="w-full">
      <form className="text-black" onSubmit={handleSubmit}>
        <div>
          <div className="form-control mt-4">
            <label className="label flex justify-between">
              <span className="label-text text-black text-xs">Имя</span>
              <span className="label-text-alt text-[10px] text-black/50">
                Необязательное поле
              </span>
            </label>
            <input
              className="input input-bordered bg-white/90 w-full text-black"
              placeholder=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Ввод имени"
            />
          </div>

          <div className="form-control mt-4">
            <label className="label flex justify-between">
              <span className="label-text text-black text-xs">
                Телефон (+375 XX XXX-XX-XX)
              </span>
              <span className="label-text-alt text-[10px] text-black/50">
                Обязательное поле
              </span>
            </label>

            <PhoneInput
              bg
              value={tel}
              onChange={setTel}
              setAlertText={setAlertText}
              setAlertActive={setAlertActive}
            />

            {alertActive && <div className="text-red-600 text-xs mt-1">{alertText}</div>}
          </div>
        </div>

        <div className="form-control mt-3">
          <label className="cursor-pointer label flex justify-start items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-sm bg-white"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="label-text ml-2 sd:text-[11px] xz:text-[9px] xy:text-[10px] text-black">
              Я согласен(на) на{" "}
              <Link href="/politika" target="_blank" className="underline text-black/50">
                обработку персональных данных
              </Link>
            </span>
          </label>
        </div>

        <div className="form-control mt-6">
          <button
            className="btn btn-primary font-bold text-white uppercase"
            type="submit"
            disabled={!agree}
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormZahvata;