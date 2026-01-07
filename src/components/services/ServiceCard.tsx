import Image from "next/image";

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div>
      <Image src={icon} alt="service-icon" width={60} height={60} />
      <h3 className="my-4 text-xl md:text-2xl font-bold text-gray-200">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
