import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  "Improve search visibility and organic traffic",
  "Attract qualified visitors who are ready to buy",
  "Build long-term brand authority online",
  "Track rankings, traffic, leads, and conversions",
];

const process = [
  "Website & competitor audit",
  "Keyword research and content mapping",
  "On-page SEO optimization",
  "Monthly tracking and growth reporting",
];

export default function SingleServicePage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0B4DBA] shadow-sm transition hover:-translate-y-1"
        >
          <FiArrowLeft />
          Back to Services
        </Link>

        <div className="mt-8 overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="bg-[#020817] p-8 text-white md:p-14">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-[#0B4DBA]">
                <FiSearch />
              </div>

              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                SEO Marketing Service
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Grow your traffic with powerful SEO marketing.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We help your business rank higher, attract better visitors, and
                turn organic traffic into real leads through a complete SEO
                growth system.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Start SEO Project <FiArrowRight />
              </Link>
            </div>

            <div className="relative min-h-[360px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                alt="SEO marketing analytics dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 border-b border-slate-100 p-6 md:grid-cols-3 md:p-10">
            {[
              { icon: FiTrendingUp, value: "+248%", label: "Traffic Growth" },
              { icon: FiUsers, value: "12K+", label: "Monthly Visitors" },
              { icon: FiTarget, value: "92%", label: "SEO Score" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="rounded-[26px] bg-[#F4F8FF] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-[#0B4DBA] shadow-sm">
                    <Icon />
                  </div>
                  <h3 className="text-4xl font-black text-[#020817]">
                    {item.value}
                  </h3>
                  <p className="mt-1 font-semibold text-slate-600">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black text-[#020817]">
                What You Get
              </h2>

              <div className="mt-6 grid gap-4">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-[#F4F8FF] p-4 font-semibold text-slate-700"
                  >
                    <FiCheckCircle className="mt-1 shrink-0 text-[#0B4DBA]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-[#020817]">
                Our SEO Process
              </h2>

              <div className="mt-6 grid gap-4">
                {process.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B4DBA] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="m-6 rounded-[30px] bg-[#020817] p-8 text-white md:m-10">
            <h2 className="text-3xl font-black">
              Ready to improve your search visibility?
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              Let Simanto create a complete SEO strategy that helps your brand
              get found, trusted, and chosen by the right customers.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-bold text-white"
            >
              Book Free Consultation <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}