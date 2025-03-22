"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function EnhancedParallaxCards() {
  const containerRef = useRef(null)

  const cardData = [
    {
      value: "99%",
      description: "faster teacher guide creation process – from 4 hours to 45 sec"
    },
    {
      value: "2x",
      description: "faster invoice approval process – cut down from 4 to 2 days"
    },
    {
      value: "60%",
      description: "more user engagement with hyper-personalization for a proptech"
    },
    {
      value: "77%",
      description: "faster page speed for a meal delivery app"
    }
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  })

  // Create different transform values for each card
  // Using simple easeOut for the animation
  const transforms = [
    useTransform(scrollYProgress, [0, 1], [0, 0], { ease: [0, 0, 0.2, 1] }),
    useTransform(scrollYProgress, [0, 1], [75, -75], { ease: [0, 0, 0.2, 1] }),
    useTransform(scrollYProgress, [0, 1], [150, -150], { ease: [0, 0, 0.2, 1] }),
    useTransform(scrollYProgress, [0, 1], [225, -225], { ease: [0, 0, 0.2, 1] })
  ]

  return (
    <div className="bg-[#1e2124] text-white py-24" ref={containerRef}>
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-3xl font-thin mb-4">
              Enjoy <span className="text-[#4ade80] font-thin">tangible results</span>
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-300 font-thin">
              Over the years we've created a unique process that delivers exceptional results with blazing-fast
              efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {cardData.map((card, index) => (
            <motion.div
              key={card.value}
              className={`bg-black w-full h-[300px] flex flex-col justify-center px-8 pt-8 pb-16 ${
                index > 0 ? `md:mt-${index * 16}` : ''
              }`}
              style={{ y: transforms[index] }}
            >
              <h3 className="text-6xl md:text-7xl font-thin mb-4">{card.value}</h3>
              <p className="text-gray-300 font-thin">{card.description}</p>
            </motion.div>
          ))}
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