// /components/ui/PopularServicesBadge.jsx — ПОЛНОСТЬЮ
// ✅ Отдельная серверная компонента
// ✅ Красивый badge-блок вместо обычного абзаца
// ✅ Подходит для списка популярных услуг
// ✅ Можно переиспользовать на разных страницах

export default function PopularServicesBadge({
  services = [],
  href = "#zakhvat",
  title = "Популярные услуги:",
  className = "",
}) {
  if (!services?.length) return null;

  return (
    <div className={`mt-6 flex justify-center xz:py-10 sd:py-16 ${className}`}>
      <div className="w-full max-w-6xl rounded-[28px] border border-black/10 bg-white/80 px-2 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur sd:px-6 sd:py-6">
        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6900]/20 bg-[#ff6900]/10 px-4 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#ff6900]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#ff6900]" />
            {title}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {services.map((item, i) => (
              <p
                key={`${item}-${i}`}
               
                className="rounded-full border border-black/10 bg-white px-3 py-1ю5 text-xs font-medium text-black/80 transition hover:-translate-y-px hover:border-[#ff6900]/40 hover:bg-[#ff6900] hover:text-white"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}