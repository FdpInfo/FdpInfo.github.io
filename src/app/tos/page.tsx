import type { Metadata } from "next";
import { LegalLayout, LegalH2 } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "FDP Terms of Service",
  alternates: { canonical: "https://fdpinfo.github.io/tos" },
};

export default function TosPage() {
  return (
    <LegalLayout title="FDP Terms of Service">
      <LegalH2>1. Terms</LegalH2>
      <p>
        By accessing this site, you agree to be bound by these Terms and
        Conditions of Use of the site, all applicable laws and regulations, and
        agree that you are responsible for compliance with any applicable local
        laws. If you do not agree with any of these terms, you are prohibited from
        using or accessing this site. The materials contained on this site are
        protected by applicable copyright and trademark laws.
      </p>
      <br />
      <LegalH2>2. Disclaimer</LegalH2>
      <p>
        The materials on the FDP site are provided &quot;as is&quot;. We do not
        offer warranties, express or implied, and hereby deny and disclaim all
        other warranties, including, without limitation, implied warranties or
        conditions of merchantability, fitness for a particular purpose, or
        non-infringement of intellectual property or other violation of rights.
        Furthermore, FDP does not warrant or make any representations concerning
        the accuracy, likely results, or reliability of the use of the materials
        on its Internet site or otherwise relating to such materials or on any
        sites linked to this site.
      </p>
      <br />
      <LegalH2>3. Limitations</LegalH2>
      <p>
        In no event shall FDP and its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or due
        to business interruption) arising out of the use or inability to use the
        materials on the FDP Internet site, even if FDP or a FDP authorized
        representative has been notified orally or in writing of the possibility of
        such damage. Because some jurisdictions do not allow limitations on implied
        warranties, or limitations of liability for consequential or incidental
        damages, these limitations may not apply to you.
      </p>
      <br />
      <LegalH2>4. Revisions and Errata</LegalH2>
      <p>
        The materials displayed on the FDP site may include technical,
        typographical, or photographic errors. FDP does not warrant that any of
        the materials on its site are accurate, complete, or current. FDP may make
        changes to the materials contained on its site at any time without notice.
        However, FDP does not make any commitment to update the materials.
      </p>
      <br />
      <LegalH2>5. Links</LegalH2>
      <p>
        FDP has not reviewed all of the sites linked to its Internet site and is
        not responsible for the contents of any such linked site. The inclusion of
        any link does not imply endorsement by FDP of the site. Use of any such
        linked website is at the user&apos;s own risk.
      </p>
      <br />
      <LegalH2>6. Modifications to the Site&apos;s Terms of Use</LegalH2>
      <p>
        We are aware of CCBlueX&apos;s terms and they may revise these terms of use
        to our site at any time without notice. By using this site, you agree to be
        bound by the then current version of these Terms and Conditions of Use.
      </p>
    </LegalLayout>
  );
}
