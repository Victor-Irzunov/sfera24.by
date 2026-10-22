// /components/Offroad/OffroadOutOfTownSection.jsx
// Витя создай файл /components/Offroad/OffroadOutOfTownSection.jsx

import phoneNumbers from "@/config/config";

const PRIMARY = "#60FF1E";

export default function OffroadOutOfTownSection() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="container mx-auto px-0 sd:px-6">
        <div className="max-w-full rounded-3xl border border-white/12 bg-linear-to-br from-[#050505] via-[#090909] to-[#020202] p-6 sd:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.95)]">
          <h2 className="text-[22px] sd:text-[26px] font-extrabold mb-3">
            Выезд за город и сложные маршруты
          </h2>
          <h3 className="text-[14px] sd:text-[16px] text-white/80 mb-4">
            Если нужен эвакуатор{" "}
            <span className="font-semibold">за город</span> — считаем
            расстояние, сложность подъезда и тип грунта. В описании по телефону
            используйте запросы вроде{" "}
            <span className="font-semibold" style={{ color: PRIMARY }}>
              «эвакуатор за город цена»
            </span>
            , чтобы мы сразу понимали задачу.
          </h3>

          <div className="grid gap-4 sd:grid-cols-3 text-[13px] sd:text-[14px]">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-white/70 mb-1">Могилёв → дача / деревня</p>
              <p className="text-white/55">
                Цена складывается из выезда эвакуатора, километража и сложности
                подъезда к машине.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-white/70 mb-1">Поле или лесная дорога</p>
              <p className="text-white/55">
                Учитываем необходимость работы лебёдкой и дополнительные
                манёвры, чтобы не застрять самим.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-white/70 mb-1">Сугробы и снегопад</p>
              <p className="text-white/55">
                Возможна надбавка за сложные погодные условия и необходимость
                расчистки подъезда.
              </p>
            </div>
          </div>

          <p className="mt-5 text-[12px] sd:text-[13px] text-white/65">
            Чтобы{" "}
            <span className="font-semibold">рассчитать стоимость эвакуации</span>
            , назовите пункт выезда, точку, где стоит авто, и опишите, во что
            вы застряли. Чем точнее информация, тем точнее будет цена.
          </p>

          <div className="mt-6 flex flex-col gap-3 sd:flex-row sd:items-center sd:gap-6">
            <a
              href={`tel:${phoneNumbers.phone1Link || ""}`}
              className="striped-shining-button inline-flex items-center justify-center rounded-full px-8 sd:px-10 py-3.5 sd:py-4 text-[15px] sd:text-[17px] font-extrabold shadow-[0_18px_55px_rgba(96,255,30,0.7)]"
              style={{ backgroundColor: PRIMARY, color: "#000000" }}
            >
              Рассчитать выезд за город
            </a>
            <p className="text-[12px] sd:text-[13px] text-white/60">
              Сразу скажите, что нужна{" "}
              <span className="font-semibold">внедорожная эвакуация</span> — мы
              отправим подходящий эвакуатор.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
