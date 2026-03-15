import React from "react";

export default function TechStack() {
  const stack = [
    "Python + FastAPI",
    "AsyncIO + WebSockets",
    "Twilio Voice API + Media Streams",
    "Deepgram (Speech-to-Text)",
    "Groq API (LLaMA 3.1)",
    "Sentence Transformers (Embeddings)",
    "FAISS Vector Database (RAG)",
    "pyttsx3 + FFmpeg (Text-to-Speech)",
    "ngrok + dotenv",
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Tech stack</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {stack.map((s) => (
            <span
              key={s}
              className="px-3 py-2 bg-white rounded shadow-sm text-sm transform transition duration-150 ease-out hover:scale-105"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
