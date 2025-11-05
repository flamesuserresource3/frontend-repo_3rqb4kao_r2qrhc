import { Car, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">BMW AI Concierge</h1>
            <p className="text-xs text-zinc-500 -mt-0.5">Chat about anything BMW — models, tech, history and more</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
          <Sparkles className="w-4 h-4" />
          Powered by curated BMW knowledge
        </div>
      </div>
    </header>
  );
}
