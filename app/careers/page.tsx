"use client";

import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";

const inputClass =
  "rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400";

export default function CareersPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-5">
          <Link href="/" className="font-serif text-xl tracking-wide text-gray-900">
            Robles &amp; Co
          </Link>
        </div>
      </div>

      <section className="w-full px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-xl">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            ← Back to home
          </Link>

          <h1 className="mt-6 text-center font-serif text-3xl text-gray-900 sm:text-4xl">
            Join Robles &amp; Co
          </h1>

          <p className="mt-5 text-center text-base text-gray-600 sm:text-lg">
            We work with lawyers at every stage of their career — from those looking to take
            on independent consulting work (asesorías) alongside us, to experienced attorneys
            seeking a long-term position, to firms we occasionally partner with or bring in
            for specialized matters. If you&apos;re a lawyer looking to grow your practice,
            we&apos;d like to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="areaOfInterest" className="text-sm text-gray-700">
                Area of interest
              </label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  Select a practice area
                </option>
                {practiceAreas.map((area) => (
                  <option key={area.slug} value={area.title}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your background and what you're looking for."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-gray-800"
            >
              Send
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Prefer to send your CV directly? Email us at{" "}
            <a
              href="mailto:careers@roblesandco.mx"
              className="text-gray-700 underline underline-offset-2 hover:text-gray-900"
            >
              careers@roblesandco.mx
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
