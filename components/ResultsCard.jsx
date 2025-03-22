"use client"

import { useEffect, useRef, useState } from "react"

export default function ParallaxCards() {
  const containerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        // Only update scrollY when the section is in view
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate parallax positions based on scroll
  const getParallaxStyle = (index) => {
    const baseDelay = index * 0.2
    const speed = 0.1 - index * 0.02 // Different speeds for each card
    const offset = scrollY * speed
    
    return {
      transform: `translateY(${offset}px)`,
      transitionDelay: `${baseDelay}s`,
    }
  }

  return (
    <div className="bg-[#1e2124] text-white py-24 px-6 min-h-screen flex items-center" ref={containerRef}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-3xl font-bold mb-4">
              Enjoy <span className="text-[#4ade80]">tangible results</span>
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-300">
              Over the years we've created a unique process that delivers exceptional results with blazing-fast efficiency.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div 
            className="bg-black p-8 aspect-square flex flex-col justify-center"
            style={getParallaxStyle(0)}
          >
            <h3 className="text-6xl md:text-7xl font-bold mb-4">99%</h3>
            <p className="text-gray-300">
              faster teacher guide creation process – from 4 hours to 45 sec
            </p>
          </div>
          
          <div 
            className="bg-black p-8 aspect-square flex flex-col justify-center md:mt-16"
            style={getParallaxStyle(1)}
          >
            <h3 className="text-6xl md:text-7xl font-bold mb-4">2x</h3>
            <p className="text-gray-300">
              faster invoice approval process – cut down from 4 to 2 days
            </p>
          </div>
          
          <div 
            className="bg-black p-8 aspect-square flex flex-col justify-center md:mt-32"
            style={getParallaxStyle(2)}
          >
            <h3 className="text-6xl md:text-7xl font-bold mb-4">60%</h3>
            <p className="text-gray-300">
              more user engagement with hyper-personalization for a proptech
            </p>
          </div>
          
          <div 
            className="bg-black p-8 aspect-square flex flex-col justify-center md:mt-48"
            style={getParallaxStyle(3)}
          >
            <h3 className="text-6xl md:text-7xl font-bold mb-4">77%</h3>
            <p className="text-gray-300">
              faster page speed for a meal delivery app
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
