// /components/AutoHelp/AutoHelpTech.jsx
// Витя создай файл /components/AutoHelp/AutoHelpTech.jsx

const PRIMARY = "#60FF1E";

export default function AutoHelpTech() {
  return (
    <section className="relative bg-black py-14 sd:py-20">
      <div className="container mx-auto px-4 sd:px-6">
        <header className="mb-8 max-w-3xl">
          <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold text-white">
            Техпомощь на дороге: когда можно обойтись без эвакуатора
          </h2>
          <h3 className="text-[15px] sd:text-[17px] font-medium text-white/80">
            Техпомощь, техпомощь авто и техническая помощь на дороге — это{" "}
            <span className="font-semibold">
              диагностика и мелкий ремонт «в полевых условиях»
            </span>
            .
          </h3>
        </header>

        <div className="grid gap-6 sd:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#050505] p-5">
            <h4
              className="mb-2 text-[16px] font-semibold"
              style={{ color: PRIMARY }}
            >
              Техпомощь
            </h4>
            <p className="text-[13px] sd:text-[14px] text-white/75">
              Проверка клемм, предохранителей, проводки, простые регулировки и
              замена расходников, которые мешают машине завестись или тронуться
              с места.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#050505] p-5">
            <h4
              className="mb-2 text-[16px] font-semibold"
              style={{ color: PRIMARY }}
            >
              Техпомощь авто
            </h4>
            <p className="text-[13px] sd:text-[14px] text-white/75">
              Работаем аккуратно и объясняем, что именно произошло. Важно не
              «добивать» двигатель или коробку, если слышны посторонние звуки —
              в таких случаях предложим эвакуатор.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#050505] p-5">
            <h4
              className="mb-2 text-[16px] font-semibold"
              style={{ color: PRIMARY }}
            >
              Техпомощь на дороге
            </h4>
            <p className="text-[13px] sd:text-[14px] text-white/75">
              Наша техническая помощь на дороге всегда честно говорит, можно ли
              безопасно ехать дальше или лучше вызвать эвакуатор и довезти авто
              до сервиса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
