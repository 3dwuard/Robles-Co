"use client";

import { AddMessage, Need, NEED_OPTIONS, optionButtonClass } from "./types";

export default function SituationStep({
  addMessage,
  onComplete,
}: {
  addMessage: AddMessage;
  onComplete: (need: Need) => void;
}) {
  function handleSelect(need: Need) {
    addMessage("user", need);
    onComplete(need);
  }

  return (
    <div className="grid grid-cols-2 gap-2 pt-1 md:gap-3">
      {NEED_OPTIONS.map((need) => (
        <button
          key={need}
          type="button"
          onClick={() => handleSelect(need)}
          className={optionButtonClass}
        >
          {need}
        </button>
      ))}
    </div>
  );
}
