import React from "react";

const items = [
  {
    title: "Natural Speech",
    desc: "Conversational TTS with prosody and emotion control.",
  },
  {
    title: "Live Transcription",
    desc: "Real-time call transcripts and sentiment analysis.",
  },
  {
    title: "Intent Routing",
    desc: "Route calls to agents based on intent and confidence.",
  },
  {
    title: "Integrations",
    desc: "Connect to CRM, support tools and cloud telephony.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="mt-2 text-gray-600">
          Built for revenue and support teams who want to scale phone coverage.
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
