// /components/Offroad/OffroadCasesSection.jsx
// Витя создай файл /components/Offroad/OffroadCasesSection.jsx

import Image from "next/image";

const PRIMARY = "#60FF1E";

const cases = [
  {
    title: "Грязь и разбитая грунтовка",
    text: "Машина провалилась в колею, буксует и не выбирается. Подъезжаем на максимально твёрдое место, работаем лебёдкой и стропами.",
    img: "/offroad/case-mud.webp",
  },
  {
    title: "Поле, дача, сельская дорога",
    text: "Застряли возле дачи, на полевой дороге или в деревне. Привезём эвакуатор с лебёдкой и вытащим авто до асфальта.",
    img: "/offroad/case-field.webp",
  },
  {
    title: "Сугробы и зимняя колея",
    text: "Машина села на пузо в снегу, буксует и не едет. Используем лебёдку и подготовленный инструмент для зимней эвакуации.",
    img: "/offroad/case-snow.webp",
  },
];

export default function OffroadCasesSection() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="container mx-auto px-0 sd:px-6">
        <header className="max-w-3xl mb-8">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold mb-3">
            Внедорожная эвакуация за городом
          </h2>
          <h3 className="text-[14px] sd:text-[16px] text-white/80">
            Работаем по Могилёву и области: лесные дороги, грунтовка, дачные
            массивы, поля и просёлки. Если нужна{" "}
            <span className="font-semibold" style={{ color: PRIMARY }}>
              внедорожная эвакуация
            </span>
            — выезжаем, даже когда обычные службы отказываются.
          </h3>
        </header>

        <div className="grid gap-5 sd:grid-cols-3">
          {cases.map((item, idx) => (
            <article
              key={idx}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-linear-to-br from-[#050505] via-[#080808] to-[#020202] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.9)]"
            >
              <div className="relative h-40 sd:h-44 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 992px) 360px, 100vw"
                />
              </div>
              <div className="p-5 sd:p-6">
                <h4 className="text-[15px] sd:text-[17px] font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-[12px] sd:text-[13px] text-white/75">
                  {item.text}
                </p>
              </div>
              <div
                className="pointer-events-none absolute inset-x-10 -bottom-6 h-10 blur-xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0, rgba(96,255,30,0.6), transparent 60%)",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
