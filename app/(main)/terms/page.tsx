import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiShield } from "react-icons/fi";

const terms = [
  {
    title: "Service Agreement",
    text: "By using Simanto services, you agree to provide accurate project information, required access, and clear communication during the project timeline.",
  },
  {
    title: "Payment Policy",
    text: "Payments must be completed according to the agreed package, invoice, or project milestone. Work may be paused if payment is delayed.",
  },
  {
    title: "Project Timeline",
    text: "Project delivery depends on scope, content availability, client feedback, and approval time. Any major change may affect the timeline.",
  },
  {
    title: "Revision Policy",
    text: "Revisions are included based on the selected package or agreement. Extra revisions or major scope changes may require additional cost.",
  },
  {
    title: "Content & Assets",
    text: "Clients are responsible for providing correct text, images, brand materials, and legal rights for any assets used in the project.",
  },
  {
    title: "Limitation of Liability",
    text: "Simanto is not responsible for third-party platform issues, hosting downtime, policy changes, or external service restrictions.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
          <div className="relative bg-[#020817] px-6 py-16 text-white md:px-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0B4DBA]/40 blur-3xl" />

            <div className="relative max-w-3xl">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                Legal Information
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Terms & Conditions
              </h1>

              <p className="mt-5 text-lg leading-8 text-white/70">
                Please read these terms carefully before using Simanto services,
                website, or any digital marketing solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:p-12 lg:grid-cols-[1fr_300px]">
            <div className="grid gap-5">
              {terms.map((item) => (
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
                <FiShield className="text-4xl text-blue-300" />

                <h3 className="mt-5 text-xl font-black">
                  Need clarification?
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  Contact Simanto if you have questions about our terms,
                  payment policy, or project agreement.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4DBA] px-5 py-3 font-bold text-white"
                >
                  Contact Us <FiArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}