import Image from "next/image"

export function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#1E2023]  p-6 md:py-12 py-8">
      <div className="mb-4 md:mb-8 h-8 md:h-10">
        <Image
          src={testimonial.logo || "/placeholder.svg"}
          alt="Company logo"
          width={120}
          height={40}
          className="h-8 md:h-10 object-contain invert"
        />
      </div>
      <p className="text-base md:text-lg mb-6 md:mb-8 font-thin line-clamp-6 md:line-clamp-none">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="mr-3 md:mr-4">
          {testimonial.author.image ? (
            <Image
              src={testimonial.author.image || "/placeholder.svg"}
              alt={testimonial.author.name}
              width={60}
              height={60}
              className="rounded-full h-10 w-10 md:h-12 md:w-12 object-cover"
            />
          ) : (
            <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-700 rounded-full"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-sm md:text-base truncate">{testimonial.author.name}</p>
          <p className="text-gray-400 text-xs md:text-sm truncate">/ {testimonial.author.title}</p>
        </div>
      </div>
    </div>
  )
}

