import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle } from "lucide-react";

// Kunal.dev assistant — local persona + optional API passthrough
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi — I'm Kunal.dev Assistant. Ask me about Kunal's skills, projects, availability, or contact." },
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const append = (msg) => setMessages((m) => [...m, msg]);

  // Simple rule-based responder using the persona provided
  const keywords = [
    "kunal",
    "skills",
    "projects",
    "hire",
    "contact",
    "email",
    "portfolio",
    "resume",
    "intern",
    "freelance",
    "mern",
    "ai",
    "health",
    "assistant",
    "erp",
    "weather",
    "cgpa",
    "backend",
    "frontend",
    "ui",
    "ux",
    "deployment",
    "vercel",
    "render",
    "mongodb",
    "node",
    "express",
    "react",
    "tailwind",
    "javascript",
    "html",
    "css",
    "github",
    "git",
  ];

  const isRelatedToKunal = (text) => {
    if (!text || typeof text !== "string") return false;
    const t = text.toLowerCase();
    if (t.includes("kunal")) return true;
    for (const k of keywords) if (t.includes(k)) return true;
    // common question starters that are likely general — block unless they mention Kunal
    if ((t.startsWith("who is") || t.startsWith("what is") || t.startsWith("tell me about") || t.startsWith("define")) && !t.includes("kunal")) return false;
    // default: require at least one keyword
    return false;
  };

  const localReply = (text) => {
    const t = text.toLowerCase();
    if (t.includes("who") || t.includes("kunal")) {
      return "Kunal Chakraborti is a BTech Computer Science student and a MERN-stack developer in progress. He builds real-world web projects and integrates AI features.";
    }
    if (t.includes("skills") || t.includes("stack") || t.includes("technologies")) {
      return "He knows HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Git/GitHub, Vercel, Render, REST APIs, and AI API integration.";
    }
    if (t.includes("projects") || t.includes("ai health") || t.includes("erp") || t.includes("weather")) {
      return "Main projects: AI Health Assistant; College ERP System; AI Weather Intelligence Platform. Focus: scalable features and AI integration.";
    }
    if (t.includes("hire") || t.includes("work") || t.includes("intern")) {
      return "Kunal is open to internships, freelance work, and collaborations. Contact via the contact section or email: kunalchakraborti5@gmail.com.";
    }
    if (t.includes("weak") || t.includes("improve") || t.includes("weakness")) {
      return "He is improving backend depth, production-level architecture, testing, and deployment workflows.";
    }
    if (t.includes("goal") || t.includes("future")) {
      return "Goal: become a strong full-stack developer and build useful AI-powered products.";
    }
    return "I can help with Kunal's skills, projects, hiring, or contact. Ask about his portfolio or email.";
  };

  // If an API endpoint is set, prefer it. Otherwise use localReply.
  const fetchReply = async (message) => {
    // Enforce strict persona rules: only handle queries related to Kunal
    if (!isRelatedToKunal(message)) {
      return "I’m here to help with Kunal’s portfolio. You can ask about his skills, projects, or experience.";
    }

    const api = process.env.REACT_APP_KUNAL_CHAT_API;
    if (api) {
      try {
        const res = await fetch(api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message }) });
        if (res.ok) {
          const data = await res.json();
          // prefer API reply only if it seems related; otherwise fallback to local
          const reply = data.reply || data.answer || "";
          if (isRelatedToKunal(reply)) return reply || localReply(message);
        }
      } catch (e) {
        console.warn("Chat API error:", e);
      }
    }
    return localReply(message);
  };

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    append({ from: "user", text });
    setInput("");
    append({ from: "bot", text: "..." , pending: true});
    const reply = await fetchReply(text);
    setMessages((m) => {
      const withoutPending = m.filter((msg) => !msg.pending);
      return [...withoutPending, { from: "bot", text: reply }];
    });
  };

  return (
    <div className={`chatbot fixed bottom-6 right-6 z-50 ${open ? "chatbot-open" : ""}`}>
      <div className="chatbot-toggle">
        <button aria-label="toggle chat" onClick={() => setOpen((s) => !s)} className="chat-toggle-btn">
          {open ? <X className="h-5 w-5 text-white" /> : <MessageCircle className="h-5 w-5 text-white" />}
        </button>
      </div>

      {open && (
        <div className="chatbot-box glass-card neon-border p-3 w-[320px] max-w-[92vw]">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-neon-cyan/10 grid place-items-center text-neon-cyan">KC</div>
              <div className="text-sm font-bold">Kunal.dev Assistant</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="close" className="text-slate-400 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="chatbot-list mt-3 max-h-64 overflow-y-auto px-1 py-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from === "bot" ? "bot" : "user"} mb-3`}> 
                <div className="inline-block rounded-xl p-2" style={{ background: m.from === "bot" ? "rgba(255,255,255,0.03)" : "rgba(0,242,255,0.06)", color: m.from === "bot" ? "#cfefff" : "#001219" }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="mt-2 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about Kunal..." className="flex-1 rounded-xl border border-white/10 bg-white/3 px-3 py-2 text-sm outline-none text-white placeholder-slate-400" />
            <button type="submit" className="btn-glow px-3 py-2 text-sm"><Send className="h-4 w-4" /></button>
          </form>

          <div className="mt-2 text-xs text-slate-400">Tip: This assistant uses a local persona. To enable remote AI replies, set `REACT_APP_KUNAL_CHAT_API` in your environment.</div>
        </div>
      )}
    </div>
  );
}
