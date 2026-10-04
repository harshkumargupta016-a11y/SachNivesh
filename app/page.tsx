"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Languages, Lock, ShieldCheck, Sparkles, UploadCloud, GraduationCap } from "lucide-react";
import LandingDemo from "@/components/landing-demo";

const translations: Record<string, {
  badge: string;
  heroTitle: string;
  heroSub: string;
  ctaCheck: string;
  ctaLearn: string;
  privacyTag: string;
  langTag: string;
  howTitle: string;
  steps: Array<{ title: string; description: string }>;
  reasons: Array<{ title: string; text: string }>;
}> = {
  en: {
    badge: "AI-Assisted Financial Literacy",
    heroTitle: "Think. Verify. Then Invest.",
    heroSub: "An AI-powered financial content literacy assistant that helps you verify claims, evaluate evidence, identify promotional content, and trace sources before you act on WhatsApp, YouTube, and Telegram.",
    ctaCheck: "Analyze Content",
    ctaLearn: "Spot Misinformation",
    privacyTag: "Privacy-first",
    langTag: "Multi-lingual Support",
    howTitle: "Central Content Analysis Pipeline",
    steps: [
      { title: "Share", description: "Paste a message, upload an image, or record a voice note." },
      { title: "Protect", description: "Sensitive details are masked before analysis automatically." },
      { title: "Analyze", description: "Rule-based engine & LLM isolate claims vs benchmarks." },
      { title: "Verify", description: "Explains uncertainty and directs users to official SEBI/RBI sources." },
    ],
    reasons: [
      { title: "Privacy First", text: "Sensitive information is masked before processing wherever possible." },
      { title: "Explainable", text: "Every warning shows the exact signal that triggered it." },
      { title: "AI Assisted", text: "AI explains suspicious patterns in simple, plain language." },
      { title: "Uncertainty Aware", text: "The system clearly explains what it cannot verify." },
      { title: "Official Verification", text: "Users are directed to official verification channels and government resources." },
      { title: "Bharat First", text: "Support for regional languages and voice interaction is built into the design." },
    ]
  },
  hi: {
    badge: "AI-संचालित वित्तीय सामग्री साक्षरता",
    heroTitle: "सोचें। जाँचें। फिर निवेश करें।",
    heroSub: "एक AI-संचालित वित्तीय सामग्री साक्षरता सहायक जो आपको व्हाट्सएप, यूट्यूब और टेलीग्राम की सामग्री पर कार्रवाई करने से पहले दावों की पुष्टि, साक्ष्यों का मूल्यांकन और प्रमोट की गई सामग्री को पहचानने में मदद करता है।",
    ctaCheck: "सामग्री का विश्लेषण करें",
    ctaLearn: "भ्रामक जानकारी पहचानना सीखें",
    privacyTag: "गोपनीयता-प्रथम",
    langTag: "बहुभाषी सहायता",
    howTitle: "मुख्य सामग्री विश्लेषण प्रक्रिया",
    steps: [
      { title: "साझा करें", description: "संदेश चिपकाएँ, स्क्रीनशॉट अपलोड करें या आवाज़ रिकॉर्ड करें।" },
      { title: "सुरक्षित करें", description: "विश्लेषण से पहले व्यक्तिगत विवरण स्वचालित रूप से छिपा दिए जाते हैं।" },
      { title: "विश्लेषण करें", description: "नियम और AI दावों का वास्तविक मानकों से मिलान करते हैं।" },
      { title: "पुष्टि करें", description: "अनिश्चितता समझाता है और आधिकारिक SEBI/RBI पोर्टल पर ले जाता है।" },
    ],
    reasons: [
      { title: "गोपनीयता प्रथम", text: "प्रसंस्करण से पहले व्यक्तिगत जानकारी सुरक्षित रूप से छिपा दी जाती है।" },
      { title: "स्पष्ट और पारदर्शी", text: "हर चेतावनी बताती है कि किस संकेत के कारण जोखिम flagged हुआ।" },
      { title: "AI सहायता", text: "AI आसान भाषा में संदिग्ध पैटर्न की व्याख्या करता है।" },
      { title: "अनिश्चितता जागरूकता", text: "सिस्टम स्पष्ट रूप से बताता है कि वह क्या सत्यापित नहीं कर सकता।" },
      { title: "आधिकारिक सत्यापन", text: "उपयोगकर्ताओं को आधिकारिक SEBI/RBI सत्यापन चैनलों पर निर्देशित किया जाता है।" },
      { title: "भारत प्रथम", text: "क्षेत्रीय भाषाओं और वॉयस इंटरैक्शन का समर्थन अंतर्निहित है।" },
    ]
  },
  hing: {
    badge: "AI-Assisted Financial Content Literacy",
    heroTitle: "Socho. Verify Karo. Phir Invest Karo.",
    heroSub: "Aapka AI financial content assistant. WhatsApp, Telegram aur YouTube waale stock tips, claims aur finfluencer posts ko act karne se pehle verify karein.",
    ctaCheck: "Analyze Content",
    ctaLearn: "Spot Misinformation",
    privacyTag: "Privacy-first",
    langTag: "Multi-lingual Support",
    howTitle: "Central Content Analysis Pipeline",
    steps: [
      { title: "Share", description: "Message paste karein, image upload karein ya voice note record karein." },
      { title: "Protect", description: "Personal details analyze hone se pehle mask ho jaate hain." },
      { title: "Analyze", description: "Rules aur AI claims ko actual market benchmarks se compare karte hain." },
      { title: "Verify", description: "Result uncertainty explain karta hai aur SEBI/RBI official site pe bhejta hai." },
    ],
    reasons: [
      { title: "Privacy First", text: "Sensitive details pehle hi mask ho jaate hain." },
      { title: "Explainable", text: "Har warning batati hai exact signal kyu aaya." },
      { title: "AI Assisted", text: "AI simple bhasha mein fraud patterns explain karta hai." },
      { title: "Uncertainty Aware", text: "Jo cheez verify nahi ho sakti, woh clearly bata di jaati hai." },
      { title: "Official Verification", text: "Users ko SEBI/RBI portals pe guide karta hai." },
      { title: "Bharat First", text: "Regional languages aur voice support built-in hai." },
    ]
  },
  mr: {
    badge: "AI-आधारित वित्तीय माहिती साक्षरता",
    heroTitle: "विचार करा. पडताळा. मगच गुंतवणूक करा.",
    heroSub: "एक AI-आधारित वित्तीय माहिती साक्षरता सहाय्यक जो तुम्हाला कोणत्याही आर्थिक सल्ल्यावर विश्वास ठेवण्यापूर्वी दाव्यांची पडताळणी करण्यास मदत करतो.",
    ctaCheck: "माहिती तपासा",
    ctaLearn: "फसवणूक ओळखायला शिका",
    privacyTag: "गोपनीयता-प्रथम",
    langTag: "बहुभाषिक पाठिंबा",
    howTitle: "मुख्य माहिती विश्लेषण प्रक्रिया",
    steps: [
      { title: "शेअर करा", description: "मेसेज पेस्ट करा, इमेज अपलोड करा किंवा व्हॉइस नोट रेकॉर्ड करा." },
      { title: "सुरक्षित करा", description: "वैयक्तिक तपशील आपोआप लपवले जातात." },
      { title: "विश्लेषण करा", description: "नियम आणि AI दाव्यांची बाजारातील मानकांशी तुलना करतात." },
      { title: "पडताळा", description: "अनिश्चितता स्पष्ट करतो आणि अधिकृत SEBI/RBI पोर्टलवर पाठवतो." },
    ],
    reasons: [
      { title: "गोपनीयता प्रथम", text: "माहिती सुरक्षितपणे लपवली जाते." },
      { title: "स्पष्ट आणि पारदर्शक", text: "प्रत्येक इशारा मूळ कारण दाखवतो." },
      { title: "AI मदत", text: "सोप्या भाषेत फसवणूक स्पष्ट करते." },
      { title: "अनिश्चितता जागरूकता", text: "काय पडताळता आले नाही ते सांगते." },
      { title: "अधिकृत पडताळणी", text: "शासकीय पोर्टलवर मार्गदर्शन करते." },
      { title: "भारत प्रथम", text: "प्रादेशिक भाषांचा पाठिंबा." },
    ]
  },
  gu: {
    badge: "AI-સંચાલિત નાણાકીય માહિતી સાક્ષરતા",
    heroTitle: "વિચારો. ચકાસો. પછી રોકાણ કરો.",
    heroSub: "એક AI-સંચાલિત નાણાકીય સામગ્રી સાક્ષરતા સહાયક જે તમને સોશિયલ મીડિયાના દાવોની ચકાસણી કરવા અને પુરાવાઓનું મૂલ્યાંકન કરવામાં મદદ કરે છે.",
    ctaCheck: "સામગ્રી તપાસો",
    ctaLearn: "ભ્રામક માહિતી ઓળખતા શીખો",
    privacyTag: "ગોપનીયતા-પ્રથમ",
    langTag: "બહુભાષી સપોર્ટ",
    howTitle: "મુખ્ય માહિતી પૃથક્કરણ પ્રક્રિયા",
    steps: [
      { title: "શેર કરો", description: "મેસેજ પેસ્ટ કરો અથવા ફોટો અપલોડ કરો." },
      { title: "સુરક્ષિત કરો", description: "ખાનગી વિગતો ઓટોમેટિક છુપાવી દેવાય છે." },
      { title: "વિશ્લેષણ કરો", description: "દાવો ચકાસવામાં આવે છે." },
      { title: "ચકાસો", description: "ઓફિશિયલ SEBI/RBI પોર્ટલ પર માર્ગદર્શન." },
    ],
    reasons: [
      { title: "ગોપનીયતા પ્રથમ", text: "વિગતો સુરક્ષિત રહે છે." },
      { title: "સ્પષ્ટ અને પારદર્શક", text: "દરેક ચેતવણી સ્પષ્ટ દર્શાવાય છે." },
      { title: "AI મદદ", text: "સરળ ભાષામાં સમજાવે છે." },
      { title: "અનિશ્ચિતતા જાગૃતિ", text: "અનવેરિફાઈડ બાબતો દર્શાવે છે." },
      { title: "ઓફિશિયલ વેરીફિકેશન", text: "સરકારી પોર્ટલ પર નિર્દેશિત કરે છે." },
      { title: "ભારત પ્રથમ", text: "પ્રાદેશિક ભાષાઓનો સપોર્ટ." },
    ]
  },
  ta: {
    badge: "செயற்கை நுண்ணறிவு நிதித் தகவல் சரிபார்ப்பு",
    heroTitle: "சிந்தியுங்கள். சரிபாருங்கள். முதலீடு செய்யுங்கள்.",
    heroSub: "செயற்கை நுண்ணறிவு அடிப்படையிலான நிதித் தகவல்கள் சரிபார்ப்பு உதவியாளர்.",
    ctaCheck: "தகவலைப் பகுப்பாய்வு செய்",
    ctaLearn: "போலி தகவலை கண்டறியவும்",
    privacyTag: "தனியுரிமை முதல்",
    langTag: "பல மொழி ஆதரவு",
    howTitle: "முக்கிய தகவல் பகுப்பாய்வு செயல்முறை",
    steps: [
      { title: "பகிர்", description: "செய்தியை ஒட்டவும் அல்லது படத்தைப் பதிவேற்றவும்." },
      { title: "பாதுகாக்கவும்", description: "தனிப்பட்ட தகவல்கள் தானாகவே மறைக்கப்படும்." },
      { title: "பகுப்பாய்வு", description: "விதிகள் மற்றும் AI தகவலைச் சரிபார்க்கும்." },
      { title: "சரிபார்", description: "அதிகாரப்பூர்வ SEBI/RBI தளத்திற்கு வழிகாட்டுகிறது." },
    ],
    reasons: [
      { title: "தனியுரிமை முதல்", text: "தகவல்கள் பாதுகாப்பாக மறைக்கப்படுகின்றன." },
      { title: "தெளிவான விளக்கம்", text: "ஒவ்வொரு எச்சரிக்கையும் தெளிவாகக் காட்டப்படும்." },
      { title: "AI உதவி", text: "எளிய மொழியில் விளக்குகிறது." },
      { title: "நிச்சயமற்ற நிலை", text: "சரிபார்க்க முடியாதவற்றைச் சுட்டிக்காட்டுகிறது." },
      { title: "அதிகாரப்பூர்வ சரிபார்ப்பு", text: "அரசு தளங்களுக்கு வழிகாட்டுகிறது." },
      { title: "பாரத் முதல்", text: "பிராந்திய மொழி ஆதரவு." },
    ]
  }
};

