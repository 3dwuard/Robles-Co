"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, ShieldCheck, MapPin } from "lucide-react";
import IntakePanel from "@/components/intake/IntakePanel";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FadeInSection from "@/components/FadeInSection";
import { practiceAreas } from "@/data/practiceAreas";
import { teamMembers } from "@/data/team";
import { useTranslation } from "@/lib/LanguageContext";
import { FIRM_CONTACT } from "@/components/intake/types";

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
  const content = (
    <span className="group relative inline-block">
      {label}
      <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-[#ad8a4e] transition-all duration-300 group-hover:w-full" />
    </span>
  );

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} onClick={onClick} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={onClick} className={className}>
      {content}
    </a>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [casesExpanded, setCasesExpanded] = useState(false);
  const { language, t } = useTranslation();

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
                    className="text-sm text-gray-600 transition-colors hover:text-[#ad8a4e]"
                  />
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
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
                    className="text-sm text-gray-600 transition-colors hover:text-[#ad8a4e]"
                  />
                </li>
              ))}
            </ul>
            <LanguageSwitcher />
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative w-full overflow-hidden px-6 py-24 md:py-32">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero-bg-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
          <source src="/video/hero-bg-desktop.mp4" media="(min-width: 768px)" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-gray-200 sm:text-lg">
            {t.hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t.badges.licensed}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs text-white">
              <MapPin className="h-3.5 w-3.5" />
              {t.badges.locations}
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full border-t border-gray-200 px-6 py-14">
        <FadeInSection className="mx-auto grid max-w-4xl grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-4">
          {t.stats.map((stat, i) => (
            <div
              key={stat.caption}
              className={`flex flex-col items-center text-center ${
                i !== 0 ? "sm:border-l sm:border-[#ad8a4e]/20 sm:pl-4" : ""
              }`}
            >
              <p className="font-serif text-2xl text-[#ad8a4e] sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-xs text-gray-500">{stat.caption}</p>
            </div>
          ))}
        </FadeInSection>
      </section>

      {/* Services */}
      <section id="services" className="w-full border-t border-gray-200 px-6 py-20">
        <FadeInSection className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            {t.services.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              const content = t.services.areas[area.slug];

              return (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className="flex flex-col rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ad8a4e]/40 bg-[#ad8a4e]/[0.06]">
                    <Icon className="h-6 w-6 text-[#ad8a4e]" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg text-gray-900">{content.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{content.teaser}</p>
                </Link>
              );
            })}
          </div>
        </FadeInSection>
      </section>

      {/* Team */}
      <section id="team" className="w-full border-t border-gray-200 px-6 py-20">
        <FadeInSection className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            {t.team.heading}
          </h2>

          <div className="mt-10 flex flex-wrap items-stretch justify-center gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href="/team"
                className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-gray-200 px-8 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full object-cover"
                />
                <p className="mt-6 font-serif text-lg text-gray-900">{member.name}</p>
                <p className="mt-2 text-sm text-gray-500">{t.team.titles[member.slug]}</p>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-md text-center text-sm text-gray-500">
            {t.team.associatesNote}
          </p>
        </FadeInSection>
      </section>

      {/* AI intake panel */}
      <section className="w-full border-t border-gray-200 px-6 py-20">
        <IntakePanel language={language} />
      </section>

      {/* Cases */}
      <section id="cases" className="w-full border-t border-gray-200 px-6 py-20">
        <FadeInSection className="mx-auto max-w-2xl">
          <h2 className="text-center font-serif text-2xl text-gray-900">
            {t.cases.heading}
          </h2>

          <div className="mt-10 flex flex-col gap-3">
            {t.cases.items.slice(0, 3).map((item) => (
              <div
                key={item.tag}
                className="rounded-xl border border-transparent px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md"
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
              <div className="flex flex-col gap-3">
                {t.cases.items.slice(3).map((item) => (
                  <div
                    key={item.tag}
                    className="rounded-xl border border-transparent px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-md"
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
          </div>

          {!casesExpanded && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setCasesExpanded(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-[#ad8a4e]/50 hover:text-[#ad8a4e]"
              >
                {t.cases.continueReading}
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 px-6 py-8">
        <div className="flex justify-center text-xs text-gray-500">
          <a
            href={FIRM_CONTACT.emailHref}
            className="transition-colors hover:text-[#ad8a4e]"
          >
            {FIRM_CONTACT.email}
          </a>
        </div>

        <div className="mx-auto mt-4 flex max-w-4xl flex-col items-center gap-2 border-t border-gray-100 pt-4 text-[11px] text-gray-400 sm:flex-row sm:justify-center sm:gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-2">
            <Link
              href="/aviso-de-privacidad"
              className="underline underline-offset-2 transition-colors hover:text-gray-600"
            >
              {t.footer.privacyLink}
            </Link>
            <span aria-hidden="true">·</span>
            <p>{t.footer.text}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
