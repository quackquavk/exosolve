import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Design from "@/components/Design";
import ScrollFocusSection from "@/components/ScrollFocusSection";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Hero />
      <Design />
      <ScrollFocusSection />
      <Clients />
    </div>
  );
}
