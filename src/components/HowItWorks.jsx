import React from "react";

export default function HowItWorks() {
  const steps = [
    "Twilio receives the call & streams audio",
    "Deepgram transcribes speech in real time",
    "RAG retrieves relevant docs (FAISS + embeddings)",
    "LLM answers and TTS streams audio back",
  ];
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s}
              className="p-4 bg-white rounded-lg text-center transform transition duration-200 ease-out hover:scale-105 hover:shadow"
            >
              <div className="text-indigo-600 font-bold text-xl">{i + 1}</div>
              <div className="mt-2 text-sm text-gray-600">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
