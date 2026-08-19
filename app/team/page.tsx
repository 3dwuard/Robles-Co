"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/data/team";
import { useTranslation } from "@/lib/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export default function TeamPage() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-gray-900"
          >
            Robles &amp; Co
          </Link>
          <LanguageSwitcher />
        </div>
      </div>

      <section className="w-full px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            {t.common.backHome}
          </Link>

          <h1 className="mt-6 text-center font-serif text-3xl text-gray-900 sm:text-4xl">
            {t.team.pageHeading}
          </h1>

          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:justify-start">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="w-full max-w-xs rounded-xl border border-gray-200 p-6 sm:w-72"
              >
                <Image
                  src={member.secondaryPhoto}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />

                <h2 className="mt-4 text-center font-serif text-lg text-gray-900">
                  {member.name}
                </h2>

                <p className="mt-1 text-center text-sm text-gray-500">
                  {member.title}
                </p>

                <p className="mt-2 text-center text-sm text-gray-600">
                  {t.team.bios[member.slug]}
                </p>

                <Image
                  src={member.casualPhoto}
                  alt={`${member.name}, informal`}
                  width={160}
                  height={112}
                  className="mx-auto mt-4 h-28 w-40 rounded-lg border border-gray-200 object-cover"
                />

                <div className="mt-4 flex justify-center">
                  <a
                    href="#"
                    aria-label={`${member.name} on LinkedIn`}
                    className="text-gray-400 transition-colors hover:text-gray-900"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
