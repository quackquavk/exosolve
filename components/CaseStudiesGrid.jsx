"use client"
import { useInView } from "react-intersection-observer"
import CaseStudyCard from "./CaseStudyCard"
import { useEffect, useState } from "react"

export default function CaseStudyGrid({ caseStudies }) {
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add resize listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Mobile horizontal scroll view
  if (isMobile) {
    return (
      <div ref={gridRef} className="w-full relative mx-auto  py-12">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap gap-4 px-4 pb-4" style={{ WebkitOverflowScrolling: "touch" }}>
            {caseStudies.map((study, index) => (
              <div key={index} className="flex-none w-fit gap-5">
                <CaseStudyCard
                  {...study}
                  className={`transition-all duration-700 ease-out ${
                    gridInView ? `opacity-100 translate-y-0 delay-${index * 150}` : "opacity-0 translate-y-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Desktop view (unchanged)
  return (
    <div ref={gridRef} className="w-full relative mx-auto bg-black">
      {/* First row - desktop: offset pair */}
      <div className="grid grid-cols-2 gap-0 mb-48 max-w-5xl">
        <div>
          <CaseStudyCard
            {...caseStudies[0]}
            className={`transition-all duration-700 ease-out ${
              gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          />
        </div>
        <div className="translate-y-32">
          <CaseStudyCard
            {...caseStudies[1]}
            className={`transition-all duration-700 ease-out ${
              gridInView ? "opacity-100 translate-y-0 delay-150" : "opacity-0 translate-y-12"
            }`}
          />
        </div>
      </div>

      {/* Second row - desktop: shifted right */}
      <div className="grid grid-cols-2 gap-0 ml-48 mb-48 max-w-5xl mx-auto">
        <div>
          <CaseStudyCard
            {...caseStudies[2]}
            className={`transition-all duration-700 ease-out ${
              gridInView ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-12"
            }`}
          />
        </div>
        <div className="translate-y-32">
          <CaseStudyCard
            {...caseStudies[3]}
            className={`transition-all duration-700 ease-out ${
              gridInView ? "opacity-100 translate-y-0 delay-450" : "opacity-0 translate-y-12"
            }`}
          />
        </div>
      </div>

      {/* Third row - desktop: normal grid */}
      <div className="grid grid-cols-2 gap-0 mb-48 max-w-5xl ">
        <div>
          <CaseStudyCard
            {...caseStudies[4]}
            className={`transition-all duration-700 ease-out ${
              gridInView ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-12"
            }`}
          />
        </div>
        <div className="translate-y-32">
          <CaseStudyCard
            {...caseStudies[5]}
            className={`transition-all duration-700 ease-out ${
              gridInView ? "opacity-100 translate-y-0 delay-750" : "opacity-0 translate-y-12"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

