import { complete } from "@/actions/conversation";

import FormArea from "@/components/FormArea";

import ConversationManager from "@chatbotkit/react/components/ConversationManager";
import "@/components/functions";

export default function Page(): JSX.Element {
  return (
    <main className="h-screen">
      <ConversationManager endpoint={complete as any}>
        <FormArea />
      </ConversationManager>
    </main>
  );
}
