"use client";

import { useGame, XP_PER_LEVEL } from '../../context/GameContext';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'hero',       label: 'HERO',        href: '#hero' },
  { id: 'about',      label: 'PROFILE',     href: '#about' },
  { id: 'experience', label: 'TIMELINE',    href: '#experience' },
  { id: 'skills',     label: 'ARSENAL',     href: '#skills' },
  { id: 'projects',   label: 'MISSIONS',    href: '#projects' },
  { id: 'community',  label: 'BROADCAST',   href: '#community' },
  { id: 'contact',    label: 'CONTACT',     href: '#contact' },
];

export default function GameHUD() {
  const { state } = useGame();
  const xpPct = Math.min((state.xp % XP_PER_LEVEL) / XP_PER_LEVEL * 100, 100);
  const unlockedCount = state.achievements.filter(a => a.unlocked).length;

  return (
    <>
      {/* Bottom-left: Level + XP */}
      <motion.div
        className="fixed bottom-6 left-6 z-50 font-mono pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: state.booted ? 1 : 0, y: state.booted ? 0 : 20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div
          className="px-3 py-2.5 rounded-lg"
          style={{
            background: 'rgba(26, 23, 20, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(61, 56, 48, 0.7)',
          }}
        >
          {/* Level */}
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-xs font-black"
              style={{ background: '#D97706', color: '#0C0A08' }}
            >
              {state.level}
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase" style={{ color: '#78716C' }}>
                Level
              </div>
              <div className="text-[11px] font-bold leading-none" style={{ color: '#FAF9F7' }}>
                {getLevelTitle(state.level)}
              </div>
            </div>
          </div>

          {/* XP Bar */}
          <div className="w-36">
            <div className="flex justify-between text-[9px] mb-1" style={{ color: '#5A5248' }}>
              <span>XP</span>
              <span>{state.xp} / {state.level * XP_PER_LEVEL}</span>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: '#2A2520' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #D97706, #F59E0B)' }}
                initial={{ width: '0%' }}
                animate={{ width: `${xpPct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Achievement count */}
          <div className="mt-2 text-[9px] tracking-wider" style={{ color: '#5A5248' }}>
            {unlockedCount}/{state.achievements.length} ACHIEVEMENTS
          </div>
        </div>
      </motion.div>

      {/* Right-side nav */}
      <motion.nav
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5 pointer-events-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: state.booted ? 1 : 0, x: state.booted ? 0 : 20 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {NAV_ITEMS.map(item => {
          const isActive = state.currentSection === item.id;
          const isVisited = state.visitedSections.has(item.id);
          return (
            <a
              key={item.id}
              href={item.href}
              className="group flex items-center gap-2 justify-end"
              title={item.label}
            >
              <span
                className="text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-200 font-mono whitespace-nowrap"
                style={{ color: isActive ? '#D97706' : '#78716C' }}
              >
                {item.label}
              </span>
              <div
                className="rounded-full transition-all duration-300"
                style={{
                  width: isActive ? '10px' : '6px',
                  height: isActive ? '10px' : '6px',
                  background: isActive ? '#D97706' : isVisited ? '#5A5248' : '#2A2520',
                  boxShadow: isActive ? '0 0 8px rgba(217,119,6,0.6)' : 'none',
                }}
              />
            </a>
          );
        })}
      </motion.nav>

      {/* Top-left: Logo / brand */}
      <motion.div
        className="fixed top-5 left-6 z-50 font-mono pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: state.booted ? 1 : 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a href="#hero" className="group flex items-center gap-2">
          <div
            className="text-sm font-black tracking-[0.25em] transition-all duration-300"
            style={{ color: '#D97706' }}
          >
            SRK
          </div>
          <div className="text-[9px] tracking-[0.3em] uppercase hidden md:block transition-colors duration-200 group-hover:text-[#D97706]"
            style={{ color: '#5A5248' }}
          >
            .OS
          </div>
        </a>
      </motion.div>

      {/* Top-right: Section label */}
      <motion.div
        className="fixed top-5 right-14 z-50 font-mono pointer-events-none hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: state.booted ? 1 : 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="text-[9px] tracking-[0.4em] uppercase" style={{ color: '#5A5248' }}>
          {state.currentSection.toUpperCase()}
        </div>
      </motion.div>
    </>
  );
}

function getLevelTitle(level: number): string {
  const titles = ['', 'Recruiter', 'Explorer', 'Analyst', 'Architect', 'Director', 'Operator'];
  return titles[Math.min(level, titles.length - 1)] ?? 'Operator';
}
