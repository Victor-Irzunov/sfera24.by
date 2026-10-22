// /components/Prices/PriceCalculator.jsx

"use client";

import { useState } from "react";
import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function PriceCalculator() {
  const [tripType, setTripType] = useState("city"); // city | outer
  const [distance, setDistance] = useState("");
  const [heavyLoad, setHeavyLoad] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const parseDistance = (val) => {
    if (!val) return 0;
    const normalized = val.replace(",", ".").trim();
    const num = Number(normalized);
    return Number.isFinite(num) && num >= 0 ? num : NaN;
  };

  const handleCalculate = () => {
    setError("");
    const dist = parseDistance(distance);

    if (tripType === "outer" && (isNaN(dist) || dist <= 0)) {
      setError("Укажите расстояние за городом в километрах.");
      setResult(null);
      return;
    }

    let base = 0;
    let distancePart = 0;
    let heavyPart = 0;

    if (tripType === "city") {
      base = 79; // средняя цена по городу от 79 BYN
    } else {
      // 1 BYN за км, но минимум 79 BYN
      distancePart = dist * 1;
      if (distancePart < 79) {
        base = 79;
        distancePart = 0;
      }
    }

    if (heavyLoad) {
      heavyPart = 15;
    }

    const total = base + distancePart + heavyPart;

    setResult({
      tripType,
      distance: dist,
      base,
      distancePart,
      heavyPart,
      total,
    });
  };

  const formatPrice = (val) => `${val.toFixed(0)} руб.`;

  return (
    <section
      aria-labelledby="price-calculator-heading"
      className="relative mx-auto mt-10 max-w-4xl px-4 sd:px-6"
    >
      <div className="absolute inset-x-6 -top-6 h-24 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(96,255,30,0.25),transparent)] pointer-events-none" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/5 via-black/70 to-black/95 p-5 sd:p-7 shadow-[0_30px_79px_rgba(0,0,0,0.9)]">
        <div className="mb-5 flex flex-col gap-2 sd:flex-row sd:items-baseline sd:justify-between">
          <div>
            <h2
              id="price-calculator-heading"
              className="text-2xl font-semibold tracking-tight"
            >
              Калькулятор стоимости эвакуатора
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Быстрый расчёт стоимости поездки по Могилёву и за городом.
              Итоговая цена зависит от расстояния и сложности погрузки.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Средняя цена по городу{" "}
            <span className="font-semibold text-white">от 79 руб.</span>, за
            городом{" "}
            <span className="font-semibold text-white">1 руб./км</span>.
          </p>
        </div>

        {/* Тип поездки */}
        <div className="grid gap-4 sd:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <div className="grid gap-3 sd:grid-cols-2">
              <button
                type="button"
                onClick={() => setTripType("city")}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  tripType === "city"
                    ? "border-[#60FF1E] bg-[rgba(96,255,30,0.12)] shadow-[0_0_30px_rgba(96,255,30,0.35)]"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <span className="block text-xs uppercase tracking-wide text-slate-300">
                  По городу Могилёв
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  От 79 руб. за поездку
                </span>
                <span className="mt-1 block text-xs text-slate-400">
                  Типичная эвакуация в пределах города: дом, парковка, СТО.
                </span>
              </button>

              <button
                type="button"
                onClick={() => setTripType("outer")}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  tripType === "outer"
                    ? "border-[#60FF1E] bg-[rgba(96,255,30,0.12)] shadow-[0_0_30px_rgba(96,255,30,0.35)]"
                    : "border-white/10 bg-white/5 hover:border-white/30"
                }`}
              >
                <span className="block text-xs uppercase tracking-wide text-slate-300">
                  За город / межгород
                </span>
                <span className="mt-1 block text-sm font-semibold">
                  1 руб./км, минимум 79 руб.
                </span>
                <span className="mt-1 block text-xs text-slate-400">
                  Поездки по области и в другие города: трасса, дача, другой
                  населённый пункт.
                </span>
              </button>
            </div>

            {/* Расстояние */}
            <div className="space-y-2">
              <label className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wide text-slate-200">
                  Расстояние, км
                </span>
                {tripType === "outer" ? (
                  <span className="text-[11px] text-slate-400">
                    От точки погрузки до пункта назначения
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">
                    Для города можно оставить пустым
                  </span>
                )}
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="decimal"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder={
                    tripType === "outer"
                      ? "Например: 35"
                      : "По городу можно не указывать"
                  }
                  className="input input-bordered input-md w-full border-white/15 bg-black/60 text-sm text-white placeholder:text-slate-500 focus:border-[#60FF1E] focus:outline-none"
                  aria-describedby="distance-help"
                />
                {tripType === "outer" && (
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-slate-500">
                    км
                  </span>
                )}
              </div>
              <p
                id="distance-help"
                className="text-[11px] text-slate-400 leading-snug"
              >
                Если не знаете точное расстояние — укажите примерное, чтобы
                оценить бюджет поездки.
              </p>
            </div>

            {/* Сложная погрузка */}
            <div className="mt-3 flex items-start gap-2 rounded-2xl bg-white/5 p-3">
              <button
                type="button"
                onClick={() => setHeavyLoad((prev) => !prev)}
                className={`mt-0.5 h-5 w-5 shrink-0 rounded border text-[0] ${
                  heavyLoad
                    ? "border-[#60FF1E] bg-[#60FF1E]"
                    : "border-white/40 bg-black/60"
                }`}
                aria-pressed={heavyLoad}
              >
                {heavyLoad && (
                  <span className="block h-full w-full text-center text-xs font-bold text-black">
                    ✓
                  </span>
                )}
              </button>
              <div className="text-xs text-slate-200">
                <p className="font-semibold">
                  Сложная погрузка / спецтехника / низкий бампер +15 руб.
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Низкий клиренс, заблокированные колёса, мини-экскаватор,
                  станок или другие нестандартные ситуации требуют больше
                  времени и дополнительного оборудования.
                </p>
              </div>
            </div>

            {/* Кнопка */}
            <button
              type="button"
              onClick={handleCalculate}
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#60FF1E] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_40px_rgba(96,255,30,0.55)] transition hover:brightness-105 active:translate-y-px"
            >
              Рассчитать стоимость эвакуатора
            </button>

            {error && (
              <p className="mt-2 text-xs text-red-400" role="alert">
                {error}
              </p>
            )}
          </div>

          {/* Результат и преимущества */}
          <div className="mt-6 sd:mt-0 rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Примерный расчёт
            </p>

            {result ? (
              <div className="mt-2 space-y-2 text-sm text-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span>Тип поездки:</span>
                  <span className="font-semibold">
                    {result.tripType === "city"
                      ? "По городу Могилёв"
                      : "За город / межгород"}
                  </span>
                </div>

                {result.tripType === "outer" && (
                  <div className="flex items-center justify-between text-xs">
                    <span>Расстояние:</span>
                    <span className="font-semibold">
                      {result.distance.toFixed(1)} км
                    </span>
                  </div>
                )}

                {result.base > 0 && (
                  <div className="flex items-center justify-between text-xs">
                    <span>
                      Базовый тариф{" "}
                      {result.tripType === "city"
                        ? "по городу"
                        : "минимум за выезд"}
                      :
                    </span>
                    <span className="font-semibold">
                      {formatPrice(result.base)}
                    </span>
                  </div>
                )}

                {result.distancePart > 0 && (
                  <div className="flex items-center justify-between text-xs">
                    <span>Расстояние ({result.distance.toFixed(1)} км × 1 руб.):</span>
                    <span className="font-semibold">
                      {formatPrice(result.distancePart)}
                    </span>
                  </div>
                )}

                {result.heavyPart > 0 && (
                  <div className="flex items-center justify-between text-xs">
                    <span>Сложная погрузка:</span>
                    <span className="font-semibold">
                      {formatPrice(result.heavyPart)}
                    </span>
                  </div>
                )}

                <div className="mt-3 rounded-xl bg-[rgba(96,255,30,0.12)] px-3 py-2 text-sm">
                  <p className="text-xs text-slate-300">
                    Ориентировочная стоимость поездки:
                  </p>
                  <p className="text-lg font-semibold text-(--primary,#60FF1E)">
                    {formatPrice(result.total)}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Точную цену корректируем по телефону — с учётом точки
                    погрузки, маршрута и ситуации на месте.
                  </p>
                </div>
              </div>
            ) : (
              <p className="mt-3 text-xs text-slate-400">
                Укажите тип поездки, при необходимости расстояние и сложность
                погрузки, затем нажмите «Рассчитать». Мы покажем примерную
                стоимость эвакуатора.
              </p>
            )}

            <div className="mt-5 space-y-1 text-xs text-slate-300">
              <p>✔ Подача эвакуатора — <span className="font-semibold">бесплатно</span></p>
              <p>✔ Консультация и подбор маршрута — <span className="font-semibold">бесплатно</span></p>
              <p>✔ Опыт водителя — <span className="font-semibold">12 лет</span></p>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
              <p className="text-xs text-slate-300">
                Хотите точную стоимость прямо сейчас?
              </p>
              <a
                href={`tel:${phoneNumbers.phone1Link}`}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-(--primary,#60FF1E) px-6 py-2 text-xs font-semibold uppercase tracking-wide text-black shadow-[0_12px_30px_rgba(96,255,30,0.55)] hover:brightness-105"
              >
                Позвонить {phoneNumbers.phone1}
              </a>
              <p className="mt-1 text-[11px] text-slate-400">
                Ответим сразу, подсчитаем маршрут и скажем окончательную цену.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
