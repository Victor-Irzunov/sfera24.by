// /components/Form/FormSupport.js

"use client";

import { useState } from "react";
import Link from "next/link";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "./MaskPhone/PhoneInput";

const FormSupport = ({ selectedProduct, closeModal, setIsFormSubmitted, btn = "Отправить", exit }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("+375 ");
  const [message, setMessage] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telDigitsOnly = tel.replace(/\D/g, "");
    if (telDigitsOnly.length !== 12) {
      setAlertText("Введите номер телефона в формате: +375 XX XXX-XX-XX");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    const title = selectedProduct || "Заявка с сайта";

    const messageForm = `
<b>Заявка с сайта </b>
<b>${title}</b>
<b>Имя:</b> ${name || "Не указано"}
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>
<b>Сообщение:</b> ${message || "Нет дополнительных сообщений"}
`;

    try {
      const data = await sendOrderTelegram(messageForm);
      if (data?.ok) {
				window.location.href = '/thank-you';
        if (exit && closeModal) setTimeout(() => closeModal(), 2000);
      } else {
        setAlertText("Ошибка отправки. Попробуйте ещё раз.");
        setAlertActive(true);
        setTimeout(() => setAlertActive(false), 4000);
      }
    } catch (err) {
      setAlertText("Ошибка отправки. Попробуйте ещё раз.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
    }
  };

  return (
    <div className="mt-6 w-full sd:px-6 xz:px-0">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Имя */}
        <div className="form-control">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Как к вам обращаться?</span>
            <span className="label-text-alt text-[10px] text-slate-400">Необязательное</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full border border-slate-300 bg-white text-black"
            placeholder="Ваше имя"
          />
        </div>

        {/* Телефон */}
        <div className="form-control">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Номер телефона</span>
            <span className="label-text-alt text-[10px] text-slate-400">Обязательное</span>
          </label>
          <PhoneInput
            value={tel}
            onChange={setTel}
            setAlertText={setAlertText}
            setAlertActive={setAlertActive}
            bg
            border
          />
          {alertActive && <div className="mt-1 text-xs text-red-600">{alertText}</div>}
        </div>

        {/* Сообщение */}
        <div className="form-control">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Сообщение</span>
            <span className="label-text-alt text-[10px] text-slate-400">Необязательное</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-full border border-slate-300 bg-white text-black"
            placeholder="Кратко: ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Согласие */}
        <div className="form-control">
          <label className="label cursor-pointer items-center justify-start gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm border border-slate-400"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <span className="label-text text-xs text-slate-600">
              Я согласен(на) на{" "}
              <Link href="/politika" target="_blank" className="underline">
                обработку персональных данных
              </Link>
            </span>
          </label>
        </div>

        {/* Кнопка */}
        <div className="form-control pt-2">
          <button
            type="submit"
            disabled={!agree}
            className="btn w-full rounded-full bg-primary text-[15px] font-extrabold text-black hover:bg-white border-none disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {btn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSupport;
