const projects = [
  { name: "SEO Growth Campaign", status: "In Progress", progress: 72 },
  { name: "Website Redesign", status: "Review", progress: 88 },
  { name: "Reputation Management", status: "Active", progress: 54 },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black text-[#020817]">My Projects</h1>
      <p className="mt-2 text-slate-600">
        Track all active marketing projects and progress.
      </p>

      <div className="mt-8 grid gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-xl"
          >
            <div className="mb-4 flex justify-between gap-4">
              <div>
                <h3 className="text-xl font-black text-[#020817]">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {p.status}
                </p>
              </div>

              <span className="font-black text-[#0B4DBA]">{p.progress}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-[#EEF4FF]">
              <div
                className="h-full rounded-full bg-[#0B4DBA]"
                style={{ width: `${p.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}