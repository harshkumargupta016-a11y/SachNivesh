import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">404</div>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">This page may not be available right now. Please return to the main checker or homepage.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </div>
  );
}
