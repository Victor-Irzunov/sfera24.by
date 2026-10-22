// /components/Transport/OrderTransportSection.jsx
// Витя создай файл /components/Transport/OrderTransportSection.jsx

"use client";

import { useState } from "react";
import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function OrderTransportSection() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [route, setRoute] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Витя сюда при необходимости подключи отправку формы в Telegram или свой API
    // пример:
    // await fetch("/api/transport-request", { method: "POST", body: JSON.stringify({ name, tel, route }) });
    alert("Заявка на перевозку отправлена. Мы свяжемся с вами в ближайшее время.");
    setName("");
    setTel("");
    setRoute("");
  };

  return (
    <section className="relative bg-black py-16 sd:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="pointer-events-none absolute -left-32 bottom-[-120px] h-72 w-72 rounded-full blur-[130px] opacity-40"
        style={{ background: PRIMARY }}
      />

      <div className="relative container mx-auto px-4 sd:px-6">
        <div className="grid gap-10 sd:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sd:items-center">
          <div>
            <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold">
              Заказать перевозку автомобиля эвакуатором
            </h2>
            <h3 className="mb-3 text-[16px] sd:text-[18px] font-semibold text-white/90">
              Оставьте заявку или позвоните — подскажем лучший вариант
            </h3>

            <p className="mb-3 text-[14px] sd:text-[15px] text-white/70">
              Расскажите, откуда и куда нужно{" "}
              <span className="font-semibold">перевезти авто</span>, марку и
              модель машины, желаемые сроки. Мы подберём подходящий эвакуатор и
              рассчитаем окончательную{" "}
              <span className="font-semibold">стоимость доставки авто</span>.
            </p>

            <p className="mb-4 text-[13px] sd:text-[14px] text-white/65">
              Если вам удобнее сразу поговорить — просто позвоните:
            </p>

            <a
              href={`tel:${phoneNumbers.phone1Link || ""}`}
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[16px] font-extrabold tracking-wide shadow-[0_14px_40px_rgba(96,255,30,0.6)]"
              style={{ backgroundColor: PRIMARY, color: "#000000" }}
            >
              {phoneNumbers.phone1 || "Позвонить диспетчеру"}
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 sd:px-7 sd:py-7 shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
            <h4 className="mb-3 text-[15px] sd:text-[16px] font-semibold text-white">
              Онлайн-заявка на расчёт цены
            </h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-[12px] sd:text-[13px] text-white/70">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-[14px] text-white outline-none focus:border-[rgba(96,255,30,0.7)]"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] sd:text-[13px] text-white/70">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-[14px] text-white outline-none focus:border-[rgba(96,255,30,0.7)]"
                  placeholder="+375 XX XXX-XX-XX"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-[12px] sd:text-[13px] text-white/70">
                  Маршрут и данные авто
                </label>
                <textarea
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="min-h-[90px] w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-[14px] text-white outline-none focus:border-[rgba(96,255,30,0.7)]"
                  placeholder="Например: Могилёв → Минск, VW Passat, нужно забрать с СТО в 10:00"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full px-6 py-3 text-[15px] font-extrabold tracking-wide"
                style={{
                  backgroundColor: PRIMARY,
                  color: "#000000",
                  boxShadow: "0 16px 44px rgba(96,255,30,0.6)",
                }}
              >
                Рассчитать стоимость перевозки
              </button>

              <p className="mt-2 text-[11px] sd:text-[12px] text-white/55">
                Отправляя форму, вы соглашаетесь на обработку персональных
                данных. Мы свяжемся с вами, уточним детали маршрута и предложим
                лучшее решение по перевозке автомобиля.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
