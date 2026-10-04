import Link from "next/link";
import { ArrowUpRight, ShieldCheck, BadgeCheck, FileSearch, Lock } from "lucide-react";

const resources = [
  { title: "SEBI Check", description: "Verify investment advisers and intermediaries using official SEBI resources.", href: "https://www.sebi.gov.in/" },
  { title: "SEBI Investor", description: "Learn investor rights, protections and complaint procedures.", href: "https://www.sebi.gov.in/sebiweb/" },
  { title: "SEBI Intermediary List", description: "Check whether a person or entity is registered before trusting a claim.", href: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes" },
  { title: "Cyber Crime", description: "Report suspected cyber fraud and financial crime.", href: "https://cybercrime.gov.in/" },
];

export default function VerifyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Official verification</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Verify Before You Trust</h1>
        <p className="mt-4 text-lg text-slate-600">Always confirm claims using an official source before transferring money or trusting a person claiming to be a regulator, adviser or payment intermediary.</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
          >
            <div className="inline-flex rounded-xl bg-blue-50 p-2 text-blue-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">{resource.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{resource.description}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              Open official source
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
            <BadgeCheck className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">SEBI Investor</h3>
          <p className="mt-2 text-sm text-slate-600">Look for regulatory registration details and official investor guidance before trusting an adviser or trading opportunity.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
            <FileSearch className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">Intermediary verification</h3>
          <p className="mt-2 text-sm text-slate-600">Confirm that a person or firm is actually registered before making a payment or sending documents.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700">
            <Lock className="h-5 w-5" />
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">Emergency support</h3>
          <p className="mt-2 text-sm text-slate-600">If a scam is already in progress, call the cyber financial fraud helpline at 1930 and report the incident promptly.</p>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-900 px-5 py-6 text-white sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Important</p>
        <p className="mt-3 text-base text-slate-200">UPI verification must ultimately be performed using an official source. A message that looks urgent or persuasive is not sufficient proof that a payment request is genuine.</p>
      </div>

      <div className="mt-8 text-sm text-slate-600">
        <Link href="/check" className="font-semibold text-slate-900 underline underline-offset-4">Return to the risk checker</Link>
      </div>
    </div>
  );
}
