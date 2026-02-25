"use client";

import { useMemo, useState } from "react";

const questions = [
  {
    q: "What type of work describes Shreyas best?",
    options: [
      { label: "Ship scalable backend systems", score: 20 },
      { label: "Only design mockups", score: 5 },
      { label: "Only manage spreadsheets", score: 2 },
    ],
  },
  {
    q: "Pick the strongest vibe:",
    options: [
      { label: "Builder + creator", score: 20 },
      { label: "Random trend chaser", score: 4 },
      { label: "Avoids hard problems", score: 1 },
    ],
  },
  {
    q: "How should software be built?",
    options: [
      { label: "Reliable, scalable, and clean", score: 20 },
      { label: "Hacky and unreadable", score: 3 },
      { label: "No tests, no docs, no plan", score: 1 },
    ],
  },
  {
    q: "What does this portfolio optimize for?",
    options: [
      { label: "Memorable experience", score: 20 },
      { label: "Generic template look", score: 1 },
      { label: "Infinite popups", score: 0 },
    ],
  },
  {
    q: "Final call:",
    options: [
      { label: "Think deeply, ship practically", score: 20 },
      { label: "Overcomplicate everything", score: 2 },
      { label: "Never finish", score: 0 },
    ],
  },
];

export default function IdentityGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const percent = useMemo(() => Math.round((score / 100) * 100), [score]);

  const handlePick = (points) => {
    const nextScore = score + points;
    if (index === questions.length - 1) {
      setScore(nextScore);
      setDone(true);
      localStorage.setItem("srk_game_best", String(Math.round((nextScore / 100) * 100)));
      return;
    }
    setScore(nextScore);
    setIndex((v) => v + 1);
  };

  const rank =
    percent >= 90 ? "Inner Circle" : percent >= 70 ? "Systems Thinker" : percent >= 45 ? "Builder" : "Intern";

  return (
    <section className="glass p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-200">mini-game: decode Shreyas</h2>
        <span className="text-xs text-cyan-300">5 rounds</span>
      </div>

      {!done ? (
        <div className="space-y-3">
          <p className="text-sm text-slate-400">Round {index + 1} / {questions.length}</p>
          <h3 className="text-lg font-semibold">{questions[index].q}</h3>
          <div className="grid gap-2">
            {questions[index].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => handlePick(opt.score)}
                className="rounded-lg border border-white/10 bg-slate-950/35 px-4 py-2.5 text-left text-sm transition hover:border-cyan-300/70"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-cyan-300">Result</p>
          <h3 className="text-3xl font-extrabold">{percent}% · {rank}</h3>
          <p className="text-slate-300">You just decoded Shreyas.</p>
          <button
            onClick={() => {
              setDone(false);
              setIndex(0);
              setScore(0);
            }}
            className="rounded-lg border border-violet-300/60 px-4 py-2 text-sm font-semibold hover:border-cyan-300/70"
          >
            Play again
          </button>
        </div>
      )}
    </section>
  );
}
