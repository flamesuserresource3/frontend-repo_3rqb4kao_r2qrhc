import ChatMessage from "./ChatMessage";

export default function ChatWindow({ messages, typing }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
      {messages.map((m, idx) => (
        <ChatMessage key={idx} role={m.role} content={m.content} />
      ))}
      {typing && (
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]"></div>
          <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]"></div>
          <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]"></div>
          <span className="ml-2">BMW Assistant is typing…</span>
        </div>
      )}
    </div>
  );
}
