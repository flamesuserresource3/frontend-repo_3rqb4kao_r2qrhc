import { Bot, User } from "lucide-react";

export default function ChatMessage({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="shrink-0 mt-0.5 p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
          <Bot className="w-4 h-4" />
        </div>
      )}
      <div className={`max-w-[85%] md:max-w-[70%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
        isUser
          ? "bg-blue-600 text-white rounded-br-sm"
          : "bg-white dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 rounded-bl-sm"
      }`}>
        {content}
      </div>
      {isUser && (
        <div className="shrink-0 mt-0.5 p-1.5 rounded-lg bg-blue-50 text-blue-700">
          <User className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}
