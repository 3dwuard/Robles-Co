"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShieldCheck, MapPin } from "lucide-react";
import IntakePanel from "@/components/intake/IntakePanel";

type NavLink = { label: string; href: string };

const teamMembers = [
  {
    name: "Jesús Contreras Licea",
    photo: "/team/jesus-main.jpeg",
    bio: "Partner at Robles & Co and BaRoCo Law in Los Cabos, Jesús has closed over 1,000 real estate transactions and brings 15+ years of experience in financial law, including senior roles at HSBC Mexico and top-tier firms. He also teaches Corporate Law, Crypto & Fintech at Universidad Anáhuac. From Cancún to Mexico City, he handles matters across Mexico's full jurisdiction.",
  },
  {
    name: "Ángel Robles Santisteban",
    photo: "/team/angel-main.jpeg",
    bio: "Partner at Robles & Co and BaRoCo Law in Los Cabos, Ángel brings 18+ years of experience in real estate law, with deep expertise in civil, tax, and property registry matters. He has guided individuals, families, and construction companies through every stage of acquiring and regularizing property. From Mexico City to Cancún, he handles matters nationwide.",
  },
];

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

          <div className="mt-10 flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:justify-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex max-w-xs flex-col items-center text-center">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <p className="mt-4 font-serif text-lg text-gray-900">{member.name}</p>
                <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI intake panel */}
      <section className="w-full border-t border-gray-200 px-6 py-20">
        <IntakePanel />
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
          Created by JECL · Powered by AI · 2026
        </p>
      </footer>
    </main>
  );
}
