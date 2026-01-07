import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";
import { myServices } from "./myServices";

export default function ServiceSection() {
  return (
    <section id="services">
      {/* Header */}
      <Header title="What I Offer" />
      <div
        className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
        xl:grid-cols-4 gap-20"
      >
        {myServices.map((s, index) => (
          <div 
            key={index} 
            data-aos="fade-right"
            // Sequentially fade in these props
            data-aos-delay={index * 100}
          >
            <ServiceCard
              title={s.title}
              icon={s.icon}
              description={s.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
