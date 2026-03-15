import React from "react";

export default function OpenSource() {
  return (
    <section id="contribute" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Open source & contribute</h2>
        <p className="mt-4 text-gray-600">
          Contributions are welcome. Help improve the call pipeline, add
          conversation memory, barge-in, streaming TTS, analytics,
          multi-language support, and more.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-lg transform transition duration-180 ease-out hover:shadow-lg">
            <h3 className="font-semibold">Repository</h3>
            <p className="mt-2 text-sm text-gray-600">
              Explore the code, open issues, and submit pull requests.
            </p>
            <a
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded transform transition duration-150 ease-out hover:scale-105"
              href="https://github.com/TJothiprakash/ai-voice-assitant"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg transform transition duration-180 ease-out hover:shadow-lg">
            <h3 className="font-semibold">How to contribute</h3>
            <ol className="mt-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Fork the repo and create a feature branch.</li>
              <li>Open a PR with tests or screenshots where relevant.</li>
              <li>Discuss big changes in an issue first.</li>
            </ol>
            <a
              className="mt-4 inline-block px-4 py-2 border rounded transform transition duration-150 ease-out hover:scale-105"
              href="https://github.com/TJothiprakash/ai-voice-assitant/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribution guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
