"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, ShieldCheck, MapPin } from "lucide-react";
import IntakePanel from "@/components/intake/IntakePanel";
import { practiceAreas } from "@/data/practiceAreas";
import { teamMembers } from "@/data/team";
import { Language, translations } from "@/lib/translations";

type NavLinkKey = "services" | "team" | "cases" | "careers";
type NavLink = { key: NavLinkKey; href: string };

const links: NavLink[] = [
  { key: "services", href: "#services" },
  { key: "team", href: "/team" },
  { key: "cases", href: "#cases" },
  { key: "careers", href: "/careers" },
];

function NavAnchor({
  link,
  label,
  className,
  onClick,
}: {
  link: NavLink;
  label: string;
  className: string;
  onClick?: () => void;
}) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} onClick={onClick} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={className}>
      {label}
    </a>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
  className = "",
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
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
  {
    tag: "Mexico City · fideicomiso structuring",
    description:
      "Structured a fideicomiso for a foreign family acquiring a residential property, ensuring full compliance with restricted-zone regulations.",
  },
  {
    tag: "Cancún · developer contract review",
    description:
      "Reviewed and renegotiated a pre-construction contract, adding buyer protections against delivery delays.",
  },
  {
    tag: "Mexico City · corporate restructuring",
    description:
      "Advised a mid-size company through a merger, coordinating due diligence and regulatory filings.",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("EN");
  const [casesExpanded, setCasesExpanded] = useState(false);
  const t = translations[language];

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
                <li key={link.key}>
                  <NavAnchor
                    link={link}
                    label={t.nav[link.key]}
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
                <li key={link.key}>
                  <NavAnchor
                    link={link}
                    label={t.nav[link.key]}
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
            {t.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-600 sm:text-lg">
            {t.hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t.badges.licensed}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600">
              <MapPin className="h-3.5 w-3.5" />
              {t.badges.locations}
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="w-full border-t border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            {t.services.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              const teaser = t.services.teasers[area.slug as keyof typeof t.services.teasers];

              return (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="flex flex-col rounded-xl border border-gray-200 p-6 transition-colors hover:border-gray-400"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ad8a4e]/40 bg-[#ad8a4e]/[0.06]">
                    <Icon className="h-6 w-6 text-[#ad8a4e]" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-gray-900">{area.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{teaser}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="w-full border-t border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            {t.team.heading}
          </h2>

          <div className="mt-10 flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:justify-center">
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href="/team"
                className="flex max-w-xs flex-col items-center text-center transition-opacity hover:opacity-80"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <p className="mt-4 font-serif text-lg text-gray-900">{member.name}</p>
                <p className="mt-1 text-sm text-gray-500">{member.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI intake panel */}
      <section className="w-full border-t border-gray-200 px-6 py-20">
        <IntakePanel language={language} />
      </section>

      {/* Cases */}
      <section id="cases" className="w-full border-t border-gray-200 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            {t.cases.heading}
          </h2>

          <div className="mt-10 flex flex-col">
            {cases.slice(0, 3).map((item, i) => (
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

          <div
            className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
              casesExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex flex-col">
                {cases.slice(3).map((item) => (
                  <div key={item.tag} className="border-t border-gray-200 py-6">
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
          </div>

          {!casesExpanded && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setCasesExpanded(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900"
              >
                Continue reading
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 px-6 py-8">
        <p className="text-center text-xs text-gray-400">
          {t.footer.text}
        </p>
      </footer>
    </main>
  );
}
