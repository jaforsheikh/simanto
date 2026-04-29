import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020817] px-4">
      
      {/* GLOW BACKGROUND */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#0B4DBA]/20 blur-3xl" />

      <div className="relative text-center max-w-3xl">

        {/* SMALL TEXT */}
        <span className="text-sm font-bold tracking-widest text-blue-400">
          404 ERROR
        </span>

        {/* BIG TEXT */}
        <h1 className="mt-6 text-6xl font-black leading-tight text-white md:text-8xl">
          Page Not Found
        </h1>

        {/* SUB TEXT */}
        <p className="mt-6 text-lg text-white/60">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-[#0B4DBA] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Go Home
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Contact Us
          </Link>

        </div>

        {/* EXTRA TEXT */}
        <p className="mt-10 text-sm text-white/40">
          Need help? Our team is always ready to assist you.
        </p>

      </div>
    </main>
  );
}