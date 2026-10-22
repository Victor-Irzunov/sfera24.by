// /components/AutoHelp/AutoHelpTowOrEvac.jsx
// Витя создай файл /components/AutoHelp/AutoHelpTowOrEvac.jsx

const PRIMARY = "#60FF1E";

export default function AutoHelpTowOrEvac() {
  return (
    <section className="relative bg-black py-14 sd:py-20">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="rounded-3xl border border-white/12 bg-linear-to-br from-[#050505] via-[#0a0a0a] to-[#020202] p-6 sd:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
          <h2 className="mb-3 text-[22px] sd:text-[26px] font-extrabold text-white">
            Вызвать буксир или эвакуатор: как мы помогаем выбрать
          </h2>
          <h3 className="mb-4 text-[15px] sd:text-[17px] font-medium text-white/85">
            Не всегда нужен полноценный эвакуатор. Иногда достаточно{" "}
            <span className="font-semibold">буксира и автопомощи</span>, чтобы
            безопасно убрать машину с дороги.
          </h3>

          <div className="grid gap-6 sd:grid-cols-2">
            <div className="space-y-2 text-[13px] sd:text-[14px] text-white/75">
              <p>
                Если авто просто заглохло, застряло на парковке или во дворе, мы
                можем{" "}
                <span className="font-semibold">
                  вызвать буксир и решить вопрос на месте
                </span>
                , без платной погрузки на эвакуатор.
              </p>
              <p>
                Когда есть риск серьёзных повреждений (удар снизу, стуки в
                моторе, течи), мастер честно скажет, что{" "}
                <span className="font-semibold">
                  выгоднее сразу заказать эвакуатор
                </span>{" "}
                и довезти машину до СТО.
              </p>
            </div>

            <div className="space-y-1.5 text-[13px] sd:text-[14px] text-white/80">
              <h4
                className="mb-1 text-[15px] font-semibold"
                style={{ color: PRIMARY }}
              >
                Мы всегда за честный подход:
              </h4>
              <ul className="space-y-1.5">
                <li>• не навязываем эвакуатор, если хватает автопомощи;</li>
                <li>• заранее говорим, во сколько обойдётся выезд;</li>
                <li>
                  • помогаем подобрать{" "}
                  <span className="font-semibold">
                    оптимальный вариант: техпомощь, буксир или эвакуатор
                  </span>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
