import React, { useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import HowItWorks from "./components/HowItWorks";
import TechStack from "./components/TechStack";
import Problem from "./components/Problem";
import OpenSource from "./components/OpenSource";
import CTA from "./components/CTA";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative max-w-6xl mx-auto w-full p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">VoiceAI</div>
        </div>

        <nav className="space-x-6 hidden md:flex">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition duration-150 ease-out"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-gray-600 hover:text-gray-900 transition duration-150 ease-out"
          >
            Demo
          </a>
          <a
            href="#contribute"
            className="text-gray-600 hover:text-gray-900 transition duration-150 ease-out"
          >
            Contribute
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-gray-100"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="absolute left-0 right-0 top-full bg-white shadow-md md:hidden">
            <div className="max-w-6xl mx-auto p-4 flex flex-col">
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-700 transition duration-150 ease-out"
              >
                Features
              </a>
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-700 transition duration-150 ease-out"
              >
                Demo
              </a>
              <a
                href="#contribute"
                onClick={() => setOpen(false)}
                className="py-2 text-gray-700 transition duration-150 ease-out"
              >
                Contribute
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Hero />
        <Features />
        <Demo />
        <HowItWorks />
        <TechStack />
        <Problem />
        <OpenSource />
        <CTA />
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VoiceAI — AI Voice Agent for phone calls
        </div>
      </footer>
    </div>
  );
}
