const messages = [
  {
    from: "Simanto Team",
    text: "Your SEO monthly report is ready for review.",
    time: "2 hours ago",
  },
  {
    from: "Support",
    text: "We updated your website homepage section.",
    time: "Yesterday",
  },
];

export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-black text-[#020817]">Messages</h1>
      <p className="mt-2 text-slate-600">
        Read project updates and support messages.
      </p>

      <div className="mt-8 grid gap-5">
        {messages.map((m) => (
          <div key={m.text} className="rounded-[28px] bg-white p-6 shadow-xl">
            <h3 className="text-xl font-black text-[#020817]">{m.from}</h3>
            <p className="mt-3 leading-8 text-slate-600">{m.text}</p>
            <p className="mt-4 text-sm font-semibold text-slate-400">
              {m.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}