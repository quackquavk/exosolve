import Image from "next/image";

export function TestimonialCard({ testimonial }) {
    return (
      <div className="bg-[#1E2023] p-8">
        <div className="mb-8 h-10">
          <Image
            src={testimonial.logo}
            alt="Company logo"
            width={120}
            height={40}
            className="h-10 object-contain invert"
          />
        </div>
        <p className="text-lg mb-8 font-thin">{testimonial.text}</p>
        <div className="flex items-center">
          <div className="mr-4">
            {testimonial.author.image ? (
              <Image
                src={testimonial.author.image}
                alt={testimonial.author.name}
                width={60}
                height={60}
                className="rounded-full h-12 w-12 object-cover"
              />
            ) : (
              <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
            )}
          </div>
          <div>
            <p className="font-medium">{testimonial.author.name}</p>
            <p className="text-gray-400 text-sm">/ {testimonial.author.title}</p>
          </div>
        </div>
      </div>
    );
  }