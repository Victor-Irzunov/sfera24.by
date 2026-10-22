// /components/benefits/BenefitsStrip.jsx — ПОЛНОСТЬЮ (адаптивный блок преимуществ)
import Image from "next/image";

const BENEFITS = [
  {
    id: "24-7",
    title: "Круглосуточная работа",
    text: [
      "Мы работаем 24/7, без выходных.",
      "Независимо от времени суток, вы можете быть уверены, что мы приедем!",
    ],
    icon: "/icons/benefits-24-7.webp", // 👈 просто название файла
    iconAlt: "Иконка 24/7",
  },
  {
    id: "fast",
    title: "Оперативный выезд",
    text: [
      "Наши эвакуаторы приезжают в течение 30 минут.",
      "Мы ценим ваше время и готовы помочь максимально быстро.",
    ],
    icon: "/icons/benefits-stopwatch.webp",
    iconAlt: "Иконка быстрого выезда",
  },
  {
    id: "prices",
    title: "Доступные цены",
    text: [
      "Мы предлагаем честные и прозрачные цены без скрытых комиссий.",
      "Вы платите только за реально оказанные услуги.",
    ],
    icon: "/icons/benefits-price-tag.webp",
    iconAlt: "Иконка цены",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="w-full bg-black py-10 sd:py-14">
      <div className="container mx-auto px-4 sd:px-6">
        <div className="grid gap-10 sd:grid-cols-3 sd:gap-12">
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 sd:gap-5 text-white"
            >
              {/* Иконка слева */}
              <div className="shrink-0">
                <div className="relative h-16 w-16 sd:h-20 sd:w-20">
                  <Image
                    src={item.icon}
                    alt={item.iconAlt}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Текст справа */}
              <div className="flex-1">
                <h3 className="mb-2 text-[20px] font-extrabold leading-snug sd:text-[24px]">
                  {item.title}
                </h3>
                <div className="space-y-1 text-[14px] leading-relaxed text-gray-200 sd:text-[15px]">
                  {item.text.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
