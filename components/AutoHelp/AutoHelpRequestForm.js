// /components/AutoHelp/AutoHelpRequestForm.jsx
// Витя замени файл полностью на этот код

"use client";

import { useState } from "react";
import Link from "next/link";
import phoneNumbers from "@/config/config";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "@/components/Form/MaskPhone/PhoneInput";

const PRIMARY = "#60FF1E";

export default function AutoHelpRequestForm() {
  const [tel, setTel] = useState("+375 ");
  const [name, setName] = useState("");
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
<b>Заявка: автопомощь / техпомощь в Могилёве</b>
<b>Имя:</b> ${name || "не указано"}
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>
<b>Комментарий:</b> ${comment || "не указан"}
`;

    try {
      const data = await sendOrderTelegram(message);
      if (data?.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
        setComment("");
      }
    } catch (err) {
      setAlertText("Не удалось отправить заявку, попробуйте ещё раз.");
      setAlertActive(true);
      setTimeout(() => setAlertActive(false), 4000);
    }
  };

  return (
    <section className="relative bg-black py-16 sd:py-20">
      {/* верхняя линия */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      {/* мягкое свечение снизу */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[150px] opacity-40"
        style={{ background: PRIMARY }}
      />

      <div className="container mx-auto px-4 sd:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#050505] via-[#090909] to-[#020202] p-6 sd:p-8 shadow-[0_26px_80px_rgba(0,0,0,0.95)]">
          <div className="mb-6 sd:mb-8 text-center">
            <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold text-white">
              Нужна автопомощь в Могилёве прямо сейчас?
            </h2>
            <h3 className="mb-4 text-[14px] sd:text-[16px] font-medium text-white/80">
              Оставьте заявку или{" "}
              <a
                href={`tel:${phoneNumbers.phone1Link || ""}`}
                className="font-semibold underline decoration-dotted"
                style={{ color: PRIMARY }}
              >
                позвоните нам
              </a>
              {" — "}мы свяжемся с вами и скажем,{" "}
              <span className="font-semibold">когда мастер будет на месте</span>.
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 sd:grid-cols-2 sd:gap-6"
          >
            {/* левая колонка */}
            <div className="space-y-4 min-w-0">
              <div className="form-control w-full">
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
                  className="input input-bordered w-full bg-white/5 text-white placeholder:text-white/40"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className="form-control w-full">
                <label className="label flex justify-between">
                  <span className="label-text text-[13px] text-white">
                    Телефон (обязательно)
                  </span>
                  <span className="label-text-alt text-[10px] text-white/50">
                    +375 XX XXX-XX-XX
                  </span>
                </label>
                <div className="w-full">
                  <PhoneInput
                    bg
                    value={tel}
                    onChange={setTel}
                    setAlertText={setAlertText}
                    setAlertActive={setAlertActive}
                  />
                </div>
                {alertActive && (
                  <p className="mt-1 text-[11px] text-red-400">{alertText}</p>
                )}
              </div>
            </div>

            {/* правая колонка */}
            <div className="space-y-4 min-w-0">
              <div className="form-control w-full">
                <label className="label flex justify-between">
                  <span className="label-text text-[13px] text-white">
                    Что случилось?
                  </span>
                  <span className="label-text-alt text-[10px] text-white/50">
                    Можно кратко
                  </span>
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={5}
                  className="textarea textarea-bordered w-full bg-white/5 text-white placeholder:text-white/40 resize-none"
                  placeholder="Например: не заводится, сел аккумулятор, спустило колесо…"
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
                  className="btn mt-1 w-full border-none text-black font-extrabold text-[15px] sd:text-[16px] disabled:opacity-60 striped-shining-button"
                  style={{ backgroundColor: PRIMARY }}
                >
                  Вызвать автопомощь
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
