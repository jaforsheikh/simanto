import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const values = [
  "Strategy-first marketing approach",
  "Clean design with conversion focus",
  "Transparent reporting and communication",
  "Long-term growth system for brands",
];

const stats = [
  { icon: FiTrendingUp, value: "248%", label: "Average Growth" },
  { icon: FiUsers, value: "120+", label: "Projects Completed" },
  { icon: FiTarget, value: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B4DBA] shadow-sm">
              About Simanto
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-[#020817] md:text-6xl">
              We build marketing systems that create real business growth.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Simanto is a premium marketing agency helping businesses grow with
              SEO, web design, social media marketing, paid ads, reputation
              management, and complete digital growth systems.
            </p>

            <div className="mt-8 grid gap-4">
              {values.map((item) => (
                <div key={item} className="flex gap-3 font-bold text-slate-700">
                  <FiCheckCircle className="mt-1 shrink-0 text-[#0B4DBA]" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#020817]"
            >
              Work With Us <FiArrowRight />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-white p-5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Marketing agency team"
              className="h-[520px] w-full rounded-[28px] object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-[30px] bg-white p-8 shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF] text-2xl text-[#0B4DBA]">
                  <Icon />
                </div>
                <h3 className="text-4xl font-black text-[#020817]">{item.value}</h3>
                <p className="mt-2 font-bold text-slate-600">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[34px] bg-[#020817] p-8 text-white md:p-10">
            <FiZap className="text-4xl text-blue-300" />
            <h2 className="mt-6 text-3xl font-black">Our Mission</h2>
            <p className="mt-4 leading-8 text-white/70">
              Our mission is to help brands grow with clear strategy, modern
              technology, strong visibility, and marketing execution that brings
              measurable results.
            </p>
          </div>

          <div className="rounded-[34px] bg-white p-8 shadow-xl md:p-10">
            <FiTarget className="text-4xl text-[#0B4DBA]" />
            <h2 className="mt-6 text-3xl font-black text-[#020817]">Our Vision</h2>
            <p className="mt-4 leading-8 text-slate-600">
              We want to become a trusted growth partner for businesses that need
              professional marketing systems, stronger online trust, and better
              customer acquisition.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}