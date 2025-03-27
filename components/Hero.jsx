"use client"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Hero = () => {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const guideCardRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current || !contentRef.current || !guideCardRef.current) return

    const handleParallax = () => {
      const scrollPosition = window.scrollY

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollPosition * 0.7}px)`
      }
    }

    window.addEventListener("scroll", handleParallax)

    return () => {
      window.removeEventListener("scroll", handleParallax)
    }
  }, [])

  // Animation variants for the heading text
  const headingVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for a nice easing
      },
    }),
  }

  // Animation variants for the paragraph text
  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <main
      ref={heroRef}
      className="flex-grow bg-gradient-to-br from-black to-gray-800 overflow-hidden relative items-center justify-center min-h-screen"
    >
      {/* Main content block with parallax effect */}
      <div
        ref={contentRef}
        className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-[15%]"
        style={{
          maxWidth: "var(--max-width-desktop)",
          padding: "0 var(--container-padding-mobile)",
          margin: "0 auto",
        }}
      >
        <h1 className="text-5xl md:text-[92px] mb-20 md:mb-32 z-10 font-thin mt-30 flex flex-wrap">
          <motion.span
            className="text-green-400 mr-4 md:mr-6 block"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{ transformOrigin: "bottom" }}
          >
            Connect
          </motion.span>{" "}
          <motion.span
            className="text-white block"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{ transformOrigin: "bottom" }}
          >
            tech talent
          </motion.span>
        </h1>

        <div className="max-w-5xl z-10">
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mb-16"
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            We place top tier engineers <br /> to empower your team and drive innovation.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="text-white text-sm">Trusted by:</p>
            <div className="flex flex-wrap items-center gap-8">
              <Image src="/ikea.svg" alt="IKEA" width={60} height={30} className="brightness-0 invert opacity-80" />
              <Image src="/ubs.svg" alt="UBS" width={60} height={30} className="brightness-0 invert opacity-80" />
              <Image
                src="/volkswagen.svg"
                alt="Volkswagen"
                width={30}
                height={40}
                className="brightness-0 invert opacity-80"
              />
              <Image src="/olx.svg" alt="OLX" width={40} height={30} className="brightness-0 invert opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Guide Card with opposite parallax movement */}
      <div ref={guideCardRef} className="absolute bottom-[0%] md:bottom-[50%] hidden md:block right-0 z-20 box">
        {/* Static card content */}
        <motion.div
          className="bg-gray-800/90 overflow-hidden w-48"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col">
            <Image
              src="/sideimage.webp"
              alt="Exosolve Guide"
              width={256}
              height={150}
              className="min-w-full h-auto"
              objectFit="cover"
            />
            <div className="p-4">
              <h3 className="text-white font-medium">Exosolve Guide to AI Assistants</h3>
              <Link
                href="#guide"
                className="text-white text-sm flex items-center mt-2 hover:text-green-400 transition-colors"
              >
                GET YOURS <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.div>
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
    </main>
  )
}

export default Hero

