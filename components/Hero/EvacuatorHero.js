// /components/hero/EvacuatorHero.jsx — ПОЛНОСТЬЮ (главная секция как на макете, mobile + desktop)
import Image from "next/image";
import BtnComp from "@/components/btn/BtnComp";
import phoneNumbers from "@/config/config";

function Badge247() {
  return (
    <div className="inline-flex items-center rounded-2xl bg-[#60FF1E] px-6 py-2 text-black shadow-lg">
      <span className="text-3xl font-extrabold leading-none">24/7</span>
    </div>
  );
}

export default function EvacuatorHero() {

  const telHref = `tel:${phoneNumbers.phone1Link || ""}`;

  return (
    <section id="main" className="relative isolate overflow-hidden sd:min-h-auto xz:min-h-screen" aria-label="Оперативный выезд эвакуатора 24/7" >

      <div className="pointer-events-none absolute inset-0 -z-10 hidden sd:block">
        <Image
          src="/fon/fon.webp"
          alt="Эвакуатор на ночной городской трассе"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 sd:hidden">
        <Image
          src="/fon/ehvakuator-v-mogileve-kruglosutochno.webp"
          alt="Эвакуатор ночью — фон"
          fill
          sizes="100vw"
          className=""
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* ===== DESKTOP CONTENT ===== */}
      <div className="container mx-auto hidden sd:block mt-36">
        <div className="grid grid-cols-12 gap-6 py-12">
          <div className="col-span-12 sd:col-span-7 px-6">
            <div className="mb-6 flex items-center gap-3">
              <a
               href={`viber://chat?number=%2B${phoneNumbers.phone1Social}`}
                className="grid h-10 w-10 place-items-center rounded-md bg-[#60FF1E] text-black">
                <Image src="/svg/viber-black.svg" alt="VK" width={22} height={22} />
              </a>
              <a
                 href={`https://t.me/${phoneNumbers.phone1Link}`}
                className="grid h-10 w-10 place-items-center rounded-md bg-[#60FF1E] text-black">
                <Image src="/svg/telegram-black.svg" alt="Telegram" width={22} height={22} />
              </a>
              <a
                 href={`http://wa.me/${phoneNumbers.phone1Social}?text=Нужен%20эвакуатор`}
                className="grid h-10 w-10 place-items-center rounded-md bg-[#60FF1E] text-black">
                <Image src="/svg/whatsapp-black.svg" alt="WhatsApp" width={22} height={22} />
              </a>

            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl">
              Оперативный выезд
              <br />
              <span className="mt-2 inline-block text-6xl sm:text-7xl">ЭВАКУАТОР В МОГИЛËВЕ</span>{" "}
              <span className="align-middle"><Badge247 /></span>
            </h1>

            <div className="mt-8 max-w-2xl text-white/95">
              <div className="flex items-start gap-4">
                <Image src="/images/check.webp" alt="Надёжно" width={84} height={84} className="mt-1" />
                <p className="text-lg">
                  Нужен эвакуатор срочно? Приедем в любую точку города за 15–30 минут. Работаем
                  круглосуточно, без праздников и выходных. Приезжаем на собственных машинах —
                  четко и без лишних вопросов.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <BtnComp title="Обратный звонок" index={111} />
              <div className="flex items-center gap-3 rounded-full bg-black/50 px-4 py-3 text-white ring-1 ring-white/15">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#60FF1E]">
                  <Image src="/svg/phone-5.svg" alt="Телефон" width={22} height={22} />
                </div>
                <div className="leading-tight">
                  <div className="text-sm text-white/70">Свяжитесь с нами!</div>
                  <a
                    href={`tel:${phoneNumbers.phone1Link}`}
                    className="text-xl font-bold tracking-wide hover:text-[#60FF1E]"
                  >
                    {phoneNumbers.phone1}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка оставлена под автомобиль — на фоне изображение */}
          <div className="col-span-5" />
        </div>
      </div>

      {/* ===== MOBILE CONTENT ===== */}
      <div className="sd:hidden xz:block">
        <div className='container mx-auto'>
          <div className="pb-10 pt-72">
            <p className='text-xl font-extrabold leading-tight text-white/80 uppercase mb-3'>
              Оперативный выезд
            </p>
            <h1 className="font-extrabold leading-tight text-white xz:text-4xl xy:text-5xl">
              ЭВАКУАТОР В МОГИЛËВЕ
            </h1>

            <div className='mt-6'>
              <Badge247 />
            </div>

            <div className="mt-20">
              <BtnComp title="Обратный звонок" index={112} w />
            </div>

            <div className="mt-6 sd:mt-8">
              <a
                href={telHref}
                className="inline-flex w-full items-center justify-center striped-shining-button rounded-full px-8 sd:px-10 py-3 sd:py-4 text-2xl font-extrabold tracking-wide shadow-[0_12px_30px_rgba(96,255,30,0.45)]"
                style={{ backgroundColor: "#60FF1E", color: "#000000" }}
              >
                {phoneNumbers.phone1 || "Позвонить эвакуатору"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}