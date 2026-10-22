// /components/Offroad/OffroadRequestForm.jsx
// Витя создай файл /components/Offroad/OffroadRequestForm.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import phoneNumbers from "@/config/config";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "@/components/Form/MaskPhone/PhoneInput";

const PRIMARY = "#60FF1E";

export default function OffroadRequestForm() {
  const [tel, setTel] = useState("+375 ");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const digits = tel.replace(/\D/g, "");
    if (digits.length !== 12) {
      setAlertText("Введите номер полностью в формате: +375 XX XXX-XX-XX");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
      return;
    }

    const message = `
<b>Заявка: внедорожная эвакуация</b>
<b>Имя:</b> ${name || "не указано"}
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>
<b>Локация / адрес:</b> ${location || "не указано"}
<b>Описание ситуации:</b> ${comment || "не указано"}
`;

    try {
      const data = await sendOrderTelegram(message);
      if (data?.ok) {
        setSuccess(true);
        setComment("");
        setLocation("");
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (err) {
      setAlertText("Не удалось отправить заявку, попробуйте ещё раз.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
    }
  };

  return (
    <section className="relative bg-black py-16 sd:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
      />
      <div
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[150px] opacity-55"
        style={{ background: PRIMARY }}
      />

      <div className="container mx-auto px-0 sd:px-6 relative">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/12 bg-linear-to-br from-[#050505] via-[#080808] to-[#010101] p-6 sd:p-8 shadow-[0_28px_90px_rgba(0,0,0,0.95)]">
          <div className="mb-6 text-center">
            <h2 className="text-[22px] sd:text-[28px] font-extrabold mb-3">
              Нужна внедорожная эвакуация прямо сейчас?
            </h2>
            <h3 className="text-[14px] sd:text-[16px] text-white/80">
              Оставьте заявку или{" "}
              <a
                href={`tel:${phoneNumbers.phone1Link || ""}`}
                className="font-semibold underline decoration-dotted"
                style={{ color: PRIMARY }}
              >
                позвоните нам
              </a>
              . Скажем, когда{" "}
              <span className="font-semibold">
                эвакуатор с лебёдкой будет на месте
              </span>{" "}
              и сколько ориентировочно будет стоить выезд.
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 sd:grid-cols-[1.05fr_1.05fr]"
          >
            <div className="space-y-4">
              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text text-[13px] text-white">
                    Ваше имя
                  </span>
                  <span className="label-text-alt text-[10px] text-white/50">
                    Необязательное поле
                  </span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered bg-white/5 text-white w-full placeholder:text-white/40"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text text-[13px] text-white">
                    Телефон (обязательно)
                  </span>
                  <span className="label-text-alt text-[10px] text-white/50">
                    Формат +375 XX XXX-XX-XX
                  </span>
                </label>
                <PhoneInput
                  bg
                  value={tel}
                  onChange={setTel}
                  setAlertText={setAlertText}
                  setAlertActive={setAlertActive}
                />
                {alertActive && (
                  <p className="mt-1 text-[11px] text-red-400">{alertText}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text text-[13px] text-white">
                    Где находитесь?
                  </span>
                  <span className="label-text-alt text-[10px] text-white/50">
                    Деревня, дача, ориентиры
                  </span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input input-bordered bg-white/5 w-full text-white placeholder:text-white/40"
                  placeholder="Например: дача под Могилёвом, поле у д. ХХХ"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text text-[13px] text-white">
                    Что случилось?
                  </span>
                  <span className="label-text-alt text-[10px] text-white/50">
                    Опишите кратко
                  </span>
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="textarea textarea-bordered w-full bg-white/5 text-white placeholder:text-white/40"
                  placeholder="Например: съехал в кювет, село в грязь, машина не двигается…"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-start gap-2 text-[11px] sd:text-[12px] text-white/70">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs bg-white"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span>
                    Я согласен(на) на{" "}
                    <Link
                      href="/politika"
                      target="_blank"
                      className="underline text-white/60"
                    >
                      обработку персональных данных
                    </Link>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agree}
                  className="btn border-none text-black font-extrabold text-[15px] sd:text-[16px] mt-1 disabled:opacity-60 striped-shining-button"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Нужна внедорожная эвакуация
                </button>

                {success && (
                  <p className="text-[12px] text-emerald-400">
                    Заявка отправлена. Мы свяжемся с вами в ближайшее время.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
