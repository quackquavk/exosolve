import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex-grow bg-gradient-to-br from-black  to-gray-800 overflow-hidden relative items-center justify-center min-h-screen">
      <div className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-[15%] ">
        <h1 className="text-5xl md:text-[92px] mb-20 md:mb-32 z-10 font-thin">
          <span className="text-green-400">Accelerate</span>{" "}
          <span className="text-white">digital</span>
        </h1>

        <div className="max-w-5xl z-10">
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-16">
            We speed up AI adoption and ramp up engineering <br /> and design teams to
            help you lead your industry.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">
            <p className="text-white text-sm">Trusted by:</p>
            <div className="flex flex-wrap items-center gap-8">
              <Image
                src="/ikea.svg"
                alt="IKEA"
                width={60}
                height={30}
                className="brightness-0 invert opacity-80"
              />
              <Image
                src="/ubs.svg"
                alt="UBS"
                width={60}
                height={30}
                className="brightness-0 invert opacity-80"
              />
              <Image
                src="/volkswagen.svg"
                alt="Volkswagen"
                width={30}
                height={40}
                className="brightness-0 invert opacity-80"
              />
              <Image
                src="/olx.svg"
                alt="OLX"
                width={40}
                height={30}
                className="brightness-0 invert opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guide Card */}
      <div className="absolute bottom-[0%] md:bottom-[50%]  hidden md:block right-0 z-20 bg-gray-800/90  overflow-hidden w-64">
        <div className="flex flex-col">
          <Image
            src="/sideimage.webp"
            alt="Exosolve Guide"
            width={256}
            height={150}
            className="w-full h-auto"
          />
          <div className="p-4">
            <div className="absolute top-2 left-2 bg-white/10 rounded p-1">
              <span className="text-green-400 font-bold text-sm">N</span>
            </div>
            <h3 className="text-white font-medium">
              Exosolve Guide to AI Assistants
            </h3>
            <Link
              href="#guide"
              className="text-white text-sm flex items-center mt-2 hover:text-green-400 transition-colors"
            >
              GET YOURS <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
