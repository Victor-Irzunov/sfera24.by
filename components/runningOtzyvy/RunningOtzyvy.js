// /components/runningOtzyvy/RunningOtzyvy.jsx — ПОЛНОСТЬЮ
// ✅ Универсальная бегущая строка отзывов
// ✅ Поддерживает 2 папки изображений:
//    /public/otzyvy/prochistka-kanalizacii/1.webp ... 5.webp
//    /public/otzyvy/proverka-ventilyacionnyh/1.webp ... 5.webp
// ✅ Компонент клиентский, потому что react-fast-marquee работает на клиенте

"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const REVIEW_FOLDERS = {
  "prochistka-kanalizacii": "/otzyvy/prochistka-kanalizacii",
  "proverka-ventilyacionnyh": "/otzyvy/proverka-ventilyacionnyh",
};

function getReviews(type) {
  const folder = REVIEW_FOLDERS[type] || REVIEW_FOLDERS["prochistka-kanalizacii"];

  return Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    imageSrc: `${folder}/${index + 1}.webp`,
  }));
}

export default function RunningOtzyvy({
  type = "prochistka-kanalizacii",
  label = "услуги",
}) {
  const reviewsData = getReviews(type);

  return (
    <section
      className="w-full"
      aria-label={`Бегущая строка отзывов — ${label}`}
    >
      <Marquee speed={30} gradient={false} pauseOnHover>
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="mx-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] sd:mx-4"
          >
            <Image
              src={review.imageSrc}
              alt={`Отзыв клиента №${review.id} — ${label}`}
              width={360}
              height={520}
              loading="lazy"
              className="h-72 w-auto object-contain sd:h-90"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}