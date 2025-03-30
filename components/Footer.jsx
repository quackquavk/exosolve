'use client'
import Link from "next/link"
import Image from "next/image"
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white py-16">
      <div className="mx-auto w-full" style={{ 
        maxWidth: 'var(--max-width-desktop)',
        padding: '0 var(--container-padding-mobile)',
      }}>
        {/* Logo */}
        <div className="mb-16">
          <Link href="/" className="inline-block">
            <div className="flex items-center">
              <span className="text-[#4ade80] text-3xl mr-1">N</span>
              <span className="text-white text-xl">exosolve</span>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Exosolve S.A</h3>
            <div className="space-y-2 text-gray-300 font-thin">
              <p>Nowe Garbary Office Center</p>
              <p>ul. Małe Garbary 9</p>
              <p>61-756 Poznań, Poland</p>
              <div className="h-4"></div>
              <p>VAT-ID: PL7781454968</p>
              <p>REGON: 300826280</p>
              <p>KRS: 0000745671</p>
              <div className="h-4"></div>
              <p>
                <a href="mailto:hello@exosolve.com" className="hover:text-[#4ade80] transition-colors">
                  hello@exosolve.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="grid grid-cols-2 gap-6">
              <Link href="#" className="flex items-center gap-2 hover:text-[#4ade80] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                  <span className="font-semibold text-sm">Be</span>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#4ade80] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                  <span className="text-lg">◎</span>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#4ade80] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                  <Facebook size={16} />
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#4ade80] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                  <Github size={16} />
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#4ade80] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                  <Linkedin size={16} />
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#4ade80] transition-colors">
                <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full">
                  <Twitter size={16} />
                </div>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-2">Digital Acceleration Editorial</h3>
            <p className="text-gray-300 mb-6">Boost innovation with insights for change</p>
            
            <div className="space-y-4">
              <div className="flex">
                <input 
                suppressHydrationWarning
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[#1e2124] text-white px-4 py-3 flex-grow border-0 focus:ring-0 focus:outline-none"
                />
                <button className="bg-[#1e2124] text-white px-4 py-3 hover:text-[#4ade80] transition-colors">
                  Submit
                </button>
              </div>
              
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="marketing-consent" 
                  className="mt-1"
                />
                <label htmlFor="marketing-consent" className="text-sm text-gray-300">
                  I agree to receive marketing communication from Exosolve.
                </label>
                <button className="text-gray-400 ml-auto">
                  <span className="sr-only">Information</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Certificates */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-6">Certificates:</h3>
          <div className="flex flex-wrap gap-8">
            <div className="h-12 w-20">
              <div className="text-white text-xs flex flex-col items-center">
                <div className="border-2 border-white rounded-full w-10 h-10 flex items-center justify-center mb-1 font-bold">B</div>
                <span>Corporation</span>
              </div>
            </div>
            <div className="h-12 w-20">
              <div className="border-2 border-white rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-xs">ISO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-6">Partnerships:</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="h-8 w-24 text-white font-bold">Microsoft</div>
            <div className="h-8 w-16 text-white font-bold">aws</div>
            <div className="h-8 w-24 text-white font-bold">mendix</div>
            <div className="h-8 w-32">
              <div className="text-white text-xs">
                <div className="font-bold">Google Cloud</div>
                <div>Partner</div>
              </div>
            </div>
            <div className="h-8 w-32 text-white font-bold">Premium Partner</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Recognized by */}
        <div className="mb-12">
          <h3 className="text-lg font-medium mb-6">Recognized by:</h3>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="h-8 w-24">
              <div className="text-white text-xs flex items-center">
                <span className="text-2xl font-bold mr-2">C</span>
                <div className="flex flex-col">
                  <div className="flex">★★★★★</div>
                  <span>4.8/5 on Clutch</span>
                </div>
              </div>
            </div>
            <div className="h-8 w-24 text-white font-bold">awwwards.</div>
            <div className="h-8 w-16 text-white font-bold">Inc. 5000</div>
            <div className="h-8 w-32">
              <div className="text-white text-xs">
                <div className="font-bold">EY Entrepreneur</div>
                <div>Of The Year</div>
              </div>
            </div>
            <div className="h-8 w-24 text-white font-bold italic">Forbes</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>©2025 Exosolve S.A. All rights reserved.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of use</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
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
    </footer>
  )
}
