"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiArrowRight, FiLock, FiMail } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const res = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard",
      rememberMe,
    });

    setLoading(false);

    if (res.error) {
      setError(res.error.message || "Invalid email or password");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#F4F8FF] px-4 py-10">
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center">
        <div className="grid overflow-hidden rounded-[36px] bg-white shadow-2xl lg:grid-cols-2">
          <div className="hidden bg-[#020817] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4DBA] text-xl font-black">
                  S
                </span>
                <span className="text-2xl font-black">
                  Si<span className="text-blue-300">manto</span>
                </span>
              </Link>

              <h1 className="mt-24 max-w-lg text-5xl font-black leading-tight">
                Welcome back to your growth dashboard.
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
                Login to manage your projects, reports, messages, invoices, and
                campaign progress.
              </p>
            </div>

            <p className="text-sm text-white/40">© 2026 Simanto Agency</p>
          </div>

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8 lg:hidden">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4DBA] text-xl font-black text-white">
                  S
                </span>
                <span className="text-2xl font-black text-[#020817]">
                  Si<span className="text-[#0B4DBA]">manto</span>
                </span>
              </Link>
            </div>

            <span className="badge-primary">Client Login</span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#020817] md:text-5xl">
              Sign in to your account
            </h2>

            <p className="mt-3 text-slate-600">
              Enter your email and password to continue.
            </p>

            {error && (
              <div className="mt-6 rounded-2xl bg-red-50 p-4 font-bold text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="mt-8 grid gap-5">
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
                    placeholder="••••••••"
                    className="w-full bg-transparent outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3 text-sm sm:flex-row sm:items-center">
                <label className="flex items-center gap-2 font-semibold text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="font-black text-[#0B4DBA]"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-7 py-4 font-black text-white shadow-xl transition hover:bg-[#020817] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
                <FiArrowRight />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-black text-[#0B4DBA]">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}