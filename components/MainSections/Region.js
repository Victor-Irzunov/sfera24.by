// /components/sections/Region.js
// ⚠️ изображения:
//    - /public/fon/minsk-region-desktop.webp
//    - /public/fon/minsk-region-mobile.webp

import Image from "next/image";

const Region = () => {
  return (
    <section className="pt-14 pb-5">
      <div className="container mx-auto">
        <h2 className="sd:text-5xl xz:text-2xl font-semibold text-center text-slate-900">
          Доставка сыпучих материалов в Минске и районе
        </h2>

        <div className="mt-7">
          <div>
            <Image
              src="/fon/minsk-region-desktop.webp"
              alt="Доставка сыпучих материалов в Минске и Минском районе"
              width={991}
              height={446}
              className="sd:block xz:hidden rounded-lg w-full object-cover"
            />
            <Image
              src="/fon/minsk-region-mobile.webp"
              alt="Самосвалы и доставка материалов по Минску"
              width={750}
              height={338}
              className="sd:hidden xz:block rounded-lg w-full object-cover"
            />
          </div>

          <div className="xz:text-sm sd:text-lg mt-8 text-slate-700">
            <p className="mt-4">
              Мы принимаем заказы на доставку песка, щебня, ПГС, грунта, гравия,
              асфальтной крошки, бетона и других материалов по всему Минску и
              Минскому району. Также можно заказать аренду самосвала, вывоз
              строительного мусора и вывоз снега.
            </p>

            <ul className="list-disc pl-5 mt-4 sd:text-lg xz:text-base grid sd:grid-cols-2 gap-y-2 gap-x-8">
              {/* Административные районы города */}
              <li>🏢 Центральный район</li>
              <li>🏙️ Советский район</li>
              <li>🏢 Первомайский район</li>
              <li>🏙️ Партизанский район</li>
              <li>🏢 Заводской район</li>
              <li>🏙️ Ленинский район</li>
              <li>🏢 Октябрьский район</li>
              <li>🏙️ Московский район</li>
              <li>🏢 Фрунзенский район</li>

              {/* Традиционные микрорайоны и местности */}
              <li>🏘️ Уручье</li>
              <li>🌳 Малиновка</li>
              <li>🏘️ Каменная Горка</li>
              <li>🌳 Сухарево</li>
              <li>🏘️ Серебрянка</li>
              <li>🌳 Чижовка</li>
              <li>🏘️ Шабаны</li>
              <li>🌳 Курасовщина</li>
              <li>🏘️ Лошица</li>
              <li>🌳 Зелёный Луг</li>

              {/* Около города */}
              <li>🛣️ Минский район</li>
              <li>🛣️ Колодищи</li>
              <li>🛣️ Боровляны</li>
              <li>🛣️ Сеница</li>
              <li>🛣️ Щомыслица</li>
              <li>🛣️ Ждановичи</li>
              <li>🛣️ Тарасово</li>
              <li>🛣️ Заславль</li>
            </ul>

            <p className="mt-6">
              Подберём подходящий самосвал под ваш объём и задачу, согласуем
              удобное время подачи и быстро рассчитаем стоимость доставки или
              аренды техники. Работаем как с частными клиентами, так и с
              организациями.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Region;