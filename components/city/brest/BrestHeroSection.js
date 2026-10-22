// /components/city/brest/BrestHeroSection.jsx — ПОЛНОСТЬЮ
// ✅ Hero для /brest (уникальный текст + акценты)
// ✅ Perf/LCP: next/image priority, отдельные desktop/mobile
// ✅ Адрес не упоминаем. Производство в Пинске — можно в тексте 1 раз.

import Image from "next/image";
import Link from "next/link";
import config from "@/config/config";
import BtnComp from "@/components/btn/BtnComp";


const HERO_DESKTOP = "/fon/mebel-na-zakaz-brest.webp";
const HERO_MOBILE = "/fon/mebel-na-zakaz-brest-mobile.webp";

export default function BrestHeroSection() {
	const phone = config?.phone1 || "+375 29 000 00 00";
	const phoneLink = config?.phone1Link || phone;

	const CITIES = [
		{ name: "Пинск", href: "/pinsk" },
		{ name: "Лунинец", href: "/luninets" },
		{ name: "Микашевичи", href: "/mikashevichi" },
	];

	return (
		<section
			id="top"
			className="relative min-h-[88vh] sd:min-h-screen pt-40 sd:pt-52 sd:pb-24 pb-12"
			aria-label="Мебель на заказ в Бресте"
		>
			{/* фон */}
			<div className="absolute inset-0 sd:hidden">
				<Image
					src={HERO_MOBILE}
					alt="Мебель на заказ в Бресте — фон"
					fill
					priority
					sizes="100vw"
					className="object-cover object-center"
					quality={72}
				/>
			</div>

			<div className="absolute inset-0 hidden sd:block">
				<Image
					src={HERO_DESKTOP}
					alt="Мебель на заказ в Бресте — фон"
					fill
					priority
					sizes="(min-width: 992px) 100vw"
					className="object-cover object-center"
					quality={72}
				/>
			</div>

			<div className="absolute inset-0 bg-black/45" />
			<div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/30 to-black/25" />
			<div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(950px_circle_at_40%_28%,transparent_35%,rgba(0,0,0,.78)_100%)]" />

			<div className="relative container mx-auto">
				<div className="max-w-4xl sd:max-w-5xl">
					<p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sd:text-sm font-semibold text-white/90">
						Бесплатный замер в Бресте · Доставка и монтаж под ключ
					</p>

					<h1 className="mt-5 text-white font-extrabold tracking-tight xz:text-4xl sd:text-7xl xz:leading-[1.15] sd:leading-[0.95]">
						Мебель на заказ в Бресте
					</h1>

					<p
						className={`font-script mt-4 text-[#19b6c6] font-bold xz:text-3xl sd:text-3xl leading-tight drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)]`}
					>
						Делаем мебель со вкусом и на века!
					</p>

					<h2 className="mt-5 text-white/95 xz:text-lg sd:text-2xl font-semibold max-w-3xl">
						Изготовление мебели под заказ по индивидуальным размерам: кухни, шкафы-купе, прихожие, гостиные и офис.
					</h2>

					

					{/* мини-факты */}
					<div className="mt-7 grid grid-cols-1 sd:grid-cols-3 gap-3 sd:gap-4 max-w-3xl">
						<div className="rounded-2xl border border-white/18 bg-white/10 p-4">
							<h3 className="text-sm font-extrabold text-secondary">Что делаем</h3>
							<p className="mt-1 text-sm text-white/85">Корпусная · встроенная · мягкая · офисная</p>
						</div>
						<div className="rounded-2xl border border-white/18 bg-white/10 p-4">
							<h3 className="text-sm font-extrabold text-secondary">Сроки</h3>
							<p className="mt-1 text-sm text-white/85">Проект → производство → монтаж → цена от производителя</p>
						</div>
						<div className="rounded-2xl border border-white/18 bg-white/10 p-4">
							<h3 className="text-sm font-extrabold text-secondary">Гарантия</h3>
							<p className="mt-1 text-sm text-white/85">Фурнитура, регулировка, сервис</p>
						</div>
					</div>

					<div className="mt-8 flex flex-col sd:flex-row gap-3 sd:items-center">
						<div className="xz:w-full sd:w-fit">
							<BtnComp title="Оставить заявку" index={201} name="Заявка — мебель на заказ Брест" short img w />
						</div>

						<a
							href={`tel:${phoneLink}`}
							className="btn rounded-full h-14 px-7 shadow-none text-[15px] font-bold bg-white/10 border border-white/25 text-white hover:bg-white hover:text-black transition-all"
							aria-label="Позвонить: мебель на заказ в Бресте"
						>
							Позвонить: {phone}
						</a>


					</div>

					<p className="mt-6 text-white/70 xz:text-xs sd:text-sm">
						Другие города:{" "}
						{CITIES.map((c, i) => (
							<span key={c.href}>
								<Link className="text-white/90 underline hover:text-white" href={c.href}>
									{c.name}
								</Link>
								{i < CITIES.length - 1 ? ", " : "."}
							</span>
						))}
					</p>

					<p className="mt-5 text-white/85 xz:text-xs sd:text-base max-w-3xl">
						Производство в Пинске — выезжаем в Брест на замер, делаем проект, изготовление, доставку и установку.
						Рассчитаем стоимость по фото и размерам до выезда мастера.
					</p>
				</div>
			</div>
		</section>
	);
}