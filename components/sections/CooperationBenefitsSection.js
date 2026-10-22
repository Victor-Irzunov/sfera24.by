// /components/sections/CooperationBenefitsSection.jsx

import Image from "next/image";
import BtnComp from "@/components/btn/BtnComp";

const benefits = [
  {
    title: "Быстрый выезд",
    text: "Выезжаем на объект в день обращения. Оперативно решаем задачи любой сложности.",
    icon: "/svg/benefit-speed.svg",
  },
  {
    title: "Официальный акт",
    text: "Предоставляем официальный акт о проверке и выполненных работах для УК, ТС и организаций.",
    icon: "/svg/benefit-document.svg",
  },
  {
    title: "Опытные специалисты",
    text: "Наши мастера — профессионалы с опытом от 5 лет и регулярным обучением.",
    icon: "/svg/benefit-master.svg",
  },
  {
    title: "Честные цены",
    text: "Прозрачное ценообразование без скрытых платежей и доплат. Вы платите только за результат.",
    icon: "/svg/benefit-price.svg",
  },
  {
    title: "Работаем по Минску",
    text: "Хорошо знаем город, быстро добираемся в любой район Минска и ближайшие пригороды.",
    icon: "/svg/benefit-map.svg",
  },
  {
    title: "Удобная связь",
    text: "На связи с 8:00 до 20:00 без выходных. Консультируем, подбираем удобное время и напоминаем о визите.",
    icon: "/svg/benefit-support.svg",
  },
];

const bottomBenefits = [
  {
    title: "Гарантия качества",
    text: "Гарантия на работы и используемое оборудование",
    icon: "/svg/benefit-shield.svg",
  },
  {
    title: "Более 1000 клиентов",
    text: "Нам доверяют частные лица и крупные организации",
    icon: "/svg/benefit-like.svg",
  },
  {
    title: "Соответствуем нормам",
    text: "Работаем по требованиям и действующим регламентам",
    icon: "/svg/benefit-certificate.svg",
  },
];

export default function CooperationBenefitsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f4f9ff] py-12 sd:py-20"
      aria-labelledby="cooperation-benefits-title"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#2b7fff]/10 blur-[90px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#00AFC4]/10 blur-[110px]" />

      <div className="container relative mx-auto">
        <div className="overflow-hidden rounded-[34px] border border-[#d7e8fb] bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.35)]">
          {/* ================= TOP ================= */}
          <div className="relative grid gap-8 px-5 pb-8 pt-8 sd:grid-cols-[0.95fr_1.05fr] sd:px-10 sd:pb-10 sd:pt-12 lg:px-12">
            <div className="relative z-10">
              <div className="mb-5 h-1 w-14 rounded-full bg-linear-to-r from-[#2b7fff] to-[#00AFC4]" />

              <h2
                id="cooperation-benefits-title"
                className="max-w-3xl text-[34px] font-black leading-[1.05] tracking-[-0.04em] text-[#071129] sd:text-[56px] lg:text-[64px]"
              >
                Преимущества сотрудничества с нами
              </h2>

              <h3 className="mt-6 max-w-2xl text-[16px] font-medium leading-relaxed text-slate-600 sd:text-[20px]">
                Выбирая нас, вы получаете профессиональный подход, прозрачные
                условия и гарантированный результат. Забота о вашей безопасности
                и комфорте — наша главная задача.
              </h3>
            </div>

            <div className="relative min-h-62.5 overflow-hidden rounded-[28px] bg-linear-to-br from-[#eaf7ff] via-white to-[#dff7fb] sd:min-h-87.5">
              <div className="absolute -left-24 top-0 h-130 w-130 rounded-full border-18 border-[#2b7fff]/15" />

              <Image
                src="/fon/benefits-sfera24-desktop.webp"
                alt="Преимущества сотрудничества с Sfera24: проверка вентиляции, дымоходов и прочистка канализации"
                fill
                className="object-cover object-center"
                sizes="(min-width: 991px) 52vw, 100vw"
                priority={false}
              />
            </div>
          </div>

          {/* ================= CARDS ================= */}
          <div className="grid gap-4 px-5 pb-7 sd:grid-cols-2 sd:px-10 lg:grid-cols-3 lg:px-12">
            {benefits.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[26px] border border-[#dbeafa] bg-white p-5 shadow-[0_16px_55px_-40px_rgba(15,23,42,0.38)] transition duration-300 hover:-translate-y-1 hover:border-[#00AFC4]/45 hover:shadow-[0_24px_70px_-42px_rgba(43,127,255,0.45)] sd:p-6"
              >
                <div className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#2b7fff] to-[#00AFC4] text-[14px] font-black text-white shadow-[0_12px_30px_rgba(43,127,255,0.28)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-[#eef7ff] ring-1 ring-[#dbeafa] sd:h-24 sd:w-24">
                    <Image
                      src={item.icon}
                      alt=""
                      width={54}
                      height={54}
                      className="h-12 w-12 object-contain sd:h-14 sd:w-14"
                    />
                  </div>

                  <div className="min-w-0 pt-3">
                    <h3 className="max-w-60 text-[20px] font-black leading-tight text-[#071129] sd:text-[18px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600 sd:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="px-5 pb-7 sd:px-10 lg:px-12">
            <div className="grid gap-4 rounded-[28px] border border-[#dbeafa] bg-white p-4 shadow-[0_16px_55px_-42px_rgba(15,23,42,0.28)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-5">
              <div className="grid gap-4 sd:grid-cols-3">
                {bottomBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl bg-[#f7fbff] p-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-[#dbeafa]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-black leading-snug text-[#071129]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[12px] leading-relaxed text-slate-600 sd:text-[13px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sd:grid-cols-2 lg:min-w-115">
                <BtnComp
                  title="Оставить заявку"
                  index={9501}
                  name="Заявка — преимущества сотрудничества"
                  w
                  img
                />

                <BtnComp
                  title="Узнать стоимость"
                  index={9502}
                  name="Узнать стоимость — преимущества сотрудничества"
                  w
                  short
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}