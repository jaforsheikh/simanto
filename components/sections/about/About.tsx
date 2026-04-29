import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const features = [
  "Data-driven marketing strategy",
  "SEO, social media, ads & reputation growth",
  "Conversion-focused website design",
  "Transparent reporting and ongoing support",
];

const stats = [
  { icon: FiUsers, value: "120+", label: "Projects completed" },
  { icon: FiTrendingUp, value: "248%", label: "Average growth" },
  { icon: FiZap, value: "5+", label: "Years experience" },
];

export default function About() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                alt="Simanto marketing team working together"
                className="h-[420px] w-full object-cover md:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#020817]/55 via-transparent to-[#0B4DBA]/20" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
                <p className="text-sm font-bold text-slate-500">Trusted Agency</p>
                <p className="text-3xl font-black text-[#020817]">98%</p>
              </div>
            </div>

            <div className="absolute -right-6 top-8 hidden rounded-3xl bg-[#020817] p-6 text-white shadow-2xl md:block">
              <p className="text-4xl font-black">120+</p>
              <p className="mt-1 text-sm text-white/60">Projects delivered</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="badge-primary">About Simanto</span>

            <h2 className="mt-6 section-title">
              We build marketing systems that turn attention into real business
              growth.
            </h2>

            <p className="mt-6 section-text">
              Simanto is a premium marketing agency helping businesses grow with
              strategy, SEO, social media, reputation management, paid ads, and
              high-converting websites. Our focus is simple: more visibility,
              more trust, and more qualified customers.
            </p>

            <div className="mt-8 grid gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-base font-bold text-[#020817]"
                >
                  <FiCheckCircle className="shrink-0 text-xl text-[#0B4DBA]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link href="/about" className="btn-primary">
                Learn More <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="card-soft p-7 transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF] text-2xl text-[#0B4DBA]">
                  <Icon />
                </div>

                <h3 className="mt-6 text-4xl font-black text-[#020817]">
                  {item.value}
                </h3>

                <p className="mt-2 font-bold text-slate-500">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}