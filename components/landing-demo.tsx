"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, ArrowRight } from "lucide-react";

export default function LandingDemo() {
  return (
    <div className="relative mx-auto max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
      >
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">Suspicious message</div>
          <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
            Demo
          </span>
        </div>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          🔥 Guaranteed 5% daily returns! Limited VIP group. Pay ₹10,000 today. Only 20 seats remaining. Send payment to this UPI ID.
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="relative -mt-8 ml-auto w-[84%] rounded-3xl border border-rose-200 bg-rose-50 p-4 shadow-lg"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-rose-700">
          <AlertTriangle className="h-4 w-4" />
          HIGH CONCERN
        </div>
        <div className="mt-3 space-y-2 text-sm text-slate-700">
          <div>• Guaranteed returns</div>
          <div>• Urgency</div>
          <div>• VIP group</div>
          <div>• Personal UPI payment request</div>
        </div>
        <div className="mt-4 rounded-2xl border border-rose-200 bg-white p-3 text-sm text-slate-600">
          AI explanation: This message contains multiple common scam signals. This does not prove the message is fraudulent. Verify using an official source before sending money.
        </div>
      </motion.div>

      <motion.div
        className="mt-8 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          Rule engine + AI explanation
          <ArrowRight className="h-4 w-4" />
        </div>
      </motion.div>
    </div>
  );
}
