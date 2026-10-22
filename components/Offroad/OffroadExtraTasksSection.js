// /components/Offroad/OffroadExtraTasksSection.jsx
// Витя создай файл /components/Offroad/OffroadExtraTasksSection.jsx

import Image from "next/image";

const PRIMARY = "#60FF1E";

const slides = [
	 {
    id: 1,
    title: "Перевозка мини-техники",
    text: "Мини-экскаваторы, мотоблоки, садовая техника — аккуратно закрепляем и доставляем по Могилёву и области.",
    img: "/offroad/slide-mini-tech.webp",
  },
  {
    id: 2,
    title: "Перевозка стройматериалов",
    text: "Нужно привезти кирпич, пеноблоки, плитку или другие стройматериалы на дачу или участок — можем использовать платформу эвакуатора.",
    img: "/offroad/slide-materials.webp",
  },

  {
    id: 3,
    title: "Спецкейсы и нестандартные задачи",
    text: "Помогаем с любыми разумными задачами по перевозке на платформе. Обсудим по телефону и подскажем, как выгоднее.",
    img: "/offroad/slide-special.webp",
  },
];

export default function OffroadExtraTasksSection() {
  return (
    <section className="relative bg-black py-14 sd:py-18">
      <div className="container mx-auto px-0 sd:px-6">
        <header className="max-w-3xl mb-6">
          <h2 className="text-[22px] sd:text-[28px] font-extrabold mb-3">
            Дополнительные задачи эвакуатора
          </h2>
          <h3 className="text-[14px] sd:text-[16px] text-white/80">
            Помимо внедорожной эвакуации, эвакуатор можно использовать, чтобы{" "}
            <span className="font-semibold" style={{ color: PRIMARY }}>
              перевезти стройматериалы
            </span>
            , мини-спецтехнику или другое имущество, которое удобно везти на
            платформе.
          </h3>
        </header>

        {/* Карусель DaisyUI */}
        <div className="carousel w-full rounded-3xl border border-white/10 bg-[#050505] shadow-[0_22px_70px_rgba(0,0,0,0.95)]">
          {slides.map((slide, index) => {
            const prevId =
              slides[(index - 1 + slides.length) % slides.length].id;
            const nextId = slides[(index + 1) % slides.length].id;
            return (
              <div
                id={`offroad-slide-${slide.id}`}
                key={slide.id}
                className="carousel-item relative w-full flex flex-col sd:flex-row sd:items-stretch"
              >
                <div className="relative xz:h-56 sd:h-80 sd:w-1/2">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 992px) 540px, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/50 via-transparent to-black/80" />
                </div>

                <div className="sd:w-1/2 p-6 sd:p-8 flex flex-col justify-center">
                  <h4 className="text-[18px] sd:text-[20px] font-extrabold mb-3">
                    {slide.title}
                  </h4>
                  <p className="text-[13px] sd:text-[15px] text-white/80">
                    {slide.text}
                  </p>
                </div>

                <div className="absolute left-3 right-3 bottom-3 flex justify-between gap-3 sd:left-6 sd:right-6">
                  <a
                    href={`#offroad-slide-${prevId}`}
                    className="btn btn-circle btn-sm border-white/30 bg-black/70 text-white hover:bg-white/10"
                  >
                    ❮
                  </a>
                  <a
                    href={`#offroad-slide-${nextId}`}
                    className="btn btn-circle btn-sm border-white/30 bg-black/70 text-white hover:bg-white/10"
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-5 max-w-3xl text-[12px] sd:text-[13px] text-white/60">
          Всё обсуждается индивидуально: вес груза, маршрут и способ крепления.
          Расскажите, что именно нужно перевезти — подскажем, подходит ли для
          этого эвакуатор и как сделать это безопасно.
        </p>
      </div>
    </section>
  );
}
