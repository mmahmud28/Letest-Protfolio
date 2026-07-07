import { FaGooglePlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const Project = () => {
  const apps = [
    {
      id: 1,
      name: "HSC Exam Preparation",
      logo: "/he.jpg",
      description:
        "HSC Exam Preparation & Helper is a complete HSC Exam Preparation App, where HSC exam candidates can study and prepare in a smart way from home. ",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.sht_software.studyhsctestyourskill",
      stack: ["Java", "Firebase"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      name: "Vocabulary Guru",
      logo: "/vg.jpg",
      description:
        "Learn English Word – Vocabulary Guru is the ultimate English vocabulary learning app that helps you learn English to Bangla words with clear meanings, daily practice, and fun quizzes.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.mmahmud.vocabularyguru",
      stack: ["Java", "My SQL"],
      gradient: "from-emerald-500 to-cyan-600",
    },
    {
      id: 3,
      name: "Notepad Guru",
      logo: "/np.jpg",
      description:
        "Notepad Guru – Notes & Daily Organizer is a simple and easy-to-use notepad app that helps you write daily notes, keep important information, and stay organized in one place. It is designed to make note-taking fast, clean, and secure.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.mmahmud.noteapps",
      stack: ["SQLite", "Java"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      name: "Easy English Vocabulary",
      logo: "/en.jpg",
      description:
        "Easy English Vocabulary Bangla – Your Vocabulary Builder & English Learning App!",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.mmsoftware.englishvocabulary",
      stack: ["My SQL", "Php"],
      gradient: "from-purple-500 to-pink-600",
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-10 bg-slate-100 dark:bg-[#050816] text-slate-900 dark:text-white overflow-hidden transition-all duration-500"
    >
      <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-black text-sm mb-5">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
            My Play Store Apps
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Published{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mobile Apps
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
            Some of my published mobile applications available on Google Play Store.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-2xl shadow-[0_25px_90px_rgba(15,23,42,0.16)] dark:shadow-[0_25px_90px_rgba(0,0,0,0.55)] p-6 sm:p-8 lg:p-10">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <div
                key={app.id}
                className="group relative overflow-hidden rounded-[2rem] p-[1px] bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-purple-600/40 hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500"
              >
                <div className="relative h-full rounded-[2rem] bg-white/90 dark:bg-slate-950/85 backdrop-blur-2xl border border-black/10 dark:border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.14)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-6 text-center">
                  
                  <div
                    className={`mx-auto mb-6 h-28 w-28 rounded-[2rem] flex items-center justify-center bg-gradient-to-r ${app.gradient} p-1 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <div className="h-full w-full rounded-[1.7rem] bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                      <img
                        src={app.logo}
                        alt={app.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-4">{app.name}</h3>

                  <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-5">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {app.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={app.playStoreLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 px-5 py-3 rounded-full text-white font-black text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
                  >
                    <FaGooglePlay className="text-lg" />
                    View on Play Store
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${app.gradient} transition-all duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-10 rounded-[2rem] border border-black/10 dark:border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl p-6 text-center">
            <h3 className="text-2xl font-black mb-3">Mobile App Experience</h3>

            <p className="max-w-3xl mx-auto text-base sm:text-lg font-semibold text-slate-700 dark:text-white/70 leading-relaxed">
              I have worked on real mobile applications and published projects on the Google Play Store, focusing on clean UI, smooth performance, and user-friendly digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;