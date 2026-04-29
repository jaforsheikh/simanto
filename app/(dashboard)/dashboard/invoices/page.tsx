const invoices = [
  { id: "#INV-001", amount: "$499", status: "Paid", date: "Mar 15, 2026" },
  { id: "#INV-002", amount: "$999", status: "Pending", date: "Apr 01, 2026" },
];

export default function InvoicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-black text-[#020817]">Invoices</h1>
      <p className="mt-2 text-slate-600">
        View billing history and payment status.
      </p>

      <div className="mt-8 grid gap-5">
        {invoices.map((inv) => (
          <div key={inv.id} className="rounded-[28px] bg-white p-6 shadow-xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-black text-[#020817]">{inv.id}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {inv.date}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <span className="text-2xl font-black text-[#020817]">
                  {inv.amount}
                </span>
                <span className="rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-black text-[#0B4DBA]">
                  {inv.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}