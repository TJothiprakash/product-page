import React from "react";

const items = [
  {
    title: "Real phone calls",
    desc: "Connect a Twilio phone number and handle real customer conversations.",
  },
  {
    title: "Real-time transcription",
    desc: "Deepgram streaming speech-to-text turns audio into text instantly.",
  },
  {
    title: "RAG knowledge retrieval",
    desc: "Embeddings + FAISS retrieve relevant docs before the LLM answers.",
  },
  {
    title: "LLM + voice replies",
    desc: "Groq-hosted LLaMA generates responses, then TTS speaks back to the caller.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="mt-2 text-gray-600">
          A complete end-to-end pipeline: telephony → STT → RAG → LLM → TTS.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="p-6 bg-white rounded-lg shadow-sm transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
            >
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
