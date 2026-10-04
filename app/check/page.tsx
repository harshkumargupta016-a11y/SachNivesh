"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Sparkles, Trash2, ListChecks } from "lucide-react";
import RiskCard from "@/components/risk-card";

const translations: Record<string, {
  checkerTag: string;
  title: string;
  privacy: string;
  placeholder: string;
  analyzeBtn: string;
  analyzing: string;
  clearBtn: string;
  showMasked: string;
  hideMasked: string;
  piiNote: string;
  maskedPreview: string;
}> = {
  en: {
    checkerTag: "Checker",
    title: "What would you like to verify?",
    privacy: "Privacy-first review",
    placeholder: "Paste a WhatsApp message, Telegram tip, YouTube post or SMS here...",
    analyzeBtn: "Analyze Content",
    analyzing: "Analyzing...",
    clearBtn: "Clear",
    showMasked: "Show masked content",
    hideMasked: "Hide masked content",
    piiNote: "Your content is processed with data minimization in mind. Sensitive personal information is anonymized before external processing.",
    maskedPreview: "Masked preview"
  },
  hi: {
    checkerTag: "सामग्री की जाँच",
    title: "आप किस सामग्री की पुष्टि करना चाहते हैं?",
    privacy: "गोपनीयता-प्रथम समीक्षा",
    placeholder: "यहाँ व्हाट्सएप संदेश, टेलीग्राम टिप, यूट्यूब पोस्ट या एसएमएस चिपकाएँ...",
    analyzeBtn: "सामग्री का विश्लेषण करें",
    analyzing: "विश्लेषण हो रहा है...",
    clearBtn: "साफ करें",
    showMasked: "मास्क की गई सामग्री देखें",
    hideMasked: "छिपाएँ",
    piiNote: "आपकी जानकारी गोपनीयता सुरक्षा के साथ प्रोसेस की जाती है। नाम, फोन नंबर और बैंक विवरण स्वचालित रूप से छिपा दिए जाते हैं।",
    maskedPreview: "सुरक्षित पूर्वावलोकन"
  },
  hing: {
    checkerTag: "Checker",
    title: "Aap kya verify karna chahte hain?",
    privacy: "Privacy-first review",
    placeholder: "WhatsApp message, Telegram tip, YouTube post ya SMS yahan paste karein...",
    analyzeBtn: "Content Analyze Karein",
    analyzing: "Analyzing...",
    clearBtn: "Clear",
    showMasked: "Show masked content",
    hideMasked: "Hide",
    piiNote: "Aapka data privacy ke saath process hota hai. Phone, UPI aur names pehle hi anonymize ho jaate hain.",
    maskedPreview: "Masked Preview"
  },
  mr: {
    checkerTag: "तपासणी",
    title: "तुम्हाला कशाची पडताळणी करायची आहे?",
    privacy: "गोपनीयता-प्रथम पुनरावलोकन",
    placeholder: "येथे व्हॉट्सॲप मेसेज, टेलिग्राम टीप किंवा एसएमएस पेस्ट करा...",
    analyzeBtn: "माहिती तपासा",
    analyzing: "तपासत आहे...",
    clearBtn: "स्पष्ट करा",
    showMasked: "मास्क केलेली माहिती पहा",
    hideMasked: "लपवा",
    piiNote: "तुमचा डेटा सुरक्षितपणे प्रोसेस केला जातो.",
    maskedPreview: "सुरक्षित पूर्वावलोकन"
  },
  gu: {
    checkerTag: "ચકાસણી",
    title: "તમે શું ચકાસવા માંગો છો?",
    privacy: "ગોપનીયતા-પ્રથમ સમીક્ષા",
    placeholder: "અહીં વોટ્સએપ મેસેજ અથવા ટેલિગ્રામ ટીપ પેસ્ટ કરો...",
    analyzeBtn: "સામગ્રી તપાસો",
    analyzing: "વિશ્લેષણ થઈ રહ્યું છે...",
    clearBtn: "સાફ કરો",
    showMasked: "માસ્ક કરેલી સામગ્રી જુઓ",
    hideMasked: "છુપાવો",
    piiNote: "તમારો ડેટા સિક્યોરિટી સાથે પ્રોસેસ થાય છે.",
    maskedPreview: "સુરક્ષિત પૂર્વાવલોકન"
  },
  ta: {
    checkerTag: "சரிபார்ப்பு",
    title: "எதைச் சரிபார்க்க விரும்புகிறீர்கள்?",
    privacy: "தனியுரிமை முதல் மதிப்பாய்வு",
    placeholder: "வாட்ஸ்அப் அல்லது டெலிகிராம் செய்தியை இங்கே ஒட்டவும்...",
    analyzeBtn: "பகுப்பாய்வு செய்",
    analyzing: "பகுப்பாய்வு செய்கிறது...",
    clearBtn: "அழி",
    showMasked: "மறைக்கப்பட்ட தகவலைப் பார்",
    hideMasked: "மறை",
    piiNote: "உங்கள் தகவல் பாதுகாப்பாக செயலாக்கப்படுகிறது.",
    maskedPreview: "பாதுகாப்பான முன்னோட்டம்"
  }
};

