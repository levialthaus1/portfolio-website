import Image from "next/image";
import { FaStar } from "react-icons/fa";

export interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  imagePath: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  imagePath,
}: TestimonialCardProps) {
  return (
    <div className="bg-gray-800 border-gray-700 rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="italic mb-6 text-gray-400">&ldquo;{content}&ldquo;</p>

      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full">
          <Image
            src={imagePath}
            alt="testimonial-pic"
            className="object-cover rounded-full"
            fill
          />
        </div>
        <div className="py-4">
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
