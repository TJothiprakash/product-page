import React, { useState } from "react";

export default function Demo() {
  const [playing, setPlaying] = useState(false);

  function playMockCall() {
    if (playing) return;
    setPlaying(true);
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 440;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.setValueAtTime(0, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.02);
    o.start();
    setTimeout(() => {
      g.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.02);
      o.stop();
      setPlaying(false);
      ctx.close();
    }, 1200);
  }

  return (
    <section id="demo" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Live Demo</h2>
        <p className="mt-2 text-gray-600">
          Hear a short simulated call to experience voice quality and timing.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={playMockCall}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
          >
            {playing ? "Playing..." : "Play demo"}
          </button>
          <div className="text-sm text-gray-600">
            No phone number required — this is a client-side demo.
          </div>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg shadow transform transition duration-180 ease-out hover:shadow-lg">
          <strong>Transcript preview</strong>
          <div className="mt-3 text-sm text-gray-700">
            <div>
              <span className="font-medium">Caller:</span> Hi, I'd like to learn
              about your enterprise plan.
            </div>
            <div className="mt-2">
              <span className="font-medium">Agent (AI):</span> Absolutely — do
              you have a preferred integration?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
