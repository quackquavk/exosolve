"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { topRowCompanies, bottomRowCompanies } from "../constants"

// Company names for the logos


export default function CompanyLogos() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Create parallax effect for the logo rows
  const topRowX = useTransform(scrollYProgress, [0, 1], [-20, 20])
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <div className="bg-[#0e0e0e] text-white py-24">
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <div>
            <h2 className="text-1xl md:text-3xl font-thin mb-4 whitespace-nowrap">
              Benefit from our <span className="text-[#4ade80]">cross-industry experience</span>
            </h2>
          </div>
          <div>
            <p className="text-md md:text-md text-gray-300 font-thin">
              With a wide range of services, and experience in multiple industries, such as finance, retail, proptech,
              or healthcare, we understand your challenges.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Top row of logos */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 items-center"
            style={{ x: topRowX }}
          >
            {topRowCompanies.map((company) => (
              <div key={company} className="flex justify-center items-center h-12">
                <Image
                  src={`https://www.netguru.com/hubfs/_N23/assets/logos/${company}.svg`}
                  alt={`${company} logo`}
                  width={120}
                  height={48}
                  className="max-h-12 w-auto object-contain invert"
                />
              </div>
            ))}
          </motion.div>

          {/* Bottom row of logos */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 items-center"
            style={{ x: bottomRowX }}
          >
            {bottomRowCompanies.map((company) => (
              <div key={company} className="flex justify-center items-center h-12">
                <Image
                  src={`https://www.netguru.com/hubfs/_N23/assets/logos/${company}.svg`}
                  alt={`${company} logo`}
                  width={120}
                  height={48}
                  className="max-h-12 w-auto object-contain invert"
                />
              </div>
            ))}
          </motion.div>
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
  )
}

