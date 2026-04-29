import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  FiBarChart2,
  FiBriefcase,
  FiCreditCard,
  FiHome,
  FiMessageCircle,
  FiSettings,
} from "react-icons/fi";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/dashboard/LogoutButton";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: FiHome },
  { label: "Projects", href: "/dashboard/projects", icon: FiBriefcase },
  { label: "Reports", href: "/dashboard/reports", icon: FiBarChart2 },
  { label: "Messages", href: "/dashboard/messages", icon: FiMessageCircle },
  { label: "Invoices", href: "/dashboard/invoices", icon: FiCreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#F4F8FF]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-slate-200 bg-white p-6 lg:flex lg:flex-col">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4DBA] text-xl font-black text-white">
              S
            </span>
            <span className="text-2xl font-black text-[#020817]">
              Si<span className="text-[#0B4DBA]">manto</span>
            </span>
          </Link>

          <nav className="mt-10 grid gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 font-bold text-slate-600 transition hover:bg-[#EEF4FF] hover:text-[#0B4DBA]"
                >
                  <Icon />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-10">
            <LogoutButton />
          </div>
        </aside>

        <section className="p-4 md:p-8">
          <div className="mx-auto max-w-[1200px]">{children}</div>
        </section>
      </div>
    </main>
  );
}