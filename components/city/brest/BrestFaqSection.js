// /components/city/brest/BrestFaqSection.jsx — ПОЛНОСТЬЮ
// ✅ Локальный FAQ для Бреста (8–10 вопросов, уникальные формулировки)

const ACCENT = "#16b6c6";

const FAQS = [
  {
    q: "Сколько ждать замер в Бресте?",
    a: "Обычно выезжаем в течение 1–2 дней (по записи). Перед визитом уточняем тип мебели, размеры и пожелания по материалам.",
  },
  {
    q: "Можно ли сделать расчёт цены до замера?",
    a: "Да. Пришлите фото, примерные размеры и пожелания по фасадам/фурнитуре — дадим предварительную стоимость и сроки.",
  },
  {
    q: "Доставка и монтаж в Бресте выполняете сами?",
    a: "Да. Организуем доставку под монтаж, выполняем установку, регулировку дверей/ящиков и проверку механизмов.",
  },
  {
    q: "Какие сроки изготовления мебели?",
    a: "Срок зависит от сложности и комплектации. После замера и согласования проекта фиксируем сроки в заказе.",
  },
  {
    q: "Что сильнее всего влияет на цену?",
    a: "Материалы фасадов и столешницы, фурнитура, наполнение шкафов, сложность (ниши/углы/коммуникации) и дополнительные опции.",
  },
  {
    q: "Сделаете встроенный шкаф до потолка в нишу?",
    a: "Да. На замере проверим геометрию и перепады, подберём конструкцию и наполнение, чтобы шкаф “сел” идеально.",
  },
  {
    q: "Можно ли заказать кухню с подсветкой и системой хранения?",
    a: "Да. Предложим варианты подсветки и систем хранения под бюджет, чтобы функциональность была максимальной.",
  },
  {
    q: "Есть гарантия и сервис после монтажа?",
    a: "Да. После установки проверяем механизмы, даём рекомендации по уходу. При необходимости выполняем сервис и регулировку.",
  },
];

export default function BrestFaqSection() {
  return (
    <section className="bg-white py-12 sd:py-16" id="faq" aria-label="FAQ — мебель на заказ в Бресте">
      <div className="container mx-auto">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
              Вопрос-ответ по мебели на заказ в Бресте
            </h2>
            <h3 className="mt-3 text-sm sd:text-base text-slate-600">
              Коротко и по делу: замер, расчёт, изготовление, доставка и монтаж.
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  <h3 className="text-base font-extrabold text-slate-900">{f.q}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sd:p-6 text-center">
            <p className="text-sm sd:text-base text-slate-700">
              Хотите расчёт по фото и размерам? Напишите, что нужно: кухня / шкаф / прихожая — и примерные габариты.
            </p>
            <a
              href="#zakhvat"
              className="mt-4 inline-flex items-center justify-center rounded-full px-7 py-3 font-extrabold"
              style={{ backgroundColor: ACCENT, color: "#052a2f" }}
              aria-label="Оставить заявку на расчёт мебели в Бресте"
            >
              Оставить заявку →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}