import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Web_project = () => {
    const projects = [
        {
            id: 1,
            name: "Tutor Booking Website",
            image: "/tour.png",
            description:
                "A modern personal portfolio website with responsive layout, clean UI, dark mode, and smooth animation effects.",
            stack: ["React", "Tailwind CSS", "DaisyUI"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Assignment-09",
            icon: <FaReact />,
        },
        {
            id: 2,
            name: "English Learning Website",
            image: "/english.png",
            description:
                "A full-stack e-commerce website where users can browse products, view details, and enjoy a smooth shopping experience.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/English-Janala",
            icon: <FaNodeJs />,
        },
        {
            id: 3,
            name: "Books Library Website",
            image: "/book.png",
            description:
                "A useful task management web app where users can add, update, delete, and organize daily tasks easily.",
            stack: ["React", "Tailwind CSS", "Firebase"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Books-Libery",
            icon: <SiFirebase />,
        },
        {
            id: 4,
            name: "Travel Agency Website",
            image: "/tarvel.png",
            description:
                "A modern personal portfolio website with responsive layout, clean UI, dark mode, and smooth animation effects.",
            stack: ["React", "Tailwind CSS", "DaisyUI"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Traver-Blog-Web-App",
            icon: <FaReact />,
        },
        {
            id: 5,
            name: "News Portal Website",
            image: "/news.png",
            description:
                "A full-stack e-commerce website where users can browse products, view details, and enjoy a smooth shopping experience.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Dragon-News",
            icon: <FaNodeJs />,
        },
        {
            id: 6,
            name: "Smart Shopping Website",
            image: "/smart.png",
            description:
                "A useful task management web app where users can add, update, delete, and organize daily tasks easily.",
            stack: ["React", "Tailwind CSS", "Firebase"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Smart-Shop",
            icon: <SiFirebase />,
        },
        {
            id: 7,
            name: "BPL Team Website",
            image: "/bpl.png",
            description:
                "A modern personal portfolio website with responsive layout, clean UI, dark mode, and smooth animation effects.",
            stack: ["React", "Tailwind CSS", "DaisyUI"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Bpl-Dream-11-App",
            icon: <FaReact />,
        },
        {
            id: 8,
            name: "Meal Booking Website",
            image: "/male.png",
            description:
                "A full-stack e-commerce website where users can browse products, view details, and enjoy a smooth shopping experience.",
            stack: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/User-Manager",
            icon: <FaNodeJs />,
        },
        {
            id: 9,
            name: "Task Management Website",
            image: "/isuu.png",
            description:
                "A useful task management web app where users can add, update, delete, and organize daily tasks easily.",
            stack: ["React", "Tailwind CSS", "Firebase"],
            liveLink: "https://your-live-link.com",
            githubLink: "https://github.com/mmahmud28/Issues-Tracker",
            icon: <SiFirebase />,
        }
    ];

    return (
        <section
            id="web-projects"
            className="relative py-24 px-4 sm:px-6 lg:px-10 bg-slate-100 dark:bg-[#050816] text-slate-900 dark:text-white overflow-hidden"
        >
            <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-black text-sm mb-5">
                        <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
                        My Web Projects
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Web Projects
                        </span>
                    </h2>

                    <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-white/70 leading-relaxed">
                        Some of my selected web projects with live preview, source code,
                        technology stack, and short description.
                    </p>
                </div>

                <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-2xl shadow-[0_25px_90px_rgba(15,23,42,0.16)] dark:shadow-[0_25px_90px_rgba(0,0,0,0.55)] p-6 sm:p-8 lg:p-10">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-[2rem] bg-white/90 dark:bg-slate-950/85 border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.14)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)] hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500"
                            >
                                <div className="relative bg-white h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>

                                    <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
                                        {project.icon}
                                    </div>

                                    <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-black text-white">
                                        {project.name}
                                    </h3>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full px-3 py-1 text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-black text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:scale-105 transition-all duration-300"
                                        >
                                            Live
                                            <FaExternalLinkAlt />
                                        </a>

                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-full font-black text-sm border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 hover:scale-105 transition-all duration-300"
                                        >
                                            GitHub
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative z-10 mt-10 rounded-[2rem] border border-black/10 dark:border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl p-6 text-center">
                        <h3 className="text-2xl font-black mb-3">Web App Experience</h3>

                        <p className="max-w-3xl mx-auto text-base sm:text-lg font-semibold text-slate-700 dark:text-white/70 leading-relaxed">
                            I have worked on real web applications, focusing on responsive design,
                            clean UI, smooth user experience, reusable components, and modern
                            frontend development with practical functionality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Web_project;