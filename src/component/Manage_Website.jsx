import { FaExternalLinkAlt, FaGlobe, FaServer, FaShieldAlt } from "react-icons/fa";

const managedWebsites = [
  {
    name: "SHT Academy",
    url: "https://shtacademy.com/",
    type: "Educational Platform",
    description:
      "I manage this academy website, focusing on smooth user experience, content updates, performance, and website maintenance.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
  },
  {
    name: "Iconic BD",
    url: "https://iconicbd.net/",
    type: "Business Website",
    description:
      "I handle website management, technical updates, page maintenance, and overall digital presence for this platform.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
  },
  {
    name: "MM Software",
    url: "https://mmsoftware.top/",
    type: "Software Company",
    description:
      "I manage this software-related website with attention to service presentation, frontend quality, and technical consistency.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&auto=format&fit=crop",
  },
  {
    name: "Rupali Shop",
    url: "https://rupali.shop/",
    type: "E-commerce Website",
    description:
      "I manage this online shop website, including product presentation, website updates, and user-friendly shopping experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop",
  },
];

const Manage_Website = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#020617]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-bold text-sm mb-4">
            <FaGlobe />
            Managed Websites
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-5">
           Professional Website Management Experience
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 dark:text-white/70 text-base sm:text-lg font-medium leading-relaxed">
            I personally manage multiple live websites, handling technical
            maintenance, updates, performance, user experience, and digital
            presentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-7">
          {managedWebsites.map((site, index) => (
            <div
              key={index}
              className="group rounded-[2rem] overflow-hidden bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-120 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-2">
                    {site.type}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {site.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed font-medium mb-5">
                  {site.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="rounded-2xl bg-slate-100 dark:bg-white/10 p-3 text-center">
                    <FaServer className="mx-auto mb-2 text-cyan-500" />
                    <p className="text-xs font-bold text-slate-700 dark:text-white/70">
                      Maintenance
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 dark:bg-white/10 p-3 text-center">
                    <FaShieldAlt className="mx-auto mb-2 text-emerald-500" />
                    <p className="text-xs font-bold text-slate-700 dark:text-white/70">
                      Management
                    </p>
                  </div>
                </div>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white font-black hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Visit Website
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage_Website;