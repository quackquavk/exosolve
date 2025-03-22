"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from 'lucide-react'

// Card data
const insightCards = [
  {
    type: "BLOG",
    title: "8 Affordable Ways to Implement an AI Strategy",
    image: "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png",
    link: "#"
  },
  {
    type: "PODCAST",
    title: "Does AI Wear Sneakers? Adidas's Journey With AI",
    image: "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png",
    link: "#"
  },
  {
    type: "BLOG",
    title: "10 Real-World Examples of How AI Transforms Business",
    image: "https://www.netguru.com/hs-fs/hubfs/DT%20wDavid.png?width=720&height=405&name=DT%20wDavid.png",
    link: "#"
  }
]

// InsightCard Component
function InsightCard({ card, yOffset }) {
  return (
    <motion.div 
      className="relative overflow-hidden bg-black w-full h-[400px]"
      style={{ y: yOffset }}
    >
      <Link href={card.link} className="block h-full">
        <div className="h-[240px] relative">
          <Image
            src={card.image || "/placeholder.svg"}
            alt={card.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 space-y-3 h-[160px] flex flex-col justify-between">
          <div className="text-sm font-semibold tracking-wider">{card.type}</div>
          <h3 className="text-xl font-thin">{card.title}</h3>
        </div>
      </Link>
    </motion.div>
  )
}

export default function InsightsCards() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // First card stays stable, other cards move up to align with it
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, 0]) // Stays at 0
  const card2Y = useTransform(scrollYProgress, [0, 1], [100, 0]) // Starts 100px below, moves to align
  const card3Y = useTransform(scrollYProgress, [0, 1], [200, 0]) // Starts 200px below, moves to align

  const cardOffsets = [card1Y, card2Y, card3Y]

  return (
    <div className="bg-[#1e2124] text-white py-24" ref={containerRef}>
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-3xl font-thin">
            Explore insights <span className="text-[#4ade80]">for acceleration</span>
          </h2>
          <Link 
            href="#" 
            className="flex items-center gap-2 text-white hover:text-[#4ade80] transition-colors"
          >
            <span className="font-medium">More disruptive insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective">
          {insightCards.map((card, index) => (
            <InsightCard 
              key={index} 
              card={card} 
              yOffset={cardOffsets[index]}
            />
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
      
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}