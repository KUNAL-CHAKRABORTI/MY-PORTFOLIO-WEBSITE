import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const kunalProfile = `
You are Kunal.dev Assistant.

You know about Kunal Chakraborti:
- BTech Computer Science student
- MERN stack developer in progress
- Skills: HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Git, GitHub, Vercel, Render, REST API, AI API integration
- Projects: AI Health Assistant, College ERP System, AI Weather Intelligence Platform, portfolio website
- Goal: become a strong full-stack developer and build useful AI-powered products
- Email: kunalchakraborti5@gmail.com

Answer professionally like a portfolio assistant.
If someone asks unrelated things, politely bring the topic back to Kunal, his projects, skills, or contact.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await client.responses.create({
      model: "gpt-5.5-mini",
      input: [
        {
          role: "system",
          content: kunalProfile,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      reply: response.output_text,
    });
  } catch (error) {
  console.error("OPENAI ERROR:", error?.response?.data || error.message || error);

  res.status(500).json({
    reply: "Backend error. Check server terminal.",
  });
}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Chatbot API running on http://localhost:${PORT}`);
});
