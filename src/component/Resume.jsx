import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaRobot,
  FaNetworkWired,
  FaShieldAlt,
  FaAmazon,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiMongoose,
  SiTypescript,
  SiSqlite,
  SiPhp,
  SiJson,
  SiXml,
  SiFirebase,
  SiDaisyui,
} from "react-icons/si";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { TbApi, TbBrandAuth0, TbLayoutDashboard } from "react-icons/tb";

const Resume = () => {
  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      style: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      style: "from-blue-500 to-cyan-500",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      style: "from-cyan-400 to-sky-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      style: "from-yellow-400 to-orange-500",
    },
    {
      name: "Vite",
      icon: <SiVite />,
      style: "from-purple-500 to-yellow-400",
    },
    {
      name: "React",
      icon: <FaReact />,
      style: "from-cyan-400 to-blue-600",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      style: "from-green-500 to-emerald-600",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      style: "from-slate-700 to-black",
    },
    {
      name: "Java",
      icon: <FaJava />,
      style: "from-red-500 to-orange-600",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      style: "from-green-500 to-lime-600",
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      style: "from-blue-600 to-sky-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      style: "from-slate-800 to-slate-950",
    },
    {
      name: "SQLite",
      icon: <SiSqlite />,
      style: "from-blue-500 to-slate-700",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      style: "from-indigo-500 to-purple-700",
    },
    {
      name: "JSON",
      icon: <SiJson />,
      style: "from-yellow-400 to-orange-500",
    },
    {
      name: "XML",
      icon: <SiXml />,
      style: "from-orange-500 to-red-600",
    },
    {
      name: "AWS",
      icon: <FaAmazon />,
      style: "from-orange-400 to-yellow-600",
    },
    {
      name: "BetterAuth",
      icon: <TbBrandAuth0 />,
      style: "from-violet-500 to-purple-700",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      style: "from-blue-500 to-sky-700",
    },
    {
      name: "Mongoose",
      icon: <SiMongoose />,
      style: "from-red-500 to-rose-700",
    },
    {
      name: "REST API",
      icon: <TbApi />,
      style: "from-emerald-500 to-teal-700",
    },
    {
      name: "JWT Security",
      icon: <FaShieldAlt />,
      style: "from-green-500 to-emerald-700",
    },
    {
      name: "Cursor AI",
      icon: <FaRobot />,
      style: "from-slate-700 to-black",
    },
    {
      name: "Bolt",
      icon: <FaNetworkWired />,
      style: "from-yellow-500 to-amber-700",
    },
    {
      name: "V0",
      icon: <FaRobot />,
      style: "from-zinc-600 to-neutral-950",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      style: "from-yellow-400 to-orange-500",
    },
    {
      name: "HeroUI",
      icon: <TbLayoutDashboard />,
      style: "from-cyan-500 to-blue-600",
    },
    {
      name: "DaisyUI",
      icon: <SiDaisyui />,
      style: "from-pink-500 to-fuchsia-600",
    },
  ];

  return (
    <section
      id="resume"
      className="
        relative min-h-screen flex items-center
        px-4 sm:px-6 lg:px-10 py-24
        bg-slate-100 dark:bg-[#050816]
        text-slate-900 dark:text-white
        overflow-hidden transition-all duration-500
      "
    >
      {/* Background Effects */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      {/* Grid Background */}
      <div
        className="
          absolute inset-0 opacity-[0.15] dark:opacity-[0.07]
          bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-cyan-500/10 dark:bg-cyan-400/10
              border border-cyan-500/20
              text-cyan-600 dark:text-cyan-300
              font-black text-sm mb-5
            "
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Technology Stack
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Tools I{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
        </div>

        {/* Main Box */}
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border border-black/10 dark:border-white/10
            bg-white/75 dark:bg-white/5
            backdrop-blur-2xl
            shadow-[0_25px_90px_rgba(15,23,42,0.16)]
            dark:shadow-[0_25px_90px_rgba(0,0,0,0.55)]
            p-6 sm:p-8 lg:p-12
          "
        >
          {/* Glow Inside */}
          <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"></div>

          {/* Tools Card */}
          <div
            className="
              relative z-10 overflow-hidden
              rounded-[2rem]
              border border-black/10 dark:border-white/10
              bg-white/80 dark:bg-slate-950/60
              backdrop-blur-2xl
              p-6 sm:p-8 lg:p-10
              shadow-xl
              hover:shadow-[0_25px_70px_rgba(168,85,247,0.22)]
              transition-all duration-500
            "
          >
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="relative z-10 text-center mb-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-purple-600 dark:text-purple-300 mb-4">
                Technology Stack
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black">
                My Developer{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tools
                </span>
              </h3>
            </div>

            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="
                    group relative overflow-hidden
                    rounded-2xl p-[1px]
                    bg-gradient-to-r from-black/10 to-black/5
                    dark:from-white/10 dark:to-white/5
                    hover:-translate-y-2 hover:scale-[1.04]
                    transition-all duration-500
                  "
                >
                  <div
                    className="
                      relative h-full min-h-[135px]
                      rounded-2xl
                      bg-white/85 dark:bg-slate-950/85
                      backdrop-blur-xl
                      border border-black/5 dark:border-white/10
                      p-5
                      flex flex-col items-center justify-center gap-4
                      text-center
                      overflow-hidden
                    "
                  >
                    <div
                      className={`
                        h-14 w-14 rounded-2xl
                        flex items-center justify-center
                        text-3xl text-white
                        bg-gradient-to-r ${tech.style}
                        shadow-lg
                        group-hover:rotate-6 group-hover:scale-110
                        transition-all duration-500
                      `}
                    >
                      {tech.icon}
                    </div>

                    <h4 className="font-black text-base text-slate-800 dark:text-white">
                      {tech.name}
                    </h4>

                    <div
                      className={`
                        absolute inset-0 opacity-0 group-hover:opacity-15
                        bg-gradient-to-r ${tech.style}
                        transition-all duration-500
                      `}
                    ></div>

                    <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-white/40 dark:bg-white/10 blur-xl group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="
                group relative overflow-hidden
                w-full sm:w-auto
                flex items-center justify-center gap-2
                px-10 py-4 rounded-full
                text-white font-black
                bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                shadow-lg shadow-cyan-500/30
                hover:shadow-purple-500/40
                hover:scale-105
                transition-all duration-300
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

              <span className="relative z-10 flex items-center gap-2">
                Download Resume
                <HiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
              </span>
            </a>

            <a
              href="#projects"
              className="
                group
                w-full sm:w-auto
                flex items-center justify-center gap-2
                px-10 py-4 rounded-full
                font-black
                border border-black/10 dark:border-white/20
                bg-white/80 dark:bg-white/10
                text-slate-800 dark:text-white
                hover:bg-slate-950 hover:text-white
                dark:hover:bg-white dark:hover:text-slate-950
                hover:scale-105
                transition-all duration-300
              "
            >
              View Projects
              <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;