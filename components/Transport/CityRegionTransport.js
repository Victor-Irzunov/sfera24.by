// /components/Transport/CityRegionTransport.jsx

const PRIMARY = "#60FF1E";

export default function CityRegionTransport() {
  return (
    <section className="relative bg-black py-14 sd:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sd:px-6">
        <div className="grid gap-8 sd:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sd:items-center">
          <div>
            <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold">
              Перевозка авто по Могилёву и Могилёвской области
            </h2>
            <h3 className="mb-3 text-[16px] sd:text-[18px] font-semibold text-white/90">
              Покупка, продажа, перегон на сервис без лишнего пробега
            </h3>

            <p className="mb-3 text-[14px] sd:text-[15px] text-white/70">
              Нужна <strong>перевозка автомобиля</strong> по Могилёву или в
              пределах области? Мы аккуратно заберём машину с двора, авто-салона
              или стоянки и доставим на СТО, шиномонтаж, в гараж или к новому
              владельцу. Это удобно, если авто временно неисправно или вы не
              хотите ехать на нём самостоятельно.
            </p>

            <p className="mb-4 text-[13px] sd:text-[14px] text-white/65">
              <span className="font-semibold">
                Перевозка машины по городу
              </span>{" "}
              — это безопасная альтернатива «дотянуть своим ходом». Мы чётко
              фиксируем время подачи, заранее проговариваем маршрут и стоимость.
            </p>

            <ul className="space-y-2 text-[13px] sd:text-[14px] text-white/80">
              <li>
                • Доставка авто из автосалона, с авторынка или парковки ТЦ
              </li>
              <li>• Перевозка машины на диагностику, ремонт или тюнинг</li>
              <li>• Перегон на сезонное хранение или в новый гараж</li>
              <li>
                • Перевозка авто после покупки/продажи внутри Могилёва и района
              </li>
            </ul>
          </div>

          <div className="sd:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-white/2 to-transparent p-px">
              <div className="rounded-[22px] bg-linear-to-br from-black via-black/95 to-black/90 p-5">
                <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-white/60">
                  Кратко о услуге
                </p>
                <p className="mb-3 text-[14px] sd:text-[15px] text-white">
                  <span style={{ color: PRIMARY }} className="font-semibold">
                    Перевозка автомобиля
                  </span>{" "}
                  по Могилёву — это когда машина едет не своим ходом, а на
                  платформе эвакуатора. Без пробега по одометру и без рисков на
                  дороге.
                </p>
                <p className="text-[13px] text-white/70">
                  Мы работаем по расписанию либо «день в день», в том числе
                  вечером и ночью — по предварительной договорённости.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
