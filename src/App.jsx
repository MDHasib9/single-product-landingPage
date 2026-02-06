import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import SocialProofSection from "./components/SocialProofSection.jsx";
import FAQSection from "./components/FAQSection";


const App = () => {
  return (
    <div className="min-h-screen bg-[#0B1020]">
      <HeroSection />
      <TrustSection />

      <FeaturesSection />

      <PricingSection />
      <SocialProofSection />
      <FAQSection />
    </div>
  );
};

export default App;
