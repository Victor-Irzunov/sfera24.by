// /components/phoneBotton/PhoneBottom.js

"use client";

import phoneNumbers from "@/config/config";

const PhoneBottom = ({
  buttom,
  phone,
  size = "text-2xl",
  white,
  left,
  flex,
  hidden,
}) => {
  const phoneLabel = phoneNumbers?.phone1 || "+375 29 000-00-00";
  const phoneLink = phoneNumbers?.phone1Link || "+375290000000";

  if (hidden) return null;

  return (
    <>
      {!buttom ? (
        <div className="sd:hidden xz:block fixed bottom-0 left-0 right-0 z-50 mx-auto w-full">
          <a
            href={`tel:${phoneLink}`}
            className="mx-auto w-full"
            aria-label={`Позвонить ${phoneLabel}`}
          >

            <span className="relative flex flex-col w-full items-center justify-center  overflow-hidden rounded-none bg-white py-1 text-xl font-bold text-black shadow-lg">

              <span className="text-rotate block text-[9px] font-light -mb-1.5 py-0">
                <span className="justify-items-center">
                  <span>получить консультацию</span>
                  <span>позвонить сейчас</span>
                  <span>оставить заявку</span>
                  <span>получить расчёт стоимости</span>
                 
                </span>
              </span>
              <div className='flex items-center gap-2'>
                <svg
                  className="h-6 w-6 animate-ring shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z" />
                </svg>

                <span className="phone-pulse inline-block">{phoneLabel}</span>
              </div>
            </span>
          </a>
        </div>
      ) : (
        <div className={`${flex ? "flex space-x-4 sd:flex-row xz:flex-col" : ""} w-full`}>
          <div className={`flex ${left ? "justify-start" : "justify-center"}`}>
            <a
              href={`tel:${phoneLink}`}
              className={`${size} w-full`}
              aria-label={`Позвонить ${phoneLabel}`}
            >
              <span className="block text-[5px] font-light">
                наш телефон
              </span>
              <span
                className={`btn btn-lg flex w-full items-center justify-center gap-2 rounded-full border-none bg-primary py-1.5 font-bold shadow-none ${white ? "text-white" : "text-black"
                  }`}
              >
                {!phone ? (
                  <svg
                    className="h-5 w-5 animate-ring shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.1-.23 11.36 11.36 0 003.55.57 1 1 0 011 1v3.55a1 1 0 01-1 1A19.94 19.94 0 012 4a1 1 0 011-1h3.55a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.23 1.1z" />
                  </svg>
                ) : null}

                <span className="phone-pulse inline-block">{phoneLabel}</span>
              </span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .phone-pulse {
          transform-origin: center;
          animation: phonePulse 6.8s ease-in-out infinite;
          will-change: transform, opacity, filter;
        }

        @keyframes phonePulse {
          0% {
            transform: scale(1);
            filter: brightness(1);
            opacity: 1;
          }

          4% {
            transform: scale(1.12);
            filter: brightness(1.08);
            opacity: 1;
          }

          8% {
            transform: scale(1);
            filter: brightness(1);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            filter: brightness(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default PhoneBottom;