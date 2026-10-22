// /components/city/mikashevichi/MikashevichiFaqSection.jsx — ПОЛНОСТЬЮ
const FAQ = [
  {
    q: "Вы делаете мебель на заказ именно в Микашевичах?",
    a: "Да. Работаем по Микашевичам и Брестской области: замер по записи, проект, изготовление, доставка и монтаж под ключ.",
  },
  {
    q: "Можно ли рассчитать стоимость мебели до замера?",
    a: "Да. Предварительный расчёт делаем по фото/эскизу и размерам. Точная стоимость фиксируется после замера и выбора материалов и фурнитуры.",
  },
  {
    q: "Какая мебель под заказ самая популярная в Микашевичах?",
    a: "Чаще всего заказывают кухни, шкафы-купе/гардеробные, прихожие, гостиные/ТВ-зоны, офисные столы и мягкие решения.",
  },
  {
    q: "Сколько занимает замер в Микашевичах?",
    a: "Обычно выезд возможен по записи в ближайшие 1–2 дня. Перед выездом уточним адрес, этаж/лифт и детали по проекту.",
  },
  {
    q: "Что сильнее всего влияет на цену мебели?",
    a: "Размеры и компоновка, материалы фасадов, фурнитура, встроенность (ниши/коммуникации) и условия монтажа (занос/этаж/лифт).",
  },
  {
    q: "Доставка и монтаж в Микашевичах — под ключ?",
    a: "Да. Организуем доставку и монтаж под ключ: привозим изделие, устанавливаем и регулируем фасады/двери, даём рекомендации по уходу.",
  },
  {
    q: "Можно ли сделать мебель по моему проекту/картинке?",
    a: "Да. Пришлите фото/пример — адаптируем под ваш размер и предложим материалы и фурнитуру под бюджет.",
  },
  {
    q: "Какие сроки изготовления?",
    a: "Срок зависит от проекта и материалов. После замера и согласования комплектации фиксируем сроки и держим связь по этапам.",
  },
  {
    q: "Помогаете выбрать материалы и фурнитуру?",
    a: "Да. Подскажем варианты по долговечности и бюджету: где лучше не экономить (фурнитура), а где можно оптимизировать (материал корпуса).",
  },
  {
    q: "Как заказать мебель в Микашевичах прямо сейчас?",
    a: "Оставьте заявку на сайте или позвоните: уточним задачу, сделаем предварительный расчёт и запишем на замер.",
  },
];

export default function MikashevichiFaqSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="faq">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(135deg,rgba(22,182,198,0.08)_0%,rgba(253,183,35,0.06)_45%,rgba(99,102,241,0.05)_100%)]" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.16),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.14),transparent_60%)] blur-2xl" />

          <div className="relative">
            <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
              FAQ: мебель на заказ в Микашевичах
            </h2>
            <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
              Ответы на частые вопросы — чтобы быстрее получить точный расчёт и понимать этапы работ.
            </p>

            <div className="mt-7 space-y-3">
              {FAQ.map((x) => (
                <div key={x.q} className="collapse collapse-plus border border-slate-200 rounded-2xl bg-white">
                  <input type="checkbox" />
                  <div className="collapse-title text-sm sd:text-base font-extrabold text-slate-900">{x.q}</div>
                  <div className="collapse-content">
                    <p className="text-sm text-slate-700 leading-relaxed">{x.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-slate-700">
              <span className="font-script text-[#16b6c6] font-bold">Совет:</span> для быстрого расчёта пришлите фото
              места установки и пример того, что нравится.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}