
import { SafetyBanner } from "@/components/SafetyBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SafetyBanner />
      <Navbar />
      <main>
        <Hero />
        <section id="pacotes">
          <PricingSection />
        </section>
        <GuaranteeSection />
      </main>
    </div>
  );
};

export default Index;
