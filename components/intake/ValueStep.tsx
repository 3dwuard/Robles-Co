"use client";

import { useState } from "react";
import {
  AddMessage,
  TIMING_OPTIONS,
  VALUE_OPTIONS,
  ValueRangeId,
  optionButtonClass,
} from "./types";

export default function ValueStep({
  addMessage,
  onComplete,
}: {
  addMessage: AddMessage;
  onComplete: (data: { valueRange: ValueRangeId; urgent: boolean }) => void;
}) {
  const [subStage, setSubStage] = useState<"value" | "timing">("value");
  const [valueRange, setValueRange] = useState<ValueRangeId | null>(null);

  function handleValueSelect(option: (typeof VALUE_OPTIONS)[number]) {
    console.log("value selected:", option);
    addMessage("user", option.usd);
    setValueRange(option.id);
    addMessage("bot", "When are you hoping to move forward?");
    setSubStage("timing");
  }

  function handleTimingSelect(option: (typeof TIMING_OPTIONS)[number]) {
    console.log("timing selected:", option);
    addMessage("user", option.label);
    if (!valueRange) return;
    onComplete({ valueRange, urgent: option.urgent });
  }

  if (subStage === "value") {
    return (
      <div className="grid grid-cols-2 gap-2 pt-1 md:gap-3">
        {VALUE_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => handleValueSelect(option)}
            className={optionButtonClass}
          >
            <span className="block">{option.usd}</span>
            <span className="block text-xs text-gray-400 md:text-sm">{option.mxn}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pt-1 md:gap-3">
      {TIMING_OPTIONS.map((option) => (
        <button
          key={option.label}
          type="button"
          onClick={() => handleTimingSelect(option)}
          className={optionButtonClass}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
