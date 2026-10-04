"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";

const quickPrompts = [
  "Is guaranteed return suspicious?",
  "I already transferred money.",
  "How do I verify an adviser?",
  "Someone added me to a VIP group.",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "I can help explain scam warning signs and steps to verify suspicious investment claims.",
    },
  ]);

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", text };
    setMessages((current) => [...current, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      setMessages((current) => [...current, { role: "bot", text: data.answer ?? "I cannot answer that confidently right now." }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "bot",
          text: "I can't reach the live assistant right now, but the safest step is to verify the claim through an official source before sending money.",
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <div>
                  <div className="text-sm font-semibold">SachBot</div>
                  <div className="text-[10px] text-slate-300">Investor Safety Assistant</div>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-slate-800">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-3">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-700 transition hover:border-slate-300"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="max-h-72 space-y-3 overflow-y-auto bg-white p-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    message.role === "user" ? "ml-auto bg-slate-900 text-white" : "bg-slate-100 text-slate-800"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask SachBot..."
                  className="flex-1 border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button type="button" onClick={() => sendMessage()} className="rounded-lg bg-slate-900 p-2 text-white">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
      >
        <Sparkles className="h-4 w-4" />
        Ask SachBot
      </button>
    </div>
  );
}
