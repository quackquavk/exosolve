"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cardData } from "@/constants";

export default function EnhancedParallaxCards() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check immediately
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // Create different transform values for each card
  // Using simple easeOut for the animation
  const transforms = [
    useTransform(scrollYProgress, [0, 1], [0, 0], { ease: [0, 0, 0.2, 1] }),
    useTransform(scrollYProgress, [0, 1], [75, -75], { ease: [0, 0, 0.2, 1] }),
    useTransform(scrollYProgress, [0, 1], [150, -150], {
      ease: [0, 0, 0.2, 1],
    }),
    useTransform(scrollYProgress, [0, 1], [225, -225], {
      ease: [0, 0, 0.2, 1],
    }),
  ];

  return (
    <div className="bg-[#1e2124] text-white py-24" ref={containerRef}>
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--max-width-desktop)",
          padding: "0 var(--container-padding-mobile)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <div>
            <h2 className="heading-text font-thin mb-4">
              Enjoy{" "}
              <span className="green-text">tangible results</span>
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-300 font-thin">
              Over the years we've created a unique process that delivers
              exceptional results with blazing-fast efficiency.
            </p>
          </div>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-8 relative no-scrollbar snap-x snap-mandatory">
          {cardData.map((card, index) => {
            // Base classes for all cards
            const cardClasses = `bg-black min-w-[85vw] sm:min-w-[400px] md:min-w-full h-[300px] flex flex-col justify-center px-8 pt-8 pb-16 snap-center ${
              !isMobile && index > 0 ? `md:mt-${index * 16}` : ""
            }`;

            // Render without animation for mobile
            if (isMobile) {
              return (
                <div
                  key={card.value}
                  className={cardClasses}
                >
                  <h3 className="text-6xl md:text-7xl font-thin mb-4">
                    {card.value}
                  </h3>
                  <p className="text-gray-300 font-thin">{card.description}</p>
                </div>
              );
            }

            // Render with animation for desktop
            return (
              <motion.div
                key={card.value}
                className={cardClasses}
                style={{ y: transforms[index] }}
              >
                <h3 className="text-6xl md:text-7xl font-thin mb-4">
                  {card.value}
                </h3>
                <p className="text-gray-300 font-thin">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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
    </div>
  );
}