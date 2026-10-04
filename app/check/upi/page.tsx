"use client";

import { useState } from "react";

export default function UpiCheckPage() {
  const [upi, setUpi] = useState("example@upi");
  const [result, setResult] = useState<string>("Check the payment context, confirm the account, and verify the intermediary through an official channel.");

  const verify = () => {
    const suspicious = /@upi|upi/i.test(upi) && !upi.includes("bank") && !upi.includes("paytm") && !upi.includes("hdfc");
    setResult(
      suspicious
        ? "This request should be treated with caution. Personal or unfamiliar UPI IDs can be used in scam flows, so the payment must be confirmed through an official source before proceeding."
        : "The UPI ID appears to be a normal-looking payment identifier, but this still requires official verification before any payment is sent.",
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">UPI check</div>
      <h1 className="text-4xl font-black tracking-tight text-slate-900">Enter a UPI ID</h1>
      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <label htmlFor="upi" className="block text-sm font-medium text-slate-700">UPI ID</label>
        <input
          id="upi"
          value={upi}
          onChange={(event) => setUpi(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="example@upi"
        />
        <button onClick={verify} className="mt-4 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Verify through official source</button>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">What we can detect</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Suspicious payment context</li>
          <li>Personal UPI request</li>
          <li>Mismatch with the claimed organization</li>
          <li>Risk signals in the surrounding message</li>
        </ul>
        <p className="mt-4 text-sm leading-6 text-slate-700">{result}</p>
      </div>
    </div>
  );
}
