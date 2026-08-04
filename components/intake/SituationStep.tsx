"use client";

import { useState } from "react";
import {
  AddMessage,
  Need,
  PRACTICE_AREA_OPTIONS,
  PRACTICE_AREA_SUB_OPTIONS,
  PracticeArea,
  optionButtonClass,
} from "./types";
import { Language, translations } from "@/lib/translations";

export default function SituationStep({
  addMessage,
  onComplete,
  language,
}: {
  addMessage: AddMessage;
  onComplete: (need: Need, practiceArea: PracticeArea) => void;
  language: Language;
}) {
  const [practiceArea, setPracticeArea] = useState<PracticeArea | null>(null);
  const categoryLabels = translations[language].funnel.categories;

  function handleSelectCategory(area: PracticeArea) {
    addMessage("user", categoryLabels[area]);

    const subOptions = PRACTICE_AREA_SUB_OPTIONS[area];
    if (!subOptions) {
      onComplete("Other", area);
      return;
    }

    addMessage("bot", "Which of these best describes it?");
    setPracticeArea(area);
  }

  function handleSelectNeed(need: Need) {
    addMessage("user", need);
    onComplete(need, practiceArea as PracticeArea);
  }

  if (practiceArea) {
    const subOptions = PRACTICE_AREA_SUB_OPTIONS[practiceArea] ?? [];
    return (
      <div className="grid grid-cols-2 gap-2 pt-1 md:gap-3">
        {subOptions.map((need) => (
          <button
            key={need}
            type="button"
            onClick={() => handleSelectNeed(need)}
            className={optionButtonClass}
          >
            {need}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 pt-1 md:gap-3">
      {PRACTICE_AREA_OPTIONS.map((area) => (
        <button
          key={area}
          type="button"
          onClick={() => handleSelectCategory(area)}
          className={optionButtonClass}
        >
          {categoryLabels[area]}
        </button>
      ))}
    </div>
  );
}
