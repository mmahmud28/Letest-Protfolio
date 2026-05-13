import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Education", path: "#education" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-3 md:px-6 py-3">
      <nav className="w-full">
        <div
          className="
            h-[72px] w-full rounded-3xl px-4 md:px-6
            flex items-center justify-between gap-4
            border border-black/10 dark:border-white/20
            bg-white/80 dark:bg-slate-950/60
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(15,23,42,0.18)]
            dark:shadow-[0_10px_45px_rgba(0,0,0,0.45)]
            transition-all duration-500
          "
        >
          {/* Logo */}
          <a href="#home" className="group shrink-0 text-2xl md:text-3xl font-black">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mahmud
            </span>
            <span className="text-slate-900 dark:text-white">.</span>
            <div className="h-[3px] w-0 group-hover:w-full duration-500 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </a>

          {/* Desktop Menu */}
          <ul
            className="
              hidden lg:flex items-center justify-center
              flex-nowrap gap-1 xl:gap-2
              px-3 py-2 rounded-full
              bg-white/45 dark:bg-white/5
              border border-black/5 dark:border-white/10
              backdrop-blur-xl
              whitespace-nowrap
            "
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="
                    relative block px-3 xl:px-4 py-2 rounded-full
                    text-sm font-bold overflow-hidden group
                    text-slate-700 dark:text-white/80
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  <span className="relative z-10">{link.name}</span>

                  <span
                    className="
                      absolute inset-0 scale-0 group-hover:scale-100 rounded-full
                      bg-gradient-to-r from-cyan-500 to-purple-600
                      transition-transform duration-300
                    "
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Theme Switch */}
            <button
              onClick={handleThemeToggle}
              className="
                relative flex h-10 w-[78px] items-center rounded-full p-1
                border border-black/10 dark:border-white/20
                bg-slate-200/90 dark:bg-slate-900/80
                shadow-inner transition-all duration-500
                hover:scale-105
              "
              aria-label="Toggle theme"
            >
              <span
                className={`absolute h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                  darkMode ? "translate-x-[38px]" : "translate-x-0"
                }`}
              >
                {darkMode ? (
                  <FaMoon className="text-purple-600 text-sm" />
                ) : (
                  <FaSun className="text-yellow-500 text-sm" />
                )}
              </span>

              <span className="ml-2 text-[10px] font-black text-slate-700 dark:text-white/70">
                L
              </span>
              <span className="ml-auto mr-2 text-[10px] font-black text-slate-700 dark:text-white/70">
                D
              </span>
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="
                hidden sm:flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full
                text-sm font-black text-white
                bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                hover:from-purple-600 hover:to-cyan-500
                shadow-lg shadow-cyan-500/25
                hover:scale-105 duration-300
                whitespace-nowrap
              "
            >
              Resume
              <HiDownload className="text-lg" />
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="
                lg:hidden h-10 w-10 rounded-full flex items-center justify-center
                border border-black/10 dark:border-white/20
                bg-white/70 dark:bg-white/10
                text-slate-900 dark:text-white
                hover:bg-slate-200 dark:hover:bg-white/20
              "
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-[520px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="
              rounded-3xl p-4
              border border-black/10 dark:border-white/20
              bg-white/95 dark:bg-slate-950/90
              backdrop-blur-2xl shadow-2xl
            "
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="
                      block px-5 py-3 rounded-2xl font-bold
                      text-slate-700 dark:text-white/80
                      hover:text-white
                      hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600
                      transition-all duration-300
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/resume.pdf"
              download
              className="
                mt-4 flex sm:hidden items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl
                text-white font-black
                bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
              "
            >
              Download Resume
              <HiDownload />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;