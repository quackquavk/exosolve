"use client"

import { useState, useEffect, useRef } from "react"

// Dummy data for service items
const serviceItems = [
  {
    id: 1,
    number: "01",
    title: "Ideate",
    description: "Transform ideas into actionable product strategies and roadmaps.",
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    description: "Create intuitive user experiences with beautiful, functional interfaces.",
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
    description: "Ensure your product remains stable, secure, and up-to-date.",
  },
  {
    id: 5,
    number: "05",
    title: "Scale",
    description: "Grow your product to handle increasing users and market demands.",
  },
]

export default function ProductExpertise() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const scrollThreshold = 100 // Amount of scroll needed to change focus
  const scrollAccumulator = useRef(0)

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()

      // Accumulate scroll delta
      scrollAccumulator.current += e.deltaY

      // Check if we've scrolled enough to change focus
      if (Math.abs(scrollAccumulator.current) >= scrollThreshold) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1

        setActiveIndex((prevIndex) => {
          const newIndex = prevIndex + direction
          // Ensure index stays within bounds
          if (newIndex < 0) return 0
          if (newIndex >= serviceItems.length) return serviceItems.length - 1
          return newIndex
        })

        // Reset accumulator after changing focus
        scrollAccumulator.current = 0
      }
    }

    const element = containerRef.current
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="bg-[#1a1d20] text-white py-16 md:py-24 overflow-hidden h-screen flex items-center"
    >
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading and Services */}
          <div className="space-y-16">
            {/* Heading */}
          <h2 className="heading-text">
              Leverage our full digital <span className="green-text">product expertise</span>
            </h2>

            {/* Services List */}
            <div className="space-y-10 md:space-y-12">
              {serviceItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-all duration-300 ease-in-out ${
                    index === activeIndex ? "scale-105 translate-x-2" : "opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[#2ecc71] text-sm font-medium">{item.number}</span>
                    <h3 className="text-xl md:text-2xl font-light">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Description and Illustration */}
          <div className="flex flex-col justify-between h-full">
            {/* Description */}
            <div className="mb-12 lg:mb-0">
              {serviceItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-all duration-500 ease-in-out absolute ${
                    index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-light mb-4">{item.title}</h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">{item.description}</p>
                  </div>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Whether you want to consult an idea, add missing capabili­ties, quickly expand your team, or hand
                    over a project – we've got you covered.
                  </p>
                </div>
              ))}
            </div>

            {/* Illustration */}
            <div className="relative h-64 md:h-80 lg:h-96 mt-auto">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Digital product layers illustration"
                className="absolute right-0 bottom-0 w-full md:w-4/5 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce mt-2"></div>
          </div>
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
    </section>
  )
}

