import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { ContactCardProps } from "./ContactCard";

export const MyContactInfo: ContactCardProps[] = [
    {
        icon: <FaEnvelope className="w-6 h-6"/>,
        title: "Email",
        value: "levialthaus1@gmail.com",
        link: "mailto:levialthaus1@gmail.com"
    },
    {
        icon: <FaPhone className="w-6 h-6"/>,
        title: "Phone",
        value: "+61 422 559 322",
        link: "tel:+61422559322"
    },
    {
        icon: <FaMapMarkedAlt className="w-6 h-6"/>,
        title: "Location",
        value: "Sydney | Global",
        link: "#"
    },

]