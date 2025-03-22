"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for service items
const serviceItems = [
  {
    id: 1,
    number: "01",
    title: "Ideate",
    description: "Identify, shape and validate your product idea",
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    description: "Create beautiful, intuitive user experiences",
  },
  {
    id: 3,
    number: "03",
    title: "Develop",
    description: "Bring products to life with world-class engineering",
  },
  {
    id: 4,
    number: "04",
    title: "Maintain",
    description: "Safeguard your product's quality and realiability",
  },
  {
    id: 5,
    number: "05",
    title: "Scale",
    description: "Gain flexibility to adjust and expland on the fly",
  },
];

export default function ScrollFocusSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const topElementRef = useRef(null);
  const bottomElementRef = useRef(null);
  const scrollAccumulator = useRef(0);
  const isScrolling = useRef(false);
  const lastScrollDirection = useRef(0);
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  // Set up intersection observer to check if both elements are visible
  useEffect(() => {
    const options = {
      threshold: 0.8, // Consider fully visible when 80% of each element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === 'top-element') {
          setTopVisible(entry.isIntersecting);
        } else if (entry.target.id === 'bottom-element') {
          setBottomVisible(entry.isIntersecting);
        }
      });
    }, options);

    if (topElementRef.current) {
      observer.observe(topElementRef.current);
    }
    if (bottomElementRef.current) {
      observer.observe(bottomElementRef.current);
    }

    return () => {
      if (topElementRef.current) {
        observer.unobserve(topElementRef.current);
      }
      if (bottomElementRef.current) {
        observer.unobserve(bottomElementRef.current);
      }
    };
  }, []);

  // Update isFullyVisible when either top or bottom visibility changes
  useEffect(() => {
    setIsFullyVisible(topVisible && bottomVisible);
  }, [topVisible, bottomVisible]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isFullyVisible) return;

      lastScrollDirection.current = e.deltaY > 0 ? 1 : -1;

      if (
        (activeIndex === 0 && e.deltaY < 0) ||
        (activeIndex === serviceItems.length - 1 && e.deltaY > 0)
      ) {
        return;
      }

      // Prevent default for internal navigation
      e.preventDefault();

      if (isScrolling.current) return;

      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY;

      // Determine direction and change focus with a threshold
      if (Math.abs(scrollAccumulator.current) >= 50) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1;

        setActiveIndex((prevIndex) => {
          const newIndex = prevIndex + direction;
          // Ensure index stays within bounds
          if (newIndex < 0) return 0;
          if (newIndex >= serviceItems.length) return serviceItems.length - 1;
          return newIndex;
        });

        // Reset accumulator and set scrolling flag
        scrollAccumulator.current = 0;
        isScrolling.current = true;

        // Debounce to prevent rapid scrolling
        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeIndex, isFullyVisible]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle keyboard events when component is fully visible
      if (!isFullyVisible) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((prev) => Math.min(prev + 1, serviceItems.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullyVisible]);

  // Animation variants for items
  const itemVariants = {
    active: {
      scale: 1.05,
      x: 8,
      opacity: 1,
      transition: { type: "easeOut", stiffness: 300, damping: 20 },
    },
    inactive: {
      scale: 1,
      x: 0,
      opacity: 0.7,
      transition: { duration: 0.3 },
    },
  };

  // Improved text animation variants
  const textVariants = {
    initial: (direction) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "easeOut", stiffness: 100, damping: 15 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      y: direction > 0 ? -20 : 20,
      opacity: 0,
      transition: {
        y: { duration: 0.2 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  // Description animation variants
  const descriptionVariants = {
    initial: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    animate: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { type: "easeOut", stiffness: 100, damping: 20, delay: 0.1 },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#1a1d20] text-white h-screen flex items-center overflow-hidden relative"
    >
      {/* Top element with ID */}
      <div 
        ref={topElementRef}
        id="top-element"
        className="absolute top-[10%] left-0 w-full h-10 bg-transparent"
      />
      
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading and Services */}
          <div className="space-y-16">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Leverage our full digital{" "}
              <span className="text-[#2ecc71] font-normal">
                product expertise
              </span>
            </h2>

            {/* Services List */}
            <div className="">
              {serviceItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`group cursor-pointer py-6 md:py-10 pl-6 flex items-center ${index === activeIndex ? "bg-[#000000] text-white" : ""}`}
                  variants={itemVariants}
                  initial="inactive"
                  animate={index === activeIndex ? "active" : "inactive"}
                  whileHover={{ opacity: index === activeIndex ? 1 : 0.9 }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center gap-4 ">
                    <motion.span
                      className="text-sm font-medium"
                      animate={{
                        color: index === activeIndex ? "#2ecc71" : "#9ca3af",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.number}
                    </motion.span>
                    <h3 className="text-xl md:text-4xl font-light">
                      {item.title}
                    </h3>

                    <AnimatePresence mode="wait">
                      {index === activeIndex && (
                        <motion.div
                          variants={descriptionVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="overflow-hidden mt-2 pl-8"
                        >
                          <p className="text-gray-300 text-md whitespace-nowrap font-thin">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Description and Illustration */}
          <div className="flex flex-col justify-between h-full relative">
            {/* Description */}
            <div className="relative h-[200px] overflow-hidden">
              <div key={activeIndex} className="absolute w-full">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-thin">
                  Whether you want to consult an idea, add missing
                  capabili­ties, quickly expand your team, or hand over a
                  project – we've got you covered with our{" "}
                  <span className="text-[#2ecc71]">
                    {serviceItems[activeIndex].title.toLowerCase()}
                  </span>{" "}
                  expertise.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative h-64 md:h-80 lg:h-96 mt-auto">
              <motion.img
                src="/placeholder.svg?height=400&width=500"
                alt="Digital product layers illustration"
                className="absolute right-0 bottom-0 w-full md:w-4/5 h-auto object-contain"
                animate={{
                  rotate: activeIndex * 2,
                  scale: 1 + activeIndex * 0.02,
                }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom element with ID */}
      <div 
        ref={bottomElementRef}
        id="bottom-element"
        className="absolute bottom-[10%] left-0 w-full h-10 bg-transparent"
      />

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
    </section>
  );
}
