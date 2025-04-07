import { ScrollProvider } from "@/context/ScrollContext";
import "./globals.css";
import { Geologica } from "next/font/google";
import Script from "next/script";

const geologica = Geologica({ subsets: ["latin"] });

export const metadata = {
  title: "Exosolve",
  description:
    "Exosolve offers a wide range of best-in-class value-based business solutions, including IT services, HR solutions, on-site and off-site outsourcing, and consulting services, all built on robust process domain and people management expertise. Leverage our long-term relationships with premier clients in the region and a team of experienced recruiters to work for you. Whether you are looking for a new start or aiming to get your foot in the door at your dream job, we can help.",
  openGraph: {
    title: "Exosolve | AI & Engineering Solutions",
    description:
      "Exosolve offers a wide range of best-in-class value-based business solutions.",
    url: "https://www.exosolve.io",
    type: "website",
    images: ["https://www.exosolve.io/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exosolve",
    description: "Exosolve offers a wide range of best-in-class value-based business solutions.",
    image: "https://www.exosolve.io/og-image.png",
  },
  keywords:[
    "remote job no experience",
    "remote job",
    "remote job entry level",
    "remote job entry level no experience",
    "interview preparation",
    "tech mentorship"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-org-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Exosolve",
              description:
                "Exosolve offers a wide range of best-in-class value-based business solutions.",
              url: "https://www.exosolve.io",
              logo: "https://www.exosolve.io/logo.png",
              sameAs: ["https://www.linkedin.com/company/exosolve"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+1 (470) 283-0914",
                email: "pradip@exosolve.com",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Exosolve Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Tailored Recruitment",
                    description:
                      "We customize our recruitment strategy to fit your specific needs, ensuring a perfect match for your team.",
                  },
                  {
                    "@type": "Offer",
                    name: "Dedicated Support",
                    description:
                      "Our team provides ongoing support throughout the recruitment process, ensuring seamless integration.",
                  },
                  {
                    "@type": "Offer",
                    name: "Industry Expertise",
                    description:
                      "With years of experience in the industry, we understand your unique challenges and requirements.",
                  },
                  {
                    "@type": "Offer",
                    name: "Innovative Technology Use",
                    description:
                      "We leverage the latest technologies to streamline the recruitment process and enhance the matching accuracy.",
                  },
                  {
                    "@type": "Offer",
                    name: "Global Talent Acquisition",
                    description:
                      "Our global reach allows us to source the best talent from around the world, offering a diverse range of skills and perspectives.",
                  },
                  {
                    "@type": "Offer",
                    name: "Continuous Professional Development",
                    description:
                      "We support continuous learning and development to ensure our candidates can thrive in ever-evolving work environments.",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={geologica.className}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
