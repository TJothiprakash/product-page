import React from "react";

export default function CTA() {
  return (
    <section className="py-12 bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            Ready to build your AI phone agent?
          </h3>
          <p className="mt-1 text-sm opacity-90">
            Clone it, plug in Twilio + Deepgram + Groq keys, and run your first
            call.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <a className="bg-white text-indigo-700 px-5 py-3 rounded font-semibold transform transition duration-180 ease-out hover:scale-105 hover:shadow-lg">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
