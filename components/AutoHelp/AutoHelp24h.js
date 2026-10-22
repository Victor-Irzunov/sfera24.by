// /components/AutoHelp/AutoHelp24h.jsx

const PRIMARY = "#60FF1E";

export default function AutoHelp24h() {
  return (
    <section className="relative bg-black py-14 sd:py-20">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="grid gap-8 sd:grid-cols-[1.2fr_minmax(0,1fr)] sd:items-center">
          <div>
            <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold text-white">
              Круглосуточная автопомощь на дороге 24/7
            </h2>
            <h3 className="mb-4 text-[15px] sd:text-[17px] font-medium text-white/80">
              Мы оказываем{" "}
              <span className="font-semibold">
                автопомощь на дороге и автопомощь на дорогах круглосуточно
              </span>{" "}
              по Могилёву и области: город, трасса, парковки у ТЦ, дворы.
            </h3>
            <p className="mb-3 text-[13px] sd:text-[14px] text-white/70">
              Если вам нужна{" "}
              <span className="font-semibold">авто помощь на дороге</span>, мы
              приедем в любое время суток. Ориентировочное время прибытия
              сообщаем по телефону с учётом пробок и загрузки бригад.
            </p>
            <p className="text-[13px] sd:text-[14px] text-white/70">
              Вызов принят —{" "}
              <span className="font-semibold">
                выездная автопомощь уже направляется к вам
              </span>
              . На месте мастер оценит ситуацию и предложит решение: техпомощь
              или эвакуатор.
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-linear-to-br from-[#050505] via-[#101010] to-[#050505] p-5 sd:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[80px] opacity-60"
              style={{ background: PRIMARY }}
            />
            <p className="relative mb-2 text-[12px] uppercase tracking-[0.18em] text-white/60">
              Режим работы
            </p>
            <p className="relative mb-3 text-[20px] sd:text-[24px] font-extrabold text-white">
              Автопомощь круглосуточно
            </p>
            <p className="relative mb-4 text-[13px] sd:text-[14px] text-white/75">
              Ночью, ранним утром, в выходные и праздники —{" "}
              <span className="font-semibold">
                вы всегда можете позвонить нам за помощью
              </span>
              .
            </p>
            <ul className="relative space-y-1.5 text-[13px] text-white/75">
              <li>• Работаем без выходных и обедов</li>
              <li>• Принимаем звонки из города и с трассы</li>
              <li>• Оцениваем ситуацию по телефону и называем ориентировочную цену</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
