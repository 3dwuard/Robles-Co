"use client";

import { useRef, useState } from "react";
import { Paperclip, Send, X } from "lucide-react";
import { AddMessage, MAX_ATTACHMENT_BYTES } from "./types";

export default function DescribeStep({
  addMessage,
  onComplete,
}: {
  addMessage: AddMessage;
  onComplete: (data: { description: string; attachment: File | null }) => void;
}) {
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    const isAccepted = file.type === "application/pdf" || file.type.startsWith("image/");
    if (!isAccepted) {
      setFileError("Only images and PDF files are supported.");
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setFileError("File must be under 10MB.");
      return;
    }
    setFileError(null);
    setAttachment(file);
  }

  function handleRemoveAttachment() {
    setAttachment(null);
    setFileError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = description.trim();
    if (!trimmed) return;

    addMessage("user", trimmed);
    if (attachment) {
      addMessage("user", `📎 ${attachment.name} attached`);
    }
    onComplete({ description: trimmed, attachment });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-1">
      <div className="flex gap-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your situation..."
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 outline-none focus:border-gray-400 md:px-4 md:py-2.5 md:text-base"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          aria-label="Attach a file"
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-gray-600 transition-colors hover:border-gray-400 hover:bg-gray-50 md:px-4 md:py-2.5"
        >
          <Paperclip className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-lg bg-gray-900 px-3 py-2 text-sm text-white transition-colors hover:bg-gray-800 md:px-4 md:py-2.5"
        >
          <Send className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      {attachment && (
        <div className="flex items-center gap-2 self-start rounded-lg bg-gray-50 px-3 py-1.5 text-xs text-gray-600 md:text-sm">
          <Paperclip className="h-3 w-3 shrink-0 md:h-3.5 md:w-3.5" />
          <span className="max-w-[220px] truncate">{attachment.name}</span>
          <button
            type="button"
            onClick={handleRemoveAttachment}
            aria-label="Remove attachment"
            className="text-gray-400 transition-colors hover:text-gray-700"
          >
            <X className="h-3 w-3 md:h-3.5 md:w-3.5" />
          </button>
        </div>
      )}

      {fileError && <p className="text-xs text-red-500 md:text-sm">{fileError}</p>}

      <p className="text-xs text-gray-400 md:text-sm">
        You can attach any documents or images that could help us understand your
        situation better, such as a contract, listing, or photo.
      </p>
    </form>
  );
}
