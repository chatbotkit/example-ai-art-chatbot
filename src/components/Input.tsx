"use client";

import { useTypingAnimation } from "@/hooks/useTypeAnimation";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  message?: string;
}

export default function Input({ message, ...props }: InputProps) {
  const { isTyping } = useTypingAnimation(message);

  return isTyping ? null : (
    <div className="px-28 absolute bottom-8 left-0 flex items-center justify-between w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="mr-4"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
      <input
        {...props}
        autoFocus
        className="placeholder-current placeholder:opacity-30 w-full bg-transparent focus:outline-none text-xl text-white/70 border-white/30"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 17 20 12 15 7" />
        <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
      </svg>
    </div>
  );
}
