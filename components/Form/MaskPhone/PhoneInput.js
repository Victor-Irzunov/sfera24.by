// /my-app/components/Form/MaskPhone/PhoneInput.js — ПОЛНОСТЬЮ
// ✅ BY формат: +375 XX XXX-XX-XX
// ✅ Валидируем: 375 + 9 цифр (всего 12 цифр), коды операторов 25/29/33/44
// ✅ Разрешаем ввод как: +375..., 375..., 80..., 0..., а также просто "29..." — нормализуем
// ✅ Никакой лишней логики не меняем: оставлены setAlertText/setAlertActive/bg/border

const PhoneInput = ({ value, onChange, setAlertText, setAlertActive, bg, border }) => {
  const formatByPhone = (input) => {
    const digits = String(input || "").replace(/\D/g, "");

    // Нормализация возможных начал:
    // 80XXXXXXXXX (11 цифр) -> 375XXXXXXXXX (12)
    // 0XXXXXXXXX (9 цифр) -> 375XXXXXXXXX (12)
    // XX... (если начали с кода оператора 25/29/33/44) -> 375XX... (12)
    let normalized = digits;

    if (!normalized) return "+375 ";

    // 80 + 9 цифр
    if (normalized.startsWith("80") && normalized.length >= 11) {
      normalized = "375" + normalized.slice(2);
    }

    // 0 + 8 цифр (редко, но встречается)
    if (normalized.startsWith("0") && normalized.length >= 9) {
      normalized = "375" + normalized.slice(1);
    }

    // Если пользователь ввёл просто код оператора + номер (например 29XXXXXXXX)
    if (
      (normalized.startsWith("25") ||
        normalized.startsWith("29") ||
        normalized.startsWith("33") ||
        normalized.startsWith("44")) &&
      normalized.length <= 9
    ) {
      normalized = "375" + normalized;
    }

    // Если ввели 9 цифр номера без кода страны (например 291234567) — тоже добавим 375
    if (!normalized.startsWith("375") && normalized.length === 9) {
      normalized = "375" + normalized;
    }

    // Если первый символ не 3 (т.е. не похоже на 375) — держим маску +375
    if (!normalized.startsWith("375")) return "+375 ";

    // Ограничим максимум 12 цифр: 375 + 9 цифр номера
    normalized = normalized.slice(0, 12);

    // Формат: +375 XX XXX-XX-XX
    const rest = normalized.slice(3); // 9 цифр после 375
    let out = "+375";

    if (rest.length > 0) out += ` ${rest.slice(0, 2)}`;      // XX (код оператора)
    if (rest.length > 2) out += ` ${rest.slice(2, 5)}`;      // XXX
    if (rest.length > 5) out += `-${rest.slice(5, 7)}`;      // XX
    if (rest.length > 7) out += `-${rest.slice(7, 9)}`;      // XX

    return out;
  };

  const handleChange = (e) => {
    let formatted = formatByPhone(e.target.value);
    const digits = formatted.replace(/\D/g, ""); // например: 375291234567

    // Валидация: 375 + 9 цифр (итого 12), код оператора 25/29/33/44
    if (digits.length >= 5) {
      const operator = digits.slice(3, 5); // 2 цифры после 375
      const allowed = ["25", "29", "33", "44"].includes(operator);

      if (!allowed) {
        setAlertText("Введите номер РБ: +375 25/29/33/44 XXX-XX-XX");
        setAlertActive(true);
        setTimeout(() => setAlertActive(false), 3000);
        formatted = "+375 ";
      }
    }

    onChange(formatted);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="+375 29 XXX-XX-XX"
      className={`input input-bordered ${bg ? "bg-white" : "bg-white"} w-full text-black ${
        border ? "sd:input-lg xz:input-md" : "border border-black input-md"
      }`}
      required
      aria-label="Ввод номера телефона"
      inputMode="tel"
      autoComplete="tel"
    />
  );
};

export default PhoneInput;