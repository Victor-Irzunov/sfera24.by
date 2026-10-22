// /components/city/pinsk/PinskHeroSection.jsx — ПОЛНОСТЬЮ
import Image from "next/image";
import config from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";

const HERO_DESKTOP = "/fon/mebel-na-zakaz-v-pinske.webp";
const HERO_MOBILE = "/fon/mebel-na-zakaz-v-pinske-mobile.webp";

export default function PinskHeroSection() {
	const phone = (config?.phone1 || "").toString().trim();
	const phoneLink = (config?.phone1Link || config?.phone1 || phone).toString().trim();

	return (
		<section className="relative bg-white">
			{/* Desktop */}
			<div className="relative hidden sd:block overflow-hidden">
				<div className="absolute inset-0">
					<Image
						src={HERO_DESKTOP}
						alt="Мебель на заказ в Пинске — изготовление мебели под заказ"
						fill
						priority
						sizes="(max-width: 1024px) 100vw, 1400px"
						className="object-cover object-center"
						quality={72}
					/>
					<div className="absolute inset-0 bg-black/45" />
					<div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/10" />
					<div className="absolute inset-0 opacity-60 bg-[radial-gradient(1100px_circle_at_55%_28%,transparent_35%,rgba(0,0,0,.60)_100%)]" />
				</div>

				<div className="relative">
					<div className="container mx-auto">
						<div className="pt-18 sd:pt-48 pb-12 sd:pb-16">
							<div className="max-w-4xl">
								<p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
									<span className="h-2 w-2 rounded-full bg-[#fdb723]" />
									Пинск • Брестская область • замер по записи
								</p>

								<h1 className="mt-5 text-4xl sd:text-6xl font-extrabold text-white leading-tight">
									Мебель на заказ в Пинске
									<span className="block text-secondary text-2xl md:text-3xl font-bold mt-2 font-script">
										изготовление мебели под заказ по индивидуальным размерам
									</span>
								</h1>

								<p
									className={`font-script mt-4 text-[#19b6c6] font-bold xz:text-3xl sd:text-3xl leading-tight drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)]`}
								>
									Делаем мебель со вкусом и на века!
								</p>

								<p className="mt-3 text-white text-sm">
									Делаем корпусную, встроенную, мягкую и офисную мебель. Поможем подобрать материалы и фурнитуру,
									покажем варианты по бюджету, рассчитаем стоимость по фото и размерам. <span className="text-primary font-black">Цена производителя.</span>
								</p>



								<div className="mt-7 flex flex-wrap items-center gap-3">
									<a
										href={`tel:${phoneLink}`}
										className="btn btn-secondary rounded-full px-6 text-black btn-lg text-sm font-extrabold"
										aria-label="Позвонить по телефону"
									>
										Позвонить
									</a>

									{/* ✅ вместо Link "Рассчитать стоимость" — BtnComp (открывает модалку) */}
									<BtnComp
										title="Рассчитать стоимость"
										index={501} // важно: уникальный индекс на странице, чтобы id модалки не конфликтовал
										center={false}
										name="Быстрый расчёт (Пинск)"
										consult
										bg
										small
										img
										short
									/>

									{phone ? (
										<span className="text-white/75 text-sm">
											Телефон: <span className="font-semibold text-white">{phone}</span>
										</span>
									) : null}
								</div>

								<ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-white/85">
									<li className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
										<span className="font-semibold text-white">Замер</span>
										<div className="mt-1">по записи, обычно 1–2 дня</div>
									</li>
									<li className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
										<span className="font-semibold text-white">Проект</span>
										<div className="mt-1">визуализация + подбор материалов</div>
									</li>
									<li className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur">
										<span className="font-semibold text-white">Монтаж</span>
										<div className="mt-1">доставка и установка под ключ</div>
									</li>
								</ul>
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
						alt="Мебель на заказ в Пинске — изготовление мебели под заказ"
						fill
						priority
						sizes="100vw"
						className="object-cover object-center"
						quality={70}
					/>
					<div className="absolute inset-0 bg-black/50" />
					<div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/10" />
				</div>

				<div className="relative pt-28">
					<div className="container mx-auto">
						<div className="pt-16 pb-10">
							<p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur">
								<span className="h-2 w-2 rounded-full bg-[#fdb723]" />
								Пинск • замер по записи
							</p>

							<h2 className="mt-4 text-3xl font-extrabold text-white leading-tight">
								Мебель на заказ в Пинске
							</h2>

							<p
								className={`font-script mt-4 text-[#19b6c6] font-bold xz:text-3xl sd:text-3xl leading-tight drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)]`}
							>
								Делаем мебель со вкусом и на века!
							</p>

							<p className="mt-3 text-white/85 text-sm">
								Корпусная, встроенная, мягкая и офисная мебель под заказ. Предварительный расчёт — по фото и размерам. <span className="text-primary font-black">Цена производителя.</span>
							</p>

							<div className="mt-5 flex flex-col gap-3">
								<a
									href={`tel:${phoneLink}`}
									className="btn btn-secondary rounded-full btn-lg text-base text-black font-extrabold"
									aria-label="Позвонить по телефону"
								>
									Позвонить
								</a>

								{/* ✅ вместо Link "Рассчитать стоимость" — BtnComp */}
								<BtnComp
									title="Рассчитать стоимость"
									index={502} // отдельный индекс для мобильного блока (во избежание конфликтов)
									center={false}
									name="Быстрый расчёт (Пинск)"
									consult
									bg
									small
									img
									short
									w // на мобиле логично во всю ширину
								/>
							</div>

							<div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/85">
								<div className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur">
									<div className="font-semibold text-white">Низкая цена</div>
									<div className="mt-1">от производителя</div>
								</div>
								<div className="rounded-2xl bg-white/10 border border-white/15 p-3 backdrop-blur">
									<div className="font-semibold text-white">Замер, установка</div>
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