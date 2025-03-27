"use client"
import Image from "next/image"
import { testimonials } from "@/constants"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TestimonialCard } from "./TestimonialCard"

export default function Clients() {
  const sectionRef = useRef(null)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // Setup scroll tracking for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end center"],
  })

  return (
    <div className="bg-[#121212] text-white py-16">
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--max-width-desktop)",
          padding: "0 var(--container-padding-mobile)",
        }}
      >
        <h2 className="heading-text mb-8 md:mb-16  text-left">
          Check out our <span className="green-text">clients' words</span>
        </h2>

        {/* Mobile view: horizontal scrolling */}
        <div
          className="md:hidden overflow-x-auto pb-6 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[280px] max-w-[85vw] flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view: grid with parallax */}
        <div ref={sectionRef} className="hidden md:grid md:grid-cols-2 gap-8 pb-[200px]">
          {testimonials.map((testimonial, index) => {
            const isLeftColumn = index % 2 === 0
            return isLeftColumn ? (
              <ParallaxTestimonialCard
                key={index}
                testimonial={testimonial}
                scrollYProgress={scrollYProgress}
                index={index}
              />
            ) : (
              <TestimonialCard key={index} testimonial={testimonial} />
            )
          })}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
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
  )
}

// Parallax testimonial card for left column
function ParallaxTestimonialCard({ testimonial, scrollYProgress, index }) {
  const y = useTransform(scrollYProgress, [0, 1], [200, 0])

  return (
    <motion.div
      className="bg-[#1E2023] p-8"
      style={{
        y,
        willChange: "transform",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      suppressHydrationWarning
    >
      <div className="mb-8 h-10">
        <Image
          src={testimonial.logo || "/placeholder.svg"}
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
              src={testimonial.author.image || "/placeholder.svg"}
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
  )
}

