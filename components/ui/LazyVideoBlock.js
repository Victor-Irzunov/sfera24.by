// /components/ui/LazyVideoBlock.js

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LazyVideoBlock({
  src,
  poster = "/fon/video-poster.webp",
  title = "Видео",
  subtitle = "",
}) {
  const rootRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <section
      ref={rootRef}
      className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
      aria-label={title}
    >
      <div className="border-b border-slate-200 px-5 py-5 sd:px-7">
        <h3 className="text-xl font-black text-slate-900 sd:text-2xl">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-2 text-sm leading-7 text-slate-600 sd:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="relative aspect-video bg-slate-100">
        {!shouldLoad ? (
          <>
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/92 px-5 py-3 text-sm font-bold text-slate-900 shadow-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6900] text-white">
                  ▶
                </span>
                Видео загрузится при прокрутке
              </div>
            </div>
          </>
        ) : (
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            playsInline
            poster={poster}
          >
            <source src={src} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        )}
      </div>
    </section>
  );
}