export default function Home() {
  const [lang, setLang] = useState("en");

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

  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#eff6ff_0%,#f8fafc_55%,#f8fafc_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              {t.badge}
            </div>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              {t.heroSub}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/check" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                {t.ctaCheck}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/learn" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50">
                <GraduationCap className="h-4 w-4" />
                {t.ctaLearn}
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> {t.privacyTag}</div>
              <div className="flex items-center gap-2"><Languages className="h-4 w-4 text-blue-600" /> {t.langTag}</div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <LandingDemo />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">How it works</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">{t.howTitle}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Why SachNivesh?</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Built for trust, clarity and safety</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.reasons.map((reason) => (
            <div key={reason.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                {reason.title.includes("Privacy") || reason.title.includes("गोपनीयता") ? <Lock className="h-5 w-5" /> : reason.title.includes("AI") ? <Sparkles className="h-5 w-5" /> : reason.title.includes("Bharat") || reason.title.includes("भारत") ? <Languages className="h-5 w-5" /> : reason.title.includes("Official") || reason.title.includes("आधिकारिक") ? <ShieldCheck className="h-5 w-5" /> : reason.title.includes("Explainable") || reason.title.includes("पारदर्शी") ? <BriefcaseBusiness className="h-5 w-5" /> : <UploadCloud className="h-5 w-5" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
