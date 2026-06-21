"use client";

import { LegalLayout, LegalH2 } from "@/components/LegalLayout";
import { useI18n } from "@/lib/i18n";

export function TosContent() {
  const { t } = useI18n();
  return (
    <LegalLayout title={t.legalTos.title}>
      <LegalH2>{t.legalTos.section1Heading}</LegalH2>
      <p>{t.legalTos.section1Body}</p>
      <br />
      <LegalH2>{t.legalTos.section2Heading}</LegalH2>
      <p>{t.legalTos.section2Body}</p>
      <br />
      <LegalH2>{t.legalTos.section3Heading}</LegalH2>
      <p>{t.legalTos.section3Body}</p>
      <br />
      <LegalH2>{t.legalTos.section4Heading}</LegalH2>
      <p>{t.legalTos.section4Body}</p>
      <br />
      <LegalH2>{t.legalTos.section5Heading}</LegalH2>
      <p>{t.legalTos.section5Body}</p>
      <br />
      <LegalH2>{t.legalTos.section6Heading}</LegalH2>
      <p>{t.legalTos.section6Body}</p>
    </LegalLayout>
  );
}
