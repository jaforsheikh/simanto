import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Local SEO Growth Campaign",
    category: "SEO Marketing",
    result: "+248% Organic Traffic",
    desc: "A complete local SEO strategy that improved search visibility, Google ranking, and qualified leads.",
  },
  {
    title: "Brand Reputation System",
    category: "Reputation Management",
    result: "98% Trust Score",
    desc: "Review management and brand trust campaign designed for service-based businesses.",
  },
  {
    title: "Premium Agency Website",
    category: "Web Development",
    result: "+42% Conversion Rate",
    desc: "A modern responsive website built to convert visitors into leads and paying clients.",
  },
  {
    title: "Social Media Growth Plan",
    category: "Social Media",
    result: "12K+ Monthly Reach",
    desc: "Content strategy, creative planning, and engagement-focused social media execution.",
  },
  {
    title: "Paid Ads Lead Funnel",
    category: "Paid Ads",
    result: "-35% Cost Per Lead",
    desc: "Optimized ad funnel for lead generation, retargeting, and conversion tracking.",
  },
  {
    title: "Content Marketing Engine",
    category: "Content Strategy",
    result: "+180% Engagement",
    desc: "High-value content system for blogs, social posts, and authority-building campaigns.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B4DBA] shadow-sm">
            Our Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#020817] md:text-6xl">
            Growth projects built for modern brands.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore selected Simanto projects focused on SEO, websites, paid ads,
            social media, reputation management, and measurable business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-[30px] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 1 || index === 4
                  ? "bg-[#020817] text-white"
                  : "bg-white"
              }`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#0B4DBA]/20 blur-3xl" />

              <div className="relative">
                <div
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${
                    index === 1 || index === 4
                      ? "bg-white text-[#0B4DBA]"
                      : "bg-[#EEF4FF] text-[#0B4DBA]"
                  }`}
                >
                  <FiExternalLink />
                </div>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                    index === 1 || index === 4
                      ? "bg-white/10 text-blue-200"
                      : "bg-[#EEF4FF] text-[#0B4DBA]"
                  }`}
                >
                  {project.category}
                </span>

                <h3
                  className={`mt-5 text-2xl font-black ${
                    index === 1 || index === 4 ? "text-white" : "text-[#020817]"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    index === 1 || index === 4
                      ? "text-white/70"
                      : "text-slate-600"
                  }`}
                >
                  {project.desc}
                </p>

                <div
                  className={`mt-7 rounded-2xl p-4 font-black ${
                    index === 1 || index === 4
                      ? "bg-white/10 text-white"
                      : "bg-[#F4F8FF] text-[#0B4DBA]"
                  }`}
                >
                  {project.result}
                </div>

                <Link
                  href="/portfolio/project-case-study"
                  className={`mt-7 inline-flex items-center gap-2 font-bold ${
                    index === 1 || index === 4 ? "text-white" : "text-[#0B4DBA]"
                  }`}
                >
                  View Case Study
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#0B4DBA] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}