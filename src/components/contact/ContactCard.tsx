import Link from "next/link";

export interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  link,
}: ContactCardProps) {
  return (
    <Link
      href={link}
      className="group flex items-center gap-4 px-2 py-3
  transition-colors hover:bg-white/5 rounded-lg"
    >
      <div
        className="h-15 w-15 rounded-full bg-white/5 text-white 
    transition-transform group-hover:scale-105 grid place-items-center"
      >
        {icon}
      </div>

      <div>
        <h4 className="text-md font-medium text-white">{title}</h4>
        <p className="text-md text-gray-400">{value}</p>
      </div>
    </Link>
  );
}
