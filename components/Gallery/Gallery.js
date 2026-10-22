"use client"
import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(null);

	const data = Array.from({ length: 24 }, (_, index) => ({
		src: `/portfolio/${index + 1}.webp`,
		width: 300,
		height: 300
	}));

	const openModal = (index) => {
		setCurrentImageIndex(index);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setCurrentImageIndex(null);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
	};

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<section className='sd:py-20 xz:py-10 relative' id='galereya'>
			<div className='container mx-auto'>
				<h2 className="sd:text-5xl xz:text-3xl text-secondary text-center">
					Галерея праздников
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 sd:gap-6 xz:gap-1 sd:mt-12 xz:mt-5">
					{data.map((item, index) => (
						<div key={index} onClick={() => openModal(index)}>
							<Image
								className="h-auto max-w-full rounded-lg cursor-pointer"
								src={item.src}
								width={item.width}
								height={item.height}
								alt={`Фото праздиника`}
							/>
						</div>
					))}
				</div>
				{modalOpen && currentImageIndex !== null && (
					<div
						className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
					>
						<div className="relative">
							<button className="absolute top-1/2 -translate-y-1/2 left-4 text-white" onClick={prevImage}>
								<img src="/svg/arrow-left.svg" alt="Previous" className="w-12 h-12" />
							</button>
							<button className="absolute top-1/2 -translate-y-1/2 right-4 text-white" onClick={nextImage}>
								<img src="/svg/arrow-right.svg" alt="Next" className="w-12 h-12" />
							</button>
							<button className="absolute top-4 right-4 text-white bg-black rounded-md" onClick={closeModal}>
								<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
							<div className="text-center sd:px-0 xz:px-1">
								<Image
									src={data[currentImageIndex].src}
									width={600}
									height={600}
									alt={`Фото наших работ`}
									className='rounded-2xl'
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Gallery;
