"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";

import Loader from "@/components/Loader";

import { ChatInput, ConversationContext } from "@chatbotkit/react";
import Link from "next/link";
import Image from "next/image";
import BotMessage from "./BotMessage";
import { paintings } from "@/data/paintings";

export default function FormArea(): JSX.Element {
  const { thinking, message, messages, submit, text, typing, setText } =
    useContext(ConversationContext);

  const components = messages
    .filter(({ type, children }) => type === "bot" && children)
    .slice(-1);

  const messagesArray = messages.filter(({ type }) => type === "bot").slice(-1);

  return (
    <div className="bg-black relative w-full h-full overflow-hidden grid grid-cols-2">
      <div className="text-white z-20 relative flex flex-col justify-center items-start px-20 pb-28">
        <div className="relative max-h-[18rem] h-full w-full">
          <div className="absolute h-[6rem] w-full bottom-0 left-0 bg-gradient-to-t from-black pointer-events-none" />
          {!messages.length && (
            <div className="h-full overflow-y-scroll">
              <BotMessage message="Hello! I am here to answer any questions you have about art. You can try by asking 'Tell me about Mona Lisa?'" />
            </div>
          )}
          {!thinking &&
            !message &&
            messagesArray.map(({ id, text }) => (
              <div key={id} className="h-full overflow-y-scroll pb-10">
                <BotMessage message={text} />
              </div>
            ))}
          {thinking || message ? (
            <div className="h-full">
              <Loader />
            </div>
          ) : null}
          <div className="relative mt-4 w-full">
            <ChatInput
              value={text}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setText(e.target.value)
              }
              onSubmit={() => {
                submit();
              }}
              autoFocus
              placeholder="Type something..."
              className="placeholder-current placeholder:opacity-30 w-full bg-transparent focus:outline-none text-xl text-white/70 border-white/30 resize-none"
            />
            <div className="flex items-center flex-wrap gap-2 mt-10">
              {paintings.map((item) => (
                <form
                  key={item.name}
                  onSubmit={(e) => {
                    e.preventDefault();
                    // @ts-ignore
                    submit(`Tell me something about ${item.name}`);
                  }}
                >
                  <button
                    disabled={thinking || typing}
                    key={item.name}
                    className="text-orange-100 whitespace-nowrap px-2 py-1 border border-zinc-700 rounded-xl text-xs hover:bg-zinc-800 disabled:opacity-40 transition duration-150"
                    type="submit"
                  >
                    {item.name}
                  </button>
                </form>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full relative ">
        <div className="absolute h-full w-[10rem] bg-gradient-to-r from-black left-0  z-20" />
        {components.length ? (
          components.map(({ children }, index) => (
            <div key={index} className={`animate-image h-full`}>
              {children}
            </div>
          ))
        ) : (
          <Image
            src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            className="object-cover h-full w-full absolute transition-opacity duration-500 animate-image"
            alt=""
          />
        )}
      </div>

      <Link
        target="_blank"
        rel="follow"
        href="https://chatbotkit.com/"
        className="absolute bottom-4 right-4 text-center text-xs z-30 bg-black/60 backdrop-blur p-3 group text-white"
      >
        <span className="">Made with ❤️ by</span>{" "}
        <span className="font-semibold text-white group-hover:text-zinc-500">
          ChatBotKit
        </span>
      </Link>
    </div>
  );
}
