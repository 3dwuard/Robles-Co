"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function PrivacyNoticePage() {
  const { t } = useTranslation();
  const { sections } = t.privacy;

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
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            {t.common.backHome}
          </Link>

          <h1 className="mt-6 text-center font-serif text-3xl text-gray-900 sm:text-4xl">
            {t.privacy.heading}
          </h1>

          <p className="mt-6 text-base text-gray-600">{t.privacy.intro}</p>

          <div className="mt-10 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-lg text-gray-900">
                {sections.dataCollected.heading}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{sections.dataCollected.body}</p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-gray-900">{sections.purposes.heading}</h2>
              <p className="mt-2 text-sm text-gray-600">{sections.purposes.body}</p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-gray-900">{sections.transfers.heading}</h2>
              <p className="mt-2 text-sm text-gray-600">{sections.transfers.body}</p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-gray-900">
                {sections.arcoRights.heading}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{sections.arcoRights.body}</p>
            </div>

            <div>
              <h2 className="font-serif text-lg text-gray-900">{sections.changes.heading}</h2>
              <p className="mt-2 text-sm text-gray-600">{sections.changes.body}</p>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-400">{t.privacy.lastUpdated}</p>
        </div>
      </section>
    </main>
  );
}
