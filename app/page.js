import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Design from "@/components/Design";
import ScrollFocusSection from "@/components/ScrollFocusSection";
import Clients from "@/components/Clients";
import Results from "@/components/Results";
import CompanyLogos from "@/components/CompanyLogos";
import InsightsCards from "@/components/Insights";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Design />
      <ScrollFocusSection />
      <Clients />
      <Results />
      <CompanyLogos />
      <InsightsCards />
      <CTA />
      <Footer />
    </div>
  );
}
