// /components/Prices/PriceRequestFormSection.jsx
// Витя создай файл /components/Prices/PriceRequestFormSection.jsx
"use client";

import { useState } from "react";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "@/components/Form/MaskPhone/PhoneInput";
import Link from "next/link";

const PRIMARY = "#60FF1E";

export default function PriceRequestFormSection() {
  const [tel, setTel] = useState("+375 ");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const telDigitsOnly = tel.replace(/\D/g, "");
    if (telDigitsOnly.length !== 12) {
      setAlertText(
        "Введите весь номер телефона в формате: +375 XX XXX-XX-XX"
      );
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    const messageForm = `
<b>Заявка на расчёт стоимости эвакуатора:</b>\n
<b>Имя:</b> ${name || "не указано"}\n
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n
<b>Маршрут:</b> ${from || "не указано"} → ${to || "не указано"}\n
<b>Комментарий:</b> ${comment || "без комментария"}
    `;

    try {
      const data = await sendOrderTelegram(messageForm);
      if (data?.ok) {
        setSuccess(true);
        setName("");
        setFrom("");
        setTo("");
        setComment("");
        setTel("+375 ");
        setAgree(false);
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setAlertText("Ошибка отправки. Попробуйте ещё раз позже.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
    }
  };

  return (
    <section className="relative bg-[#050505] py-14 sd:py-18">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="grid gap-8 sd:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* Текст слева */}
          <div>
            <h2 className="text-[22px] sd:text-[28px] font-extrabold text-white mb-2">
              Узнать точную стоимость эвакуатора
            </h2>
            <h3 className="text-[15px] sd:text-[16px] font-medium text-white/80 mb-3">
              Онлайн-заявка на расчёт цены по вашему маршруту
            </h3>
            <p className="text-[13px] sd:text-[14px] text-white/70 mb-4">
              Укажите, откуда и куда нужно перевезти автомобиль, и мы{" "}
              <span className="font-semibold">
                рассчитаем стоимость эвакуатора
              </span>{" "}
              по вашему маршруту. Вы узнаете, какая будет{" "}
              <span className="font-semibold">цена за эвакуатор</span> с учётом
              расстояния и возможных особенностей погрузки.
            </p>

            <h4 className="text-[13px] sd:text-[14px] font-semibold text-white/75 mb-2">
              Как мы считаем цену:
            </h4>
            <ul className="mb-4 list-disc pl-5 text-[13px] sd:text-[14px] text-white/70 space-y-1.5">
              <li>учитываем адрес подачи и конечную точку;</li>
              <li>расстояние по трассе (стоимость эвакуатора за км);</li>
              <li>сложность погрузки и тип авто;</li>
              <li>время суток и возможные допуслуги.</li>
            </ul>
            <p className="text-[12px] sd:text-[13px] text-white/60">
              Вы также можете узнать цены по телефону — контакты указаны на
              главной странице. Форма ниже удобна, если вы хотите{" "}
              <span className="font-semibold">
                эвакуатор рассчитать стоимость
              </span>{" "}
              заранее и получить ориентир по бюджету.
            </p>
          </div>

          {/* Форма справа */}
          <div className="relative rounded-3xl border border-white/10 bg-linear-to-b from-[#020617] via-[#020617] to-[#020617] p-4 sd:p-6 shadow-[0_16px_55px_rgba(0,0,0,0.9)]">
            <div
              className="pointer-events-none absolute inset-x-8 -top-10 h-16 blur-2xl opacity-60"
              style={{
                background: `radial-gradient(circle at 50% 0, ${PRIMARY}, transparent 65%)`,
              }}
            />
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-4 text-white">
                <div>
                  <label className="mb-1 block text-[12px] text-white/70">
                    Имя (необязательно)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full bg-white/5 text-sm border-white/20 focus:outline-none focus:border-[rgba(96,255,30,0.7)]"
                    placeholder="Как к вам обратиться"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[12px] text-white/70">
                    Телефон для связи (обязательно)
                  </label>
                  <PhoneInput
                    bg
                    value={tel}
                    onChange={setTel}
                    setAlertText={setAlertText}
                    setAlertActive={setAlertActive}
                  />
                </div>

                <div className="grid gap-3 sd:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[12px] text-white/70">
                      Откуда забирать авто
                    </label>
                    <input
                      type="text"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="input input-bordered w-full bg-white/5 text-sm border-white/20 focus:outline-none focus:border-[rgba(96,255,30,0.7)]"
                      placeholder="Адрес или ориентир"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] text-white/70">
                      Куда везти
                    </label>
                    <input
                      type="text"
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="input input-bordered w-full bg-white/5 text-sm border-white/20 focus:outline-none focus:border-[rgba(96,255,30,0.7)]"
                      placeholder="СТО, дом, стоянка"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[12px] text-white/70">
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="textarea textarea-bordered w-full bg_white/5 bg-white/5 text-sm border-white/20 focus:outline-none focus:border-[rgba(96,255,30,0.7)]"
                    rows={3}
                    placeholder="Например: после ДТП, не крутит стартер, блокировка руля…"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm bg-white"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span className="text-[11px] text-white/60">
                    Я согласен(на) на{" "}
                    <Link
                      href="/politika"
                      target="_blank"
                      className="underline text-white/80"
                    >
                      обработку персональных данных
                    </Link>
                    .
                  </span>
                </div>

                {alertActive && (
                  <div className="text-[11px] text-red-400">{alertText}</div>
                )}
                {success && (
                  <div className="text-[11px] text-[rgba(96,255,30,0.9)]">
                    Заявка отправлена. Мы свяжемся с вами и озвучим точную
                    стоимость.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!agree}
                  className="mt-2 w-full rounded-full px-6 py-3 text-[14px] font-extrabold tracking-wide striped-shining-button disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: PRIMARY,
                    color: "#000000",
                    boxShadow: "0 14px 40px rgba(96,255,30,0.6)",
                  }}
                >
                  Рассчитать стоимость эвакуатора
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
