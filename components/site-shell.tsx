"use client";

import Link from "next/link";
import { useState, useEffect, type ReactNode } from "react";
import { ShieldCheck, AlertTriangle, Menu, Globe, HelpCircle, X } from "lucide-react";
import Chatbot from "@/components/chatbot";

const navItems = [
  { href: "/check", label: "Check" },
  { href: "/learn", label: "Learn" },
  { href: "/verify", label: "Safety Guide" },
  { href: "/report", label: "Reports" },
  { href: "/help", label: "Help Centre" },
  { href: "/about", label: "About" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "hing", label: "Hinglish" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
];

export default function SiteShell({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState("en");
  const [showLangModal, setShowLangModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sn_lang");
    if (saved) {
      setCurrentLang(saved);
      if (typeof (window as unknown as { setLang?: (l: string) => void }).setLang === "function") {
        (window as unknown as { setLang: (l: string) => void }).setLang(saved);
      }
    }
  }, []);

  const handleLanguageChange = (code: string) => {
    setCurrentLang(code);
    localStorage.setItem("sn_lang", code);
    setShowLangModal(false);
    // Sync with index.html setLang if present on page
    if (typeof (window as unknown as { setLang?: (l: string) => void }).setLang === "function") {
      (window as unknown as { setLang: (l: string) => void }).setLang(code);
    }
    window.dispatchEvent(new CustomEvent("sn-language-change", { detail: { lang: code } }));
  };

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

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Trigger */}
            <button
              type="button"
              id="langBtn"
              onClick={() => setShowLangModal(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Globe className="h-3.5 w-3.5 text-blue-600" />
              <span>{languages.find((l) => l.code === currentLang)?.label || "English"}</span>
            </button>

            {/* Help Centre Link */}
            <Link
              href="/help"
              id="helpBtn"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              <HelpCircle className="h-3.5 w-3.5 text-slate-500" />
              Help Centre
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden space-y-3">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowLangModal(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700"
              >
                <Globe className="h-4 w-4" /> Change Language
              </button>
              <Link
                href="/help"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700"
              >
                <HelpCircle className="h-4 w-4" /> Help Centre
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Language Change Modal */}
      {showLangModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Globe className="h-5 w-5 text-blue-600" />
                Select Display Language
              </div>
              <button
                type="button"
                onClick={() => setShowLangModal(false)}
                className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    currentLang === lang.code
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{lang.label}</span>
                  {currentLang === lang.code && <ShieldCheck className="h-4 w-4" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Support &amp; Help</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/help">Help Centre</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
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
