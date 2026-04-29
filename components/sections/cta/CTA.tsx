import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiMessageCircle } from "react-icons/fi";

const benefits = [
  "Free strategy consultation",
  "Custom growth roadmap",
  "Clear pricing and timeline",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8FF] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0B4DBA] p-8 text-white shadow-2xl md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#020817]/30 blur-3xl" />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white">
                Grow With Simanto
              </span>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Ready to turn your online presence into real business growth?
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
                Let’s build a marketing system that brings better visibility,
                stronger trust, more leads, and long-term brand growth.
              </p>

              <div className="mt-8 grid gap-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 font-bold">
                    <FiCheckCircle className="text-xl text-white" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-7 text-[#020817] shadow-2xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF] text-3xl text-[#0B4DBA]">
                <FiMessageCircle />
              </div>

              <h3 className="text-3xl font-black">
                Start your project today
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Tell us about your business goal. We will suggest the best
                marketing direction for your brand.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#020817] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0B4DBA]"
              >
                Book Free Consultation
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </Link>

              <p className="mt-4 text-center text-sm font-semibold text-slate-500">
                No pressure. Just clear guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}