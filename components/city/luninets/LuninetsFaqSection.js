// /components/city/luninets/LuninetsFaqSection.jsx — ПОЛНОСТЬЮ
const FAQ = [
  {
    q: "Вы действительно делаете мебель на заказ в Лунинце?",
    a: "Да. Работаем по Лунинцу и Брестской области: замер по записи, проект, изготовление, доставка и монтаж под ключ.",
  },
  {
    q: "Можно ли рассчитать стоимость мебели до замера?",
    a: "Да. Предварительный расчёт делаем по фото/эскизу и размерам. Точная стоимость фиксируется после замера и выбора материалов и фурнитуры.",
  },
  {
    q: "Какие виды мебели вы изготавливаете под заказ?",
    a: "Корпусную и встроенную (шкафы-купе, прихожие, гардеробные), кухни, гостиные/ТВ-зоны, офисную и мягкую мебель.",
  },
  {
    q: "Сколько занимает замер в Лунинце?",
    a: "Обычно выезд возможен по записи в ближайшие 1–2 дня. Перед выездом уточним адрес, этаж/лифт и детали по проекту.",
  },
  {
    q: "Что влияет на цену больше всего?",
    a: "Размеры и компоновка, материалы фасадов, фурнитура, встроенность (ниши/коммуникации) и условия монтажа (занос/этаж/лифт).",
  },
  {
    q: "Доставка и монтаж в Лунинце входят в услугу?",
    a: "Да. Организуем доставку и монтаж под ключ: привозим изделие, устанавливаем, регулируем фасады/двери и даём рекомендации по уходу.",
  },
  {
    q: "Можно ли сделать мебель по моему проекту/картинке?",
    a: "Да. Пришлите фото/пример — адаптируем под ваш размер и предложим материалы и фурнитуру под бюджет.",
  },
  {
    q: "Какие сроки изготовления?",
    a: "Срок зависит от проекта и материалов. Озвучим после согласования проекта, а точнее — после замера и финальной комплектации.",
  },
  {
    q: "Помогаете выбрать материалы и фурнитуру?",
    a: "Да. Подскажем оптимальные решения по долговечности, внешнему виду и бюджету — без переплат.",
  },
  {
    q: "Как заказать мебель в Лунинце прямо сейчас?",
    a: "Оставьте заявку на сайте или позвоните: уточним задачу, сделаем предварительный расчёт и запишем на замер.",
  },
];

export default function LuninetsFaqSection() {
  return (
    <section className="bg-white py-10 sd:py-14" id="faq">
      <div className="container mx-auto">
        <div className="relative rounded-[28px] border border-slate-200 bg-white p-6 sd:p-8 shadow-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.55] bg-[linear-gradient(135deg,rgba(253,183,35,0.06)_0%,rgba(22,182,198,0.06)_45%,rgba(99,102,241,0.05)_100%)]" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(253,183,35,0.18),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(22,182,198,0.14),transparent_60%)] blur-2xl" />

          <div className="relative">
            <h2 className="text-2xl sd:text-3xl font-extrabold text-slate-900">
              FAQ: мебель на заказ в Лунинце
            </h2>
            <p className="mt-3 text-sm sd:text-base text-slate-600 max-w-3xl">
              Короткие ответы на частые вопросы — чтобы быстрее получить точный расчёт и понимать этапы работ.
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
              <span className="font-script text-secondary font-bold sd:text-2xl xz:text-xl">Совет:</span> для быстрого расчёта пришлите фото
              места установки и пример того, что нравится.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}