export default function CheckPage() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState("");
  const [showMasked, setShowMasked] = useState(true);
  const [result, setResult] = useState<null | {
    risk_level: "low" | "medium" | "high";
    risk_score: number;
    summary: string;
    signals: Array<{ signal_name: string; explanation: string; severity: string; evidence: string }>;
    uncertainty: string;
    recommended_actions: string[];
  }>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("sn_lang");
    if (saved) setLang(saved);

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ lang: string }>;
      if (customEvent.detail?.lang) {
        setLang(customEvent.detail.lang);
      }
    };

    window.addEventListener("sn-language-change", handleLangChange);
    return () => window.removeEventListener("sn-language-change", handleLangChange);
  }, []);

  const t = translations[lang] || translations.en;

  const analyze = async () => {
    if (!text.trim()) {
      setResult({
        risk_level: "low",
        risk_score: 0,
        summary: "Please enter the message you want to review.",
        signals: [],
        uncertainty: "No content was provided for review.",
        recommended_actions: ["Paste the suspicious message before checking."],
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, lang }),
      });

      const data = await response.json();
      setResult({
        risk_level: data.risk_level,
        risk_score: data.risk_score,
        summary: data.summary,
        signals: data.signals,
        uncertainty: data.uncertainty,
        recommended_actions: data.recommended_actions,
      });
    } catch {
      setResult({
        risk_level: "medium",
        risk_score: 45,
        summary: "The analysis service is unavailable. Basic safety guidance is still recommended.",
        signals: [{ signal_name: "Service unavailable", explanation: "We could not complete the live check, so use official verification before sending money.", severity: "medium", evidence: "System error" }],
        uncertainty: "We could not independently confirm the risk level due to a temporary issue.",
        recommended_actions: ["Use official verification channels before acting.", "Avoid urgent payments until the identity is confirmed."],
      });
    } finally {
      setLoading(false);
    }
  };

  const maskedValue = text
    .replace(/\b[A-Z]{5}[0-9]{4}[A-Z]\b/g, "[PAN REDACTED]")
    .replace(/\b\d{12}\b/g, "[AADHAAR REDACTED]")
    .replace(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g, "[EMAIL REDACTED]")
    .replace(/\b(?:\+?91[-\s]?)?(?:\d{10})\b/g, "[PHONE REDACTED]")
    .replace(/\b[a-zA-Z0-9._-]+@upi\b/g, "[UPI REDACTED]")
    .replace(/https?:\/\/[^\s]+/gi, "[URL REDACTED]");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">{t.checkerTag}</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">{t.title}</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
          {t.privacy}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <label className="block text-sm font-medium text-slate-700" htmlFor="message">
            {t.title}
          </label>
          <textarea
            id="message"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder={t.placeholder}
            className="mt-2 min-h-52 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={analyze}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? t.analyzing : t.analyzeBtn}
            </button>
            <button type="button" onClick={() => setText("")} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              <Trash2 className="h-4 w-4" />
              {t.clearBtn}
            </button>
            <button type="button" onClick={() => setShowMasked((current) => !current)} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              {showMasked ? t.hideMasked : t.showMasked}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
            {t.piiNote}
          </div>

          {text && (
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                <span>{t.maskedPreview}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">PII-safe</span>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                {showMasked ? maskedValue : text}
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              {t.checkerTag} Signals
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Phone numbers &amp; UPI IDs</li>
              <li>• Guaranteed daily returns</li>
              <li>• Urgent payment calls</li>
              <li>• APK / External links</li>
              <li>• Unproven SEBI claims</li>
            </ul>
          </div>

          {result && (
            <RiskCard
              summary={result.summary}
              score={result.risk_score}
              level={result.risk_level}
              signals={result.signals}
              uncertainty={result.uncertainty}
              actions={result.recommended_actions}
            />
          )}
        </div>
      </div>
    </div>
  );
}
