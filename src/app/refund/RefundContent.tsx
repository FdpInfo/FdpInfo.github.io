"use client";

import { LegalLayout, LegalH2 } from "@/components/LegalLayout";
import { useI18n } from "@/lib/i18n";

export function RefundContent() {
  const { t } = useI18n();
  return (
    <LegalLayout title={t.legalRefund.title} effective={t.legalRefund.effective}>
      <LegalH2>{t.legalRefund.s1Heading}</LegalH2>
      <p>
        {t.legalRefund.s1a}{" "}
        <strong>{t.legalRefund.s1Strong}</strong> {t.legalRefund.s1b}
      </p>
      <br />
      <LegalH2>{t.legalRefund.s2Heading}</LegalH2>
      <p>
        {t.legalRefund.s2a} <strong>{t.legalRefund.s2Strong}</strong>
        {t.legalRefund.s2b}
      </p>
      <br />
      <LegalH2>{t.legalRefund.s3Heading}</LegalH2>
      <p>{t.legalRefund.s3}</p>
      <br />
      <LegalH2>{t.legalRefund.s4Heading}</LegalH2>
      <p>{t.legalRefund.s4}</p>
      <br />
      <LegalH2>{t.legalRefund.s5Heading}</LegalH2>
      <p>{t.legalRefund.s5}</p>
      <br />
      <LegalH2>{t.legalRefund.s6Heading}</LegalH2>
      <p>{t.legalRefund.s6}</p>
      <br />
      <LegalH2>{t.legalRefund.s7Heading}</LegalH2>
      <p>{t.legalRefund.s7}</p>
      <br />
      <LegalH2>{t.legalRefund.s8Heading}</LegalH2>
      <p>{t.legalRefund.s8}</p>
      <br />
      <LegalH2>{t.legalRefund.s9Heading}</LegalH2>
      <p>{t.legalRefund.s9}</p>
      <br />
      <LegalH2>{t.legalRefund.s10Heading}</LegalH2>
      <p>{t.legalRefund.s10}</p>
      <br />
      <p>{t.legalRefund.lastUpdated}</p>
      <br />
    </LegalLayout>
  );
}
