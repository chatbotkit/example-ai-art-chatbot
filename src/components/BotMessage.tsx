"use client";

import { useTypingAnimation } from "@/hooks/useTypeAnimation";

export default function BotMessage({ message }: { message?: string }) {
  const { displayedText, isTyping } = useTypingAnimation(message);

  return (
    <h2 className="leading-tight text-3xl mb-6 text-white">
      {displayedText}
      {isTyping && (
        <span className="inline-block h-6 w-1 bg-orange-300 animate-blink"></span>
      )}
    </h2>
  );
}
