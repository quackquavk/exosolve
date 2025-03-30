'use client'
import CaseStudyGrid from "./CaseStudiesGrid";

export default function Page() {
  const caseStudies = [
    {
      title: "Designed by Tier-1 instructors",
      subtitle: "Get trained and mentored by tech leads, hiring managers, and recruiters from Tier-1 tech companies",
      category: "Java Talent Recruitment",
      image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Individualized teaching",
      subtitle: "Sharpen your skills with technical and career coaching and 1:1 mentorship sessions with Tier-1 instructors",
      category: "Full Stack Talent Placement",
      image: "https://www.netguru.com/hs-fs/hubfs/Newzip%20HP.jpg?width=1022&height=1022&name=Newzip%20HP.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Mock interviews",
      subtitle: "Live interview practice in real-life simulated environments with interviewers from Tier-1 tech companies",
      category: "Mobile Java Recruitment",
      image: "https://www.netguru.com/hs-fs/hubfs/UBS-CS-02-Visual-05.jpg?width=1460&height=1022&name=UBS-CS-02-Visual-05.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Personalized feedback",
      subtitle: "Constructive, structured, and actionable insights for improved interview performance",
      category: "Fintech Talent Solutions",
      image: "https://www.netguru.com/hs-fs/hubfs/Prospero%20CS%20HP.png?width=1022&height=1022&name=Prospero%20CS%20HP.png",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Salary negotiation",
      subtitle: "Company, level, and role-specific strategies based on real, proprietary data",
      category: "Retail Java Recruitment",
      image: "https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg?width=1022&height=1022&name=national-cancer-institute-ct10qdGv1hQ-unsplash.jpg",
      companyLogo: "https://www.netguru.com/hubfs/_N23/assets/logos/merck.svg",
    },
    {
      title: "Career skills development",
      subtitle: "Resume building, LinkedIn profile optimization, personal branding, and live behavioral workshops",
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
          Why choose <span className="green-text">Exosolve?</span>
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
