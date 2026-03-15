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
        <h2 className="text-3xl font-bold">Demo</h2>
        <p className="mt-2 text-gray-600">
          A small browser-only simulation (beep) plus an example transcript of
          how a real call would sound.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={playMockCall}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg"
          >
            {playing ? "Playing..." : "Play demo"}
          </button>
          <div className="text-sm text-gray-600">
            No phone number required — the real system uses Twilio Media
            Streams.
          </div>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg shadow transform transition duration-180 ease-out hover:shadow-lg">
          <strong>Transcript preview</strong>
          <div className="mt-3 text-sm text-gray-700">
            <div>
              <span className="font-medium">Caller:</span> How can I make a
              payment?
            </div>
            <div className="mt-2">
              <span className="font-medium">Agent (AI):</span> You can make a
              payment using the mobile app or through the web portal.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
