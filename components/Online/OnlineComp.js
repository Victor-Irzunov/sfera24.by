import Image from "next/image"

const OnlineComp = () => {
	return (
		<section className="relative py-16 bg-[url('/img/alfabet1.webp')] bg-cover bg-[#5046D4] min-h-screen">
			<div className='container mx-auto px-4'>
				<h2 className='sd:text-5xl xz:text-3xl font-semibold text-white text-center'>
					Удобный формат для обучения
				</h2>

				<div className='grid sd:grid-cols-2 xz:grid-cols-1 gap-8 mt-16 items-center'>
					<div>
						<Image src='/img/13.webp' alt='Репетитор онлайн' className="rounded-2xl shadow-lg" width={640} height={400} />
					</div>

					<div className='bg-[#FFE501] p-8 rounded-2xl shadow-lg'>
						<h3 className='text-2xl font-bold text-gray-900'>Онлайн-обучение</h3>
						<p className='text-gray-700 mt-4'>
							Обучение в онлайн-формате позволяет заниматься из любого места в удобное время. Занятия проходят через
							Zoom, Skype, Google Meet или другие платформы с интерактивными материалами, что делает процесс максимально эффективным.
						</p>
					</div>
				</div>

				<div className='grid sd:grid-cols-2 xz:grid-cols-1 gap-8 mt-10 items-center'>
					<div className='bg-white p-8 rounded-2xl shadow-lg'>
						<h3 className='text-2xl font-bold text-gray-900'>Офлайн-обучение</h3>
						<p className='text-gray-700 mt-4'>
							Для тех, кто предпочитает живое общение и атмосферу учебного пространства, мы предлагаем занятия в нашем
							кабинете в г. Брест, ул. Карла Маркса 81. Здесь созданы комфортные условия для эффективного обучения.
						</p>
					</div>

					<div>
						<Image src='/img/18.webp' alt='Кабинет офлайн' className="rounded-2xl shadow-lg" width={640} height={400} />
					</div>
				</div>


				<div className='absolute sd:top-5 sd:right-28 xz:right-0 xz:top-32'>
					<Image src='/img/robot.webp' alt='Онлайн обучение' className="sd:w-40 xz:w-28" width={150} height={150} />
				</div>
			</div>
		</section>
	)
}

export default OnlineComp