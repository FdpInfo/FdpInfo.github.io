import type { Metadata } from "next";
import { LegalLayout, LegalH2 } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "FDP Client Refund Policy",
  alternates: { canonical: "https://fdpinfo.github.io/refund" },
};

export default function RefundPage() {
  return (
    <LegalLayout title="FDP Client Refund Policy" effective="Effective Date: 05/08/2024">
      <LegalH2>1. Overview</LegalH2>
      <p>
        FDP Client is completely free to download and use. We never charge for the
        software itself. The only payments associated with FDP are{" "}
        <strong>voluntary donations</strong> made to support continued
        development, some of which unlock cosmetic perks such as exclusive capes.
        This Refund Policy explains when and how a donation may be refunded.
      </p>
      <br />
      <LegalH2>2. Nature of Digital Goods</LegalH2>
      <p>
        Donations and any associated cosmetic perks are digital goods that are
        delivered electronically and, in most cases, granted to your account or
        profile immediately. Because these items are intangible and made available
        right away, they are generally considered consumed upon delivery and are
        therefore <strong>non-refundable</strong>, except where required by
        applicable law or as expressly stated below.
      </p>
      <br />
      <LegalH2>3. Eligibility for a Refund</LegalH2>
      <p>
        You may request a refund of a donation if all of the following apply: (a)
        you submit the request within fourteen (14) days of the transaction; (b)
        the associated cosmetic perk or benefit has not yet been delivered,
        redeemed, or used; and (c) the request is not the result of a violation of
        our Terms &amp; Conditions. Refunds outside of these conditions are
        granted only at our sole discretion.
      </p>
      <br />
      <LegalH2>4. Non-Refundable Situations</LegalH2>
      <p>
        Refunds will not be issued where: the perk has already been delivered or
        used; the request is made after the 14-day window; the donation was made
        knowingly as a gift or pure support with no associated deliverable; the
        request results from an account ban or penalty imposed by a third-party
        server (which is outside our control); or where granting a refund would
        breach the terms of our payment provider.
      </p>
      <br />
      <LegalH2>5. How to Request a Refund</LegalH2>
      <p>
        To request a refund, contact us at support@liquidbounce.net or open a
        ticket in our Discord community. Please include the email used for the
        donation, the approximate date and amount, the payment method, and the
        transaction or order ID if available. Providing accurate information helps
        us verify and process your request quickly.
      </p>
      <br />
      <LegalH2>6. Processing Time</LegalH2>
      <p>
        Approved refunds are processed back to the original payment method.
        Depending on your payment provider and bank, it may take up to 5–10
        business days for the refunded amount to appear on your statement. We are
        not responsible for processing delays caused by the payment provider or
        your financial institution.
      </p>
      <br />
      <LegalH2>7. Chargebacks</LegalH2>
      <p>
        Please contact us before initiating a chargeback or payment dispute.
        Filing a chargeback without first reaching out may result in the
        revocation of any granted perks and the suspension of access to community
        services. We are committed to resolving legitimate refund requests fairly
        and promptly.
      </p>
      <br />
      <LegalH2>8. Exceptions &amp; Consumer Rights</LegalH2>
      <p>
        Nothing in this policy is intended to limit any statutory rights you may
        have under applicable consumer-protection laws. Where such laws grant you
        a right to a refund that is broader than this policy, those laws prevail.
      </p>
      <br />
      <LegalH2>9. Changes to This Policy</LegalH2>
      <p>
        We may update this Refund Policy at any time without prior notice. Changes
        take effect when posted on this page, and the effective date will be
        updated accordingly. We encourage you to review this policy periodically.
      </p>
      <br />
      <LegalH2>10. Contact</LegalH2>
      <p>
        If you have any questions about this Refund Policy, please contact us at
        support@liquidbounce.net or through our Discord community. By making a
        donation, you acknowledge that you have read and understood this Refund
        Policy.
      </p>
      <br />
      <p>Last Updated: 03/16/2024</p>
      <br />
    </LegalLayout>
  );
}
