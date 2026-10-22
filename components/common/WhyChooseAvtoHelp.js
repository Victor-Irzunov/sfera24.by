// /components/common/WhyChooseAvtoHelp.jsx

const PRIMARY = "#60FF1E";

const benefits = [
	{
		title: "Выезд за 10–20 минут",
		text: "Ориентируемся по пробкам и ближайшему маршруту — эвакуатор приезжает максимально быстро.",
	},
	{
		title: "Опыт работы 12 лет",
		text: "Понимаем, как аккуратно грузить любые авто, мото и спецтехнику в реальных условиях.",
	},
	{
		title: "Страховка груза",
		text: "Ответственно относимся к каждому автомобилю — предусмотрена защита и страхование.",
	},
	{
		title: "Профессиональные ремни и мягкие петли",
		text: "Фирменные стропы, мягкие петли и крепления для дисков и рамы — без повреждений бамперов и подвески.",
	},
	{
		title: "Вежливое общение",
		text: "Спокойно объясним, что делать дальше, поможем с документами и не нагнетаем ситуацию.",
	},
	{
		title: "1000+ эвакуаций",
		text: "Большой реальный опыт: от простых выездов до сложных случаев после ДТП и вне города.",
	},
];

function CheckIcon() {
	return (
		<span
			className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[rgba(96,255,30,0.14)] ring-1 ring-[rgba(96,255,30,0.55)]"
			aria-hidden="true"
		>
			<svg
				viewBox="0 0 16 16"
				className="h-3.5 w-3.5"
				style={{ color: PRIMARY }}
			>
				<path
					d="M6.5 11.2 3.3 8l1.1-1.1 2.1 2.1 5.1-5.1 1.1 1.1-6.2 6.2z"
					fill="currentColor"
				/>
			</svg>
		</span>
	);
}

export default function WhyChooseAvtoHelp() {
	return (
		<section className="relative bg-black py-16 sd:py-24 z-0">
			<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
			<div className="pointer-events-none absolute inset-x-10 z-10 -top-16 h-40 rounded-full bg-[radial-gradient(circle_at_top,rgba(96,255,30,0.22),transparent)]" />

			<div className='container mx-auto'>
				<div className="relative mx-auto max-w-6xl px-2 sd:px-6">
					<div className="sd:flex sd:items-end sd:justify-between">
						<div className="max-w-2xl">
							<p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
								Почему выбирают Avto-help
							</p>
							<h2 className="mt-3 text-2xl sd:text-3xl font-semibold leading-snug skeleton skeleton-text">
								70% клиентов выбирают{" "}
								<span className="text-(--primary,#60FF1E)">
									Avto-help
								</span>
								, потому что…
							</h2>
							<p className="mt-2 max-w-xl text-sm text-slate-300">
								Мы не просто «подвезём эвакуатор». Наша задача — аккуратно,
								спокойно и по-честному решить вашу ситуацию на дороге: от звонка
								до выгрузки на парковке или СТО.
							</p>
						</div>

						<div className="mt-4 sd:mt-0 text-sm text-slate-300">
							<p>
								<span className="text-3xl font-semibold text-(--primary,#60FF1E)">
									70%
								</span>{" "}
								новых заказов приходят по рекомендациям постоянных клиентов и
								СТО.
							</p>
						</div>
					</div>

					<div className="mt-7 grid gap-4 sd:grid-cols-2">
						{benefits.map((item) => (
							<article
								key={item.title}
								className="group flex gap-3 rounded-2xl border bg-white/5 p-4 transition border-primary hover:bg-white/10"
							>
								<CheckIcon />
								<div className="space-y-1">
									<h3 className="text-sm font-semibold text-white">
										{item.title}
									</h3>
									<p className="text-xs leading-snug text-slate-300">
										{item.text}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
