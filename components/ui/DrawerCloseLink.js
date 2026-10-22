// /components/ui/DrawerCloseLink.jsx
"use client";

import Link from "next/link";

/**
 * Ссылка, которая закрывает мобильный дровер (checkbox с id="mobile-drawer")
 * и затем выполняет стандартную навигацию через Next.js Link.
 */
export default function DrawerCloseLink({
  href,
  children,
  className = "",
  target,
  rel,
  title,
  drawerId = "mobile-drawer",
}) {
  const handleClick = () => {
    const el = document.getElementById(drawerId);
    if (el && typeof el.checked !== "undefined") {
      el.checked = false;
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      title={title}
    >
      {children}
    </Link>
  );
}
