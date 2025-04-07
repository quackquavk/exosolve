"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function CaseStudyCard({ title, subtitle, image, className = "" }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Fluid typography styles
  const titleStyle = {
    fontSize: "clamp(1.25rem, 1.125rem + 0.625vw, 1.5rem)",
    lineHeight: "1.2",
  }

  const subtitleStyle = {
    fontSize: "clamp(1rem, 0.925rem + 0.375vw, 1.125rem)",
    lineHeight: "1.5",
  }

  // Media query for hover effects
  const hoverMediaQuery = window?.matchMedia?.("(hover: hover)").matches

  return (
    <div
      className={`group relative w-full overflow-hidden ${className}`}
      ref={cardRef}
      style={{
        maxWidth: "var(--card-max-width, 30rem)",
        contain: "content",
      }}
    >
      {/* Background Image with hover effect */}
      <div className="relative aspect-[2.7/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title || "Case study"}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 40vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 h-full"
          priority
        />

        {/* Gradient Overlay with conditional hover effect */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30 transition-opacity duration-700"
          style={{
            opacity: 0,
            // Only apply hover effect if device supports hover
            ...(hoverMediaQuery && {
              opacity: "var(--hover-opacity, 0)",
            }),
          }}
        />
      </div>

      {/* Content Container */}
      <div className="mt-5 space-y-3">
        <h2 className="font-medium text-white group-hover:underline" style={titleStyle}>
          {title}
        </h2>
        <p className="text-white/90 max-w-prose font-thin" style={subtitleStyle}>
          {subtitle}
        </p>
      </div>

      {/* Inline styles for hover effects */}
      <style jsx>{`
        .group:hover {
          --hover-opacity: 1;
        }
        
        @media (hover: none) {
          .group:hover h2 {
            text-decoration: none;
          }
        }
      `}</style>
    </div>
  )
}

