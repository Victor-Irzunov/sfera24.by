// /components/Form/FormQuickCalc.jsx — ПОЛНОСТЬЮ
// ✅ Исправлено: поле "Какая услуга нужна" больше не вылезает за границы
// ✅ Услуга вынесена на всю ширину формы
// ✅ Добавлены min-w-0, truncate, overflow-hidden
// ✅ Логика отправки НЕ изменена

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "./MaskPhone/PhoneInput";

const OBJECT_OPTIONS = [
  "Квартира",
  "Частный дом",
  "Офис",
  "Кафе / ресторан",
  "Торговый объект",
  "Производственный объект",
  "Склад",
  "Другое",
];

const SERVICE_OPTIONS = [
  "Нужна консультация",
  "Устранение засора",
  "Проверка вентиляционных и дымовых каналов",
  "Проверка вентиляционных каналов",
  "Проверка дымовых каналов",
  "Испытания вентиляции с естественным побуждением",
  "Прочистка канализации",
  "Гидродинамическая промывка канализации",
];

const PROBLEM_OPTIONS = [
  "Нужна плановая проверка",
  "Нужен акт проверки",
  "Плохая тяга в вентиляции",
  "Запах из вентиляции",
  "Проблема с дымоходом",
  "Засор канализации",
  "Медленно уходит вода",
  "Неприятный запах из канализации",
  "Подтопление / аварийная ситуация",
  "Нужно определить причину",
];

const URGENCY_OPTIONS = [
  "Сегодня",
  "Завтра",
  "В ближайшие дни",
  "Плановая заявка",
  "Срочный выезд",
  "Нужно согласовать время",
];

const CITY_OPTIONS = ["Минск", "Минская область", "Другой населённый пункт"];

function sanitizeText(value, max = 180) {
  return String(value || "").slice(0, max);
}

const fieldClass =
  "w-full min-w-0 max-w-full rounded-xl border border-slate-300 bg-white text-sm text-black";

const FormQuickCalc = ({
  selectedProduct,
  closeModal,
  setIsFormSubmitted,
  btn = "Отправить заявку",
  exit,
}) => {
  const [tel, setTel] = useState("+375 ");
  const [agree, setAgree] = useState(false);

  const [city, setCity] = useState("Минск");
  const [serviceType, setServiceType] = useState(
    "Проверка вентиляционных и дымовых каналов"
  );
  const [objectType, setObjectType] = useState("Частный дом");
  const [problemType, setProblemType] = useState("Нужна плановая проверка");
  const [urgency, setUrgency] = useState("Нужно согласовать время");

  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const [alertActive, setAlertActive] = useState(false);
  const [alertText, setAlertText] = useState("");

  const title = useMemo(() => {
    return selectedProduct || "Быстрая заявка — Sfera24";
  }, [selectedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telDigitsOnly = tel.replace(/\D/g, "");
    const isBy = telDigitsOnly.startsWith("375") && telDigitsOnly.length === 12;

    if (!isBy) {
      setAlertText("Введите номер телефона в формате: +375 29 XXX-XX-XX");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    const messageForm = `
<b>Заявка с сайта Sfera24</b>
<b>${title}</b>

<b>Город / регион:</b> ${city}
<b>Адрес объекта:</b> ${address ? address : "—"}

<b>Услуга:</b> ${serviceType}
<b>Тип объекта:</b> ${objectType}
<b>Что требуется:</b> ${problemType}
<b>Срочность:</b> ${urgency}

<b>Комментарий:</b> ${note ? note : "—"}
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>
`;

    try {
      const data = await sendOrderTelegram(messageForm);

      if (data?.ok) {
        window.location.href = "/thank-you";
        setIsFormSubmitted?.(true);
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
    <div className="mt-6 w-full min-w-0 sd:px-6 xz:px-0">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control min-w-0">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Номер телефона</span>
            <span className="label-text-alt text-[10px] text-slate-400">
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

          <p className="mt-1 text-[11px] text-slate-500">
            Формат: +375 29 XXX-XX-XX
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sd:grid-cols-2">
          <div className="form-control min-w-0">
            <label className="label flex justify-start">
              <span className="label-text text-sm">Город / регион</span>
            </label>

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`select select-bordered ${fieldClass}`}
            >
              {CITY_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control min-w-0">
            <label className="label">
              <span className="label-text text-sm">Тип объекта</span>
            </label>

            <select
              value={objectType}
              onChange={(e) => setObjectType(e.target.value)}
              className={`select select-bordered ${fieldClass}`}
            >
              {OBJECT_OPTIONS.map((object) => (
                <option key={object} value={object}>
                  {object}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Услугу лучше делать на всю ширину, потому что названия длинные */}
        <div className="form-control min-w-0">
          <label className="label">
            <span className="label-text text-sm">Какая услуга нужна</span>
          </label>

          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className={`select select-bordered ${fieldClass} truncate overflow-hidden`}
          >
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3 sd:grid-cols-2">
          <div className="form-control min-w-0">
            <label className="label">
              <span className="label-text text-sm">Что требуется</span>
            </label>

            <select
              value={problemType}
              onChange={(e) => setProblemType(e.target.value)}
              className={`select select-bordered ${fieldClass}`}
            >
              {PROBLEM_OPTIONS.map((problem) => (
                <option key={problem} value={problem}>
                  {problem}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control min-w-0">
            <label className="label">
              <span className="label-text text-sm">Когда нужен выезд</span>
            </label>

            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className={`select select-bordered ${fieldClass}`}
            >
              {URGENCY_OPTIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-control min-w-0">
          <label className="label flex justify-between">
            <span className="label-text text-sm">Адрес объекта</span>
            <span className="label-text-alt text-[10px] text-slate-400">
              Можно пропустить
            </span>
          </label>

          <input
            value={address}
            onChange={(e) => setAddress(sanitizeText(e.target.value, 120))}
            placeholder="Улица, дом, помещение"
            className={`input input-bordered ${fieldClass}`}
          />
        </div>

        <div className="form-control min-w-0">
          <label className="label">
            <span className="label-text text-sm">Комментарий</span>
          </label>

          <textarea
            value={note}
            onChange={(e) => setNote(sanitizeText(e.target.value, 500))}
            rows={3}
            placeholder="Например: нужна проверка вентиляционных каналов для частного дома, есть проблема с тягой. Или: засор канализации, вода плохо уходит, нужна гидродинамическая промывка."
            className={`textarea textarea-bordered ${fieldClass}`}
          />
        </div>

        {alertActive && (
          <div className="mt-1 text-xs text-red-600">{alertText}</div>
        )}

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

        <div className="form-control pt-2">
          <button
            type="submit"
            disabled={!agree}
            className="btn w-full rounded-full border-none bg-primary text-[15px] font-extrabold text-black hover:bg-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {btn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormQuickCalc;