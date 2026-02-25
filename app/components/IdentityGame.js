"use client";

import { useEffect, useMemo, useState } from "react";
import { FaBuilding, FaCloud, FaCode, FaDatabase, FaGraduationCap, FaPodcast } from "react-icons/fa";

const EXPERIENCES = [
  {
    id: "inmobi",
    label: "InMobi Intern",
    tenure: "~3 months (2015)",
    icon: FaDatabase,
    points: 20,
  },
  {
    id: "quicken",
    label: "Quicken Intern",
    tenure: "~3 months (2016)",
    icon: FaCode,
    points: 20,
  },
  {
    id: "juniper",
    label: "Juniper Intern",
    tenure: "~3 months (2017)",
    icon: FaCloud,
    points: 20,
  },
  {
    id: "ittiam",
    label: "Ittiam Systems",
    tenure: "~2 years (2017–2019)",
    icon: FaBuilding,
    points: 20,
  },
  {
    id: "vymo",
    label: "Vymo",
    tenure: "~2 years (2019–2021)",
    icon: FaCode,
    points: 20,
  },
  {
    id: "neu",
    label: "Northeastern MS",
    tenure: "~2 years (2021–2023)",
    icon: FaGraduationCap,
    points: 20,
  },
  {
    id: "paypal",
    label: "PayPal",
    tenure: "2023–Present",
    icon: FaCloud,
    points: 25,
  },
  {
    id: "creator",
    label: "YouTube/Podcast",
    tenure: "Since 2024",
    icon: FaPodcast,
    points: 15,
  },
];

const BOX_W = 74;
const BOX_H = 58;
const PLAYER_W = 34;
const PLAYER_H = 44;
const STAGE_H = 280;
const FLOOR_Y = STAGE_H - 50;

export default function IdentityGame() {
  const [playerX, setPlayerX] = useState(24);
  const [playerY, setPlayerY] = useState(FLOOR_Y - PLAYER_H);
  const [velY, setVelY] = useState(0);
  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState([]);
  const [score, setScore] = useState(0);

  const boxes = useMemo(
    () =>
      EXPERIENCES.map((exp, i) => ({
        ...exp,
        x: 110 + i * 130,
        y: 70 + (i % 2) * 10,
      })),
    []
  );

  useEffect(() => {
    let raf;

    const tick = () => {
      if (started) {
        setPlayerX((x) => Math.min(x + 1.35, boxes[boxes.length - 1].x + 140));
        setPlayerY((y) => {
          const next = y + velY;
          const floor = FLOOR_Y - PLAYER_H;
          if (next >= floor) return floor;
          return next;
        });
        setVelY((v) => {
          const floor = FLOOR_Y - PLAYER_H;
          if (playerY >= floor && v > 0) return 0;
          return v + 0.36;
        });
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, velY, playerY, boxes]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        jump();
      }
      if (e.code === "Enter") {
        setStarted(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const playerTop = playerY;
    const playerMidX = playerX + PLAYER_W / 2;

    boxes.forEach((box) => {
      const inX = playerMidX >= box.x && playerMidX <= box.x + BOX_W;
      const hitFromBelow = playerTop <= box.y + BOX_H + 10 && playerTop >= box.y + BOX_H - 16;

      if (inX && hitFromBelow && !revealed.includes(box.id)) {
        setRevealed((prev) => [...prev, box.id]);
        setScore((s) => s + box.points);
      }
    });
  }, [playerX, playerY, boxes, revealed]);

  const jump = () => {
    const floor = FLOOR_Y - PLAYER_H;
    if (!started) setStarted(true);
    if (playerY >= floor - 0.5) setVelY(-8.1);
  };

  const progress = Math.round((revealed.length / EXPERIENCES.length) * 100);

  return (
    <section className="glass overflow-hidden p-6 sm:p-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-200">srk.quest() · jump to unlock experience</h2>
        <span className="text-xs text-cyan-300">Space = jump · Enter = start</span>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
        <p>Unlocked: <span className="text-cyan-300">{revealed.length}/{EXPERIENCES.length}</span></p>
        <p>Profile sync: <span className="text-cyan-300">{progress}%</span></p>
        <p>Score: <span className="text-cyan-300">{score}</span></p>
        <button onClick={jump} className="rounded-md border border-cyan-300/50 px-3 py-1 text-cyan-200 hover:border-violet-300/60">Jump</button>
      </div>

      <div className="relative w-full overflow-x-auto rounded-xl border border-white/10 bg-slate-950/40">
        <div className="relative" style={{ width: `${boxes[boxes.length - 1].x + 240}px`, height: `${STAGE_H}px` }}>
          <div className="absolute left-0 right-0" style={{ top: `${FLOOR_Y}px`, height: "2px", background: "rgba(34,211,238,0.5)" }} />

          {boxes.map((box) => {
            const Icon = box.icon;
            const isOpen = revealed.includes(box.id);
            return (
              <div key={box.id}>
                <div
                  className={`absolute flex items-center justify-center rounded-md border text-xs font-bold transition ${isOpen ? "border-cyan-300 bg-cyan-400/20 text-cyan-100" : "border-yellow-200 bg-amber-300/20 text-amber-100"}`}
                  style={{ left: `${box.x}px`, top: `${box.y}px`, width: `${BOX_W}px`, height: `${BOX_H}px` }}
                  title={box.label}
                >
                  ?
                </div>

                {isOpen && (
                  <div className="absolute flex min-w-[180px] items-center gap-2 rounded-md border border-cyan-300/50 bg-slate-900/95 px-2 py-1.5 text-xs"
                    style={{ left: `${box.x - 52}px`, top: `${box.y - 44}px` }}>
                    <Icon className="text-cyan-300" />
                    <div>
                      <p className="font-semibold text-cyan-200">{box.label}</p>
                      <p className="text-slate-300">{box.tenure}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div
            className="absolute rounded-md border border-violet-300/70 bg-violet-400/30"
            style={{ left: `${playerX}px`, top: `${playerY}px`, width: `${PLAYER_W}px`, height: `${PLAYER_H}px` }}
            aria-label="player"
          />
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-400">
        Experience labels were inferred from your public profile visibility + existing portfolio timeline. If you want exact month ranges per role, I can lock those in once you share the precise start/end months.
      </p>
    </section>
  );
}
