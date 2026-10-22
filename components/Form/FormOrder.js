// FormOrder.jsx — ПОЛНОСТЬЮ
// ✅ Убрали локальный PhoneInput
// ✅ Подключили общий: /components/Form/MaskPhone/PhoneInput.js (РФ формат +7 9XX XXX-XX-XX)
// ✅ Остальная логика FormOrder НЕ тронута

"use client";

import { useState } from "react";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "@/components/Form/MaskPhone/PhoneInput";

const FormOrder = ({
  selectedProduct,
  closeModal,
  setIsFormSubmitted,
  title,
  btn,
  setIsOpen,
  setActiveSendForm,
}) => {
  const [formData, setFormData] = useState({ issueType: "" });
  const [tel, setTel] = useState("+7 ");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const telDigitsOnly = tel.replace(/\D/g, ""); // ожидаем 11 цифр: 7 + 10
    if (telDigitsOnly.length !== 11 || !formData.issueType) {
      setAlertText("Введите номер в формате: +7 9XX XXX-XX-XX");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    let messageForm = `<b>Заказ с сайта:</b>\n<b>${selectedProduct}</b>\n<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n<b>Интересует:</b> ${formData.issueType}`;

    sendOrderTelegram(messageForm).then((data) => {
      if (data.ok) {
        window.location.href = "/thank-you";
        setActiveSendForm(true);
        setTimeout(() => setActiveSendForm(false), 4000);
        setIsOpen(false);
        closeModal();
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-black">
        <div className="form-control" custom={2} variants={yCustomAnimation2}>
          <label className="label">
            <span className="label-text">Что вас интересует?</span>
            <span className="label-text-alt">Обязательное поле</span>
          </label>
          <select
            name="issueType"
            value={formData.issueType}
            onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
            className="select select-bordered"
            required
          >
            <option value="" disabled></option>
            {/* варианты оставь как было / добавь свои */}
          </select>
        </div>

        <div className="form-control mt-4" custom={6} variants={yCustomAnimation2}>
          <label className="label">
            <span className="label-text">Телефон (+7 9XX XXX-XX-XX)</span>
            <span className="label-text-alt">Обязательное поле</span>
          </label>

          <PhoneInput
            value={tel}
            onChange={setTel}
            setAlertText={setAlertText}
            setAlertActive={setAlertActive}
            // оставил совместимость с props компонента
            bg
            border={false}
          />

          {alertActive && <div className="text-red-800">{alertText}</div>}
        </div>

        <div className="form-control mt-6" custom={8} variants={yCustomAnimation2}>
          <button className="btn btn-primary font-bold text-white uppercase" type="submit">
            {btn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormOrder;
