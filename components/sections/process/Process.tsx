import {
  FiBarChart2,
  FiEdit3,
  FiFlag,
  FiSearch,
  FiZap,
} from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    step: "01",
    title: "Research & Strategy",
    text: "We analyze your business, competitors, audience, and goals to create a clear growth roadmap.",
  },
  {
    icon: FiEdit3,
    step: "02",
    title: "Creative Planning",
    text: "We design the content, campaign flow, website structure, and marketing messages.",
  },
  {
    icon: FiZap,
    step: "03",
    title: "Launch & Execution",
    text: "We launch SEO, social media, ads, reputation, and website campaigns with clean execution.",
  },
  {
    icon: FiBarChart2,
    step: "04",
    title: "Optimize & Scale",
    text: "We track performance, improve weak points, and scale what brings real business results.",
  },
];

export default function Process() {
  return (
    <section className="section section-dark relative overflow-hidden">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0B4DBA]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-200">
              Our Process
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              A proven system to grow your business online.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/65">
            We build marketing systems that attract, convert, and scale. Every
            step is designed to bring measurable business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.1]"
              >
                <span className="absolute right-6 top-6 text-6xl font-black text-white/5">
                  {item.step}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#0B4DBA]">
                  <Icon />
                </div>

                <h3 className="relative mt-8 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="relative mt-4 leading-7 text-white/60">
                  {item.text}
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm font-black text-blue-300">
                  <FiFlag />
                  Step {item.step}
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#0B4DBA] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}