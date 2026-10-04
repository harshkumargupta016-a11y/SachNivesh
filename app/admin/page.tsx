const stats = [
  { label: "Total analyses", value: "18.4k" },
  { label: "Text analyses", value: "9.2k" },
  { label: "Image analyses", value: "3.8k" },
  { label: "Voice analyses", value: "1.6k" },
  { label: "High-concern percentage", value: "23%" },
  { label: "Most common signal", value: "Guaranteed returns" },
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Admin dashboard</div>
      <h1 className="text-4xl font-black tracking-tight text-slate-900">Operational overview</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm text-slate-500">{stat.label}</div>
            <div className="mt-2 text-3xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
