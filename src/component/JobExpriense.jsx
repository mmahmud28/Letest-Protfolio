import React from "react";
import { FaHospital, FaLaptopCode, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    year: "2023",
    company: "Bangladesh City Hospital (BCH)",
    role: "Receptionist",
    type: "Healthcare Service",
    website: "https://bangladeshcityhospital.com/",
    image: "/images/jobs/bch-banner.png",
    icon: <FaHospital />,
    summary:
      "Managed front-desk operations, patient communication, appointment support, and professional customer service in a busy hospital environment.",
  },
  {
    year: "2024",
    company: "Telerad Bangladesh Ltd.",
    role: "Junior Software Engineer",
    type: "Healthcare Technology",
    website: "https://www.teleradbangladesh.com/",
    image: "/images/jobs/telerad-banner.png",
    icon: <FaLaptopCode />,
    summary:
      "Worked as a Junior Software Engineer, contributing to software solutions, technical support, system improvement, and real-world development workflow.",
  },
  {
    year: "2025 - 2026",
    company: "Iconic Structure and Design Ltd",
    role: "Computer Operator & Software Developer Engineer",
    type: "Real Estate & Software Development",
    website: "https://iconicbd.net/",
    image: "/images/jobs/iconic-banner.png",
    icon: <FaBuilding />,
    summary:
      "Working with ISDL as a Computer Operator and Software Developer Engineer, supporting digital operations, software systems, website management, and business technology solutions.",
  },
];

const JobExpriense = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-20 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-cyan-400 font-bold tracking-[0.3em] uppercase mb-3">
            Career Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            My Job Experience
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-slate-300 text-lg">
            A professional journey through healthcare service, software engineering,
            and real estate technology operations.
          </p>
        </div>

        <div className="space-y-10">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="lg:col-span-5 relative min-h-[280px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.company}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <span className="absolute top-5 left-5 px-5 py-2 rounded-full bg-cyan-400 text-slate-950 text-sm font-black">
                  {item.year}
                </span>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-cyan-300 font-bold">{item.type}</p>
                    <h3 className="text-2xl sm:text-3xl font-black">
                      {item.company}
                    </h3>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {item.role}
                </h4>

                <p className="text-slate-300 leading-relaxed mb-7">
                  {item.summary}
                </p>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white text-slate-950 px-6 py-3 font-bold hover:bg-cyan-300 transition"
                >
                  Visit Website <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobExpriense;