"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../../context/GameContext';

export default function AchievementToast() {
  const { state, clearToast } = useGame();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!state.pendingToast) return;
    setVisible(true);
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(clearToast, 400);
    }, 3500);
    return () => clearTimeout(t);
  }, [state.pendingToast, clearToast]);

  return (
    <div className="fixed top-6 right-6 z-[150] pointer-events-none">
      <AnimatePresence>
        {visible && state.pendingToast && (
          <motion.div
            key={state.pendingToast.id}
            initial={{ opacity: 0, x: 120, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="bracket-corner rounded-lg overflow-hidden"
            style={{
              background: 'rgba(26, 23, 20, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              boxShadow: '0 0 30px rgba(217, 119, 6, 0.15), 0 8px 32px rgba(0,0,0,0.5)',
              minWidth: '260px',
            }}
          >
            {/* Top accent bar */}
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D97706] to-transparent" />

            <div className="px-4 py-3">
              {/* Label */}
              <div className="section-label mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] inline-block animate-pulse" />
                ACHIEVEMENT UNLOCKED
              </div>

              <div className="flex items-center gap-3">
                <div className="text-2xl">{state.pendingToast.icon}</div>
                <div>
                  <div className="font-bold text-sm tracking-wide" style={{ color: '#FAF9F7' }}>
                    {state.pendingToast.title}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#78716C' }}>
                    {state.pendingToast.description}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-xs font-mono font-bold" style={{ color: '#D97706' }}>
                    +{state.pendingToast.xp} XP
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar draining */}
            <motion.div
              className="h-0.5"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.5, ease: 'linear' }}
              style={{ transformOrigin: 'left', background: 'rgba(217, 119, 6, 0.5)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
