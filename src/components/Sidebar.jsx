import { BookOpen, Gauge, BatteryCharging, Settings } from "lucide-react";

export default function Sidebar({ onPick }) {
  const quickTopics = [
    {
      icon: <BookOpen className="w-4 h-4" />, title: "Brand history",
      prompt: "Give me a brief history of BMW and its milestones"
    },
    {
      icon: <Gauge className="w-4 h-4" />, title: "M Division",
      prompt: "Explain BMW M Division and how it differs from standard models"
    },
    {
      icon: <BatteryCharging className="w-4 h-4" />, title: "i Series & EVs",
      prompt: "Compare BMW i4, i5, and i7 — range, performance, charging"
    },
    {
      icon: <Settings className="w-4 h-4" />, title: "Maintenance",
      prompt: "What are common maintenance items and service intervals for BMWs?"
    },
  ];

  return (
    <aside className="hidden lg:flex w-72 shrink-0 border-r border-zinc-200 dark:border-zinc-800 p-4 flex-col gap-3 bg-gradient-to-b from-white to-white/60 dark:from-zinc-950 dark:to-zinc-950/60">
      <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Quick topics</h3>
      <div className="grid grid-cols-1 gap-2">
        {quickTopics.map((t, i) => (
          <button
            key={i}
            onClick={() => onPick(t.prompt)}
            className="text-left group border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
              <span className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                {t.icon}
              </span>
              <span className="text-sm font-medium">{t.title}</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1 line-clamp-2">{t.prompt}</p>
          </button>
        ))}
      </div>
      <div className="mt-4 text-xs text-zinc-500">
        Tip: Ask about specific models (E30 M3, F80 M3, G80 M3), xDrive vs RWD, B58 vs S58, ConnectedDrive, iDrive 8/9, or buying tips.
      </div>
    </aside>
  );
}
