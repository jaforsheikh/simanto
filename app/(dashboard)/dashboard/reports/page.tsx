const reports = [
  { title: "SEO Report - March", status: "Completed", date: "Mar 30, 2026" },
  { title: "Ads Campaign Report", status: "Pending", date: "Apr 02, 2026" },
  { title: "Traffic Analysis", status: "Completed", date: "Apr 10, 2026" },
];

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black text-[#020817]">Reports</h1>
      <p className="mt-2 text-slate-600">
        View your monthly marketing reports and performance summary.
      </p>

      <div className="mt-8 grid gap-5">
        {reports.map((r) => (
          <div key={r.title} className="rounded-[28px] bg-white p-6 shadow-xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-black text-[#020817]">
                  {r.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {r.date}
                </p>
              </div>

              <span className="w-fit rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-black text-[#0B4DBA]">
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}