'use client'
import CaseStudyGrid from "./CaseStudiesGrid";

export default function Page() {
  const caseStudies = [
    {
      title: "Sourced Java developers to boost Merck's R&D efficiency",
      subtitle: "Placed a team of skilled Java engineers to support innovative research solutions in under six weeks",
      category: "Java Talent Recruitment",
      image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Recruited full stack engineers for enhanced user engagement",
      subtitle: "Connected a team of full stack developers to implement scalable solutions in under six weeks",
      category: "Full Stack Talent Placement",
      image: "https://www.netguru.com/hs-fs/hubfs/Newzip%20HP.jpg?width=1022&height=1022&name=Newzip%20HP.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Placed mobile-focused Java engineers for a rapid app overhaul",
      subtitle: "Provided expert Java developers to streamline mobile development and payment integration",
      category: "Mobile Java Recruitment",
      image: "https://www.netguru.com/hs-fs/hubfs/UBS-CS-02-Visual-05.jpg?width=1460&height=1022&name=UBS-CS-02-Visual-05.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Assembled a fintech team with full stack engineers in 5 weeks",
      subtitle: "Recruited top full stack talent to launch a financial app MVP for rapid market entry",
      category: "Fintech Talent Solutions",
      image: "https://www.netguru.com/hs-fs/hubfs/Prospero%20CS%20HP.png?width=1022&height=1022&name=Prospero%20CS%20HP.png",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Placed Java engineers to optimize retail supply chain systems",
      subtitle: "Connected Java specialists to develop efficient logistics software, cutting costs by 25%",
      category: "Retail Java Recruitment",
      image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Recruited full stack engineers for e-commerce cloud migration",
      subtitle: "Sourced a team of full stack developers to transition to microservices, improving performance by 40%",
      category: "Cloud Talent Placement",
      image: "https://www.netguru.com/hs-fs/hubfs/NewGlobe%20HP.jpg?width=1022&height=1022&name=NewGlobe%20HP.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] py-12 md:py-16">
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <h1 className="heading-text mb-[10vh]">
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
