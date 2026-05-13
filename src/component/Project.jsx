import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      image: "/src/assets/project1.png",
      stack: ["React", "Tailwind CSS", "DaisyUI"],
      description:
        "A modern personal portfolio website with responsive layout, clean UI, dark mode, and smooth animation effects.",
      liveLink: "https://your-live-link.com",
      githubClient: "https://github.com/your-username/portfolio-client",
      challenges:
        "Maintaining responsive design for mobile, tablet, and desktop while keeping the UI clean and professional.",
      improvements:
        "Add blog section, project filtering system, animation improvements, and better SEO optimization.",
      icon: <FaReact />,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      name: "E-Commerce Website",
      image: "/src/assets/project2.png",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      description:
        "A full-stack e-commerce project where users can browse products, view product details, and experience a clean shopping layout.",
      liveLink: "https://your-live-link.com",
      githubClient: "https://github.com/your-username/ecommerce-client",
      challenges:
        "Handling product data, building reusable components, and designing a smooth user-friendly product card layout.",
      improvements:
        "Add payment system, admin dashboard, order tracking, product review, and user authentication.",
      icon: <FaNodeJs />,
      gradient: "from-emerald-500 to-cyan-600",
    },
    {
      id: 3,
      name: "Task Management App",
      image: "/src/assets/project3.png",
      stack: ["React", "Tailwind CSS", "Firebase"],
      description:
        "A simple and useful task management app where users can add, update, delete, and organize daily tasks easily.",
      liveLink: "https://your-live-link.com",
      githubClient: "https://github.com/your-username/task-client",
      challenges:
        "Making the task system simple, clean, and easy to use while keeping the interface attractive.",
      improvements:
        "Add drag-and-drop task board, reminder notification, team collaboration, and user dashboard.",
      icon: <SiFirebase />,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative py-24 px-4 sm:px-6 lg:px-10
        bg-slate-100 dark:bg-[#050816]
        text-slate-900 dark:text-white
        overflow-hidden transition-all duration-500
      "
    >
      {/* Background Effects */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            My Projects
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
            A few selected projects with technology stack, live link, GitHub
            client, challenges, and future improvement plans.
          </p>
        </div>

        {/* Main Glass Box */}
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border border-black/10 dark:border-white/10
            bg-white/75 dark:bg-white/5
            backdrop-blur-2xl
            shadow-[0_25px_90px_rgba(15,23,42,0.16)]
            dark:shadow-[0_25px_90px_rgba(0,0,0,0.55)]
            p-6 sm:p-8 lg:p-10
          "
        >
          <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl"></div>

          {/* Project Cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="
                  group relative overflow-hidden
                  rounded-[2rem] p-[1px]
                  bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-600/40
                  hover:-translate-y-4 hover:scale-[1.02]
                  transition-all duration-500
                "
              >
                <div
                  className="
                    relative h-full rounded-[2rem]
                    bg-white/90 dark:bg-slate-950/85
                    backdrop-blur-2xl
                    border border-black/10 dark:border-white/10
                    overflow-hidden
                    shadow-[0_20px_60px_rgba(15,23,42,0.14)]
                    dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  "
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="
                        h-full w-full object-cover
                        group-hover:scale-110
                        transition-all duration-700
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>

                    <div
                      className={`
                        absolute top-4 left-4
                        h-12 w-12 rounded-2xl
                        flex items-center justify-center
                        text-2xl text-white
                        bg-gradient-to-r ${project.gradient}
                        shadow-lg
                        group-hover:rotate-6 group-hover:scale-110
                        transition-all duration-500
                      `}
                    >
                      {project.icon}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-black text-white">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full px-3 py-1
                            text-xs font-bold
                            bg-cyan-500/10 dark:bg-cyan-400/10
                            text-cyan-600 dark:text-cyan-300
                            border border-cyan-500/20
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-4">
                      <div
                        className="
                          rounded-2xl p-4
                          bg-white/70 dark:bg-white/5
                          border border-black/10 dark:border-white/10
                        "
                      >
                        <h4 className="font-black text-sm mb-2 text-slate-800 dark:text-white">
                          Challenges
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-white/55 leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>

                      <div
                        className="
                          rounded-2xl p-4
                          bg-white/70 dark:bg-white/5
                          border border-black/10 dark:border-white/10
                        "
                      >
                        <h4 className="font-black text-sm mb-2 text-slate-800 dark:text-white">
                          Future Plan
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-white/55 leading-relaxed">
                          {project.improvements}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group/btn flex flex-1 items-center justify-center gap-2
                          px-5 py-3 rounded-full
                          text-white font-black text-sm
                          bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                          shadow-lg shadow-cyan-500/25
                          hover:shadow-purple-500/40
                          hover:scale-105
                          transition-all duration-300
                        "
                      >
                        Live
                        <FaExternalLinkAlt className="text-sm group-hover/btn:rotate-12 transition-transform" />
                      </a>

                      <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group/btn flex flex-1 items-center justify-center gap-2
                          px-5 py-3 rounded-full
                          font-black text-sm
                          border border-black/10 dark:border-white/20
                          bg-white/80 dark:bg-white/10
                          text-slate-800 dark:text-white
                          hover:bg-slate-950 hover:text-white
                          dark:hover:bg-white dark:hover:text-slate-950
                          hover:scale-105
                          transition-all duration-300
                        "
                      >
                        Client
                        <FaGithub className="text-base group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </div>

                    {/* View More Look */}
                    <div
                      className="
                        mt-5 flex items-center justify-center gap-2
                        text-sm font-black
                        text-cyan-600 dark:text-cyan-300
                        group-hover:tracking-wide
                        transition-all duration-300
                      "
                    >
                      View More / Details
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-10
                      bg-gradient-to-r ${project.gradient}
                      transition-all duration-500 pointer-events-none
                    `}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Short Note */}
          <div
            className="
              relative z-10 mt-10
              rounded-[2rem]
              border border-black/10 dark:border-white/10
              bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10
              backdrop-blur-xl
              p-6
              text-center
            "
          >
            <h3 className="text-2xl font-black mb-3">
              Experience
            </h3>

            <p className="max-w-3xl mx-auto text-base sm:text-lg font-semibold text-slate-700 dark:text-white/70 leading-relaxed">
              I am currently improving my professional experience through real
              projects, practice, and continuous learning. I focus on building
              clean UI, responsive layouts, and useful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;