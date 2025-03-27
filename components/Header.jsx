"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { megaMenuData } from "@/constants"
import MegaMenu from "./MegaMenu"
import { useScroll } from '@/context/ScrollContext';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isScrollSectionActive } = useScroll();

  const menuItems = [
    { key: "services", label: "Services" },
    { key: "industries", label: "Industries" },
    { key: "clients", label: "Clients" },
    { key: "about-us", label: "About us" },
    { key: "insights", label: "Insights" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (key) => {
    setIsHovering(true)
    setActiveMenu(key)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setActiveMenu(null)
  }

  return (
    <div className={`relative transition-all duration-300 ${isScrollSectionActive ? 'opacity-0 pointer-events-none' : ''}`}>
      <header
        className={`py-4 w-full z-50 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 shadow-md bg-black" : "bg-black"
        }`}
      >
        <div className="mx-auto w-full" style={{ 
          maxWidth: 'var(--max-width-desktop)',
          padding: '0 var(--container-padding-mobile)',
        }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-green-400 text-3xl font-bold mr-1">N</span>
                <span className="text-white text-xl">Exosolve</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8 transition-all duration-300">
              {menuItems.map((item) => (
                <div key={item.key} className="relative transition-all duration-300" onMouseEnter={() => handleMouseEnter(item.key)}>
                  <Link
                    href={`#${item.key}`}
                    className={`${
                      activeMenu === item.key ? "text-white border-b-2 border-green-400" : "text-white text-opacity-70"
                    } hover:text-white transition-colors py-4`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            <Link
              href="#contact"
              className={` ${isHovering ? "bg-[#00d563] text-white px-4 py-2 rounded hover:bg-[#00d563] transition-colors flex items-center" : "bg-transparent border border-white  text-white px-4 py-2 rounded hover:bg-green-500 transition-colors flex items-center"} `}
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Add a spacer when header is fixed to prevent content jump */}
      {isScrolled && <div className="h-[72px]"></div>}

      {/* Mega Menu */}
      {activeMenu && megaMenuData[activeMenu] && (
        <div
          className={`${isScrolled ? "fixed top-[72px] left-0 right-0 z-40" : ""}`}
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto w-full" style={{ 
            maxWidth: 'var(--max-width-desktop)',
            padding: '0 var(--container-padding-mobile)',
          }}>
            <MegaMenu sections={megaMenuData[activeMenu].sections} showAllLink={megaMenuData[activeMenu].showAllLink} />
          </div>
        </div>
      )}

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

