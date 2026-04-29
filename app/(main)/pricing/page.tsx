import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    price: "$199",
    desc: "Perfect for small businesses starting online growth.",
    features: [
      "Basic SEO Setup",
      "Website Optimization",
      "Monthly Report",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$499",
    desc: "Best for scaling businesses and generating leads.",
    features: [
      "Advanced SEO Strategy",
      "Paid Ads Management",
      "Content Planning",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$999",
    desc: "Full marketing system for serious business growth.",
    features: [
      "Full SEO + Ads System",
      "Website Development",
      "Social Media Strategy",
      "Dedicated Manager",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 py-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#020817]">
            Simple pricing for powerful growth
          </h1>
          <p className="mt-4 text-slate-600">
            Choose the right plan for your business and start scaling with
            confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[28px] p-8 shadow-xl transition hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-[#020817] text-white scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-black">{plan.name}</h3>

              <p
                className={`mt-2 ${
                  plan.highlight ? "text-white/70" : "text-slate-600"
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-6 text-4xl font-black">{plan.price}</div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FiCheck
                      className={
                        plan.highlight ? "text-blue-400" : "text-blue-600"
                      }
                    />
                    <span
                      className={
                        plan.highlight ? "text-white/80" : "text-slate-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full py-3 font-bold transition ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-[#020817] text-white hover:bg-[#020817]/90"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}