'use client'
import CaseStudyGrid from "./CaseStudiesGrid";

export default function Page() {
  const caseStudies = [
    {
      title: "Speeding up Merck's process from 6 months to 6 hours",
      subtitle:
        "An AI Assistant that boosts R&D delivered in five weeks and under budget",
      category: "R&D Productivity",
      image:
        "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "60% more user engagement with hyper-personalization",
      subtitle:
        "AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content to increase customer engagement",
      category: "AI for Real Estate",
      image:
        "https://www.netguru.com/hs-fs/hubfs/Newzip%20HP.jpg?width=1022&height=1022&name=Newzip%20HP.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Team extension for mobile design revamp at speed",
      subtitle:
        "Seamless and consistent experience, unified payment flows, and easier in-app navigation",
      category: "Mobile App Redesign",
      image:
        "https://www.netguru.com/hs-fs/hubfs/UBS-CS-02-Visual-05.jpg?width=1460&height=1022&name=UBS-CS-02-Visual-05.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Mobile app MVP in 5 weeks for a New York fintech",
      subtitle:
        "New version of a financial predictions app, enabling better user engagement and faster market entry",
      category: "Mobile MVP",
      image:
        "https://www.netguru.com/hs-fs/hubfs/Prospero%20CS%20HP.png?width=1022&height=1022&name=Prospero%20CS%20HP.png",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "AI-driven supply chain optimization in retail",
      subtitle:
        "A predictive analytics engine that reduced logistics costs by 25% and improved stock accuracy",
      category: "Retail AI",
      image:
        "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Cloud-native architecture for a global e-commerce giant",
      subtitle:
        "Migrated a monolithic infrastructure to microservices, boosting performance by 40%",
      category: "Cloud Transformation",
      image:
        "https://www.netguru.com/hs-fs/hubfs/NewGlobe%20HP.jpg?width=1022&height=1022&name=NewGlobe%20HP.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] py-12 md:py-16">
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <h1 className="text-3xl text-white mb-[10vh]">
          Design, Engineering and <span className="text-[#00D563]">Applied AI</span>
        </h1>

        <CaseStudyGrid caseStudies={caseStudies} />
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style] {
            padding: 0 var(--container-padding-tablet);
          }
        }
        @media (min-width: 1024px) {
          div[style] {
            padding: 0 var(--container-padding-desktop);
          }
        }
      `}</style>
    </main>
  );
}
