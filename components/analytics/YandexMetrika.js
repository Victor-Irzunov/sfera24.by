// /components/analytics/YandexMetrika.js — ПОЛНОСТЬЮ
export default function YandexMetrikaNoScript() {
  const YM_ID = 106940623;

  return (
    <noscript>
      <div>
        <img
          src={`https://mc.yandex.ru/watch/${YM_ID}`}
          style={{ position: "absolute", left: "-9999px" }}
          alt="Мебель под заказ"
        />
      </div>
    </noscript>
  );
}