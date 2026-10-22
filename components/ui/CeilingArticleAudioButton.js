// /components/ui/CeilingArticleAudioButton.jsx — ПОЛНОСТЬЮ
// ✅ Клиентская компонента только для управления аудио
// ✅ Лёгкая логика без лишних библиотек
// ✅ Не грузит аудио до нажатия пользователем
// ✅ Подходит для mobile speed

"use client";

import { useEffect, useRef, useState } from "react";

export default function CeilingArticleAudioButton({ audioSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Ошибка воспроизведения аудио:", error);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={toggleAudio}
        className="group inline-flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/14"
        aria-label={isPlaying ? "Поставить аудио на паузу" : "Прослушать аудио статьи"}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fdb723] text-black shadow-[0_12px_28px_-16px_rgba(253,183,35,0.95)]">
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1.2" />
              <rect x="14" y="5" width="4" height="14" rx="1.2" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 6.5v11c0 .8.86 1.3 1.56.9l8.2-5.5a1.08 1.08 0 0 0 0-1.8l-8.2-5.5A1.04 1.04 0 0 0 8 6.5Z" />
            </svg>
          )}
        </span>

        <span className="flex flex-col items-start text-left">
          <span className="text-[15px] leading-none">
            {isPlaying ? "Пауза" : "Прослушать статью"}
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/55">
            аудиоверсия материала
          </span>
        </span>
      </button>

      <span className="text-xs text-white/50">
        Аудио загружается только после нажатия
      </span>

      <audio ref={audioRef} preload="none" src={audioSrc} />
    </div>
  );
}