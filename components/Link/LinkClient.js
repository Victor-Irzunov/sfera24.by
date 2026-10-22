"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const LinkClient = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleLoad = () => setIsLoaded(true);

		if (document.readyState === "complete") {
			setIsLoaded(true);
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);


	if (!isLoaded) return null;


	return (
		<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
			<li className='text-3xl font-bold mb-14'>
				Меню
			</li>
			<li className='mb-1.5 text-lg'>
				<Link
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
					className=""
					onClick={() => document.getElementById('my-drawer').checked = false}
				>
					
				</Link>
			</li>
			<li className='mb-1.5'>
				<ul className="menu bg-base-200 rounded-box w-56">
					<li>
						<p className="menu-title">
							Услуги
						</p>
						<ul>
							
							<li>
								<Link
									href={`${process.env.NEXT_PUBLIC_BASE_URL}//`}
									onClick={() => document.getElementById('my-drawer').checked = false}
								>
									
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</li>
			<li className='mb-1.5 text-lg'>
				<Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/kontakty/`}
					onClick={() => document.getElementById('my-drawer').checked = false}
				>
					Контакты
				</Link>
			</li>
		</ul >
	)
}

export default LinkClient