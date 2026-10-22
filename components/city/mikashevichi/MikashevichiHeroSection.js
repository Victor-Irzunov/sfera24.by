// /components/city/mikashevichi/MikashevichiHeroSection.jsx — ПОЛНОСТЬЮ
import Image from "next/image";
import config from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";

const HERO_DESKTOP = "/fon/mebel-na-zakaz-v-mikashevichi.webp";
const HERO_MOBILE = "/fon/mebel-na-zakaz-v-mikashevichi-mobile.webp";

export default function MikashevichiHeroSection() {
  const phone = (config?.phone1 || "").toString().trim();
  const phoneLink = (config?.phone1Link || config?.phone1 || phone).toString().trim();

  return (
    <section className="relative bg-white">
      {/* Desktop */}
      <div className="relative hidden sd:block overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_DESKTOP}
            alt="Мебель на заказ в Микашевичах — изготовление мебели под заказ"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1400px"
            className="object-cover object-center"
            quality={72}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/28 to-black/10" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(1100px_circle_at_55%_28%,transparent_35%,rgba(0,0,0,.62)_100%)]" />

          {/* фирменный цвет */}
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(900px_circle_at_78%_22%,rgba(22,182,198,0.22),transparent_55%)]" />
          <div className="absolute inset-0 opacity-65 bg-[radial-gradient(900px_circle_at_22%_20%,rgba(253,183,35,0.20),transparent_55%)]" />
        </div>

        <div className="relative">
          <div className="container mx-auto">
            <div className="pt-18 sd:pt-48 pb-12 sd:pb-16">
              <div className="max-w-5xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-[#16b6c6]" />
                  Микашевичи • Брестская область • замер по записи
                </p>

                {/* ✅ ЕДИНСТВЕННЫЙ H1 */}
                <h1 className="mt-5 text-4xl sd:text-6xl font-extrabold text-white leading-tight">
                  Мебель на заказ в Микашевичах{' '}
                  <span className="block text-[#16b6c6] text-2xl md:text-3xl font-bold mt-2 font-script drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)]">
                    изготовление мебели под заказ по индивидуальным размерам
                  </span>
                </h1>

                <p className="mt-5 text-white/85 text-base md:text-lg max-w-2xl">
                  Корпусная, встроенная, мягкая и офисная мебель. Подберём материалы и фурнитуру, сделаем расчёт по фото
                  и размерам и предложим вариант под ваш бюджет.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a href={`tel:${phoneLink}`} className="btn btn-lg text-base btn-secondary text-black font-extrabold rounded-full px-6" aria-label="Позвонить">
                    Телефон: <span className="font-semibold text-white">{phone}</span>
                  </a>

                  <BtnComp
                    title="Рассчитать стоимость"
                    index={711}
                    center={false}
                    name="Быстрый расчёт (Микашевичи)"
                    consult
                    bg
                    small
                    img
                    short
                  />

                 
                </div>

                <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-white/85">
                  <li className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                    <span className="font-semibold text-white">Замер</span>
                    <div className="mt-1">по записи, обычно 1–2 дня</div>
                  </li>
                  <li className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                    <span className="font-semibold text-white">Проект</span>
                    <div className="mt-1">компоновка + подбор материалов</div>
                  </li>
                  <li className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
                    <span className="font-semibold text-white">Монтаж</span>
                    <div className="mt-1">доставка и установка под ключ</div>
                  </li>
                </ul>

              

                <p className="mt-6 text-white/85 text-sm">
                  <span className="font-script text-[#16b6c6] text-xl font-bold">Фишка для города:</span> делаем проекты “под
                  метр” — удобно, когда нужно максимум хранения в небольшой комнате.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative sd:hidden overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_MOBILE}
            alt="Мебель на заказ в Микашевичах — изготовление мебели под заказ"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={70}
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/28 to-black/10" />
          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(700px_circle_at_20%_20%,rgba(22,182,198,0.22),transparent_55%)]" />
        </div>

        <div className="relative">
          <div className="container mx-auto">
            <div className="pt-40 pb-10">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur border border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#16b6c6]" />
                Микашевичи • замер по записи
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-white leading-tight">
                Мебель на заказ в Микашевичах{' '}
              </h2>

              <p className="mt-2 text-[#16b6c6] text-xl font-bold font-script">
                под ваши размеры и бюджет
              </p>

              <p className="mt-3 text-white/85 text-sm">
                Корпусная, встроенная, мягкая и офисная мебель под заказ. Предварительный расчёт — по фото и размерам.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a href={`tel:${phoneLink}`} className="btn btn-lg btn-secondary text-black font-extrabold rounded-full" aria-label="Позвонить">
                  Позвонить
                </a>

                <BtnComp
                  title="Рассчитать стоимость"
                  index={712}
                  center={false}
                  name="Быстрый расчёт (Микашевичи)"
                  consult
                  bg
                  small
                  img
                  short
                  w
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/85">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur">
                  <div className="font-semibold text-white">Низкая цена</div>
                  <div className="mt-1">от производителя</div>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur">
                  <div className="font-semibold text-white">Замер, доставка</div>
                  <div className="mt-1">под ключ</div>
                </div>
              </div>

              {phone ? (
                <div className="mt-5 text-white/75 text-xs">
                  Телефон: <span className="font-semibold text-white">{phone}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}