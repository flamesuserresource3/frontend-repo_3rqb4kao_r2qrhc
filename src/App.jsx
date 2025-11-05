import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

function useBMWBrain() {
  const kb = useMemo(
    () => ([
      {
        test: (q) => /(history|founded|origin|milestone|heritage)/i.test(q),
        answer:
          "Bayerische Motoren Werke (BMW) began in 1916 making aircraft engines. The roundel logo references a spinning propeller over Bavaria’s colors. After WWI, BMW built motorcycles (1923) then cars (1928). Key milestones: 1962 ‘Neue Klasse’ sedans (birth of the sports sedan), 1972 M Division, 1975 3 Series, 1977 7 Series, 1999 X5 (sport activity vehicle), 2011 i sub‑brand (i3/i8 pioneering electrification)."
      },
      {
        test: (q) => /m\s?(division|models?|competition|cs\b|track|motorsport)/i.test(q),
        answer:
          "BMW M (Motorsport) creates higher‑performance versions with stiffer chassis, stronger brakes, bespoke engines (e.g., S54, S65, S55, S58), and track‑tuned dynamics. Trims: base M, Competition (more power, sharper chassis), and CS/CSL (lighter, focused). Modern highlights: M2 (compact thrill), M3/M4 (S58 twin‑turbo, manual available), M5 (super sedan, now electrified)."
      },
      {
        test: (q) => /(i3|i4|i5|i7|ix|ev|electric|charging|range)/i.test(q),
        answer:
          "BMW’s i lineup: i4 (Gran Coupe) ~300–320 mi range, i5 (mid‑size) up to ~295 mi, i7 (flagship) up to ~320 mi, iX (SUV) up to ~315 mi depending on pack and wheels. Charging: up to ~205 kW DC on newer platforms (10–80% in ~30 min). Tech includes pre‑conditioning, route‑aware charging, and bidirectional features on newer models."
      },
      {
        test: (q) => /(b58|s58|n55|s54|s65|engine|inline\s*6|v8|turbo)/i.test(q),
        answer:
          "Engines: The B58 3.0L turbo inline‑six is renowned for smooth power and reliability; the S58 (M3/M4) is its motorsport sibling. Classics include the high‑revving S54 (E46 M3) and S65 V8 (E92 M3). Modern V8s (N63/S63) power M5/X5M. BMW’s hallmark is the balanced inline‑six with strong mid‑range torque."
      },
      {
        test: (q) => /(xdrive|awd|rwd|differential|handling|chassis)/i.test(q),
        answer:
          "xDrive is BMW’s rear‑biased AWD that can send power forward when needed. Recent M cars offer 4WD, 4WD Sport, and 2WD (RWD‑only) modes. Combined with active M diff and adaptive dampers, it blends traction with classic BMW agility."
      },
      {
        test: (q) => /(maintenance|service|oil|spark|brake|interval|warranty)/i.test(q),
        answer:
          "General service guidance (confirm for your model): oil every 7.5k–10k miles/12 months; brake fluid every 2 years; spark plugs 40k–60k miles (turbo six) or per CBS; coolant 4–5 years; cabin filter yearly. Watch: cooling system on older models, oil filter housing gasket, coil packs, and suspension bushings. Use quality LL‑01/LL‑17FE+ oil and OE filters."
      },
      {
        test: (q) => /(model|series|3 series|5 series|7 series|x\d|z4|e30|e46|f80|g80)/i.test(q),
        answer:
          "Model families: 1/2 (compact), 3 (sports sedan), 4 (coupe/GC), 5 (mid‑size), 7 (flagship), 8 (grand tourer). X1–X7 are SUVs; Z4 is a roadster. Generations use E/F/G codes (e.g., E30, E46, F80, G80). Each step brings stiffer bodies, new iDrive versions, and safety/efficiency gains."
      },
      {
        test: (q) => /(idrive|connecteddrive|infotainment|driver assist|adas)/i.test(q),
        answer:
          "Technology: iDrive 8/9 bring a curved display, OTA updates, advanced nav and voice. ConnectedDrive adds remote services and app integration. Driver assistance: adaptive cruise with lane centering, parking assistant, surround view, and on some models hands‑free in limited scenarios (check local availability)."
      },
      {
        test: (q) => /(buy|reliability|certified|cpo|used|inspection|checklist|resale)/i.test(q),
        answer:
          "Buying advice: prioritize service records, pre‑purchase inspection, and tire/brake/suspension condition. For turbo cars, check for leaks, charge pipes, wastegate rattle; for older NA M, inspect rod bearings/vanos per model. CPO adds warranty peace of mind. Factor in tires and alignment for proper BMW handling."
      },
    ]),
    []
  );

  function answer(question) {
    const q = question.trim();
    const item = kb.find((k) => k.test(q));
    if (item) return item.answer;
    return (
      "I can help with BMW history, models (E/F/G codes), M Division, i‑series EVs, engines (B58/S58), xDrive, technology, maintenance, and buying advice. Ask something specific or pick a quick topic."
    );
  }

  return { answer };
}

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your BMW AI Concierge. Ask me about models, M Division, i‑series EVs, engines, xDrive, tech, maintenance or buying tips."
    }
  ]);
  const [typing, setTyping] = useState(false);
  const { answer } = useBMWBrain();

  const suggestions = [
    "What’s special about the B58 engine?",
    "Compare M3 generations: E46 vs F80 vs G80",
    "Is xDrive worth it over RWD?",
    "What are common BMW service intervals?",
  ];

  function send(text) {
    const userMsg = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setTyping(true);
    // Simulate thinking time
    setTimeout(() => {
      const reply = answer(text);
      const botMsg = { role: "assistant", content: reply };
      setMessages((m) => [...m, botMsg]);
      setTyping(false);
    }, 600);
  }

  // Basic keyboard UX: focus input on load (handled by browser) and scroll behavior via ChatWindow overflow
  useEffect(() => {
    // no-op placeholder for future enhancements
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-50 font-inter">
      <Header />
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-0">
        <Sidebar onPick={send} />
        <section className="flex flex-col h-[calc(100vh-64px)] sm:h-[calc(100vh-60px)]">
          <div className="px-4 sm:px-6 pt-4 pb-2">
            <div className="rounded-2xl p-4 border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Ask anything about BMW: model differences, M vs non‑M, EVs, tuning, options, and ownership.
              </p>
            </div>
          </div>
          <ChatWindow messages={messages} typing={typing} />
          <MessageInput onSend={send} disabled={typing} suggestions={suggestions} />
        </section>
      </main>
    </div>
  );
}
