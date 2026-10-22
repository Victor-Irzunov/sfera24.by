// /components/contacts/ContactForm.jsx

"use client";

import { useState } from "react";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "@/components/Form/MaskPhone/PhoneInput";

export default function ContactForm() {
  const [issueType, setIssueType] = useState("");
  const [tel, setTel] = useState("+375 ");
  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telDigitsOnly = tel.replace(/\D/g, "");
    if (telDigitsOnly.length !== 12 || !issueType) {
      setAlertText(
        "Заполните поле «Что вас интересует?» и полный номер телефона в формате +375 XX XXX-XX-XX."
      );
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    try {
      setIsSubmitting(true);
      const messageForm = `<b>Заявка с страницы контактов Avto-help:</b>\n<b>Интересует:</b> ${issueType}\n<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>`;
      const data = await sendOrderTelegram(messageForm);

      if (data?.ok) {
        window.location.href = "/thank-you";
      } else {
        setAlertText("Не удалось отправить заявку. Попробуйте ещё раз.");
        setAlertActive(true);
        setTimeout(() => setAlertActive(false), 4000);
      }
    } catch (error) {
      setAlertText("Произошла ошибка при отправке. Попробуйте позже.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-sm text-black sd:text-base"
    >
      <div className="form-control">
        <label className="label pb-1">
          <span className="label-text text-xs font-semibold uppercase tracking-wide text-slate-200">
            Что вас интересует?
          </span>
          <span className="label-text-alt text-[11px] text-slate-400">
            Обязательное поле
          </span>
        </label>
        <select
          name="issueType"
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
          className="select select-bordered w-full bg-white text-sm text-black"
          required
        >
          <option value="" disabled>
            Выберите вариант
          </option>
          <option value="Эвакуатор легкового автомобиля">
            Эвакуатор легкового автомобиля
          </option>
          <option value="Эвакуация кроссовера/внедорожника">
            Эвакуация кроссовера/внедорожника
          </option>
          <option value="Перевозка мотоцикла / квадроцикла">
            Перевозка мотоцикла / квадроцикла
          </option>
          <option value="Перевозка мини-экскаватора или спецтехники">
            Перевозка мини-экскаватора или спецтехники
          </option>
          <option value="Перевозка станка, паллет, груза">
            Перевозка станка, паллет, груза
          </option>
          <option value="Другое, нужна консультация">
            Другое, нужна консультация
          </option>
        </select>
      </div>

      <div className="form-control">
        <label className="label pb-1">
          <span className="label-text text-xs font-semibold uppercase tracking-wide text-slate-200">
            Телефон (+375 xx xxx-xx-xx)
          </span>
          <span className="label-text-alt text-[11px] text-slate-400">
            Обязательное поле
          </span>
        </label>
        <PhoneInput
          value={tel}
          onChange={setTel}
          setAlertText={setAlertText}
          setAlertActive={setAlertActive}
          bg
          border
        />
      </div>

      {alertActive && (
        <div className="text-xs text-red-500">{alertText}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary mt-2 w-full border-0 bg-[#60FF1E] text-xs font-bold uppercase tracking-wide text-black hover:bg-[#60FF1E]/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Отправляем..." : "Вызвать эвакуатор"}
      </button>

      <p className="mt-1 text-[11px] text-slate-400">
        Нажимая кнопку, вы подтверждаете согласие с обработкой персональных
        данных и условиями предоставления услуги эвакуации.
      </p>
    </form>
  );
}
