// /components/Transport/TransportIntro.jsx

import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function TransportIntro() {
  return (
    <section className="relative overflow-hidden bg-black pt-80 pb-16 sd:pt-52 sd:pb-20">
      {/* фоновые пятна */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full blur-[150px] opacity-50"
        style={{ background: PRIMARY }}
      />
      <div
        className="pointer-events-none absolute bottom-40 right-20 h-96 w-96 rounded-full blur-[160px] opacity-40"
        style={{ background: "#0EA5E9" }}
      />

      <div className="relative container mx-auto px-4 sd:px-6">
        <p className="mb-3 inline-flex items-center rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[9px] sd:text-[11px] uppercase tracking-[0.18em] text-white/70">
          Перевозка авто эвакуатором · Могилёв
        </p>

        <h1 className="mb-4 text-[26px] sd:text-[38px] font-extrabold leading-tight">
          Перевозка автомобилей эвакуатором по Могилёву и&nbsp;Беларуси
        </h1>

        <h2 className="mb-4 text-[17px] sd:text-[20px] font-semibold text-white/90">
          Плановая перевозка авто, а не аварийная эвакуация
        </h2>

        <p className="mb-3 text-[14px] sd:text-[15px] text-white/70">
          Мы занимаемся{" "}
          <span className="font-semibold">плановой перевозкой автомобилей</span>
          : забираем машину в одном месте и аккуратно доставляем в другое —
          без пробега по одометру и лишнего риска на дороге. Это удобно, если
          вы купили авто в другом городе, хотите перевезти машину на СТО,
          стоянку или в новый город.
        </p>

        <p className="mb-6 text-[13px] sd:text-[14px] text-white/65">
          Каждая перевозка оформляется официально,{" "}
          <span className="font-semibold">
            фиксируем состояние авто до и после погрузки, используем надёжную
            фиксацию колёс и страховочные ремни
          </span>
          . Машина прочно закреплена на платформе — никаких «рывков» и
          лишнего риска.
        </p>

        <div className="flex flex-col gap-4 sd:flex-row sd:items-center sd:gap-6">
          <a
            href={`tel:${phoneNumbers.phone1Link || ""}`}
            className="striped-shining-button inline-flex items-center justify-center rounded-full px-8 sd:px-10 py-3.5 sd:py-4 text-[16px] sd:text-[18px] font-extrabold tracking-wide shadow-[0_18px_50px_rgba(96,255,30,0.6)]"
            style={{ backgroundColor: PRIMARY, color: "#000000" }}
          >
            {phoneNumbers.phone1 || "Перезвоните мне по перевозке"}
          </a>
          <div className="max-w-md text-[12px] sd:text-[13px] text-white/70">
            <p>
              Расскажем, как лучше{" "}
              <span className="font-semibold">перевезти авто эвакуатором</span>{" "}
              по Могилёву и Беларуси, и назовём ориентировочную{" "}
              <span className="font-semibold">стоимость доставки авто</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
