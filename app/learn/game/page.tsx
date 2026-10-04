"use client";

import { useState } from "react";

const questions = [
  {
    prompt: "Join our VIP investment group. Guaranteed 5% daily. Only ₹5,000 required.",
    options: ["Guaranteed returns", "Urgency", "Personal payment", "VIP group", "All of the above"],
    answer: "All of the above",
  },
  {
    prompt: "Click here to install this unknown APK and receive profits in two days.",
    options: ["Fake APK", "Official app", "Long-term plan", "No warning signs"],
    answer: "Fake APK",
  },
];

export default function LearnGamePage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [streak, setStreak] = useState(0);

  const handleAnswer = (option: string) => {
    const isCorrect = option === questions[current].answer;
    if (isCorrect) {
      setScore((value) => value + 1);
      setStreak((value) => value + 1);
      setMessage("Correct — you spotted multiple scam warning signs.");
    } else {
      setStreak(0);
      setMessage("Not quite. Look for guaranteed returns, urgency, and pressure to send money.");
    }

    setTimeout(() => {
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
        setMessage("");
      } else {
        setMessage(`Game complete — your final score: ${score + (isCorrect ? 1 : 0)} / ${questions.length}`);
      }
    }, 800);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Scam spotting game</div>
          <div className="mt-1 text-2xl font-black text-slate-900">What warning signs do you see?</div>
        </div>
        <div className="flex gap-2 text-sm font-medium text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">Score: {score}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Streak: {streak}</span>
        </div>
      </div>

      {current < questions.length ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-lg font-medium text-slate-800">
            {questions[current].prompt}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {questions[current].options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleAnswer(option)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {option}
              </button>
            ))}
          </div>
          {message && <div className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{message}</div>}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center">
          <div className="text-3xl font-black text-slate-900">Game complete</div>
          <div className="mt-2 text-slate-600">You can now spot common scam patterns more confidently.</div>
        </div>
      )}
    </div>
  );
}
