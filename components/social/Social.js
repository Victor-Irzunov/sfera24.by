// /components/social/Social.jsx

"use client";

import { useEffect, useRef, useState } from "react";
import phoneNumbers from "@/config/config";
import Image from "next/image";

const REPLAY_DELAY = 5000;
const FADE_DURATION_MS = 350;

const Social = () => {
	const videoRef = useRef(null);
	const replayTimeoutRef = useRef(null);
	const [showFallbackIcon, setShowFallbackIcon] = useState(false);

	useEffect(() => {
		return () => {
			if (replayTimeoutRef.current) {
				clearTimeout(replayTimeoutRef.current);
			}
		};
	}, []);

	const handleVideoEnded = () => {
		setShowFallbackIcon(true);

		if (replayTimeoutRef.current) {
			clearTimeout(replayTimeoutRef.current);
		}

		replayTimeoutRef.current = setTimeout(() => {
			if (!videoRef.current) return;

			videoRef.current.currentTime = 0;
			setShowFallbackIcon(false);

			const playPromise = videoRef.current.play();
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(() => {});
			}
		}, REPLAY_DELAY);
	};

	const handleVideoPlay = () => {
		setShowFallbackIcon(false);
	};

	return (
		<div className="sd:hidden xz:block">
			<div className="fab bottom-24 items-end gap-3">
				<div
					tabIndex={0}
					role="button"
					className="btn btn-lg btn-circle relative overflow-hidden border-0 bg-primary p-0"
					aria-label="Открыть способы связи"
				>
					{/* Видео */}
					<video
						ref={videoRef}
						className={`absolute inset-0 h-full w-full rounded-full bg-primary object-cover transition-opacity ease-in-out ${
							showFallbackIcon ? "opacity-0" : "opacity-100"
						}`}
						style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
						autoPlay
						muted
						playsInline
						preload="none"
						width="64"
						height="64"
						poster="/video/support-poster.webp"
						onEnded={handleVideoEnded}
						onPlay={handleVideoPlay}
					>
						<source src="/video/support.webm" type="video/webm" />
						<source src="/video/support.mp4" type="video/mp4" />
					</video>

					{/* SVG иконка */}
					<div
						className={`absolute inset-0 skeleton flex items-center justify-center rounded-full bg-primary transition-opacity ease-in-out ${
							showFallbackIcon
								? "pointer-events-auto opacity-100"
								: "pointer-events-none opacity-0"
						}`}
						style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
						aria-hidden={!showFallbackIcon}
					>
						<Image
							src="/svg/support3.svg"
							alt="Менеджер"
							width={32}
							height={32}
							className="object-contain"
						/>
					</div>
				</div>

				<div className="fab-close flex items-center gap-2 text-xs text-white">
					<span>Закрыть</span>
					<span className="btn btn-circle btn-lg btn-error">✕</span>
				</div>

				<div className="flex items-center gap-2">
					<span className="text-xs text-black">Позвонить</span>
					<a
						href={`tel:${phoneNumbers.phone1Link}`}
						className="btn btn-lg animate-ring btn-circle border-0 bg-white lg:tooltip"
						data-tip="Позвонить"
						aria-label="Позвонить"
					>
						<img
							src="/svg/phone-black.svg"
							alt="Телефон"
							width="25"
							height="25"
						/>
					</a>
				</div>

				<div className="flex items-center gap-2">
					<span className="text-xs text-black">Написать в WhatsApp</span>
					<a
						href={`https://wa.me/${phoneNumbers.phone1Social}?text=Нужна%20консультация`}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-lg btn-circle border-0 bg-white lg:tooltip"
						data-tip="WhatsApp"
						aria-label="Открыть WhatsApp"
					>
						<img
							src="/svg/whatsapp.svg"
							alt="WhatsApp"
							width="25"
							height="25"
						/>
					</a>
				</div>

				<div className="flex items-center gap-2">
					<span className="text-xs text-black">Написать в Viber</span>
					<a
						href={`viber://chat?number=%2B${phoneNumbers.phone1Social}`}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-lg btn-circle border-0 bg-white lg:tooltip"
						data-tip="Viber"
						aria-label="Открыть Viber"
					>
						<img
							src="/svg/viber.svg"
							alt="Viber"
							width="25"
							height="25"
						/>
					</a>
				</div>

				<div className="flex items-center gap-2">
					<span className="text-xs text-black">Написать в Telegram</span>
					<a
						href={`https://t.me/${phoneNumbers.phoneSocialTelegram}`}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-lg btn-circle border-0 bg-white lg:tooltip"
						data-tip="Telegram"
						aria-label="Открыть Telegram"
					>
						<img
							src="/svg/telegram.svg"
							alt="Telegram"
							width="25"
							height="25"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Social;