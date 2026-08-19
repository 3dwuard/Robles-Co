"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

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
