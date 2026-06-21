"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function BackHome() {
  const { t } = useI18n();
  return (
    <Link
      className="button-secondary zywl-relativo text-color-gray-200 transition-all transition-duration-150ms transition-ease-in-out bg-linear-gradient-gray-padding before-content-pointer-none before-content-absolute before-content-inset-0 before-content-border-radius-9999px before-content-bg-opacity-0-3 hover-text-white paredes"
      href="/"
    >
      <span className="zywl-relativo exibir-inline-flex alinhar-itens-centro">
        <span className="margem-direita-0-25rem letter-spacing-0 text-color-purple-600 transition-transform transition-duration-150ms transition-ease-in-out c8087">
          &lt;-
        </span>
        {t.nav.backHome}
      </span>
    </Link>
  );
}
