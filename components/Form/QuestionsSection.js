// /components/forms/QuestionsSection.jsx — ПОЛНОСТЬЮ
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sendOrderTelegram } from "@/http/telegramAPI";
import PhoneInput from "./MaskPhone/PhoneInput";

const QuestionsSection = () => {
	const [name, setName] = useState("");
	const [tel, setTel] = useState("+375 ");
	const [agree, setAgree] = useState(false);
	const [alertActive, setAlertActive] = useState(false);
	const [alertText, setAlertText] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const digits = tel.replace(/\D/g, "");
		if (digits.length !== 12) {
			setAlertText(
				"Введите весь номер телефона в формате: +375 XX XXX-XX-XX"
			);
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 4000);
			return;
		}

		const message = `
<b>Заявка с формы «Остались вопросы» Полоцк</b>\n
<b>Имя:</b> ${name || "Не указано"}\n
<b>Телефон:</b> <a href='tel:${tel}'>${tel}</a>\n
`;

		try {
			const data = await sendOrderTelegram(message);
			if (data?.ok) {
				window.location.href = "/thank-you";
			}
		} catch (error) {
			setAlertText("Ошибка отправки. Попробуйте ещё раз.");
			setAlertActive(true);
			setTimeout(() => setAlertActive(false), 4000);
		}
	};

	return (
		<section className="w-full bg-black py-10 sd:py-14">
			<div className="container mx-auto px-4 sd:px-6">
				<div className="flex flex-col gap-8 sd:flex-row sd:items-center sd:justify-between">
					{/* Левый текстовый блок */}
					<div className="sd:max-w-[40%] text-white">
						<h2 className="text-[26px] sd:text-[40px] font-extrabold leading-tight mb-4">
							Остались вопросы?
						</h2>
						<p className="text-[14px] sd:text-[16px] leading-relaxed text-gray-100">
							Получите любую консультацию от опытного водителя эвакуатора.
						</p>
					</div>

					{/* Правый блок с формой */}
					<form
						onSubmit={handleSubmit}
						className="w-full sd:flex-1 text-white"
					>
						{/* Поля: имя + телефон + кнопка */}
						<div className="flex flex-col gap-3 sd:flex-row sd:items-stretch sd:gap-4">
							{/* Имя */}
							<div className="sd:flex-1">
								<div className="h-full rounded-[22px] bg-white text-black px-4 sd:px-6 py-3 sd:py-4 flex items-center">
									<input
										type="text"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Ваше имя:"
										className="w-full bg-transparent outline-none border-none text-[14px] sd:text-[16px] placeholder:text-gray-500"
										aria-label="Ваше имя"
									/>
								</div>
							</div>

							{/* Телефон */}
							<div className="sd:flex-1">
								<div className="h-full rounded-[22px] bg-white text-black px-4 sd:px-6 py-1 sd:py-4 flex items-center">
									<PhoneInput
										value={tel}
										onChange={setTel}
										setAlertText={setAlertText}
										setAlertActive={setAlertActive}
										bg
										border
									/>
								</div>
							</div>

							{/* Кнопка */}
							<div className="sd:w-52.5">
								<button
									type="submit"
									disabled={!agree}
									className="w-full h-full rounded-[22px] px-8 py-3 sd:py-4 text-[16px] sd:text-[18px] font-extrabold text-black shadow-[0_12px_30px_rgba(96,255,30,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
									style={{ backgroundColor: "#60FF1E" }}
								>
									Отправить
								</button>
							</div>
						</div>

						{/* Ошибка телефона */}
						{alertActive && (
							<div className="mt-2 text-xs text-red-400">{alertText}</div>
						)}

						{/* Чекбокс согласия */}
						<div className="mt-4 flex items-center gap-2 text-[11px] sd:text-[13px] text-gray-200">
							<input
								type="checkbox"
								className="checkbox checkbox-xs bg-white border-white"
								checked={agree}
								onChange={(e) => setAgree(e.target.checked)}
							/>
							<span>
								Я согласен(а) с{" "}
								<Link
									href="/politika"
									target="_blank"
									className="underline text-gray-300"
								>
									обработкой персональных данных
								</Link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default QuestionsSection;
