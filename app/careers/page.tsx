"use client";

import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { useTranslation } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FadeInSection from "@/components/FadeInSection";

const inputClass =
  "rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 outline-none focus:border-gray-400";

export default function CareersPage() {
  const { t } = useTranslation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-serif text-xl tracking-wide text-gray-900">
            Robles &amp; Co
          </Link>
          <LanguageSwitcher />
        </div>
      </div>

      <section className="w-full px-6 py-16 sm:py-20">
        <FadeInSection className="mx-auto max-w-xl">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            {t.common.backHome}
          </Link>

          <div className="relative mt-6 h-48 w-full overflow-hidden rounded-xl border border-gray-200 sm:h-64">
            <Image
              src="/team/jesus-casual.jpeg"
              alt="Robles & Co team"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-center font-serif text-3xl text-gray-900 sm:text-4xl">
            {t.careers.heading}
          </h1>

          <p className="mt-5 text-center text-base text-gray-600 sm:text-lg">
            {t.careers.intro}
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-gray-700">
                {t.careers.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t.careers.form.namePlaceholder}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-gray-700">
                {t.careers.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t.careers.form.emailPlaceholder}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="areaOfInterest" className="text-sm text-gray-700">
                {t.careers.form.areaOfInterest}
              </label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  {t.careers.form.areaOfInterestPlaceholder}
                </option>
                {practiceAreas.map((area) => (
                  <option key={area.slug} value={t.services.areas[area.slug].title}>
                    {t.services.areas[area.slug].title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-gray-700">
                {t.careers.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t.careers.form.messagePlaceholder}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white transition-colors hover:bg-gray-800"
            >
              {t.careers.form.submit}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            {t.careers.cvNote}{" "}
            <a
              href="mailto:careers@roblesandco.mx"
              className="text-gray-700 underline underline-offset-2 hover:text-gray-900"
            >
              careers@roblesandco.mx
            </a>
            .
          </p>
        </FadeInSection>
      </section>
    </main>
  );
}
