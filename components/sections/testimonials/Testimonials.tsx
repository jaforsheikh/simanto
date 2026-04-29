import { FaStar } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";

const testimonials = [
  {
    name: "Robert Miller",
    role: "Founder, BrightLocal Co.",
    text: "Simanto helped us improve our online presence, website trust, and lead quality. Their strategy was clear, professional, and result-focused.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, Nova Brands",
    text: "The team delivered a clean marketing system that helped us get more inquiries from SEO and social media. Excellent communication and execution.",
  },
  {
    name: "Michael Carter",
    role: "CEO, GrowthPoint Agency",
    text: "Our website and reputation strategy improved our conversion rate. Simanto understands growth, design, and digital trust very well.",
  },
  {
    name: "Emily Davis",
    role: "Owner, ServicePro Solutions",
    text: "We needed better visibility and more qualified leads. Simanto created a practical plan and helped us move in the right direction fast.",
  },
  {
    name: "Daniel Wilson",
    role: "Operations Manager, LeadFlow",
    text: "Professional, responsive, and very organized. The reports were easy to understand and the campaign progress was clear every month.",
  },
  {
    name: "Jessica Brown",
    role: "Co-Founder, BrandLift Studio",
    text: "The website redesign and SEO strategy gave our brand a more premium look and helped us attract better clients online.",
  },
];

export default function Testimonials() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-primary">Testimonials</span>

          <h2 className="mt-6 section-title">
            Trusted by businesses who want real growth.
          </h2>

          <p className="mt-5 section-text">
            We focus on strategy, execution, and measurable results — that’s why
            our clients trust us.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`group rounded-[32px] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 1
                  ? "bg-[#020817] text-white"
                  : "bg-[#F4F8FF] text-[#020817]"
              }`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${
                  index === 1
                    ? "bg-white/10 text-blue-300"
                    : "bg-white text-[#0B4DBA]"
                }`}
              >
                <FiMessageCircle />
              </div>

              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p
                className={`mt-6 leading-8 ${
                  index === 1 ? "text-white/70" : "text-slate-600"
                }`}
              >
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-current/10 pt-6">
                <h3
                  className={`text-lg font-black ${
                    index === 1 ? "text-white" : "text-[#020817]"
                  }`}
                >
                  {item.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    index === 1 ? "text-white/50" : "text-slate-500"
                  }`}
                >
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}