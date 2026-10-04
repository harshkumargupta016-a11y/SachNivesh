import { AlertTriangle, Banknote, PhoneCall, ShieldCheck, FileText } from "lucide-react";

const steps = [
  {
    title: "Step 1",
    description: "Contact your bank or payment provider immediately and ask them to stop or flag the transaction.",
    icon: Banknote,
  },
  {
    title: "Step 2",
    description: "Call 1930 for cyber financial fraud assistance and follow the guidance of the helpline.",
    icon: PhoneCall,
  },
  {
    title: "Step 3",
    description: "Report the matter through the official cybercrime portal and preserve all available evidence.",
    icon: ShieldCheck,
  },
  {
    title: "Step 4",
    description: "Keep screenshots, transaction IDs, payment details, and chat records in one secure place.",
    icon: FileText,
  },
];

const evidenceChecklist = [
  "Screenshots",
  "UPI transaction ID",
  "Phone numbers",
  "URLs",
  "Chat messages",
  "Bank transaction details",
  "Social-media profiles",
];

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Emergency</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">Already sent money?</h1>
        <p className="mt-4 text-lg text-slate-600">Do not panic. Move quickly, preserve evidence, and contact the right official support channels as early as possible.</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {steps.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          Preserve evidence
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {evidenceChecklist.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
