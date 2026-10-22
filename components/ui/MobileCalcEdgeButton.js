// /components/ui/MobileCalcEdgeButton.jsx — ПОЛНОСТЬЮ
// ✅ Максимально лёгкая серверная обёртка
// ✅ Сам UI-контроль вынесен в маленький client-компонент
// ✅ Только mobile
// ✅ Кнопка тонкая, прижата к левому краю
// ✅ Вертикальная надпись "Получить расчёт"
// ✅ По клику открывает существующий Modal
// ✅ Можно добавлять на любые страницы
// ✅ Не влияет на critical content страницы

import dynamic from "next/dynamic";

const MobileCalcEdgeButtonClient = dynamic(
  () => import("./MobileCalcEdgeButtonClient"),
);

export default function MobileCalcEdgeButton({
  index = 991,
  title = "Получить расчёт",
  name = "Быстрый расчёт",
  consult = false,
  short = true,
}) {
  return (
    <div className="sd:hidden" aria-hidden={false}>
      <MobileCalcEdgeButtonClient
        index={index}
        title={title}
        name={name}
        consult={consult}
        short={short}
      />
    </div>
  );
}