import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { FeatureTabs } from "@/components/FeatureTabs";
import { WhatIsFdp } from "@/components/WhatIsFdp";
import { ShowcaseVideo } from "@/components/ShowcaseVideo";
import { Statistics } from "@/components/Statistics";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { BuyModal } from "@/components/BuyModal";

export default function Home() {
  return (
    <>
      {/* Same behaviour as the legacy fork home: render the full content (so
          Google indexes it on the root and the root keeps ranking) but send
          real visitors to the /next experience after 1s. */}
      <meta
        httpEquiv="refresh"
        content="1; url=https://fdpinfo.github.io/next/"
      />
      <div className="display-flex min-height-100vh flex-direction-column overflow-hidden">
        <Header />
        <Hero />
        <ClientsMarquee />
        <FeatureTabs />
        <WhatIsFdp />
        <ShowcaseVideo />
        <Statistics />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
      <BuyModal />
    </>
  );
}
