import Link from "next/link";
import { HelpCircle, PhoneCall, ShieldCheck, AlertTriangle, ChevronDown, MessageSquare, ExternalLink, FileText } from "lucide-react";

const faqs = [
  {
    q: "How do I check if a financial message or offer is a scam?",
    a: "Paste the message, upload a screenshot, or enter the UPI ID in our Interactive Studio. The system uses local rules and AI content literacy analysis to flag daily return promises, urgency pressure, unverified handles, and fake SEBI registration claims."
  },
  {
    q: "How do I change the display language in SachNivesh?",
    a: "Click on the Language selector dropdown in the top header navigation bar. You can switch between English, Hindi, Hinglish, Marathi, Gujarati, and Tamil at any time."
  },
  {
    q: "What should I do if I have already sent money to a fraudulent account?",
    a: "Act immediately! Call the National Cybercrime Helpline at 1930 within the first few hours to freeze the financial trail. Then file a formal complaint at cybercrime.gov.in and contact your bank's fraud reporting division."
  },
  {
    q: "How can I verify if an Investment Adviser or Research Analyst is SEBI-registered?",
    a: "Check the official SEBI Intermediary Directory at sebi.gov.in. Genuine registered advisers will collect fees using official intermediary bank accounts or UPI handles ending in '@valid'."
  },
  {
    q: "Is my personal data saved when I analyze a message?",
    a: "No. SachNivesh adheres strictly to DPDP Act privacy principles with zero persistence. Personal identifiers like phone numbers, account numbers, names, and personal UPI handles are anonymized directly inside your browser before processing."
  }
];

const complaintPortals = [
  {
    title: "National Cyber Crime Reporting Portal",
    description: "Official Government portal for reporting financial cyber fraud and online scams.",
    action: "Call 1930 / Visit cybercrime.gov.in",
    link: "https://cybercrime.gov.in",
    badge: "Emergency Helpline 1930",
    badgeColor: "bg-rose-100 text-rose-800"
  },
  {
    title: "SEBI SCORES Portal",
    description: "Lodge complaints against SEBI-registered entities, stockbrokers, advisory firms, and mutual funds.",
    action: "File Complaint on SCORES",
    link: "https://scores.sebi.gov.in",
    badge: "SEBI Complaints",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    title: "RBI Sachet Portal",
    description: "Report unauthorized deposit-taking, illegal illegal lending apps, and unregistered financial entities.",
    action: "File Complaint on Sachet",
    link: "https://sachet.rbi.org.in",
    badge: "RBI Complaints",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    title: "IRDAI Bima Bharosa Portal",
    description: "Lodge complaints regarding insurance scams, fake policy sales, and insurance mis-selling.",
    action: "File Insurance Complaint",
    link: "https://bimabharosa.irdai.gov.in",
    badge: "IRDAI Complaints",
    badgeColor: "bg-purple-100 text-purple-800"
  }
];

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          <HelpCircle className="h-3.5 w-3.5" />
          Help Centre &amp; Grievance Redressal
        </div>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          How can we help you today?
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Find answers to frequently asked questions about financial content literacy, language settings, and official complaint portals for financial fraud.
        </p>
      </div>

      {/* Emergency Helpline Banner */}
      <div className="mt-8 rounded-3xl border border-rose-200 bg-rose-50/80 p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-900 font-bold text-lg">
            <AlertTriangle className="h-5 w-5 text-rose-600" />
            Financial Fraud Helpline: 1930
          </div>
          <p className="mt-1 text-sm text-rose-800">
            If you have lost money to a scam, call 1930 immediately to initiate transaction freezing with the National Cyber Crime Reporting Portal.
          </p>
        </div>
        <a
          href="tel:1930"
          className="inline-flex items-center gap-2 shrink-0 rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-rose-700 transition"
        >
          <PhoneCall className="h-4 w-4" />
          Call 1930 Now
        </a>
      </div>

      {/* Frequently Asked Questions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <p className="mt-1 text-sm text-slate-600">Common queries regarding SachNivesh tools, language customization, and investor safety.</p>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-slate-900">
                <span className="text-base">{faq.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition duration-300 group-open:-rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Official Complain Centre */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">Official Complaint &amp; Grievance Centre</h2>
        <p className="mt-1 text-sm text-slate-600">Lodge official complaints against unauthorized entities, market fraud, or financial scams directly with regulators.</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {complaintPortals.map((portal) => (
            <div key={portal.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${portal.badgeColor}`}>
                    {portal.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{portal.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{portal.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={portal.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {portal.action}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Navigation Links */}
      <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-lg">Need to analyze a message right now?</h3>
          <p className="text-sm text-slate-300 mt-1">Use our interactive studio to check text messages, screenshots, voice notes, or payment handles.</p>
        </div>
        <Link
          href="/check"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition shrink-0"
        >
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          Open Check Studio
        </Link>
      </div>
    </div>
  );
}
