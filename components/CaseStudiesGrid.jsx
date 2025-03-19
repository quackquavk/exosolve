"use client";
import { useInView } from "react-intersection-observer";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyGrid({ caseStudies }) {
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mock data for demonstration

  return (
    <div ref={gridRef} className="w-full relative mx-auto  bg-black">
      {/* First row - offset pair */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 mb-48 max-w-5xl mx-auto">
        <div className="mb-16 md:mb-0">
          <CaseStudyCard
            {...caseStudies[0]}
            className={`transition-all duration-700 ease-out ${
              gridInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          />
        </div>
        <div className="md:translate-y-32">
          <CaseStudyCard
            {...caseStudies[1]}
            className={`transition-all duration-700 ease-out ${
              gridInView
                ? "opacity-100 translate-y-0 delay-150"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "150ms" }}
          />
        </div>
      </div>

      {/* Second row - offset pair, shifted right */}
      <div className="grid grid-cols-1 md:grid-cols-2  md:ml-48 mb-48 max-w-5xl mx-auto">
        <div className="mb-16 md:mb-0">
          <CaseStudyCard
            {...caseStudies[2]}
            className={`transition-all duration-700 ease-out ${
              gridInView
                ? "opacity-100 translate-y-0 delay-300"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
        </div>
        <div className="md:translate-y-32">
          <CaseStudyCard
            {...caseStudies[3]}
            className={`transition-all duration-700 ease-out ${
              gridInView
                ? "opacity-100 translate-y-0 delay-450"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "450ms" }}
          />
        </div>
      </div>

      {/* Third row - offset pair, shifted left */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 mb-48  max-w-5xl mx-auto">
        <div className="mb-16 md:mb-0">
          <CaseStudyCard
            {...caseStudies[4]}
            className={`transition-all duration-700 ease-out ${
              gridInView
                ? "opacity-100 translate-y-0 delay-600"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
          />
        </div>
        <div className="md:translate-y-32">
          <CaseStudyCard
            {...caseStudies[5]}
            className={`transition-all duration-700 ease-out ${
              gridInView
                ? "opacity-100 translate-y-0 delay-750"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "750ms" }}
          />
        </div>
      </div>
    </div>
  );
}
