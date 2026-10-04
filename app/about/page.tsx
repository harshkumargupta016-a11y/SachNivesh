export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">About</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Why SachNivesh exists</h1>
        <p className="mt-4 text-lg text-slate-600">SachNivesh exists to help people pause before money moves. It is designed to reduce the chance that urgent investment messages, unusual payment requests, or suspicious offers are trusted without verification.</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Mission</h2>
          <p className="mt-3 text-sm text-slate-600">Help people pause before money moves.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Principles</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Privacy</li>
            <li>Transparency</li>
            <li>Explainability</li>
            <li>Accessibility</li>
            <li>Investor safety</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white">
        <p className="text-base text-slate-200">AI assists explanations, while deterministic safety rules drive risk signals. Official sources perform authoritative verification, and the user makes the final decision.</p>
      </div>
    </div>
  );
}
