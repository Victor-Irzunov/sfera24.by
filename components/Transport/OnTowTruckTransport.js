// /components/Transport/OnTowTruckTransport.jsx

const PRIMARY = "#60FF1E";

export default function OnTowTruckTransport() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sd:px-6">
        <div className="grid gap-8 sd:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sd:items-center">
          <div>
            <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold">
              Перевозка авто на эвакуаторе
            </h2>
            <h3 className="mb-3 text-[16px] sd:text-[18px] font-semibold text-white/90">
              Легковые, кроссоверы и небольшие микроавтобусы
            </h3>

            <p className="mb-3 text-[14px] sd:text-[15px] text-white/70">
              Мы выполняем{" "}
              <span className="font-semibold">
                перевозку авто на эвакуаторе
              </span>{" "}
              с надёжной фиксацией каждого колеса и дополнительными
              страховочными ремнями. Платформа оборудована всем необходимым для
              перевозки современных машин.
            </p>

            <ul className="mb-4 space-y-2 text-[13px] sd:text-[14px] text-white/80">
              <li>• Легковые автомобили любого класса</li>
              <li>• Кроссоверы и компактные внедорожники</li>
              <li>• Небольшие грузовые фургоны и микроавтобусы</li>
              <li>• Низкие спорткары — заезд по направляющим с вниманием к клиренсу</li>
            </ul>

            <p className="text-[13px] sd:text-[14px] text-white/65">
              Наши <span className="font-semibold">услуги автоэвакуатора</span>{" "}
              подходят как частным клиентам, так и автосалонам, сервисам,
              страховым компаниям и автоплощадкам.
            </p>
          </div>

          <div className="sd:justify-self-end">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/60 px-6 py-6 shadow-[0_22px_60px_rgba(0,0,0,0.7)]">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[80px] opacity-60"
                style={{ background: PRIMARY }}
              />
              <h4 className="mb-2 text-[14px] font-semibold text-white">
                Почему перевозка эвакуатором безопаснее?
              </h4>
              <ul className="space-y-1.5 text-[13px] text-white/80">
                <li>• Нет лишнего пробега и износа автомобиля</li>
                <li>• Исключены удары о ямы и бордюры по дороге</li>
                <li>• Машина застрахована на время перевозки (по договорённости)</li>
                <li>• Фото/видео фиксация состояния до и после погрузки</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
