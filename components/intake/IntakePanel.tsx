"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import SituationStep from "./SituationStep";
import DescribeStep from "./DescribeStep";
import ValueStep from "./ValueStep";
import ContactStep from "./ContactStep";
import ResultStep from "./ResultStep";
import { supabase } from "@/lib/supabase";
import { Language, translations } from "@/lib/translations";
import {
  ContactMethod,
  IntakeAnswers,
  IntakeMessage,
  IntakeStage,
  Need,
  PracticeArea,
  ValueRangeId,
} from "./types";

export default function IntakePanel({ language }: { language: Language }) {
  const [stage, setStage] = useState<IntakeStage>("situation");
  const [messages, setMessages] = useState<IntakeMessage[]>([
    {
      id: 0,
      sender: "bot",
      text: translations[language].funnel.whatCanWeHelp,
    },
  ]);
  const [answers, setAnswers] = useState<IntakeAnswers>({});

  useEffect(() => {
    console.log("answers updated:", answers);
  }, [answers]);

  useEffect(() => {
    const text = translations[language].funnel.whatCanWeHelp;
    setMessages((prev) => (stage === "situation" && prev.length === 1 ? [{ ...prev[0], text }] : prev));
  }, [language, stage]);

  function addMessage(sender: "bot" | "user", text: string) {
    setMessages((prev) => [...prev, { id: prev.length, sender, text }]);
  }

  function handleSituationComplete(need: Need, practiceArea: PracticeArea) {
    setAnswers((prev) => ({ ...prev, need, practiceArea }));
    addMessage("bot", translations[language].funnel.tellUsSituation);
    setStage("describe");
  }

  function handleDescribeComplete(data: { description: string; attachment: File | null }) {
    setAnswers((prev) => ({
      ...prev,
      description: data.description,
      attachment: data.attachment,
    }));
    if (answers.practiceArea === "Real Estate") {
      addMessage("bot", "What's the property value range?");
    } else {
      addMessage("bot", translations[language].funnel.whenMoveForward);
    }
    setStage("value");
  }

  function handleValueComplete(data: { valueRange?: ValueRangeId; urgent: boolean }) {
    setAnswers((prev) => ({ ...prev, valueRange: data.valueRange, urgent: data.urgent }));
    addMessage("bot", translations[language].funnel.leaveInfo);
    setStage("contact");
  }

  async function handleContactComplete(data: {
    name: string;
    contactMethod: ContactMethod;
    contactValue: string;
  }) {
    const finalAnswers: IntakeAnswers = { ...answers, ...data };
    setAnswers(finalAnswers);
    console.log("Intake answers:", finalAnswers);

    const { error } = await supabase.from("intake_submissions").insert({
      need: finalAnswers.need,
      practice_area: finalAnswers.practiceArea,
      description: finalAnswers.description,
      value_range: finalAnswers.valueRange,
      urgent: finalAnswers.urgent,
      name: finalAnswers.name,
      contact_method: finalAnswers.contactMethod,
      contact_value: finalAnswers.contactValue,
    });

    if (error) {
      console.error("Failed to save intake submission:", error);
    }

    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          need: finalAnswers.need,
          practiceArea: finalAnswers.practiceArea,
          description: finalAnswers.description,
          valueRange: finalAnswers.valueRange,
          urgent: finalAnswers.urgent,
          name: finalAnswers.name,
          contactMethod: finalAnswers.contactMethod,
          contactValue: finalAnswers.contactValue,
        }),
      });
      if (!res.ok) {
        console.error("Failed to send notification email:", await res.text());
      }
    } catch (err) {
      console.error("Failed to send notification email:", err);
    }

    setStage("done");
  }

  const wantsWhatsapp = answers.valueRange
    ? answers.valueRange !== "under-250k" && answers.urgent === true
    : answers.urgent === true;
  console.log("wantsWhatsapp:", wantsWhatsapp);

  return (
    <div className="relative mx-auto max-w-2xl">
      <div className="rounded-2xl border border-[#ad8a4e]/50 bg-[#ad8a4e]/[0.06] p-[3px] shadow-sm">
        <div className="overflow-hidden rounded-[13px] border border-[#ad8a4e]/25 bg-white">
          <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3 md:px-6 md:py-4">
            <Scale className="h-4 w-4 text-gray-500 md:h-5 md:w-5" />
            <span className="font-mono text-xs text-gray-500 md:text-sm">robles-ai-intake</span>
            <span className="ml-auto h-2 w-2 rounded-full bg-green-500" />
          </div>

          <div className="flex flex-col gap-3 bg-white px-4 py-5 md:gap-4 md:px-8 md:py-8">
            {messages.map((message) =>
              message.sender === "bot" ? (
                <div
                  key={message.id}
                  className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-sm text-gray-800 md:px-5 md:py-3 md:text-base"
                >
                  {message.text}
                </div>
              ) : (
                <div
                  key={message.id}
                  className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-gray-900 px-4 py-2 text-sm text-white md:px-5 md:py-3 md:text-base"
                >
                  {message.text}
                </div>
              )
            )}

            {stage === "situation" && (
              <SituationStep
                addMessage={addMessage}
                onComplete={handleSituationComplete}
                language={language}
              />
            )}
            {stage === "describe" && (
              <DescribeStep addMessage={addMessage} onComplete={handleDescribeComplete} />
            )}
            {stage === "value" && (
              <ValueStep
                addMessage={addMessage}
                practiceArea={answers.practiceArea}
                language={language}
                onComplete={handleValueComplete}
              />
            )}
            {stage === "contact" && (
              <ContactStep addMessage={addMessage} onComplete={handleContactComplete} />
            )}
            {stage === "done" && <ResultStep wantsWhatsapp={wantsWhatsapp} />}
          </div>
        </div>
      </div>
    </div>
  );
}
