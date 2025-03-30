import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function CaseStudyCard({
  title,
  subtitle,
  category,
  image,
  className = "",
  companyLogo,
}) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      className={`group relative min-w-[20vw] md:max-w-[25vw]  overflow-hidden  ${className} hover:cursor-pointer`}
      ref={cardRef}
    >
      {/* Background Image with hover effect */}
      <div className="relative aspect-[2.7/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt="Case study background"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 h-full"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" /> */}
      </div>

      {/* Content Container */}
      <div className=" inset-0 flex flex-col justify-between">
        {/* Top Section */}
        {/* <div className="flex items-start justify-between space-x-4 mt-2">
          <Image
            src={companyLogo}
            alt="company logo"
            width={40}
            height={40}
            className="invert my-auto"
          />
          <span className="text-white/90 text-sm tracking-wide uppercase font-bold">
            {category}
          </span>
        </div> */}

        {/* Bottom Section */}
        <div className="space-y-3 mt-5 ">
          <h2 className="text-xl md:text-2xl group-hover:underline font-medium text-white leading-tight">
            {title}
          </h2>
          <p className="text-white/90 text-md leading-relaxed max-w-prose font-thin">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
