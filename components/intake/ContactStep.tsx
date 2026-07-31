"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { AddMessage, ContactMethod } from "./types";

export default function ContactStep({
  addMessage,
  onComplete,
}: {
  addMessage: AddMessage;
  onComplete: (data: { name: string; contactMethod: ContactMethod; contactValue: string }) => void;
}) {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");
  const [contactValue, setContactValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedContact = contactValue.trim();
    if (!trimmedName || !trimmedContact) return;

    addMessage("user", `${trimmedName} · ${trimmedContact}`);
    onComplete({ name: trimmedName, contactMethod, contactValue: trimmedContact });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-1">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-gray-400 md:px-4 md:py-2.5 md:text-base"
      />

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setContactMethod("phone");
            setContactValue("");
          }}
          aria-pressed={contactMethod === "phone"}
          className={`flex-1 rounded-lg border px-3 py-2 text-sm transition-colors md:px-4 md:py-2.5 md:text-base ${
            contactMethod === "phone"
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-200 text-gray-600 hover:border-gray-400"
          }`}
        >
          Phone
        </button>
        <button
          type="button"
          onClick={() => {
            setContactMethod("email");
            setContactValue("");
          }}
          aria-pressed={contactMethod === "email"}
          className={`flex-1 rounded-lg border px-3 py-2 text-sm transition-colors md:px-4 md:py-2.5 md:text-base ${
            contactMethod === "email"
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-200 text-gray-600 hover:border-gray-400"
          }`}
        >
          Email
        </button>
      </div>

      <div className="flex gap-2">
        <input
          type={contactMethod === "phone" ? "tel" : "email"}
          value={contactValue}
          onChange={(e) => setContactValue(e.target.value)}
          placeholder={contactMethod === "phone" ? "Phone number" : "Email address"}
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-gray-400 md:px-4 md:py-2.5 md:text-base"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white transition-colors hover:bg-gray-800 md:px-4 md:py-2.5"
        >
          <Send className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </button>
      </div>
    </form>
  );
}
