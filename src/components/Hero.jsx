import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            AI Phone Support Agent that answers real customer calls
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Let customers dial a real number and talk naturally. The agent runs
            a real-time pipeline: speech-to-text, RAG retrieval, LLM reasoning,
            and text-to-speech.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#demo"
              className="bg-white text-indigo-700 font-semibold px-5 py-3 rounded-lg shadow transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
            >
              See call flow demo
            </a>
            <a
              href="#contribute"
              className="border border-white/30 px-5 py-3 rounded-lg transform transition duration-200 ease-out hover:scale-105"
            >
              Contribute
            </a>
          </div>
        </div>

        <div className="flex-1 bg-white/10 p-6 rounded-lg">
          <div className="bg-white rounded-lg p-4 text-gray-900">
            <strong>Call preview</strong>
            <div className="mt-3 text-sm text-gray-600">
              Incoming call — Caller: "How can I make a payment?"
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded transform transition duration-150 ease-out hover:scale-105">
                Answer with AI
              </button>
              <button className="px-4 py-2 border rounded transform transition duration-150 ease-out hover:scale-105">
                Forward to human
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
