export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-black text-[#020817]">Settings</h1>
      <p className="mt-2 text-slate-600">
        Manage your account profile and contact information.
      </p>

      <div className="mt-8 max-w-2xl rounded-[30px] bg-white p-6 shadow-xl">
        <form className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#020817]">
              Name
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#020817]">
              Email
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-4 py-4 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="button"
            className="w-fit rounded-full bg-[#0B4DBA] px-7 py-4 font-black text-white"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}