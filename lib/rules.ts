export type RiskLevel = "low" | "medium" | "high";

export type SignalSeverity = "low" | "medium" | "high";

export interface RuleSignal {
  signal_id: string;
  signal_name: string;
  severity: SignalSeverity;
  evidence: string;
  explanation: string;
}

export interface AnalysisResult {
  risk_level: RiskLevel;
  risk_score: number;
  signals: RuleSignal[];
  uncertainty: string;
  recommended_actions: string[];
  summary: string;
  masked_text: string;
}

const rules: Array<{
  id: string;
  name: string;
  severity: SignalSeverity;
  weight: number;
  patterns: RegExp[];
  explanation: string;
}> = [
  {
    id: "guaranteed_returns",
    name: "Guaranteed returns",
    severity: "high",
    weight: 30,
    patterns: [/guaranteed returns/i, /fixed returns/i, /risk-free/i, /100% profit/i, /assured profit/i, /guaranteed profit/i],
    explanation: "Promises of guaranteed or unusually high returns are a common scam warning sign.",
  },
  {
    id: "daily_returns",
    name: "Daily returns",
    severity: "high",
    weight: 25,
    patterns: [/5% daily/i, /10% every day/i, /daily income guaranteed/i, /daily returns/i],
    explanation: "Daily or unusually rapid profit claims often signal unrealistic investment promises.",
  },
  {
    id: "urgency",
    name: "Urgency",
    severity: "medium",
    weight: 15,
    patterns: [/limited time/i, /act now/i, /last chance/i, /only today/i, /immediate payment/i],
    explanation: "Pressure to act immediately can reduce careful verification and is often used in scams.",
  },
  {
    id: "vip_group",
    name: "VIP group",
    severity: "medium",
    weight: 10,
    patterns: [/vip group/i, /premium signals/i, /insider group/i, /secret group/i],
    explanation: "Exclusive investment groups can be a sign that a message is trying to create urgency and secrecy.",
  },
  {
    id: "personal_upi",
    name: "Personal payment request",
    severity: "high",
    weight: 20,
    patterns: [/upi id/i, /send payment to/i, /pay to this upi/i, /@upi/i, /personal upi/i],
    explanation: "Requests for direct payment to a personal or unfamiliar UPI ID are a common scam warning sign.",
  },
  {
    id: "fake_apk",
    name: "Fake APK",
    severity: "high",
    weight: 30,
    patterns: [/apk download/i, /download app/i, /unknown android application/i, /suspicious installation link/i],
    explanation: "Requests to install an unknown APK or app outside official channels can be risky.",
  },
  {
    id: "impersonation",
    name: "Impersonation",
    severity: "high",
    weight: 25,
    patterns: [/sebi officer/i, /rbi officer/i, /bank officer/i, /government officer/i, /investment expert/i],
    explanation: "Claims that a sender is a regulator, official, or expert without proof are a serious warning sign.",
  },
  {
    id: "advance_payment",
    name: "Advance payment",
    severity: "high",
    weight: 20,
    patterns: [/registration fee/i, /withdrawal fee/i, /tax before withdrawal/i, /account activation fee/i],
    explanation: "Requests for upfront fees or hidden charges before access or withdrawal are often suspicious.",
  },
  {
    id: "referral_pressure",
    name: "Referral pressure",
    severity: "medium",
    weight: 15,
    patterns: [/recruit friends/i, /referral bonus/i, /commission-based recruitment/i],
    explanation: "Pressure to recruit others or promise referral rewards can indicate a structured scam funnel.",
  },
  {
    id: "unrealistic_profit",
    name: "Unrealistic profit",
    severity: "high",
    weight: 20,
    patterns: [/double your money/i, /overnight profit/i, /weekly profit/i, /passive income/i],
    explanation: "Claims of fast or unrealistic profits are typical warning signs that need official verification.",
  },
];

export function analyzeTextContent(rawText: string): AnalysisResult {
  const text = rawText.trim();

  if (!text) {
    return {
      risk_level: "low",
      risk_score: 0,
      signals: [],
      uncertainty: "No message content was provided for analysis.",
      recommended_actions: ["Paste the suspicious message or upload the evidence before checking."],
      summary: "No message to review.",
      masked_text: "",
    };
  }

  const matchedSignals: RuleSignal[] = [];
  let score = 0;

  for (const rule of rules) {
    const evidence = rule.patterns.find((pattern) => pattern.test(text));
    if (!evidence) continue;

    const matchText = text.match(evidence)?.[0] ?? "suspicious pattern";
    score += rule.weight;
    matchedSignals.push({
      signal_id: rule.id,
      signal_name: rule.name,
      severity: rule.severity,
      evidence: matchText,
      explanation: rule.explanation,
    });
  }

  const risk_score = Math.min(score, 100);
  const risk_level: RiskLevel = risk_score >= 60 ? "high" : risk_score >= 25 ? "medium" : "low";

  return {
    risk_level,
    risk_score,
    signals: matchedSignals,
    uncertainty: "We cannot independently confirm whether the sender is connected to the claimed organization or whether the payment request is authentic.",
    recommended_actions: [
      "Pause before sending money.",
      "Verify the intermediary and payment details through an official source.",
      "If money has already been sent, contact your bank or payment provider immediately and report the incident.",
    ],
    summary:
      risk_level === "high"
        ? "Several common scam signals appear in this message, so a careful review is recommended."
        : risk_level === "medium"
          ? "Some risk cues are present, but the message may need additional verification."
          : "No obvious scam patterns were detected in the sample text, but verification is still important.",
    masked_text: text,
  };
}
