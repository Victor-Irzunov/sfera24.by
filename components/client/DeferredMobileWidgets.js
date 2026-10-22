// /components/client/DeferredMobileWidgets.jsx — ПОЛНОСТЬЮ

"use client";

import dynamic from "next/dynamic";

const GiftCountdownBar = dynamic(
  () => import("@/components/promo/GiftCountdownBar"),
  { ssr: false }
);


export default function DeferredMobileWidgets() {
  return (
    <>
      <GiftCountdownBar />
    </>
  );
}