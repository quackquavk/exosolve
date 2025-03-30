"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export default function CTA() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for parallax effects

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[450px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with faster parallax effect */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage:
            "url('https://www.netguru.com/hs-fs/hubfs/_N19%20Modules/Homepage/Photos/cta.jpg?width=1311&height=450&name=cta.jpg%201311w')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content with slower parallax effect */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
     
      >
        <h2 className="heading-text mb-10">
          Build impactful products <span className="green-text">faster</span> than your competition
        </h2>

        <Button 
          className="green-bg text-black font-medium px-6 py-2 rounded-md transition-colors duration-200"
        >
          Estimate project →
        </Button>
      </motion.div>
    </div>
  )
}