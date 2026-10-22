// /components/iconMessenger/Icon.jsx — ПОЛНОСТЬЮ

import phoneNumbers from "@/config/config";
import Image from "next/image";

const TELEGRAM_URL = `https://t.me/${phoneNumbers.phoneSocialTelegram}`;
const WHATSAPP_URL = `https://wa.me/${phoneNumbers.phone1Social}`;
const VIBER_URL = `viber://chat?number=%2B${phoneNumbers.phone1Social}`;
const INSTAGRAM_URL = "https://www.instagram.com/listovki.by/";

const Icon = () => {
  return (
    <nav aria-label="Мессенджеры и социальные сети">
      <div className="flex items-center gap-3">
        {/* Telegram */}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Telegram"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2BA4D7] text-white shadow-sm hover:opacity-90"
        >
          <Image
            src="/svg/telegram-white.svg"
            alt="Telegram"
            width={20}
            height={20}
          />
        </a>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3BC34D] text-white shadow-sm hover:opacity-90"
        >
          <Image
            src="/svg/whatsapp-white.svg"
            alt="WhatsApp"
            width={20}
            height={20}
          />
        </a>

        {/* Viber */}
        <a
          href={VIBER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Viber"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C529F] text-white shadow-sm hover:opacity-90"
        >
          <Image src="/svg/viber-white.svg" alt="Viber" width={20} height={20} />
        </a>

        {/* Instagram */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm hover:opacity-90"
        >
          <Image
            src="/svg/instagram-white.svg"
            alt="Instagram"
            width={20}
            height={20}
          />
        </a>
      </div>
    </nav>
  );
};

export default Icon;
