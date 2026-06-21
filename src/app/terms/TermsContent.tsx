"use client";

import { LegalLayout, LegalH2 } from "@/components/LegalLayout";
import { useI18n } from "@/lib/i18n";

export function TermsContent() {
  const { t } = useI18n();
  return (
    <LegalLayout title={t.legalTerms.title} effective={t.legalTerms.effective}>
      <LegalH2>{t.legalTerms.s1Heading}</LegalH2>
      <p>{t.legalTerms.s1Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s2Heading}</LegalH2>
      <p>{t.legalTerms.s2Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s3Heading}</LegalH2>
      <p>{t.legalTerms.s3Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s4Heading}</LegalH2>
      <p>{t.legalTerms.s4Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s5Heading}</LegalH2>
      <p>{t.legalTerms.s5Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s6Heading}</LegalH2>
      <p>{t.legalTerms.s6Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s7Heading}</LegalH2>
      <p>{t.legalTerms.s7Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s8Heading}</LegalH2>
      <p>{t.legalTerms.s8Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s9Heading}</LegalH2>
      <p>{t.legalTerms.s9Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s10Heading}</LegalH2>
      <p>{t.legalTerms.s10Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s11Heading}</LegalH2>
      <p>{t.legalTerms.s11Body}</p>
      <br />
      <LegalH2>{t.legalTerms.s12Heading}</LegalH2>
      <p>{t.legalTerms.s12Body}</p>
      <br />
      <p>{t.legalTerms.lastUpdated}</p>
      <br />
    </LegalLayout>
  );
}
