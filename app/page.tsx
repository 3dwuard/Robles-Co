"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Scale, ShieldCheck, MapPin } from "lucide-react";

type NavLink = { label: string; href: string };

const links: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Team", href: "/team" },
  { label: "Cases", href: "#cases" },
];

function NavAnchor({ link, className, onClick }: { link: NavLink; className: string; onClick?: () => void }) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} onClick={onClick} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
  className = "",
}: {
  language: "EN" | "ES";
  setLanguage: (lang: "EN" | "ES") => void;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-gray-200 p-0.5 ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("EN")}
        aria-pressed={language === "EN"}
        className={`rounded-full px-2.5 py-1 text-xs transition-colors ${
          language === "EN"
            ? "bg-gray-900 text-white"
            : "text-gray-500 hover:text-gray-900"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ES")}
        aria-pressed={language === "ES"}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs transition-colors ${
          language === "ES"
            ? "bg-gray-900 text-white"
            : "text-gray-500 hover:text-gray-900"
        }`}
      >
        <span aria-hidden="true">🇲🇽</span>
        ES
      </button>
    </div>
  );
}

const cases = [
  {
    tag: "Cancún · land purchase",
    description:
      "Guided a foreign buyer through a beachfront land acquisition, structuring the transaction inside a compliant fideicomiso.",
  },
  {
    tag: "Mexico City · title dispute",
    description:
      "Resolved a contested property title by tracing the chain of ownership back through three prior sales.",
  },
  {
    tag: "Cancún · residency & purchase",
    description:
      "Coordinated a home purchase alongside a temporary residency application for a relocating family.",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Nav */}
      <nav className="w-full border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-serif text-xl tracking-wide text-gray-900">
            Robles &amp; Co
          </span>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <NavAnchor
                    link={link}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  />
                </li>
              ))}
            </ul>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="text-gray-900 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-5 border-t border-gray-200 px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  <NavAnchor
                    link={link}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  />
                </li>
              ))}
            </ul>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="w-full px-6 py-20 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="font-serif text-3xl leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Buy property in Mexico with full legal backing
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-600 sm:text-lg">
            From Mexico City to Cancún, we guide buyers through every legal
            step of a property purchase — clearly, and with a licensed
            attorney at every stage.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
              <ShieldCheck className="h-3.5 w-3.5" />
              Licensed attorneys
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
              <MapPin className="h-3.5 w-3.5" />
              CDMX &amp; Cancún
            </span>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="w-full border-t border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            Meet the team
          </h2>

          <div className="mt-10 flex flex-wrap items-start justify-center gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-28 w-28 rounded-full bg-gray-200 sm:h-32 sm:w-32"
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI intake panel */}
      <section className="w-full border-t border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-lg overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
            <Scale className="h-4 w-4 text-gray-500" />
            <span className="font-mono text-xs text-gray-500">
              robles-ai-intake
            </span>
            <span className="ml-auto h-2 w-2 rounded-full bg-green-500" />
          </div>

          <div className="flex flex-col gap-3 bg-white px-4 py-5">
            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800">
              Buying a house, buying land, or need legal advice?
            </div>
            <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-gray-900 px-4 py-2 text-sm text-white">
              Legal advice — already own
            </div>
            <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800">
              Tell me about your situation
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="w-full border-t border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            Cases we&apos;ve handled
          </h2>

          <div className="mt-10 flex flex-col">
            {cases.map((item, i) => (
              <div
                key={item.tag}
                className={`py-6 ${i !== 0 ? "border-t border-gray-200" : ""}`}
              >
                <p className="font-mono text-xs uppercase tracking-wide text-gray-400">
                  {item.tag}
                </p>
                <p className="mt-2 font-serif text-lg text-gray-800">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 px-6 py-8">
        <p className="text-center text-xs text-gray-400">
          Powered by AI · Created by JECL
        </p>
      </footer>
    </main>
  );
}
