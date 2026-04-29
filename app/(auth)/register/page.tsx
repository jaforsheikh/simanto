"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiArrowRight, FiLock, FiMail, FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/dashboard",
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Registration failed");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#F4F8FF] px-4 py-10">
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-5xl items-center">
        <div className="grid overflow-hidden rounded-[36px] bg-white shadow-2xl lg:grid-cols-2">
          <div className="p-7 sm:p-10">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4DBA] text-xl font-black text-white">
                S
              </span>
              <span className="text-2xl font-black text-[#020817]">
                Si<span className="text-[#0B4DBA]">manto</span>
              </span>
            </Link>

            <span className="mt-10 badge-primary">Create Account</span>

            <h1 className="mt-5 text-4xl font-black text-[#020817]">
              Start your growth journey
            </h1>

            <p className="mt-3 text-slate-600">
              Create your client account for dashboard access.
            </p>

            {error && (
              <div className="mt-6 rounded-2xl bg-red-50 p-4 font-semibold text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister} className="mt-8 grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#020817]">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                  <FiUser className="text-xl text-[#0B4DBA]" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-transparent outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

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

              <div>
                <label className="mb-2 block text-sm font-bold text-[#020817]">
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4">
                  <FiLock className="text-xl text-[#0B4DBA]" />
                  <input
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="w-full bg-transparent outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-black text-white shadow-xl transition hover:bg-[#020817] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create Account"}
                <FiArrowRight />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-black text-[#0B4DBA]">
                Sign in
              </Link>
            </p>
          </div>

          <div className="hidden bg-[#020817] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <h2 className="text-5xl font-black leading-tight">
                Your business dashboard starts here.
              </h2>

              <p className="mt-6 leading-8 text-white/65">
                After registration, clients can track projects, reports,
                messages, invoices, and campaign performance.
              </p>
            </div>

            <p className="text-sm text-white/40">Better Auth + MongoDB ready</p>
          </div>
        </div>
      </section>
    </main>
  );
}