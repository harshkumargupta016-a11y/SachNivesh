import Link from "next/link";
import type { ReactNode } from "react";
import { ShieldCheck, AlertTriangle, Menu } from "lucide-react";
import Chatbot from "@/components/chatbot";

const navItems = [
  { href: "/check", label: "Check" },
  { href: "/learn", label: "Learn" },
  { href: "/verify", label: "Safety Guide" },
  { href: "/report", label: "Reports" },
  { href: "/about", label: "About" },
];

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">SachNivesh</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Pause. Verify. Protect.</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 md:inline-flex"
            >
              English
            </button>
            <button
              type="button"
              className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 md:inline-flex"
            >
              Help
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold">SachNivesh</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Pause. Verify. Protect.</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-600">
              Educational investor-safety guidance to help people pause before money moves.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/check">Check</Link></li>
              <li><Link href="/verify">Verify</Link></li>
              <li><Link href="/learn">Learn</Link></li>
              <li><Link href="/report">Report</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/accessibility">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Emergency</h3>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-900">
              <AlertTriangle className="h-4 w-4" />
              1930
            </div>
            <p className="mt-2 text-xs text-slate-500">SachNivesh is an educational investor-safety platform, not investment advice.</p>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}
