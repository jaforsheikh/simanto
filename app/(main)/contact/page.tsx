import Link from "next/link";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
} from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B4DBA] shadow-sm">
              Contact Simanto
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-[#020817] md:text-6xl">
              Let’s talk about your next growth project.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Tell us about your business goals. We’ll help you choose the best
              marketing strategy, website plan, or growth system for your brand.
            </p>

            <div className="mt-10 grid gap-5">
              <div className="rounded-[26px] bg-white p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-xl text-[#0B4DBA]">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="font-black text-[#020817]">Email Us</h3>
                    <p className="mt-1 text-slate-600">hello@simanto.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] bg-white p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-xl text-[#0B4DBA]">
                    <FiPhone />
                  </div>
                  <div>
                    <h3 className="font-black text-[#020817]">Call Us</h3>
                    <p className="mt-1 text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] bg-white p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-xl text-[#0B4DBA]">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="font-black text-[#020817]">Office</h3>
                    <p className="mt-1 text-slate-600">
                      Remote-first marketing agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] bg-white p-6 shadow-2xl md:p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF] text-3xl text-[#0B4DBA]">
              <FiMessageCircle />
            </div>

            <h2 className="text-3xl font-black text-[#020817]">
              Send a message
            </h2>

            <p className="mt-3 text-slate-600">
              Fill out the form and our team will contact you soon.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none transition focus:border-[#0B4DBA] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none transition focus:border-[#0B4DBA] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none transition focus:border-[#0B4DBA] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#020817]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+1 555 000 0000"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none transition focus:border-[#0B4DBA] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#020817]">
                  Service Interested In
                </label>
                <select className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none transition focus:border-[#0B4DBA] focus:bg-white">
                  <option>SEO Marketing</option>
                  <option>Web Design & Development</option>
                  <option>Social Media Marketing</option>
                  <option>Reputation Management</option>
                  <option>Paid Ads Management</option>
                  <option>Full Marketing System</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#020817]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none transition focus:border-[#0B4DBA] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#020817]"
              >
                Send Message
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
              Need fast support?{" "}
              <Link href="mailto:hello@simanto.com" className="font-bold text-[#0B4DBA]">
                Email us directly
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}