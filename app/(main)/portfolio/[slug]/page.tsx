import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

const results = [
  { icon: FiTrendingUp, value: "+248%", label: "Organic Traffic" },
  { icon: FiUsers, value: "12K+", label: "Monthly Reach" },
  { icon: FiTarget, value: "-35%", label: "Cost Per Lead" },
];

const workSteps = [
  "SEO audit and competitor research",
  "Landing page structure improvement",
  "Content strategy and keyword mapping",
  "Campaign tracking and conversion optimization",
];

export default function PortfolioDetailsPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0B4DBA] shadow-sm transition hover:-translate-y-1"
        >
          <FiArrowLeft />
          Back to Portfolio
        </Link>

        <div className="mt-8 overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="bg-[#020817] p-8 text-white md:p-14">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                SEO Marketing Case Study
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Local SEO Growth Campaign for a Service Brand
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We helped a service-based business improve search visibility,
                increase qualified traffic, and generate more customer inquiries.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Start Similar Project <FiArrowRight />
              </Link>
            </div>

            <div className="relative min-h-[360px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
                alt="SEO analytics dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 border-b border-slate-100 p-6 md:grid-cols-3 md:p-10">
            {results.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[26px] bg-[#F4F8FF] p-6"
                >
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

          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1fr_340px]">
            <div>
              <h2 className="text-3xl font-black text-[#020817]">
                Project Overview
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                The client needed a stronger online presence and more qualified
                leads from organic search. We created a complete growth plan that
                combined technical SEO, content strategy, local optimization, and
                conversion-focused landing page improvements.
              </p>

              <div className="mt-10">
                <h2 className="text-3xl font-black text-[#020817]">
                  What We Improved
                </h2>

                <div className="mt-6 grid gap-4">
                  {workSteps.map((item) => (
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

              <div className="mt-10 rounded-[30px] bg-[#020817] p-8 text-white">
                <FiBarChart2 className="text-4xl text-blue-300" />
                <h3 className="mt-5 text-2xl font-black">
                  Final Result
                </h3>
                <p className="mt-4 leading-8 text-white/70">
                  Within the campaign period, the brand achieved higher local
                  ranking, stronger organic traffic, better lead quality, and a
                  more reliable conversion system.
                </p>
              </div>
            </div>

            <aside>
              <div className="sticky top-32 rounded-[30px] bg-[#F4F8FF] p-6">
                <h3 className="text-xl font-black text-[#020817]">
                  Project Details
                </h3>

                <div className="mt-6 space-y-5">
                  {[
                    ["Client", "Service Brand"],
                    ["Category", "SEO Marketing"],
                    ["Timeline", "8 Weeks"],
                    ["Goal", "More Local Leads"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-slate-200 pb-4">
                      <p className="text-sm font-bold text-slate-500">{label}</p>
                      <p className="mt-1 font-black text-[#020817]">{value}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-5 py-3 font-bold text-white"
                >
                  Discuss Project <FiArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}