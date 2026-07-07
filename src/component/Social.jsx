import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Social = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://web.facebook.com/mmahmud28",
      color: "from-blue-500 to-blue-700",
      shadow: "hover:shadow-blue-500/40",
      text: "Connect on Facebook",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/md-mahmud28",
      color: "from-sky-500 to-blue-600",
      shadow: "hover:shadow-sky-500/40",
      text: "Professional Profile",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/mmahmud28",
      color: "from-slate-700 to-black",
      shadow: "hover:shadow-slate-500/40",
      text: "View My Codes",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:yourmail@gmail.com",
      color: "from-cyan-500 to-purple-600",
      shadow: "hover:shadow-purple-500/40",
      text: "Send Me Email",
    },
  ];

  return (
    <section
      id="social"
      className="
        relative py-24 px-4 sm:px-6 lg:px-10
        bg-slate-100 dark:bg-[#050816]
        text-slate-900 dark:text-white
        overflow-hidden
        transition-all duration-500
      "
    >
      {/* Background Glow */}
      <div className="absolute top-16 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-cyan-500/10 dark:bg-cyan-400/10
              border border-cyan-500/20
              text-cyan-600 dark:text-cyan-300
              font-bold text-sm mb-5
            "
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Follow Me / Hire Me
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Social Links
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
            Connect with me through social platforms, explore my projects, or
            send me an email directly.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target={item.name === "Email" ? "_self" : "_blank"}
              rel="noreferrer"
              className={`
                group relative overflow-hidden rounded-[2rem] p-[1px]
                bg-gradient-to-r ${item.color}
                shadow-xl ${item.shadow}
                hover:-translate-y-3 hover:scale-[1.03]
                transition-all duration-500
              `}
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500"></div>

              <div
                className="
                  relative h-full rounded-[2rem] p-7
                  bg-white/85 dark:bg-slate-950/85
                  backdrop-blur-2xl
                  border border-white/20 dark:border-white/10
                  text-center
                  overflow-hidden
                "
              >
                {/* Top Shine Effect */}
                <div
                  className="
                    absolute -top-16 -left-16 h-32 w-32 rounded-full
                    bg-white/40 dark:bg-white/10
                    blur-2xl
                    group-hover:translate-x-48 group-hover:translate-y-48
                    transition-all duration-700
                  "
                ></div>

                {/* Icon */}
                <div
                  className={`
                    relative mx-auto mb-6
                    h-20 w-20 rounded-3xl
                    flex items-center justify-center
                    text-3xl text-white
                    bg-gradient-to-r ${item.color}
                    shadow-lg
                    group-hover:rotate-6 group-hover:scale-110
                    transition-all duration-500
                  `}
                >
                  {item.icon}

                  <span className="absolute inset-0 rounded-3xl border border-white/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700"></span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-white/55">
                  {item.text}
                </p>

                {/* Bottom Button Look */}
                <div
                  className={`
                    mt-6 inline-flex items-center justify-center
                    px-5 py-2 rounded-full
                    text-sm font-black text-white
                    bg-gradient-to-r ${item.color}
                    shadow-md
                    group-hover:px-7
                    transition-all duration-300
                  `}
                >
                  Visit
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Extra Floating Dots */}
      <div className="absolute left-[8%] top-[25%] h-3 w-3 rounded-full bg-cyan-400 animate-bounce"></div>
      <div className="absolute right-[12%] top-[35%] h-3 w-3 rounded-full bg-purple-500 animate-pulse"></div>
      <div className="absolute left-[18%] bottom-[20%] h-2 w-2 rounded-full bg-blue-500 animate-ping"></div>
    </section>
  );
};

export default Social;