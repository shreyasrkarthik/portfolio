"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "home", href: "#home" },
  { name: "signal", href: "#signal" },
  { name: "game", href: "#game" },
  { name: "about", href: "#about" },
  { name: "contact", href: "#contact" },
  { name: "resume", href: "/resume" },
  { name: "projects", href: "/projects" },
];

export default function NavBar() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    const value = localStorage.getItem("srk_game_best");
    if (value) setScore(value);
  }, []);

  return (
    <header className="sticky top-0 z-50 py-3">
      <nav className="glass mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="pulse-dot" />
            <span className="font-semibold tracking-wide">SHREYAS//OS</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md border border-white/10 px-3 py-1.5 text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-xs text-slate-300">
            Game rank: <span className="text-cyan-300">{score ? `${score}%` : "unclaimed"}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
