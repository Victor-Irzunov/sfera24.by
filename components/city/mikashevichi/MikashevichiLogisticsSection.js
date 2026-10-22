// /components/city/mikashevichi/MikashevichiLogisticsSection.jsx — ПОЛНОСТЬЮ
// ✅ FIX: фон реально виден (задаём min-height для блока с Image fill + отделяем оверлеи)
// ✅ Perf: server component, lazy image, sizes
// ✅ UI: градиенты/оверлеи остаются, но не “убивают” картинку

import Image from "next/image";

const BG = "/fon/logistika-mebel-mikashevichi.webp";

const POINTS = [
  {
    title: "Удобно для небольших помещений",
    text: "В Микашевичах часто просят “максимум хранения” — проектируем так, чтобы не съедать проходы и свет.",
    icon: "/svg/space.svg",
  },
  {
    title: "Логистика и занос",
    text: "Учитываем этаж/лифт, ширину проёмов и повороты. Это важно для шкафов-купе и длинных столешниц.",
    icon: "/svg/delivery.svg",
  },
  {
    title: "Монтаж без нервов",
    text: "Используем защиту для пола/стен, аккуратно регулируем фасады и направляющие, сдаём готовый результат.",
    icon: "/svg/shield.svg",
  },
  {
    title: "Сроки — по проекту",
    text: "Срок зависит от материалов и сложности. После замера фиксируем график и держим связь.",
    icon: "/svg/calendar.svg",
  },
];

export default function MikashevichiLogisticsSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="logistics-mikashevichi">
      <div className="container mx-auto">
        {/* Важно: у контейнера должна быть высота/минимальная высота, иначе Image fill “не видно” */}
        <div className="relative rounded-[28px] border border-slate-200 bg-white shadow-sm overflow-hidden min-h-160 sd:min-h-130">
          {/* BG IMAGE */}
          <div className="absolute inset-0">
            <Image
              src={BG}
              alt="Доставка и монтаж мебели в Микашевичах — как организуем"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
              quality={72}
              loading="lazy"
            />

            {/* Оверлеи делаем мягче + добавляем “окно” для видимости текстуры */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/05" />

            {/* фирменные подсветки (не перекрывают картинку) */}
            <div className="absolute inset-0 opacity-80 bg-[radial-gradient(900px_circle_at_70%_25%,rgba(22,182,198,0.28),transparent_58%)]" />
            <div className="absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_18%_10%,rgba(253,183,35,0.18),transparent_60%)]" />

            {/* лёгкая виньетка по краям */}
            <div className="absolute inset-0 opacity-55 bg-[radial-gradient(1200px_circle_at_50%_30%,transparent_40%,rgba(0,0,0,.55)_100%)]" />
          </div>

          {/* CONTENT */}
          <div className="relative p-6 sd:p-8">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sd:text-sm text-white/90 backdrop-blur border border-white/10">
              <span className="h-2 w-2 rounded-full bg-[#16b6c6]" />
              Микашевичи • доставка и монтаж
            </p>

            <h2 className="mt-4 text-2xl sd:text-3xl font-extrabold text-white leading-tight">
              Как организуем доставку и монтаж в Микашевичах
            </h2>

            <p className="mt-3 text-sm sd:text-base text-white/85 max-w-3xl">
              Этот блок специально под Микашевичи: учитываем подъезды, занос и монтажные нюансы, чтобы мебель встала
              ровно и служила долго.
            </p>

            {/* Карточки — на “стекле”, но с чуть большей прозрачностью, чтобы фон читался */}
            <div className="mt-7 grid grid-cols-1 sd:grid-cols-2 lg:grid-cols-4 gap-4">
              {POINTS.map((x) => (
                <div
                  key={x.title}
                  className="relative rounded-2xl border border-white/15 bg-white/08 backdrop-blur-md p-5 overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(520px_circle_at_15%_0%,rgba(255,255,255,0.42),transparent_55%)]" />
                  <div className="relative flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="h-11 w-11 rounded-2xl bg-white/12 border border-white/15 flex items-center justify-center">
                        <Image src={x.icon} alt="Мебель под заказ" width={22} height={22} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white">{x.title}</h3>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">{x.text}</p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute left-5 right-5 bottom-4 h-px bg-[linear-gradient(90deg,rgba(22,182,198,0.70),rgba(255,255,255,0.18),transparent)]" />
                </div>
              ))}
            </div>

            {/* Подвал — отдельная “плашка”, чтобы фон оставался видимым */}
            <div className="mt-6 rounded-2xl border border-white/15 bg-white/08 backdrop-blur-md p-4">
              <p className="text-center text-sm text-white/90">
                <span className="font-script text-[#16b6c6] font-bold">Важно:</span> заранее сообщите этаж/лифт и ширину
                проёмов — так расчёт и монтаж будут точнее.
              </p>
            </div>
          </div>

          {/* Низ: лёгкий светлый градиент, чтобы край не “резал” */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-70 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
        </div>
      </div>
    </section>
  );
}