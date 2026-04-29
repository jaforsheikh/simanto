import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiBookmark,
  FiCalendar,
  FiClock,
  FiEye,
  FiShare2,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

const learnPoints = [
  "How to design a digital growth system that compounds over time",
  "Why most marketing fails and how to build one that actually converts",
  "The five pillars that connect SEO, content, ads, and conversion",
  "How to measure what matters and ignore vanity metrics",
];

const articleSections = [
  {
    eyebrow: "Foundation",
    title: "Start with a clear business goal",
    lead: "Before a single ad runs or post is written, your strategy must be anchored to a measurable business outcome.",
    body: "Most marketing fails not because of bad execution, but because of unclear direction. Define exactly what success looks like — whether it is qualified leads per month, conversion rate, customer lifetime value, or share of voice in your niche. A goal you cannot measure is a goal you cannot grow.",
    highlight:
      "If your team cannot describe the goal in one sentence, the strategy is not ready.",
  },
  {
    eyebrow: "Core Asset",
    title: "Build a conversion-focused website",
    lead: "Your website is not a brochure. It is the engine where every marketing dollar either compounds or evaporates.",
    body: "A high-performing site loads in under two seconds, communicates value within the first viewport, and gives visitors one clear next step on every page. Treat your homepage, service pages, and pricing page as conversion experiments — measure them, refine them, and never assume the first version is good enough.",
    highlight:
      "Every 100ms of load time costs you about 1% of conversions. Speed is strategy.",
  },
  {
    eyebrow: "Long-Term Engine",
    title: "Use SEO for long-term visibility",
    lead: "Paid ads stop the moment you stop paying. SEO keeps working while you sleep.",
    body: "Build topical authority by publishing in-depth content around the problems your customers actually search for. Combine technical SEO, on-page optimization, and a deliberate internal linking structure. Within 9 to 12 months, organic traffic should become your most reliable growth channel.",
    highlight:
      "SEO is not a tactic. It is a long-term asset on your balance sheet.",
  },
  {
    eyebrow: "Trust Layer",
    title: "Use content to build trust",
    lead: "People do not buy from companies. They buy from teams they understand and respect.",
    body: "Content earns trust before a sales call ever happens. Case studies show proof, educational posts show competence, and behind-the-scenes content shows character. The goal is to make a stranger feel like they already know how you work — so the buying decision becomes the easy part.",
    highlight:
      "By the time a buyer talks to sales, they are already 70% through the decision.",
  },
  {
    eyebrow: "Measurement",
    title: "Track and optimize everything",
    lead: "What gets measured gets improved. What gets ignored quietly drains your budget.",
    body: "Set up clean analytics from day one — traffic sources, conversion paths, page performance, and revenue attribution. Review weekly, optimize monthly, and rebuild quarterly. The companies that win in digital are not the ones with the biggest budgets. They are the ones with the tightest feedback loops.",
    highlight:
      "Optimization beats invention. The next 10% of growth is hidden in your existing funnel.",
  },
];

const tableOfContents = [
  "Start with a clear business goal",
  "Build a conversion-focused website",
  "Use SEO for long-term visibility",
  "Use content to build trust",
  "Track and optimize everything",
];

const stats = [
  { value: "5x", label: "More qualified leads" },
  { value: "3x", label: "Higher conversion rate" },
  { value: "70%", label: "Lower acquisition cost" },
];

const relatedArticles = [
  {
    category: "SEO",
    title: "The new rules of search visibility in 2026",
    readTime: "5 min",
  },
  {
    category: "Conversion",
    title: "Why your landing page is leaking 60% of leads",
    readTime: "7 min",
  },
  {
    category: "Strategy",
    title: "How to audit your marketing in one afternoon",
    readTime: "4 min",
  },
];

