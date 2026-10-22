// /components/sections/CallMasterMinskSection.jsx

import Image from "next/image";
import BtnComp from "@/components/btn/BtnComp";
import config from "@/config/config";

const steps = [
  {
    title: "Оставьте заявку",
    text: "Позвоните, напишите в мессенджер или отправьте форму на сайте.",
  },
  {
    title: "Согласуем время",
    text: "Уточним адрес, задачу и удобное время выезда мастера.",
  },
  {
    title: "Мастер приедет точно",
    text: "Специалист приезжает в назначенное согласованное время.",
  },
  {
    title: "Выполним работу",
    text: "Проверим каналы, оформим акт или выполним прочистку канализации.",
  },
];

const clientTypes = [
  {
    title: "Физическим лицам",
    text: "Квартиры, частные дома, дачи, жилые помещения.",
    icon: "/svg/home.svg",
  },
  {
    title: "Юридическим лицам",
    text: "Организации, кафе, офисы, школы, ТС, УК и коммерческие объекты.",
    icon: "/svg/document-2.svg",
  },
];

export default function CallMasterMinskSection() {
  const phone = (config?.phone1 || "+375 29 749-38-17").toString().trim();
  const phoneLink = (config?.phone1Link || "+375297493817").toString().trim();

  return (
    <section
      className="relative overflow-hidden bg-white py-14 sd:py-20"
      aria-labelledby="call-master-minsk-title"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#2b7fff]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#00AFC4]/10 blur-[90px]" />

      <div className="container relative mx-auto">
        <div className="grid gap-8 sd:grid-cols-[0.9fr_1.1fr] sd:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#00AFC4]/25 bg-[#00AFC4]/7 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFC4]">
              Выезд по Минску
            </p>

            <h2
              id="call-master-minsk-title"
              className="mt-5 text-[32px] font-black leading-[1.08] tracking-[-0.03em] text-slate-950 sd:text-[52px]"
            >
              Как вызвать мастера в Минске
            </h2>

            <h3 className="mt-5 text-base font-medium leading-relaxed text-slate-600 sd:text-xl">
              Принимаем заявки на проверку вентиляционных и дымовых каналов,
              оформление акта и прочистку канализации. Работаем с физическими и
              юридическими лицами.
            </h3>

            <div className="mt-7 grid gap-3">
              {clientTypes.map((item) => (
                <article
                  key={item.title}
                  className="flex items-start gap-4 rounded-[26px] border border-slate-200 bg-slate-50 p-5 transition hover:border-[#00AFC4]/40 hover:bg-white hover:shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#2b7fff] to-[#00AFC4]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-[20px] font-black leading-tight text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sd:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sd:flex-row">
              <BtnComp
                title="Вызвать мастера"
                index={9701}
                name="Вызвать мастера в Минске"
                w
              />

              <a
                href={`tel:${phoneLink}`}
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-[15px] font-extrabold text-slate-950 shadow-sm transition hover:border-[#00AFC4]/40 hover:bg-slate-50 sd:w-auto"
                aria-label={`Позвонить ${phone}`}
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-slate-50 p-4 shadow-[0_22px_70px_-42px_rgba(15,23,42,0.35)] sd:p-5">
              <div className="relative min-h-90 overflow-hidden rounded-[28px] bg-[#eef7ff] sd:min-h-130">
                <Image
                  src="/fon/vyzvat-mastera-minsk.webp"
                  alt="Вызвать мастера в Минске для проверки вентиляции, дымоходов и прочистки канализации"
                  fill
                  className="object-cover"
                  sizes="(min-width: 991px) 52vw, 100vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md">
                  <h3 className="text-[20px] font-black leading-tight text-slate-950">
                    Точно в согласованное время
                  </h3>

                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                    Мастер приезжает по адресу в Минске после подтверждения
                    заявки и времени выезда.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sd:grid-cols-2">
              <div className="rounded-3xl border border-[#2b7fff]/20 bg-[#2b7fff]/7 p-5">
                <h3 className="text-[18px] font-black text-slate-950">
                  08:00–20:00
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  Приём заявок каждый день.
                </p>
              </div>

              <div className="rounded-3xl border border-[#00AFC4]/25 bg-[#00AFC4]/7 p-5">
                <h3 className="text-[18px] font-black text-slate-950">
                  Минск и район
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  Выезд по городу и ближайшей области.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sd:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_16px_55px_-42px_rgba(15,23,42,0.35)]"
            >
              <div className="absolute right-4 top-4 text-[46px] font-black leading-none text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#2b7fff] to-[#00AFC4] text-[15px] font-black text-white">
                {index + 1}
              </div>

              <h3 className="relative mt-5 text-[20px] font-black leading-tight text-slate-950">
                {step.title}
              </h3>

              <p className="relative mt-3 text-[14px] leading-relaxed text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}