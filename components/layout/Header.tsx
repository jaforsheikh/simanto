"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/80 px-6 py-4 shadow-xl backdrop-blur-md">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-black">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B4DBA] text-white">
            S
          </div>

          <span className="text-[#020817]">
            Si<span className="text-[#0B4DBA]">manto</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-8 font-semibold text-slate-700 lg:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Sign In */}
          <Link
            href="/login"
            className="rounded-full px-5 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Sign In
          </Link>

          {/* Sign Up */}
          <Link
            href="/register"
            className="rounded-full bg-[#EEF4FF] px-5 py-2.5 font-semibold text-[#0B4DBA] transition hover:bg-[#dbeafe]"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </header>
  );
}