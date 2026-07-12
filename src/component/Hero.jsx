import { useEffect, useState } from "react";
import { FaCode, FaMobileAlt } from "react-icons/fa";

const SkillBadge = ({ className, skill }) => {
  return (
    <div
      className={`
        absolute z-30
        min-w-[88px] sm:min-w-[110px] lg:min-w-[125px]
        px-3 sm:px-4 py-2 sm:py-3
        rounded-2xl
        bg-white/90 dark:bg-slate-950/90
        backdrop-blur-xl
        border border-black/10 dark:border-white/10
        shadow-[0_10px_35px_rgba(15,23,42,0.18)]
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)]
        text-center
        ${className}
      `}
    >
      <p className="text-xs sm:text-sm lg:text-base font-black bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
        {skill}
      </p>
    </div>
  );
};

const Hero = () => {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",    
    "React",
    "Node.js",
    "Java",
    "SQL",
    "MongoDB",
    "Git",
    "Firebase",
    "Express Js",
  ];

  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSkill = (offset) => {
    return skills[(skillIndex + offset) % skills.length];
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center pt-28 px-4 sm:px-6 lg:px-10
        bg-slate-100 dark:bg-[#050816]
        text-slate-900 dark:text-white
        transition-all duration-500
        overflow-hidden
      "
    >
      {/* Background Effects - Same as Resume Section */}
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div
        className="
          absolute inset-0 opacity-[0.15] dark:opacity-[0.07]
          bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div
          className="
            relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
            rounded-[2rem]
            border border-black/10 dark:border-white/10
            bg-white/75 dark:bg-white/5
            backdrop-blur-2xl
            shadow-[0_20px_60px_rgba(15,23,42,0.15)]
            dark:shadow-[0_20px_70px_rgba(0,0,0,0.45)]
            p-6 sm:p-8 lg:p-12
          "
        >
          {/* Left Content */}
          <div className="space-y-7 text-center lg:text-left">
            <div
              className="
                inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-cyan-500/10 dark:bg-cyan-400/10
                border border-cyan-500/20
                text-cyan-600 dark:text-cyan-300
                font-bold text-sm
              "
            >
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Available for App & Web Projects
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mahmud
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-700 dark:text-white/90">
                Apps & Web Application Developer
              </h2>
              // Noted

              <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
                I build modern, responsive, and user-friendly web and app
                solutions. I enjoy creating clean interfaces, smooth user
                experiences, and powerful digital products with modern
                technologies.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div
                className="
                  group rounded-2xl p-5
                  border border-black/10 dark:border-white/10
                  bg-white/60 dark:bg-white/5
                  hover:bg-cyan-500/10
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >
                <FaCode className="text-3xl text-cyan-500 mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0" />

                <h3 className="font-black text-lg">Web Development</h3>

                <p className="text-sm text-slate-600 dark:text-white/60 mt-1">
                  Responsive websites with modern UI.
                </p>
              </div>

              <div
                className="
                  group rounded-2xl p-5
                  border border-black/10 dark:border-white/10
                  bg-white/60 dark:bg-white/5
                  hover:bg-purple-500/10
                  hover:-translate-y-2
                  transition-all duration-300
                "
              >
                <FaMobileAlt className="text-3xl text-purple-500 mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0" />

                <h3 className="font-black text-lg">App Development</h3>

                <p className="text-sm text-slate-600 dark:text-white/60 mt-1">
                  Clean, useful and smooth mobile apps.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="
                relative flex items-center justify-center
                h-[390px] w-[390px]
                sm:h-[500px] sm:w-[500px]
                lg:h-[590px] lg:w-[590px]
                max-w-full
              "
            >
              {/* Orbit Circle Lines */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/35 dark:border-cyan-300/25"></div>

              <div className="absolute inset-10 rounded-full border border-dashed border-purple-500/35 dark:border-purple-300/25"></div>

              <div className="absolute inset-20 rounded-full border border-cyan-500/10 dark:border-white/10"></div>

              {/* Image Glow */}
              <div
                className="
                  absolute
                  h-[280px] w-[280px]
                  sm:h-[360px] sm:w-[360px]
                  lg:h-[430px] lg:w-[430px]
                  rounded-full
                  bg-gradient-to-r from-cyan-500 to-purple-600
                  blur-2xl opacity-30 animate-pulse
                "
              ></div>

              {/* Main Image */}
              <div
                className="
                  relative z-20
                  h-[255px] w-[255px]
                  sm:h-[330px] sm:w-[330px]
                  lg:h-[400px] lg:w-[400px]
                  rounded-full p-2
                  bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                  shadow-[0_25px_80px_rgba(56,189,248,0.25)]
                  hover:scale-110
                  hover:shadow-[0_30px_100px_rgba(168,85,247,0.35)]
                  transition-all duration-500 ease-out
                "
              >
                <div
                  className="
                    h-full w-full rounded-full
                    bg-slate-200 dark:bg-slate-900
                    border-4 border-white/70 dark:border-white/10
                    overflow-hidden
                    flex items-center justify-center
                  "
                >
                  <img
                    src="/Mahmud.png"
                    alt="Mahmud"
                    className="
                      h-full w-full object-cover
                      transition-all duration-500
                      hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* 8 Dynamic Orbit Badges */}
              <div className="absolute inset-0 animate-orbit">
                <SkillBadge
                  skill={getSkill(0)}
                  className="
                    top-0 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(1)}
                  className="
                    top-[14.6%] right-[14.6%]
                    translate-x-1/2 -translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(2)}
                  className="
                    top-1/2 right-0
                    translate-x-1/2 -translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(3)}
                  className="
                    bottom-[14.6%] right-[14.6%]
                    translate-x-1/2 translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(4)}
                  className="
                    bottom-0 left-1/2
                    -translate-x-1/2 translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(5)}
                  className="
                    bottom-[14.6%] left-[14.6%]
                    -translate-x-1/2 translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(6)}
                  className="
                    top-1/2 left-0
                    -translate-x-1/2 -translate-y-1/2
                    animate-keep-straight
                  "
                />

                <SkillBadge
                  skill={getSkill(7)}
                  className="
                    top-[14.6%] left-[14.6%]
                    -translate-x-1/2 -translate-y-1/2
                    animate-keep-straight
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes orbit {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes keepStraight {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }

          .animate-orbit {
            animation: orbit 28s linear infinite;
          }

          .animate-keep-straight {
            animation: keepStraight 28s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;