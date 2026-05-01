import React, { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I’m Kunal.dev Assistant. Ask me about skills, projects, hiring, or contact.",
    },
  ]);

  const listRef = useRef(null);

  const quickQuestions = [
    "What are Kunal's skills?",
    "Show projects",
    "Is Kunal available for internship?",
  ];

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  const localReply = (text) => {
    const t = text.toLowerCase();

    if (t.includes("skill") || t.includes("stack")) {
      return "Kunal works with React, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB, GitHub, Vercel, Render, REST APIs, and AI API integration.";
    }

    if (t.includes("project") || t.includes("erp") || t.includes("health") || t.includes("weather")) {
      return "Kunal’s main projects are AI Health Assistant, College ERP System, and AI Weather Intelligence Platform.";
    }

    if (t.includes("hire") || t.includes("intern") || t.includes("contact") || t.includes("email")) {
      return "Yes, Kunal is open to internships, freelance work, and collaborations. Email: kunalchakraborti5@gmail.com";
    }

    if (t.includes("who") || t.includes("kunal")) {
      return "Kunal Chakraborti is a BTech Computer Science student and MERN stack developer in progress, focused on AI-powered web products.";
    }

    return "I can help you know about Kunal’s skills, projects, experience, availability, and contact details.";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = text.trim();

    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: localReply(userMessage) },
      ]);
      setTyping(false);
    }, 700);
  };

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.55)] transition hover:scale-110"
          aria-label="Open chatbot"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div className="fixed inset-x-3 bottom-4 z-50 mx-auto max-w-[410px] overflow-hidden rounded-[1.7rem] border border-cyan-300/25 bg-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.25)] sm:inset-auto sm:right-5 sm:bottom-5 sm:w-[350px]">
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-4 py-4">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                  <Bot className="h-6 w-6" />
                  <span className="absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-green-400" />
                </div>

                <div>
                  <h3 className="text-sm font-black text-white">
                    Kunal.dev Assistant
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-cyan-300">
                    <Sparkles className="h-3 w-3" /> Online now
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Close chatbot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={listRef}
           className="max-h-[42vh] min-h-[190px] space-y-3 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%)] px-4 py-3 text-sm sm:max-h-[230px]"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from === "bot" && (
                  <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-300 text-slate-950">
                    <Bot className="h-4 w-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 leading-6 shadow-sm ${
                    msg.from === "user"
                      ? "rounded-br-md bg-cyan-300 text-slate-950"
                      : "rounded-bl-md border border-white/10 bg-white/7 text-slate-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-cyan-300 text-slate-950">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:0.3s]" />
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-slate-950/95 px-3 py-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={handleSend} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Kunal..."
                className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
              />

              <button
                type="submit"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300 text-slate-950 transition hover:bg-white"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}