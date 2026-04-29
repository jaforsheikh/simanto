import Link from "next/link";
import { FiArrowRight, FiCalendar, FiCheckCircle } from "react-icons/fi";

const blogs = [
  {
    slug: "digital-growth-system",
    title: "How to Build a Complete Digital Growth System",
    subtitle:
      "Learn how SEO, content, ads, website design, and reputation management work together.",
    category: "Growth Strategy",
    date: "Feb 16, 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    points: [
      "How digital growth works",
      "SEO + content + ads strategy",
      "How to convert traffic into leads",
    ],
  },
  {
    slug: "seo-for-small-business-leads",
    title: "How SEO Helps Small Businesses Generate More Leads",
    subtitle:
      "A practical SEO guide for businesses that want more visibility and qualified customers.",
    category: "SEO Marketing",
    date: "Jan 12, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Keyword strategy",
      "Local SEO basics",
      "Lead generation from Google",
    ],
  },
  {
    slug: "reputation-management-matters",
    title: "Why Reputation Management Matters for Modern Brands",
    subtitle:
      "Understand how reviews, trust signals, and online reputation affect customer decisions.",
    category: "Reputation",
    date: "Jan 18, 2026",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Online trust building",
      "Review management",
      "Brand authority growth",
    ],
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#F4F8FF] pt-32">
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B4DBA] shadow-sm">
            Simanto Blog
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#020817] md:text-6xl">
            Marketing insights that help your business grow smarter.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Read practical guides on SEO, web design, social media, reputation
            management, paid ads, and complete digital growth systems.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <article
              key={blog.slug}
              className={`group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "h-[360px]" : "h-[260px]"
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B4DBA] shadow">
                  {blog.category}
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <FiCalendar />
                  {blog.date}
                </div>

                <h2
                  className={`mt-4 font-black leading-tight text-[#020817] ${
                    index === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                  }`}
                >
                  {blog.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {blog.subtitle}
                </p>

                <div className="mt-6 grid gap-3">
                  {blog.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-bold text-slate-700"
                    >
                      <FiCheckCircle className="text-[#0B4DBA]" />
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B4DBA] px-6 py-3 font-bold text-white transition hover:bg-[#020817]"
                >
                  Read Article
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}