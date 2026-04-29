"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiMail } from "react-icons/fi";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#F4F8FF] px-4 py-10">
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-xl items-center">
        <div className="rounded-[36px] bg-white p-7 shadow-2xl sm:p-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4DBA] text-xl font-black text-white">
              S
            </span>
            <span className="text-2xl font-black text-[#020817]">
              Si<span className="text-[#0B4DBA]">manto</span>
            </span>
          </Link>

          <span className="mt-10 badge-primary">Password Recovery</span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-[#020817]">
            Reset your password
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            Enter your email address. We will connect real email reset backend
            in the next step.
          </p>

          {submitted && (
            <div className="mt-6 rounded-2xl bg-green-50 p-4 font-bold text-green-700">
              Reset request received. Email sending backend will be added next.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#020817]">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                <FiMail className="text-xl text-[#0B4DBA]" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-black text-white shadow-xl transition hover:bg-[#020817]"
            >
              Send Reset Link
              <FiArrowRight />
            </button>
          </form>

          <Link
            href="/login"
            className="mt-7 inline-flex items-center gap-2 font-black text-[#0B4DBA]"
          >
            <FiArrowLeft />
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}