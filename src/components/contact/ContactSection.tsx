"use client";
import { LuSend } from "react-icons/lu";
import ContactCard from "./ContactCard";
import { MyContactInfo } from "./MyContactInfo";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const inputStyles =
    "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400";

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "b709516e-4d4c-47e1-a009-8ffed1be2a2d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      (event.target as HTMLFormElement).reset();
      toast("Form Submitted Successfully!", {
        style: {
          background: "#4f39f6",
          color: "white",
        },
      });
    } else {
      toast("Error submitting form", {
        style: {
          background: "#4f39f6",
          color: "white",
        },
      });
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="py-16 lg:py-30">
      <div
        className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2
        gap lg:gap-12"
      >
        <div data-aos="fade-right">
          <h2
            className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text 
                bg-linear-to-r from-indigo-500 to-gray-300"
          >
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
            I&apos;m currently available for freelance work and full-time
            opportunities. Whether you have a project in mind or just want to
            connect, feel free to reach out!
          </p>

          <div className="space-y-5 mb-12">
            {MyContactInfo.map((c, index) => (
              <ContactCard
                key={index}
                icon={c.icon}
                title={c.title}
                value={c.value}
                link={c.link}
              />
            ))}
          </div>
        </div>

        {/* form */}
        <div data-aos="zoom-in">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg bg-slate-900 px-4 py-8"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className={inputStyles}
              name="name"
            />
            <input
              type="text"
              placeholder="Your Email"
              required
              className={inputStyles}
              name="email"
            />
            <input
              type="text"
              placeholder="Subject of message"
              required
              className={inputStyles}
              name="subject"
            />
            <textarea
              placeholder="Message"
              required
              className={`${inputStyles} resize-none`}
              rows={5}
              name="message"
            />
            <button
              className="w-full bg-linear-to-r from-blue-900 to-purple-800
            hover:from-blue-800 hover:to-purple-700 text-white font-semibold py-4
            rounded-lg transition-all flex items-center justify-center gap-2
            cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span
                    className="w-6 h-6 border-3 border-white/30 border-t-white
                rounded-full animate-spin"
                  ></span>
                  Sending...
                </>
              ) : (
                <>
                  <LuSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
