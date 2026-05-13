import React from "react";
import { FaCode, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-slate-100 dark:bg-[#050816]
        text-slate-900 dark:text-white
        px-4 sm:px-6 lg:px-10 py-10
        transition-all duration-500
      "
    >
      {/* Soft Background Glow */}
      <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div
        className="
          relative z-10 max-w-7xl mx-auto
          rounded-3xl
          border border-black/10 dark:border-white/10
          bg-white/70 dark:bg-white/5
          backdrop-blur-xl
          shadow-[0_20px_70px_rgba(15,23,42,0.12)]
          dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]
          px-6 py-6
        "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className="
                h-11 w-11 rounded-2xl
                flex items-center justify-center
                bg-gradient-to-r from-cyan-500 to-purple-600
                text-white text-lg
                shadow-lg shadow-cyan-500/25
                group-hover:rotate-6 group-hover:scale-110
                transition-all duration-300
              "
            >
              <FaCode />
            </div>

            <h2 className="text-2xl font-black">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Mahmud
              </span>
              <span>.</span>
            </h2>
          </a>

          {/* Text */}
          <p className="text-center text-sm sm:text-base font-medium text-slate-600 dark:text-white/60">
            © {new Date().getFullYear()} Mahmud. All rights reserved.
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            title="Back to top"
            className="
              h-11 w-11 rounded-full
              flex items-center justify-center
              bg-white/80 dark:bg-white/10
              border border-black/10 dark:border-white/10
              text-slate-800 dark:text-white
              hover:text-white
              hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;