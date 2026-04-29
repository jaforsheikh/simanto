"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type NavLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks: NavLink[];
};

export default function MobileMenu({
  open,
  setOpen,
  navLinks,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-brand-navy/70 backdrop-blur-xl transition-all duration-300 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`absolute right-4 top-24 w-[calc(100%-32px)] rounded-[28px] border border-white/10 bg-white p-5 shadow-premium transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-bold text-slate-700 transition hover:bg-brand-soft hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue px-5 py-4 font-bold text-white"
          >
            Get Started <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}