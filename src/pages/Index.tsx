
import { SafetyBanner } from "@/components/SafetyBanner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { Footer } from "@/components/Footer";

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
        <TestimonialSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
