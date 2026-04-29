import Link from "next/link";
import {
  FiArrowRight,
  FiBarChart2,
  FiEdit3,
  FiGlobe,
  FiSearch,
  FiStar,
  FiTarget,
} from "react-icons/fi";

const services = [
  {
    icon: FiSearch,
    title: "SEO Marketing",
    text: "Rank higher on Google and bring consistent organic traffic to your business.",
  },
  {
    icon: FiGlobe,
    title: "Website Development",
    text: "Modern, fast, responsive websites built to convert visitors into customers.",
  },
  {
    icon: FiBarChart2,
    title: "Paid Ads Management",
    text: "Launch profitable ad campaigns for leads, sales, and brand awareness.",
  },
  {
    icon: FiStar,
    title: "Reputation Management",
    text: "Build trust with better reviews, brand credibility, and online presence.",
  },
  {
    icon: FiEdit3,
    title: "Content Strategy",
    text: "Professional content planning for social media, blogs, and campaigns.",
  },
  {
    icon: FiTarget,
    title: "Social Media Marketing",
    text: "Grow your audience and convert attention into real business results.",
  },
];

export default function Services() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-primary">Our Services</span>

          <h2 className="mt-6 section-title">
            Complete marketing solutions for modern business growth.
          </h2>

          <p className="mt-5 section-text">
            From brand visibility to lead generation, Simanto provides the tools,
            strategy, and execution your business needs to grow online.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDark = index === 1;

            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-[32px] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isDark
                    ? "bg-[#020817] text-white"
                    : "bg-white text-[#020817]"
                }`}
              >
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#0B4DBA]/20 blur-3xl" />

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${
                    isDark
                      ? "bg-white/10 text-blue-300"
                      : "bg-[#EEF4FF] text-[#0B4DBA]"
                  }`}
                >
                  <Icon />
                </div>

                <h3
                  className={`relative mt-8 text-2xl font-black ${
                    isDark ? "text-white" : "text-[#020817]"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`relative mt-4 leading-8 ${
                    isDark ? "text-white/65" : "text-slate-600"
                  }`}
                >
                  {service.text}
                </p>

                <Link
                  href="/services"
                  className={`relative mt-8 inline-flex items-center gap-2 font-black ${
                    isDark ? "text-white" : "text-[#0B4DBA]"
                  }`}
                >
                  Learn More
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#0B4DBA] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}