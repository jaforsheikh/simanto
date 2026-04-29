import {
  FiBarChart2,
  FiBriefcase,
  FiCreditCard,
  FiMessageCircle,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const stats = [
  { label: "Active Projects", value: "04", icon: FiBriefcase },
  { label: "Monthly Leads", value: "1.2K", icon: FiUsers },
  { label: "Growth Rate", value: "+38%", icon: FiTrendingUp },
  { label: "Pending Invoices", value: "02", icon: FiCreditCard },
];

const projects = [
  { name: "SEO Growth Campaign", status: "In Progress", progress: 72 },
  { name: "Website Redesign", status: "Review", progress: 88 },
  { name: "Reputation Management", status: "Active", progress: 54 },
];

export default function CustomerDashboardPage() {
  return (
    <div>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0B4DBA] shadow-sm">
            Customer Dashboard
          </span>

          <h1 className="mt-4 text-4xl font-black text-[#020817]">
            Welcome back, Client 👋
          </h1>

          <p className="mt-2 text-slate-600">
            Track your projects, reports, leads, messages, and invoices.
          </p>
        </div>

        <button className="rounded-full bg-[#0B4DBA] px-6 py-3 font-bold text-white shadow-xl">
          Request Support
        </button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-[28px] bg-white p-6 shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF4FF] text-2xl text-[#0B4DBA]">
                <Icon />
              </div>

              <h3 className="mt-6 text-4xl font-black text-[#020817]">
                {item.value}
              </h3>

              <p className="mt-1 font-bold text-slate-500">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[30px] bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-[#020817]">
              Project Progress
            </h2>
            <FiBarChart2 className="text-2xl text-[#0B4DBA]" />
          </div>

          <div className="mt-6 grid gap-5">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="mb-2 flex justify-between gap-4">
                  <div>
                    <h3 className="font-black text-[#020817]">
                      {project.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500">
                      {project.status}
                    </p>
                  </div>

                  <span className="font-black text-[#0B4DBA]">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#EEF4FF]">
                  <div
                    className="h-full rounded-full bg-[#0B4DBA]"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] bg-[#020817] p-6 text-white shadow-xl">
          <FiMessageCircle className="text-4xl text-blue-300" />

          <h2 className="mt-6 text-2xl font-black">Latest Message</h2>

          <p className="mt-4 leading-8 text-white/65">
            Your SEO monthly report is ready. Please review the updated traffic,
            ranking, and lead performance summary.
          </p>

          <button className="mt-6 rounded-full bg-[#0B4DBA] px-6 py-3 font-bold text-white">
            View Message
          </button>
        </div>
      </div>
    </div>
  );
}