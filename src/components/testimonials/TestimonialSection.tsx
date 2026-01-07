import Header from "../general/Header";
import { myTestimonials } from "./myTestimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  return (
    <section id="testimonials">
        <div>
            <Header title="Testimonials"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%]
            sm:w-[80%] mx-auto mt-12">
                {myTestimonials.map((t, index) => (
                    <div key={index} data-aos="fade-right" data-aos-delay={index * 100}>
                        <TestimonialCard
                            name={t.name}
                            role={t.role}
                            content={t.content}
                            rating={t.rating}
                            imagePath={t.imagePath}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
