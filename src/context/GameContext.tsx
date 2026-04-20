"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  xp: number;
  icon: string;
  unlocked: boolean;
}

interface GameState {
  xp: number;
  level: number;
  achievements: Achievement[];
  visitedSections: Set<string>;
  currentSection: string;
  pendingToast: Achievement | null;
  booted: boolean;
}

const XP_PER_LEVEL = 100;

const INITIAL_ACHIEVEMENTS: Achievement[] = [
  { id: 'boot',       title: 'SYSTEM ONLINE',     description: 'Portfolio initialized',          xp: 10,  icon: '⚡', unlocked: false },
  { id: 'about',      title: 'INTEL RECEIVED',    description: 'Accessed profile overview',      xp: 25,  icon: '🔍', unlocked: false },
  { id: 'experience', title: 'TIMELINE DECODED',  description: 'Reviewed career progression',    xp: 50,  icon: '📋', unlocked: false },
  { id: 'skills',     title: 'ARSENAL MAPPED',    description: 'Surveyed tech capabilities',     xp: 50,  icon: '⚔️', unlocked: false },
  { id: 'projects',   title: 'MISSIONS REVIEWED', description: 'Inspected project deployments',  xp: 75,  icon: '🚀', unlocked: false },
  { id: 'community',  title: 'SIGNAL RECEIVED',   description: 'Tuned into broadcast channel',   xp: 50,  icon: '📡', unlocked: false },
  { id: 'contact',    title: 'CHANNEL OPEN',      description: 'Initiated comms protocol',       xp: 100, icon: '📨', unlocked: false },
  { id: 'all',        title: 'FULL CLEARANCE',    description: 'All sections accessed',          xp: 250, icon: '🏆', unlocked: false },
  { id: 'konami',     title: 'OPERATOR MODE',     description: 'Discovered hidden protocol',     xp: 500, icon: '🎮', unlocked: false },
];

interface GameContextType {
  state: GameState;
  unlockAchievement: (id: string) => void;
  visitSection: (section: string) => void;
  clearToast: () => void;
  setBooted: () => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [xp, setXp] = useState(0);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());
  const [currentSection, setCurrentSection] = useState('hero');
  const [pendingToast, setPendingToast] = useState<Achievement | null>(null);
  const [booted, setBootedState] = useState(false);

  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpInCurrentLevel = xp % XP_PER_LEVEL;

  const unlockAchievement = useCallback((id: string) => {
    setAchievements(prev => {
      const achievement = prev.find(a => a.id === id);
      if (!achievement || achievement.unlocked) return prev;
      const updated = prev.map(a => a.id === id ? { ...a, unlocked: true } : a);
      setXp(x => x + achievement.xp);
      setPendingToast({ ...achievement, unlocked: true });
      return updated;
    });
  }, []);

  const visitSection = useCallback((section: string) => {
    setCurrentSection(section);
    setVisitedSections(prev => {
      if (prev.has(section)) return prev;
      const next = new Set(prev);
      next.add(section);
      return next;
    });
    unlockAchievement(section);
  }, [unlockAchievement]);

  const clearToast = useCallback(() => setPendingToast(null), []);
  const setBooted = useCallback(() => {
    setBootedState(true);
    unlockAchievement('boot');
  }, [unlockAchievement]);

  // Check for full clearance
  useEffect(() => {
    const required = ['about', 'experience', 'skills', 'projects', 'community', 'contact'];
    if (required.every(s => visitedSections.has(s))) {
      unlockAchievement('all');
    }
  }, [visitedSections, unlockAchievement]);

  // Konami code listener
  useEffect(() => {
    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let idx = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === sequence[idx]) {
        idx++;
        if (idx === sequence.length) {
          unlockAchievement('konami');
          idx = 0;
        }
      } else {
        idx = e.key === sequence[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [unlockAchievement]);

  const state: GameState = {
    xp,
    level,
    achievements,
    visitedSections,
    currentSection,
    pendingToast,
    booted,
  };

  return (
    <GameContext.Provider value={{ state, unlockAchievement, visitSection, clearToast, setBooted }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}

export { XP_PER_LEVEL };
