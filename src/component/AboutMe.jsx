import { FaSchool, FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
  const educationData = [
    {
      title: "Digital Marketing",
      subtitle: "Completed Many Online Courses",
      icon: <FaSchool />,
      description:
        "I have completed several online courses in digital marketing, which have equipped me with the knowledge and skills to effectively promote products and services in the digital space.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Mobile Apps Development",
      subtitle: "Bongo Academy",
      icon: <FaBookOpen />,
      description:
        "Bongo Academy provided me with practical knowledge and skills in app development, enhancing my technical expertise.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Web Application Development",
      subtitle: "Programming Hero",
      icon: <FaGraduationCap />,
      description:
        "Programming Hero helped me gain in-depth knowledge of web development, enabling me to create dynamic and responsive web applications.",
      gradient: "from-emerald-500 to-cyan-600",
    },
  ];

  return (
    <section
      id="education"
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
            Educational Qualification
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            My Academic{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
            A short overview of my educational background and learning path.
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

          {/* Short About Education */}
          <div
            className="
              relative z-10 mb-8
              rounded-[2rem]
              border border-black/10 dark:border-white/10
              bg-white/80 dark:bg-slate-950/60
              backdrop-blur-2xl
              p-6 sm:p-8
              text-center
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(56,189,248,0.18)]
              transition-all duration-500
            "
          >
            <div
              className="
                mx-auto mb-5 h-20 w-20 rounded-3xl
                flex items-center justify-center
                bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
                text-white text-4xl
                shadow-lg shadow-cyan-500/30
                hover:rotate-6 hover:scale-110
                transition-all duration-500
              "
            >
              <HiAcademicCap />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Education Helped Me Build My Foundation
            </h3>

            <p className="max-w-3xl mx-auto text-slate-600 dark:text-white/70 leading-relaxed text-base sm:text-lg">
              My academic journey helped me develop discipline, patience, and a
              learning mindset. Along with my education, I am continuously
              improving my programming and development skills.
            </p>
          </div>

          {/* Education Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((item) => (
              <div
                key={item.title}
                className="
                  group relative overflow-hidden
                  rounded-[2rem] p-[1px]
                  bg-gradient-to-r from-black/10 to-black/5
                  dark:from-white/10 dark:to-white/5
                  hover:-translate-y-3 hover:scale-[1.02]
                  transition-all duration-500
                "
              >
                <div
                  className="
                    relative h-full rounded-[2rem]
                    bg-white/85 dark:bg-slate-950/80
                    backdrop-blur-xl
                    border border-black/5 dark:border-white/10
                    p-6
                    text-center
                    overflow-hidden
                  "
                >
                  <div
                    className={`
                      mx-auto mb-5
                      h-16 w-16 rounded-2xl
                      flex items-center justify-center
                      text-3xl text-white
                      bg-gradient-to-r ${item.gradient}
                      shadow-lg
                      group-hover:rotate-6 group-hover:scale-110
                      transition-all duration-500
                    `}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-black mb-2">{item.title}</h3>

                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-300 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-white/60 leading-relaxed">
                    {item.description}
                  </p>

                  <div
                    className={`
                      absolute inset-0 opacity-0 group-hover:opacity-15
                      bg-gradient-to-r ${item.gradient}
                      transition-all duration-500
                    `}
                  ></div>

                  <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-white/40 dark:bg-white/10 blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div
            className="
              relative z-10 mt-8
              rounded-[2rem]
              border border-black/10 dark:border-white/10
              bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10
              backdrop-blur-xl
              p-6
              text-center
            "
          >
            <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-white/70 leading-relaxed">
              Education gave me the foundation, and programming practice is
              helping me build my future career as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;