"use client";

import { ComingSoon } from "@/components/ComingSoon";
import { useI18n } from "@/lib/i18n";

export function DonateContent() {
  const { t } = useI18n();
  return (
    <ComingSoon
      badge={t.donatePage.badge}
      title={t.donatePage.title}
      description={t.donatePage.description}
      ctaLabel={t.donatePage.ctaLabel}
    />
  );
}
