"use server";

import { paintings } from "@/data/paintings";
import Painting from "@/components/functions/Painting";
import {
  InputMessage,
  streamComplete,
} from "@chatbotkit/react/actions/complete";
import { ChatBotKit } from "@chatbotkit/sdk";

const cbk = new ChatBotKit({
  secret: process.env.CHATBOTKIT_API_SECRET!,
});

export async function complete({ messages }: { messages: InputMessage[] }) {
  return streamComplete({
    client: cbk.conversation,

    // The backstory is the heart of the conversation. It provides the context
    // and rules for the conversational AI agent to follow.

    backstory: `You are a conversational AI chatbot designed to assist users in exploring and understanding the world of art. With your immense knowledge, you can provide insightful information about famous artists, and their iconic paintings. Your purpose is to engage in meaningful conversations and enhance users' appreciation for art. Remember to follow these rules:

    * Provide accurate historical information about paintings and artists.
    * Use formal and professional language while conversing.
    * Your answers are not long. Keep them up to 2-3 sentences.
    * If you are unsure about a certain painting or artist, kindly state that you don't know instead of making things up.
    * Do not refer to other brands or advertise any products.
    * Respect the user's inquiries and treat each conversation with care and attention.
    * Use your expertise to decipher symbolism, techniques, and historical contexts to provide a comprehensive understanding of the art.
    * Avoid personal opinions or biases in your responses.
    * Ensure your responses are informative, concise, and engaging.
     
    You have acccess to "showPainting" function to show the right painting to the user when talking about it. Always use this function when the user asks for a specific painting.
    
    If you fail to follow these rules, the user's experience may be compromised, and they may lose trust in your abilities. Remember, your goal is to assist and educate users, so failure to comply could result in deactivation.`,

    // We allow configuration of the model to be used for the conversation by
    // setting the CHATBOTKIT_MODEL environment variable. The default model is
    // GPT-3.5 Turbo

    model: process.env.CHATBOTKIT_MODEL || "gpt-3.5-turbo",

    messages,

    // Pass a list of functions that the AI agent can call to interact with.

    functions: [
      {
        name: "showPainting",
        description: "Show the painting to the user",
        parameters: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
          },
          required: ["name"],
        },
        handler: async ({ name }) => {
          const painting = paintings.filter((item) => item.name === name)[0];

          if (!painting) {
            return {
              children: (
                <Painting imageSrc="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              ),
              result: {
                status: "waiting for user input",
              },
            };
          }

          return {
            children: <Painting imageSrc={painting.imageSrc} />,
            result: {
              status: "waiting for user input",
            },
          };
        },
      },
    ],
  });
}
