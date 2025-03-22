"use client";
import Image from "next/image";
import { testimonials } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TestimonialCard } from "./TestimonialCard";
export default function Clients() {
  const sectionRef = useRef(null);

  // Setup scroll tracking for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"],
  });

  return (
    <div className="bg-[#121212] text-white py-16">
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <h2 className="text-3xl md:text-4xl font-medium mb-16 text-center md:text-left">
          Check out our <span className="text-green-500">clients' words</span>
        </h2>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-[200px]">
          {testimonials.map((testimonial, index) => {
            // Apply parallax effect only to left column items (even indexes)
            const isLeftColumn =
              index % 2 === 0 &&
              typeof window !== undefined &&
              window.innerWidth >= 768;

            // Create a TestimonialCard component
            return isLeftColumn ? (
              <ParallaxTestimonialCard
                key={index}
                testimonial={testimonial}
                scrollYProgress={scrollYProgress}
                index={index}
              />
            ) : (
              <TestimonialCard key={index} testimonial={testimonial} />
            );
          })}
        </div>
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
    </div>
  );
}



// Parallax testimonial card for left column
function ParallaxTestimonialCard({ testimonial, scrollYProgress, index }) {
  // Transform scroll progress into Y position
  // Start 100px below final position and move up as user scrolls
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [200, 0] // Start 100px below, end aligned with right column
  );

  return (
    <motion.div
      className="bg-[#1E2023] p-8"
      style={{
        y,
        willChange: "transform", // Performance optimization
      }}
      // Use spring physics for smooth motion
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="mb-8 h-10">
        <Image
          src={testimonial.logo}
          alt="Company logo"
          width={120}
          height={40}
          className="h-10 object-contain invert"
        />
      </div>
      <p className="text-lg mb-8 font-thin">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="mr-4">
          {testimonial.author.image ? (
            <Image
              src={testimonial.author.image}
              alt={testimonial.author.name}
              width={60}
              height={60}
              className="rounded-full h-12 w-12 object-cover"
            />
          ) : (
            <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
          )}
        </div>
        <div>
          <p className="font-medium">{testimonial.author.name}</p>
          <p className="text-gray-400 text-sm">/ {testimonial.author.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
