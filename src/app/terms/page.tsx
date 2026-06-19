import type { Metadata } from "next";
import { LegalLayout, LegalH2 } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "FDP Client Terms & Conditions",
  alternates: { canonical: "https://fdpinfo.github.io/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="FDP Client Terms & Conditions" effective="Effective Date: 05/08/2024">
      <LegalH2>1. Acceptance of These Terms</LegalH2>
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) form a binding
        agreement between you and FDP Client (&quot;FDP,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;) and govern your access to and use of
        the FDP website, software, and related community resources (together, the
        &quot;Service&quot;). By downloading, installing, accessing, or using the
        Service you confirm that you have read, understood, and agree to be bound
        by these Terms. If you do not agree, you must not use the Service.
      </p>
      <br />
      <LegalH2>2. Eligibility</LegalH2>
      <p>
        You must be of legal age to form a binding contract in your jurisdiction,
        or have the consent of a parent or legal guardian, to use the Service. If
        Minecraft or a third-party server&apos;s own terms set a minimum age, you
        agree to comply with those as well. You are solely responsible for
        ensuring that your use of the Service is lawful where you live.
      </p>
      <br />
      <LegalH2>3. License to Use the Software</LegalH2>
      <p>
        FDP is a free and open-source Forge injection client. Subject to these
        Terms and the applicable open-source license, we grant you a personal,
        worldwide, royalty-free, non-exclusive, revocable license to download and
        use the Service for personal, non-commercial purposes. You may not sell,
        sublicense, rent, or otherwise commercialise the Service or present it as
        your own paid product. Where the source code is published, the
        accompanying license governs redistribution and modification.
      </p>
      <br />
      <LegalH2>4. Acceptable Use &amp; Your Responsibilities</LegalH2>
      <p>
        FDP is provided for educational and personal use. You are solely and
        entirely responsible for how you choose to use it, including on any
        third-party game server. Many servers and platforms (such as Hypixel,
        CubeCraft, and others) prohibit third-party clients, and using FDP on
        them may result in warnings, suspensions, or permanent bans of your
        accounts. You accept that risk in full. You agree not to use the Service
        to harm others, to violate any law, or to infringe the rights of any
        third party.
      </p>
      <br />
      <LegalH2>5. Intellectual Property</LegalH2>
      <p>
        The FDP name, logo, designs, and original assets are the property of
        their respective owners and are protected by applicable copyright and
        trademark laws. Except for the rights expressly granted to you under the
        applicable open-source license, nothing in these Terms transfers any
        ownership of intellectual property to you. &quot;Minecraft&quot; is a
        trademark of Mojang Studios; FDP is not affiliated with, endorsed by, or
        sponsored by Mojang Studios or Microsoft.
      </p>
      <br />
      <LegalH2>6. Third-Party Services &amp; Links</LegalH2>
      <p>
        The Service may reference or link to third-party websites, servers, or
        services that we do not control (for example Discord, GitHub, payment
        providers, or video platforms). We are not responsible for the content,
        policies, or practices of any third party. Your use of those services is
        governed by their own terms, and accessing them is at your own risk.
      </p>
      <br />
      <LegalH2>7. Donations</LegalH2>
      <p>
        All FDP products are free. Donations are entirely voluntary and are used
        to support continued development; certain donations may unlock cosmetic
        perks such as capes. Donations are handled by third-party payment
        providers and are subject to our Refund Policy. Making a donation does not
        create any additional warranty, service-level guarantee, or ownership
        right beyond what is described here.
      </p>
      <br />
      <LegalH2>8. Disclaimer of Warranties</LegalH2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available,&quot;
        without warranties of any kind, whether express or implied, including but
        not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the
        Service will be uninterrupted, error-free, secure, or that it will bypass
        any particular anti-cheat or work on any particular server or version.
      </p>
      <br />
      <LegalH2>9. Limitation of Liability</LegalH2>
      <p>
        To the maximum extent permitted by law, FDP and its contributors shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of data, accounts, profits, or
        goodwill, arising out of or related to your use of (or inability to use)
        the Service — including account bans imposed by third-party servers —
        even if advised of the possibility of such damages.
      </p>
      <br />
      <LegalH2>10. Indemnification</LegalH2>
      <p>
        You agree to indemnify and hold harmless FDP and its contributors from
        any claims, damages, liabilities, and expenses (including reasonable
        legal fees) arising from your use of the Service, your violation of these
        Terms, or your violation of any rights of a third party.
      </p>
      <br />
      <LegalH2>11. Changes to These Terms</LegalH2>
      <p>
        We may update or modify these Terms at any time without prior notice. Any
        changes take effect when posted on this page, and the effective date will
        be updated accordingly. Your continued use of the Service after changes
        are posted constitutes acceptance of the revised Terms.
      </p>
      <br />
      <LegalH2>12. Governing Law &amp; Contact</LegalH2>
      <p>
        These Terms are governed by the applicable laws of your place of
        residence to the extent required by mandatory consumer-protection rules,
        and otherwise without regard to conflict-of-law principles. If you have
        any questions about these Terms, please contact us at
        support@liquidbounce.net or through our community on Discord. By using the
        FDP website or software, you acknowledge that you have read and understood
        these Terms &amp; Conditions and agree to be bound by them.
      </p>
      <br />
      <p>Last Updated: 03/16/2024</p>
      <br />
    </LegalLayout>
  );
}
