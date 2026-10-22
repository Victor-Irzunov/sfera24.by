// /components/seo/SeoAudioArticle.jsx — ПОЛНОСТЬЮ
"use client";

import Image from "next/image";
import { useId, useMemo, useState } from "react";
import Script from "next/script";

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/ё/g, "e")
    .replace(/й/g, "i")
    .replace(/[^a-zа-я0-9\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function SeoAudioArticle({
  title = "Как правильно заказать услугу и не переплачивать",
  description = "",
  intro = "",
  sections = [],
  bullets = [],
  audioSrc = "/audio/article.mp3",
  audioTitle = "Послушать аудио этой статьи",
  city = "",
  serviceName = "",
  publishedTime = "2026-05-07",
  updatedTime = "2026-05-07",
  conclusion = "",
  articleSection = "Полезная статья",
  about = [],
  keywords = [],
  bulletsTitle = "",
  authorImage = "/fon/seo-article-author.webp",
  authorImageAlt = "Автор полезной статьи",
}) {
  const [isAudioOpen, setIsAudioOpen] = useState(false);
  const articleId = useId();
  const safeSlug = useMemo(() => slugify(title), [title]);

  const finalDescription =
    description ||
    intro ||
    `Полезная статья: ${title}. Простыми словами о том, как правильно заказать услугу, избежать ошибок и не переплатить.`;

  const finalServiceName = serviceName || title;
  const finalCity = city ? ` в ${city}` : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: finalDescription,
    inLanguage: "ru",
    datePublished: publishedTime,
    dateModified: updatedTime,
    articleSection,
    about: about?.length ? about : [finalServiceName],
    keywords: keywords?.length ? keywords : [finalServiceName, title],
    image: authorImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `#${safeSlug}`,
    },
    name: title,
  };

  return (
    <>
      <Script
        id={`article-jsonld-${safeSlug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        aria-labelledby={`article-title-${articleId}`}
        className="w-full bg-white"
        id="article"
      >
        <div className="container mx-auto py-10 sd:py-14">
          <article
            id={safeSlug}
            className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-sm"
          >
            {/* ===== Верх статьи: фото слева, заголовок справа на desktop ===== */}
            <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-6 sd:px-8 sd:py-8">
              <div className="grid gap-6 sd:grid-cols-[360px_1fr] sd:items-center lg:grid-cols-[420px_1fr]">
                {/* Фото автора / грузчика */}
                <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100 shadow-sm">
                  <Image
                    src={authorImage}
                    alt={authorImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                {/* Заголовок, описание и кнопка справа */}
                <div className="flex flex-col items-start">
                  <p className="mb-3 inline-flex rounded-full border border-[#2b7fff]/20 bg-[#2b7fff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#2b7fff]">
                    статья
                  </p>

                  <h2
                    id={`article-title-${articleId}`}
                    className="text-2xl font-bold leading-tight text-neutral-900 sd:text-4xl"
                  >
                    {title}
                  </h2>

                  {description ? (
                    <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-600 sd:text-base">
                      {description}
                    </p>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setIsAudioOpen((prev) => !prev)}
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90 active:scale-[0.99] sd:w-auto"
                    aria-expanded={isAudioOpen}
                    aria-controls={`audio-wrap-${articleId}`}
                  >
                    {isAudioOpen ? "Скрыть аудио-версию статьи" : audioTitle}
                  </button>
                </div>
              </div>
            </div>

            {/* ===== Текст статьи идёт под изображением и заголовком ===== */}
            <div className="px-5 py-6 sd:px-8 sd:py-8">
              {isAudioOpen ? (
                <div
                  id={`audio-wrap-${articleId}`}
                  className="mb-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                >
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-neutral-900">
                      Аудио-версия статьи
                    </h3>

                    <p className="mt-1 text-sm text-neutral-600">
                      Нажмите воспроизведение и прослушайте статью в удобном
                      формате.
                    </p>
                  </div>

                  <audio
                    controls
                    preload="none"
                    className="w-full"
                    aria-label={`Аудио-версия статьи: ${title}`}
                  >
                    <source src={audioSrc} type="audio/mpeg" />
                    Ваш браузер не поддерживает воспроизведение аудио.
                  </audio>
                </div>
              ) : null}

              {intro ? (
                <div className="mb-8 rounded-2xl bg-neutral-50 p-5">
                  <p className="text-base leading-7 text-neutral-700 sd:text-lg">
                    {intro}
                  </p>
                </div>
              ) : null}

              {bullets?.length ? (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-neutral-900 sd:text-2xl">
                    {bulletsTitle || `На что обратить внимание${finalCity}`}
                  </h3>

                  <ul className="mt-4 grid gap-3 sd:grid-cols-2">
                    {bullets.map((item, index) => (
                      <li
                        key={`${item}-${index}`}
                        className="rounded-2xl border border-neutral-200 bg-white p-4 text-neutral-700"
                      >
                        <span className="font-semibold text-neutral-900">
                          {index + 1}.
                        </span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={`${section.heading}-${index}`}>
                    <h3 className="text-xl font-bold leading-tight text-neutral-900 sd:text-2xl">
                      {section.heading}
                    </h3>

                    <div className="mt-4 space-y-4 text-base leading-7 text-neutral-700">
                      {(section.paragraphs || []).map((paragraph, pIndex) => (
                        <p key={`${section.heading}-${pIndex}`}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#2b7fff]/20 bg-[#2b7fff]/5 p-5">
                <h3 className="text-xl font-bold text-neutral-900">Итог</h3>

                <p className="mt-3 text-base leading-7 text-neutral-700">
                  {conclusion ? (
                    conclusion
                  ) : (
                    <>
                      При заказе услуги <strong>{finalServiceName}</strong> не
                      стоит смотреть только на самую низкую цену. Намного важнее
                      сразу нормально объяснить задачу, уточнить детали,
                      подготовиться заранее и выбрать подходящий вариант. Именно
                      такой подход помогает избежать лишних расходов,
                      непонятных ситуаций и ненужных нервов{finalCity}.
                    </>
                  )}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}