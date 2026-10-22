// /components/telegramChat/TelegramChat.js

"use client";

import { useEffect, useRef, useState } from "react";

const SITE_ID = "vitech";

const API_SEND = "https://telegram-chat-api.vercel.app/api/chat/send";
const API_POLL = "https://telegram-chat-api.vercel.app/api/chat/poll";

function getUniqueMessages(items = []) {
  const map = new Map();

  for (const item of items) {
    if (!item?.id) continue;
    map.set(item.id, item);
  }

  return Array.from(map.values()).sort((a, b) => {
    return Number(a.createdAt || 0) - Number(b.createdAt || 0);
  });
}

export default function TelegramChat() {
  const [open, setOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [operatorStatus, setOperatorStatus] = useState("online");
  const [newAnswer, setNewAnswer] = useState(false);

  const bottomRef = useRef(null);
  const messagesCountRef = useRef(0);

  const playDing = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        1320,
        audioContext.currentTime + 0.08
      );

      gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.18,
        audioContext.currentTime + 0.02
      );
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.28
      );

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch {}
  };

  useEffect(() => {
    const savedSessionId = localStorage.getItem(
      `telegram_chat_session_id_${SITE_ID}`
    );

    if (savedSessionId) {
      setSessionId(savedSessionId);
    }
  }, []);

  useEffect(() => {
    const hour = new Date().getHours();
    setOperatorStatus(hour >= 9 && hour < 21 ? "online" : "soon");
  }, []);

  useEffect(() => {
    if (!sessionId || !open) return;

    const loadMessages = async () => {
      try {
        const res = await fetch(
          `${API_POLL}?siteId=${SITE_ID}&sessionId=${sessionId}`,
          { cache: "no-store" }
        );

        const data = await res.json();

        if (data.ok) {
          const uniqueMessages = getUniqueMessages(data.messages || []);
          const prevCount = messagesCountRef.current;
          const nextCount = uniqueMessages.length;

          const hasNewAdminMessage =
            nextCount > prevCount &&
            uniqueMessages
              .slice(prevCount)
              .some((item) => item.from === "admin");

          if (hasNewAdminMessage) {
            setNewAnswer(true);
            setStatus("Оператор ответил.");
            playDing();

            setTimeout(() => {
              setNewAnswer(false);
            }, 4000);
          }

          messagesCountRef.current = nextCount;
          setMessages(uniqueMessages);
        }
      } catch {}
    };

    loadMessages();

    const timer = setInterval(loadMessages, 4000);

    return () => clearInterval(timer);
  }, [sessionId, open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!phone.trim() && !message.trim()) {
      setStatus("Введите телефон или сообщение");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(API_SEND, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          siteId: SITE_ID,
          sessionId,
          name,
          phone,
          message,
          page: window.location.href,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        if (!sessionId) {
          setSessionId(data.sessionId);
          localStorage.setItem(
            `telegram_chat_session_id_${SITE_ID}`,
            data.sessionId
          );
        }

        setMessage("");
        setStatus("Сообщение отправлено.");

        if (data.message) {
          setMessages((prev) => {
            const next = getUniqueMessages([...prev, data.message]);
            messagesCountRef.current = next.length;
            return next;
          });
        }
      } else {
        setStatus(data.error || "Ошибка отправки. Попробуйте позже.");
      }
    } catch {
      setStatus("Ошибка соединения. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const isOnline = operatorStatus === "online";

  return (
    <div className="fixed bottom-5 right-5 z-9999">
      {open && (
        <div className="mb-4 flex h-140 w-90 max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
          <div className="bg-slate-950 px-5 py-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-bold">Онлайн-чат</p>
                <p className="text-sm text-slate-300">
                  Напишите вопрос — ответ появится здесь
                </p>
              </div>

              <span
                className={`h-3 w-3 shrink-0 rounded-full ${
                  isOnline ? "bg-green-400" : "bg-yellow-400"
                }`}
              />
            </div>

            <div className="mt-3 rounded-2xl bg-white/10 px-3 py-2 text-xs text-slate-100">
              {isOnline ? "🟢 Оператор онлайн" : "🟡 Обычно отвечаем за 5 минут"}
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.length === 0 && (
              <div className="rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                Здравствуйте! Напишите вопрос или оставьте телефон.
              </div>
            )}

            {messages.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  item.from === "admin" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    item.from === "admin"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "bg-slate-950 text-white"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}

            {newAnswer && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white px-4 py-2 text-xs text-slate-500 shadow-sm">
                  Оператор на связи
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form onSubmit={sendMessage} className="space-y-3 border-t p-4">
            {messages.length === 0 && (
              <>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+375 XX XXX-XX-XX"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
                />
              </>
            )}

            <div className="flex gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ваш вопрос"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white disabled:opacity-60"
              >
                {loading ? "..." : "➤"}
              </button>
            </div>

            {status && (
              <p className="text-center text-xs text-slate-500">{status}</p>
            )}
          </form>
        </div>
      )}

      <button
        onClick={() => {
          setOpen((prev) => !prev);
          setNewAnswer(false);
        }}
        className="relative rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-2xl"
      >
        {!open && newAnswer && (
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-green-400 ring-4 ring-white" />
        )}

        {open ? "Закрыть" : "Чат"}
      </button>
    </div>
  );
}