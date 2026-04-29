import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const points = ["SEO Growth", "Lead Generation", "Brand Trust"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8FF] pt-36 pb-24">
      {/* BG blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0B4DBA]/20 blur-3xl" />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="badge-primary">🚀 Digital Growth Agency</span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#020817] md:text-7xl">
            Grow Your Brand With Powerful Marketing Solutions
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Simanto helps businesses get more traffic, leads, and customers using
            SEO, social media, paid ads, and high-converting websites.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get Started <FiArrowRight />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-[#020817] shadow-sm transition hover:border-[#0B4DBA] hover:text-[#0B4DBA]"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {points.map((item) => (
              <div key={item} className="flex items-center gap-2 font-bold">
                <FiCheckCircle className="text-[#0B4DBA]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT (BIG IMAGE) */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Business meeting team women"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020817]/70 via-transparent to-[#0B4DBA]/30" />

            {/* bottom card */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm text-slate-500">Growth Rate</p>
              <p className="text-3xl font-black text-[#020817]">+38%</p>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white px-6 py-5 shadow-xl md:block">
            <p className="text-sm text-slate-500">Client Satisfaction</p>
            <p className="text-3xl font-black text-[#020817]">98%</p>
          </div>
        </div>
      </div>
    </section>
  );
}