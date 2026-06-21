"use client";

import { LegalLayout, LegalH2 } from "@/components/LegalLayout";
import { useI18n } from "@/lib/i18n";

export function PrivacyContent() {
  const { t } = useI18n();
  return (
    <LegalLayout title={t.legalPrivacy.title} effective={t.legalPrivacy.effective}>
      <LegalH2>{t.legalPrivacy.h1}</LegalH2>
      <p>{t.legalPrivacy.p1_0}</p>
      <br />
      <LegalH2>{t.legalPrivacy.h2}</LegalH2>
      <p>{t.legalPrivacy.p2_0}</p>
      <br />
      <p>{t.legalPrivacy.p2_1}</p>
      <br />
      <p>{t.legalPrivacy.p2_2}</p>
      <br />
      <p>{t.legalPrivacy.p2_3}</p>
      <br />
      <p>{t.legalPrivacy.p2_4}</p>
      <br />
      <p>{t.legalPrivacy.p2_5}</p>
      <br />
      <p>{t.legalPrivacy.p2_6}</p>
      <br />
      <LegalH2>{t.legalPrivacy.h3}</LegalH2>
      <p>{t.legalPrivacy.p3_0}</p>
      <p>{t.legalPrivacy.p3_1}</p>
      <br />
      <p>{t.legalPrivacy.p3_2}</p>
      <br />
      <p>{t.legalPrivacy.p3_3}</p>
      <br />
      <p>{t.legalPrivacy.p3_4}</p>
      <br />
      <p>{t.legalPrivacy.p3_5}</p>
      <br />
      <p>{t.legalPrivacy.p3_6}</p>
      <br />
      <p>{t.legalPrivacy.p3_7}</p>
      <br />
      <LegalH2>{t.legalPrivacy.h4}</LegalH2>
      <p>{t.legalPrivacy.p4_0}</p>
      <br />
      <LegalH2>{t.legalPrivacy.h5}</LegalH2>
      <p>{t.legalPrivacy.p5_0}</p>
      <br />
      <p>{t.legalPrivacy.contactUs}</p>
      <p>{t.legalPrivacy.p5_1}</p>
      <p>{t.legalPrivacy.p5_2}</p>
      <br />
      <p>{t.legalPrivacy.lastUpdated}</p>
      <br />
    </LegalLayout>
  );
}
