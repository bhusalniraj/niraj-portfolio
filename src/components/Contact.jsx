import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import {
  Mail,
  Phone,
  MapPin,
  // Github,
  // Linkedin,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "bhusalniraj51@gmail.com",
       link: "mailto:bhusalniraj51@gmail.com",
     
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8950445378",
       link: "tel:+91 8950445378",
     
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "India",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-black
      text-gray-900 dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-green-500 font-semibold uppercase tracking-widest text-sm mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work{" "}
            <span className="text-green-500">
              Together
            </span>
          </h2>

          <div className="w-20 h-1 bg-green-500 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-500 dark:text-gray-400">
            Have a project idea or want to work together? Feel free to
            send me a message. I'd love to hear from you.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-5">

            <div className="p-7 rounded-2xl
              bg-gray-50 dark:bg-gray-950
              border border-gray-200 dark:border-gray-800"
            >

              <h3 className="text-2xl font-bold mb-3">
                Get In Touch
              </h3>

              <p className="text-gray-500 dark:text-gray-400 leading-7">
                I'm always interested in discussing new projects,
                creative ideas and opportunities.
              </p>

            </div>

            {/* Contact Cards */}
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="flex items-center gap-4 p-5 rounded-xl
                bg-gray-50 dark:bg-gray-950
                border border-gray-200 dark:border-gray-800
                hover:border-green-500
                group transition-all duration-300"
              >

                <div className="w-12 h-12 shrink-0 rounded-xl
                  bg-green-500/10 text-green-500
                  flex items-center justify-center
                  group-hover:bg-green-500
                  group-hover:text-black
                  transition-all duration-300"
                >
                  {item.icon}
                </div>

                <div className="flex-1">

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>

                  <p className="font-semibold mt-1">
                    {item.value}
                  </p>

                </div>

                <ArrowUpRight
                  size={19}
                  className="text-gray-400 group-hover:text-green-500
                  transition-colors"
                />

              </a>
            ))}

            {/* Social */}
            <div className="p-5 rounded-xl
              bg-gray-50 dark:bg-gray-950
              border border-gray-200 dark:border-gray-800"
            >

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Follow Me
              </p>

              <div className="flex gap-3">

                <a
                  href="https://github.com/bhusalniraj"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-lg
                  bg-white dark:bg-black
                  border border-gray-200 dark:border-gray-800
                  flex items-center justify-center
                  hover:bg-green-500 hover:text-black
                  transition-all duration-300"
                >
                  <FaGithub size={25} />
                </a>

                <a
                  href="https://www.linkedin.com/in/niraj-bhusal-164503407/?isSelfProfile=false"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-lg
                  bg-white dark:bg-black
                  border border-gray-200 dark:border-gray-800
                  flex items-center justify-center
                  hover:bg-green-500 hover:text-black
                  transition-all duration-300"
                >
                 <FaLinkedin size={25} />
                </a>

              </div>

            </div>

          </div>

          {/* Right Side - Form */}
          <div
            className="lg:col-span-3 p-7 md:p-9 rounded-2xl
            bg-gray-50 dark:bg-gray-950
            border border-gray-200 dark:border-gray-800"
          >

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message submitted!");
              }}
              className="space-y-6"
            >

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-lg
                    bg-white dark:bg-black
                    border border-gray-300 dark:border-gray-700
                    outline-none
                    focus:border-green-500
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400
                    transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg
                    bg-white dark:bg-black
                    border border-gray-300 dark:border-gray-700
                    outline-none
                    focus:border-green-500
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400
                    transition-all"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project subject"
                  required
                  className="w-full px-4 py-3 rounded-lg
                  bg-white dark:bg-black
                  border border-gray-300 dark:border-gray-700
                  outline-none
                  focus:border-green-500
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400
                  transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg
                  bg-white dark:bg-black
                  border border-gray-300 dark:border-gray-700
                  outline-none
                  focus:border-green-500
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400
                  resize-none
                  transition-all"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-auto
                flex items-center justify-center gap-2
                px-7 py-3
                bg-green-500 hover:bg-green-600
                text-black font-bold
                rounded-lg
                hover:scale-[1.02]
                transition-all duration-300"
              >
                Send Message
                <Send size={19} />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}