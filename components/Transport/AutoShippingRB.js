// /components/Transport/AutoShippingRB.jsx

const PRIMARY = "#60FF1E";

export default function AutoShippingRB() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative container mx-auto px-4 sd:px-6">
        <div className="sd:max-w-4xl">
          <h2 className="mb-3 text-[22px] sd:text-[28px] font-extrabold">
            Автоперевозки по Беларуси и работа с перевозчиками РБ
          </h2>
          <h3 className="mb-3 text-[16px] sd:text-[18px] font-semibold text-white/90">
            Для частных лиц, автосалонов и компаний
          </h3>

          <p className="mb-3 text-[14px] sd:text-[15px] text-white/70">
            Помимо единичных заказов, мы берем на себя{" "}
            <span className="font-semibold">
              автоперевозку автомобилей по Беларуси
            </span>{" "}
            для автосалонов, выкуп-сервисов, лизинговых и корпоративных парков.
          </p>

          <p className="mb-4 text-[13px] sd:text-[14px] text-white/65">
            Работаем как самостоятельный перевозчик, так и в связке с другими{" "}
            <span className="font-semibold">перевозчиками РБ</span>. Возможна
            регулярная перевозка машин «под ключ» по согласованному графику и
            фиксированным тарифам.
          </p>

          <div className="grid gap-4 sd:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
              <p className="mb-1 font-semibold text-white">
                Автоперевозка автомобилей
              </p>
              <p className="text-white/80">
                Перевозим легковые машины, кроссоверы и небольшие фургоны между
                городами и площадками.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
              <p className="mb-1 font-semibold text-white">
                Автоперевозка машин для бизнеса
              </p>
              <p className="text-white/80">
                Работаем с автосалонами, СТО, корпоративными парками, онлайн-
                сервисами продажи авто.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-[13px]">
              <p className="mb-1 font-semibold text-white">
                Авто перевозки по Беларуси
              </p>
              <p className="text-white/80">
                Гибкий подход: единичные заказы, периодические рейсы или
                длительное сотрудничество.
              </p>
            </div>
          </div>

          <p className="mt-5 text-[13px] sd:text-[14px] text-white/65">
            Если вас интересуют{" "}
            <span className="font-semibold">автоперевозки Беларусь</span> в
            формате постоянного партнёрства — опишите задачи, количество машин и
            основные направления, подготовим предложение по тарифам.
          </p>
        </div>
      </div>
    </section>
  );
}
