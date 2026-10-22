// /components/AutoHelp/AutoHelpField.jsx

const PRIMARY = "#60FF1E";

export default function AutoHelpField() {
  return (
    <section className="relative bg-black py-14 sd:py-20">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="grid gap-8 sd:grid-cols-2 sd:items-center">
          <div>
            <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold text-white">
              Выездная и «скорая» автопомощь
            </h2>
            <h3 className="mb-4 text-[15px] sd:text-[17px] font-medium text-white/80">
              Когда вы стоите на дороге,{" "}
              <span className="font-semibold">
                важна скорость и безопасность
              </span>
              . Наша выездная автопомощь приезжает как можно быстрее.
            </h3>
            <p className="mb-3 text-[13px] sd:text-[14px] text-white/70">
              «Скорая автопомощь» — это формат, когда мастер выезжает с
              необходимыми инструментами: пуско-зарядное устройство, домкрат,
              компрессор, канистры, набор инструментов. Часто удаётся решить
              проблему прямо на месте и продолжить движение.
            </p>
            <p className="text-[13px] sd:text-[14px] text-white/70">
              Если авто повреждено серьёзнее,{" "}
              <span className="font-semibold">
                мастер подскажет, когда выгоднее вызвать эвакуатор
              </span>{" "}
              и сразу поможет организовать подачу машины.
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-linear-to-br from-[#060606] via-[#111111] to-[#020202] p-5 sd:p-6">
            <h4
              className="mb-3 text-[16px] sd:text-[18px] font-semibold"
              style={{ color: PRIMARY }}
            >
              Когда поможет «скорая» автопомощь:
            </h4>
            <ul className="space-y-1.5 text-[13px] sd:text-[14px] text-white/75">
              <li>• машина не заводится во дворе или на парковке ТЦ</li>
              <li>• сел аккумулятор после ночной стоянки</li>
              <li>• закисло колесо, нужен домкрат и инструмент</li>
              <li>• авто стоит в неудобном месте, но ещё может ехать</li>
              <li>• нужно временно «дотянуть» до ближайшего сервиса</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
