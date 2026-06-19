import type { Metadata } from "next";
import { LegalLayout, LegalH2 } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "FDP Client Privacy Policy",
  alternates: { canonical: "https://fdpinfo.github.io/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="FDP Client Privacy Policy "
      effective="Effective Date: 05/08/2024"
    >
      <LegalH2>1. Introduction</LegalH2>
      <p>
        Welcome to FDP Client (&quot;the Platform,&quot; &quot;we,&quot;
        &quot;us,&quot; or &quot;our&quot;). We value your trust and respect your
        privacy. This Privacy Policy outlines the types of information we collect
        from users (&quot;you&quot; or &quot;your&quot;) of the Platform and how
        we use, share, and protect that information. By using our Platform, you
        consent to the practices described in this Privacy Policy.
      </p>
      <br />
      <LegalH2>2. Information We Collect</LegalH2>
      <p>
        1.0. Cookies: Our website uses cookies to enhance user experience and
        track user interactions. Cookies are small files stored on your device
        that contain data about your browsing behavior. We use cookies for
        purposes such as remembering user preferences, analyzing website traffic,
        and serving targeted advertisements. You can control the use of cookies
        through your browser settings.
      </p>
      <br />
      <p>
        1.1. Google AdSense: Our website contains advertisements served by Google
        AdSense. Google AdSense may collect information about your interactions
        with these ads to provide personalized ad experiences. Please refer to
        Google&apos;s Privacy Policy for more information about how they collect
        and use data.
      </p>
      <br />
      <p>
        1.2. Google Analytics: We use Google Analytics to analyze website traffic
        and gather information about user behavior. Google Analytics collects data
        such as your IP address, browser type, operating system, and pages visited
        on our website. This information helps us understand how users interact
        with our website and improve its functionality. Google&apos;s Privacy
        Policy governs the collection and use of data by Google Analytics.
      </p>
      <br />
      <p>
        1.3. Monetag: Our website contains advertisements served by Monetag.
        Monetag may collect information about your interactions with these ads to
        provide personalized ad experiences. Please refer to Monetag&apos;s
        Privacy Policy for more information about how they collect and use data.
      </p>
      <br />
      <p>
        1.4. Cloudflare: We utilize Cloudflare services to enhance website
        performance, security, and reliability. Cloudflare may collect data about
        your interactions with our website, such as IP addresses and device
        identifiers, to provide these services. Cloudflare&apos;s Privacy Policy
        governs the collection and use of data by Cloudflare services.
      </p>
      <br />
      <p>
        1.5. Server Logs: Our servers may automatically collect certain
        information when you access our website or mod, including but not limited
        to: Browser types and versions, Operating systems, Referrer URLs (the
        website from which you accessed our website), Accessed sub-websites, Date
        and time of access, Internet Protocol (IP) addresses, Internet Service
        Providers (ISPs) and other similar data and information used for security
        purposes, such as detecting and preventing unauthorized access or attacks
        on our information technology systems.
      </p>
      <br />
      <p>
        1.6. Donations: If you choose to make a donation to support our project,
        we may collect additional personal information from you, such as your
        name, address, email address, and payment details. We use this information
        to process your donation and communicate with you about your contribution.
        Payment providers may also collect and process your information in
        accordance with their own privacy policies.
      </p>
      <br />
      <LegalH2>3. GDPR Compliance</LegalH2>
      <p>
        We are committed to complying with the General Data Protection Regulation
        (GDPR) and respect your rights regarding your personal data. Under the
        GDPR, you have the following rights:
      </p>
      <p>
        Right to access: You have the right to request access to the personal data
        we hold about you.
      </p>
      <br />
      <p>
        Right to rectification: You have the right to request that we correct any
        inaccuracies in your personal data.
      </p>
      <br />
      <p>
        Right to erasure: You have the right to request the deletion of your
        personal data under certain circumstances.
      </p>
      <br />
      <p>
        Right to restrict processing: You have the right to request that we limit
        the processing of your personal data under certain circumstances.
      </p>
      <br />
      <p>
        Right to data portability: You have the right to request a copy of your
        personal data in a structured, machine-readable format.
      </p>
      <br />
      <p>
        Right to object: You have the right to object to the processing of your
        personal data under certain circumstances.
      </p>
      <br />
      <p>
        If you would like to exercise any of these rights or have any questions
        about how we process your personal data, please contact us at
        support@liquidbounce.net. We will respond to your request within a
        reasonable timeframe and in accordance with applicable data protection
        laws.
      </p>
      <br />
      <LegalH2>4. Information Security</LegalH2>
      <p>
        We take the security of your information seriously and implement
        appropriate technical and organizational measures to protect it from
        unauthorized access, disclosure, alteration, or destruction. However,
        please be aware that no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee the absolute
        security of your information.
      </p>
      <br />
      <LegalH2>5. Changes to This Privacy Policy</LegalH2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time
        without prior notice. Any changes to this Privacy Policy will be posted on
        this page, and the effective date will be updated accordingly. We
        encourage you to review this Privacy Policy periodically to stay informed
        about how we collect, use, and protect your information.
      </p>
      <br />
      <p>Contact Us</p>
      <p>
        If you have any questions or concerns about this Privacy Policy or our data
        practices, please contact us at support@liquidbounce.net. We are committed
        to addressing any inquiries or concerns you may have regarding your privacy
        and data protection rights.
      </p>
      <p>
        By using the FDP website or mod, you acknowledge that you have read and
        understood this Privacy Policy and consent to the collection, use, and
        disclosure of your information as described herein.
      </p>
      <br />
      <p>Last Updated: 03/16/2024</p>
      <br />
    </LegalLayout>
  );
}