export default function BlogDetailsPage() {
  return (
    <main className="relative overflow-hidden bg-[#F4F8FF] pt-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#0B4DBA]/15 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-[700px] -left-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-blue-400/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(11,77,186,0.08)_1px,transparent_0)] [background-size:24px_24px] opacity-40" />

      <article className="relative mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0B4DBA] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0B4DBA] hover:shadow-md"
          >
            <FiArrowLeft className="transition group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-600 shadow-sm sm:inline-flex">
              <FiEye className="text-[#0B4DBA]" /> 12,480 reads
            </div>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-[#0B4DBA] hover:shadow-md"
              aria-label="Bookmark"
            >
              <FiBookmark />
            </button>
            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:text-[#0B4DBA] hover:shadow-md"
              aria-label="Share"
            >
              <FiShare2 />
            </button>
          </div>
        </div>

        {/* Editorial Header */}
        <header className="mt-12 max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0B4DBA] px-4 py-2 text-white shadow-lg shadow-[#0B4DBA]/25">
              <FiTrendingUp /> Growth Strategy
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Issue 24 — The Growth Report</span>
          </div>

          <h1 className="mt-8 text-4xl font-black leading-[1.02] tracking-tight text-[#020817] md:text-6xl lg:text-[5.5rem]">
            How to build a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#0B4DBA] via-blue-500 to-[#0B4DBA] bg-clip-text text-transparent">
                complete digital
              </span>
              <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-blue-200/60" />
            </span>{" "}
            growth system.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-600 md:text-2xl md:leading-10">
            Most marketing fails because the channels are disconnected. Here is
            how to design a system where SEO, content, paid ads, and your
            website work as one engine — and compound month after month.
          </p>

          {/* Author + Meta strip */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-y border-slate-200 py-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#0B4DBA] to-blue-700 text-lg font-black text-white shadow-lg shadow-[#0B4DBA]/30">
                  S
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#F4F8FF] bg-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
              </div>
              <div>
                <p className="text-base font-black text-[#020817]">
                  Simanto Editorial
                </p>
                <p className="text-sm text-slate-500">
                  Marketing Strategy · Growth Research
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-[#0B4DBA]" /> Feb 16, 2026
              </span>
              <span className="flex items-center gap-2">
                <FiClock className="text-[#0B4DBA]" /> 8 min read
              </span>
              <span className="flex items-center gap-2">
                <FiTarget className="text-[#0B4DBA]" /> Intermediate
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image with floating stat card */}
        <div className="relative mt-12">
          <div className="overflow-hidden rounded-[36px] shadow-2xl shadow-[#0B4DBA]/10">
            <div className="relative h-[400px] md:h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                alt="Digital marketing team planning growth strategy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/75 via-[#020817]/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                <p className="max-w-md text-sm font-medium text-white/80">
                  A unified system replaces scattered tactics — turning
                  marketing from a cost center into a predictable growth engine.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-14 left-6 right-6 hidden rounded-[28px] border border-slate-100 bg-white/95 p-7 shadow-2xl backdrop-blur md:left-12 md:right-auto md:block">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B4DBA]">
                Average client results
              </p>
            </div>
            <div className="mt-5 flex gap-10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative">
                  {i > 0 && (
                    <div className="absolute -left-5 top-1 h-12 w-px bg-slate-200" />
                  )}
                  <p className="text-4xl font-black text-[#020817]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mt-28 grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Article Body */}
          <div className="max-w-[680px]">
            {/* What You'll Learn Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-white to-blue-50/40 p-8 shadow-sm md:p-10">
              <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[#0B4DBA]/5" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0B4DBA] via-blue-400 to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0B4DBA]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#0B4DBA]">
                  In this article
                </div>
                <h2 className="mt-5 text-3xl font-black text-[#020817] md:text-4xl">
                  What you will learn
                </h2>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  {learnPoints.map((item, i) => (
                    <div
                      key={item}
                      className="group flex gap-3 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B4DBA] text-[11px] font-black text-white transition group-hover:scale-110">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span className="text-sm font-semibold leading-6 text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lede Paragraph - Editorial style with drop cap */}
            <div className="mt-14">
              <p className="text-3xl leading-tight text-[#020817] md:text-4xl md:leading-[1.2]">
                <span className="float-left mr-3 mt-2 text-7xl font-black leading-none text-[#0B4DBA] md:text-8xl">
                  M
                </span>
                ost businesses do not have a marketing problem. They have a{" "}
                <em className="text-[#0B4DBA]">connection</em> problem. Posts go
                up, ads run, websites get redesigned — but none of it is wired
                to the same outcome.
              </p>

              <p className="mt-8 text-[18px] leading-9 text-slate-700">
                A digital growth system fixes that. It is not a tactic, a
                channel, or a campaign. It is the underlying architecture that
                turns scattered marketing activities into a single,
                self-reinforcing engine. Each part feeds the next: traffic
                becomes leads, leads become customers, customers become proof,
                and proof attracts more traffic. Done right, your marketing
                stops feeling like a cost — and starts looking like an asset.
              </p>
            </div>

            {/* Article Sections - Editorial style */}
            <div className="mt-20 space-y-20">
              {articleSections.map((section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-black tracking-widest text-[#0B4DBA]">
                      {String(index + 1).padStart(2, "0")} —{" "}
                      {section.eyebrow.toUpperCase()}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#0B4DBA]/30 to-transparent" />
                  </div>

                  <h2 className="mt-5 text-3xl font-black leading-[1.15] text-[#020817] md:text-4xl">
                    {section.title}
                  </h2>

                  <p className="mt-5 text-xl leading-9 text-[#020817]/80">
                    {section.lead}
                  </p>

                  <p className="mt-5 text-[17px] leading-8 text-slate-600">
                    {section.body}
                  </p>

                  <div className="mt-7 flex gap-4 rounded-2xl border-l-4 border-[#0B4DBA] bg-blue-50/60 px-5 py-4">
                    <FiTarget className="mt-1 shrink-0 text-[#0B4DBA]" />
                    <p className="text-[15px] font-semibold leading-7 text-slate-700">
                      {section.highlight}
                    </p>
                  </div>
                </section>
              ))}
            </div>

            {/* Pull Quote */}
            <figure className="mt-20 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#020817] via-[#0B4DBA] to-[#020817] p-10 text-white md:p-14">
              <div className="text-7xl font-black leading-none text-blue-300/30">
                &ldquo;
              </div>
              <blockquote className="-mt-6">
                <p className="text-2xl font-bold leading-[1.4] md:text-3xl md:leading-[1.35]">
                  Marketing is not about doing more. It is about connecting
                  fewer things, more deliberately, around a single business
                  outcome.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-blue-300" />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
                    Simanto Philosophy
                  </p>
                  <p className="mt-1 text-xs text-white/60">
                    Growth Strategy Principles, 2026
                  </p>
                </div>
              </figcaption>
            </figure>

            {/* Key Takeaways */}
            <div className="mt-16 overflow-hidden rounded-[32px] bg-[#020817] p-10 text-white md:p-12">
              <div className="flex items-center gap-3">
                <div className="h-10 w-1.5 rounded-full bg-[#0B4DBA]" />
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-300">
                    Summary
                  </p>
                  <h3 className="text-2xl font-black md:text-3xl">
                    Key takeaways
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {[
                  "Every marketing channel must serve one defined business goal.",
                  "Your website is the engine — speed, clarity, and conversion come first.",
                  "SEO is a long-term asset, not a short-term tactic.",
                  "Trust is built through content long before sales ever talks to a buyer.",
                  "What you measure weekly is what you grow quarterly.",
                  "Optimization beats invention — refine the funnel you already have.",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
                  >
                    <span className="font-mono text-xs font-black text-blue-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Thought */}
            <div className="mt-12 rounded-[32px] border border-blue-100 bg-white p-10 md:p-12">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0B4DBA]">
                In closing
              </span>
              <h3 className="mt-3 text-3xl font-black text-[#020817] md:text-4xl">
                A system, not a checklist
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A complete digital growth system is not the longest list of
                tactics — it is the smallest set of activities that reinforce
                each other. When your website, content, SEO, ads, and analytics
                pull in the same direction, growth stops feeling random. It
                becomes something you can plan for, measure, and trust.
              </p>
              <p className="mt-5 text-lg font-semibold leading-8 text-[#020817]">
                That is the difference between marketing that costs money and
                marketing that builds equity.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 flex flex-wrap items-start gap-6 rounded-[32px] border border-slate-100 bg-gradient-to-r from-blue-50/60 via-white to-white p-8 md:p-10">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0B4DBA] to-blue-700 text-2xl font-black text-white shadow-lg shadow-[#0B4DBA]/30">
                S
              </div>
              <div className="flex-1 min-w-[220px]">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0B4DBA]">
                  Written by
                </p>
                <p className="mt-1 text-xl font-black text-[#020817]">
                  Simanto Editorial
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We help businesses replace scattered tactics with complete
                  digital growth systems — built on strategy, executed with
                  precision, and measured with discipline.
                </p>
                <Link
                  href="/about"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0B4DBA] transition hover:gap-2.5"
                >
                  More from Simanto <FiArrowUpRight />
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#0B4DBA]">
                    Continue reading
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#020817] md:text-3xl">
                    Related articles
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="hidden items-center gap-1.5 text-sm font-bold text-[#0B4DBA] sm:inline-flex"
                >
                  View all <FiArrowRight />
                </Link>
              </div>

              <div className="mt-8 grid gap-4">
                {relatedArticles.map((article, i) => (
                  <Link
                    key={article.title}
                    href="#"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0B4DBA]/30 hover:shadow-md"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-sm font-black text-[#0B4DBA]/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B4DBA]">
                          {article.category}
                        </p>
                        <p className="mt-1 text-base font-bold text-[#020817] transition group-hover:text-[#0B4DBA] md:text-lg">
                          {article.title}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {article.readTime} read
                        </p>
                      </div>
                    </div>
                    <FiArrowUpRight className="shrink-0 text-2xl text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0B4DBA]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-6">
              {/* Table of Contents */}
              <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0B4DBA]">
                    On this page
                  </p>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {tableOfContents.length} sections
                  </span>
                </div>
                <ul className="mt-5 space-y-1">
                  {tableOfContents.map((item, i) => (
                    <li key={item}>
                      <a
                        href={`#section-${i + 1}`}
                        className="group flex gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-[#0B4DBA]"
                      >
                        <span className="font-mono text-xs font-black text-[#0B4DBA]/40 group-hover:text-[#0B4DBA]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter card */}
              <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50/80 to-white p-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#0B4DBA]" />
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0B4DBA]">
                    The Growth Report
                  </p>
                </div>
                <h3 className="mt-3 text-base font-black leading-tight text-[#020817]">
                  One growth idea, every Monday.
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Join 8,400+ founders and marketers reading short, sharp
                  strategy notes — no fluff.
                </p>
                <div className="mt-4 flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#0B4DBA]"
                  />
                  <button className="rounded-full bg-[#0B4DBA] px-4 py-2.5 text-xs font-black text-white transition hover:bg-[#020817]">
                    Join
                  </button>
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#020817] via-[#0B4DBA] to-[#020817] p-7 text-white">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
                <div className="relative">
                  <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur">
                    Free Strategy Call
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight">
                    Ready to build your growth system?
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Book a 30-minute call. Walk away with a clear plan — no
                    pitch, no pressure.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-black text-[#0B4DBA] shadow-lg transition hover:-translate-y-0.5"
                  >
                    Book a call{" "}
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}