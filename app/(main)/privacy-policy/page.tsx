import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiLock } from "react-icons/fi";

const policies = [
  {
    title: "Information We Collect",
    text: "We may collect your name, email address, phone number, business details, project information, and messages submitted through our contact forms.",
  },
  {
    title: "How We Use Your Information",
    text: "We use your information to respond to inquiries, provide services, improve communication, manage projects, and deliver better marketing solutions.",
  },
  {
    title: "Data Protection",
    text: "We take reasonable security measures to protect your information from unauthorized access, misuse, loss, or disclosure.",
  },
  {
    title: "Third-Party Services",
    text: "We may use trusted third-party tools for analytics, hosting, email, payment, or project management. These services may process limited data.",
  },
  {
    title: "Cookies & Analytics",
    text: "Our website may use cookies and analytics tools to understand visitor behavior, improve performance, and enhance user experience.",
  },
  {
    title: "Your Rights",
    text: "You may request access, correction, or deletion of your personal information by contacting Simanto through our official contact channels.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="relative bg-[#020817] px-6 py-16 text-white md:px-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0B4DBA]/40 blur-3xl" />

            <div className="relative max-w-3xl">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                Privacy & Data
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-5 text-lg leading-8 text-white/70">
                This Privacy Policy explains how Simanto collects, uses, protects,
                and manages your information when you use our website or services.
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:p-12 lg:grid-cols-[1fr_300px]">
            <div className="grid gap-5">
              {policies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] bg-[#F4F8FF] p-6"
                >
                  <div className="flex gap-4">
                    <FiCheckCircle className="mt-1 shrink-0 text-xl text-[#0B4DBA]" />
                    <div>
                      <h2 className="text-xl font-black text-[#020817]">
                        {item.title}
                      </h2>
                      <p className="mt-3 leading-8 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside>
              <div className="sticky top-32 rounded-[28px] bg-[#020817] p-6 text-white">
                <FiLock className="text-4xl text-blue-300" />

                <h3 className="mt-5 text-xl font-black">
                  Data questions?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  Contact us if you want to update, correct, or remove your
                  personal information from our records.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-5 py-3 font-bold text-white"
                >
                  Contact Privacy Team <FiArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}