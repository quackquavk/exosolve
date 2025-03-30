"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Card data
const insightCards = [
  {
    type: "BLOG",
    title: "Prashant Poudel",
    role: "Software Engineer",
    image:
      "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png",
    link: "#",
  },
  {
    type: "BLOG",
    title: "Prashant Poudel",
    role: "Software Engineer",
    image:
      "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png",
    link: "#",
  },
  {
    type: "BLOG",
    title: "Prashant Poudel",
    role: "Software Engineer",
    image:
      "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png",
    link: "#",
  },
];

// Static InsightCard Component for Mobile
function StaticInsightCard({ card }) {
  return (
    <div className="relative overflow-hidden bg-black w-full h-[400px] flex-shrink-0 min-w-[280px] max-w-[85vw]">
      <Link href={card.link} className="block h-full">
        <div className="h-[240px] relative">
          <Image
            src={card.image || "/placeholder.svg"}
            alt={card.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 space-y-3 h-[160px] flex flex-col justify-between">
          <div className="text-sm font-semibold tracking-wider">
            {card.type}
          </div>
          <h3 className="text-xl font-thin">{card.title}</h3>
        </div>
      </Link>
    </div>
  );
}

// Animated InsightCard Component for Desktop
function AnimatedInsightCard({ card, yOffset }) {
  return (
    <motion.div
      className="relative overflow-hidden bg-black w-full h-[400px]"
      style={{ y: yOffset }}
    >
      <Link href={card.link} className="block h-full">
        <div className="h-[240px] relative">
          <Image
            src={card.image || "/placeholder.svg"}
            alt={card.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 space-y-3 h-[160px] flex flex-col justify-between">
          <div className="text-sm font-semibold tracking-wider">
            {card.type}
          </div>
          <h3 className="text-2xl font-thin">{card.title}</h3>
          <p className="font-thin">{card.role}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function InsightsCards() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], [0, 0]); // Stays at 0
  const card2Y = useTransform(scrollYProgress, [0, 1], [100, 0]); // Starts 100px below, moves to align
  const card3Y = useTransform(scrollYProgress, [0, 1], [200, 0]); // Starts 200px below, moves to align

  const cardOffsets = [card1Y, card2Y, card3Y];

  return (
    <div className="bg-[#1e2124] text-white py-16 md:py-24" ref={containerRef}>
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--max-width-desktop)",
          padding: "0 var(--container-padding-mobile)",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 md:mb-20">
          <h2 className="heading-text">
            Meet your instructors and mentors from <br />
            <span className="green-text"> FAANG and Tier-1 tech companies</span>
          </h2>
          <Link
            href="#"
            className="flex items-center gap-2 text-white hover:text-[#4ade80] transition-colors"
          >
            <span className="font-thin  text-gray-300">
              Our program is designed, taught, and continuously <br /> refined
              by tech experts and top hiring managers.
            </span>
          </Link>
        </div>

        {/* Mobile View: Horizontal Scrolling */}
        {isMobile && (
          <div
            className="overflow-x-auto -mx-4 px-4 pb-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
              {insightCards.map((card, index) => (
                <StaticInsightCard key={index} card={card} />
              ))}
            </div>
          </div>
        )}

        {/* Desktop View: Animated Grid */}
        {!isMobile && (
          <div className="hidden md:grid md:grid-cols-3 gap-8 perspective">
            {insightCards.map((card, index) => (
              <AnimatedInsightCard
                key={index}
                card={card}
                yOffset={cardOffsets[index]}
              />
            ))}
          </div>
        )}
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

        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
