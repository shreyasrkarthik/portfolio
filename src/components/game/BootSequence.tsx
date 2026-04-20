"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '../../context/GameContext';

const LINES = [
  { text: 'PORTFOLIO OS v2.6 — SHREYAS R K', type: 'header', delay: 0 },
  { text: '', type: 'blank', delay: 300 },
  { text: 'Loading career data................... [OK]', type: 'ok', delay: 500 },
  { text: 'Mapping skills architecture.......... [OK]', type: 'ok', delay: 900 },
  { text: 'Connecting to networks............... [OK]', type: 'ok', delay: 1300 },
  { text: 'Verifying credentials................ [OK]', type: 'ok', delay: 1700 },
  { text: 'Initializing interactive shell....... [OK]', type: 'ok', delay: 2000 },
  { text: '', type: 'blank', delay: 2300 },
  { text: '> PROFILE LOADED. WELCOME, RECRUITER.', type: 'success', delay: 2500 },
];

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [shownLines, setShownLines] = useState<typeof LINES>([]);
  const { setBooted } = useGame();
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setShownLines(prev => [...prev, line]);
      }, line.delay);
      timerRefs.current.push(t);
    });

    const exitTimer = setTimeout(() => {
      setExiting(true);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        setBooted();
      }, 600);
      timerRefs.current.push(hideTimer);
    }, 3400);
    timerRefs.current.push(exitTimer);

    return () => timerRefs.current.forEach(clearTimeout);
  }, [setBooted]);

  const skip = () => {
    timerRefs.current.forEach(clearTimeout);
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setBooted();
    }, 400);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-[#0C0A08] flex items-center justify-center scanlines"
        initial={{ opacity: 1 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }}
        />

        <div className="relative z-10 font-mono text-sm w-full max-w-lg px-8 py-12">
          {/* Logo mark */}
          <div className="mb-10 text-center">
            <div
              className="inline-block text-4xl font-black tracking-[0.4em] mb-3"
              style={{ color: '#D97706', textShadow: '0 0 20px rgba(217,119,6,0.5)' }}
            >
              S·R·K
            </div>
            <div className="text-xs tracking-[0.6em] uppercase" style={{ color: '#78716C' }}>
              Developer Profile
            </div>
          </div>

          {/* Boot lines */}
          <div className="space-y-1.5 min-h-[200px]">
            {shownLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
                className={`
                  ${line.type === 'blank' ? 'h-2' : ''}
                  ${line.type === 'header' ? 'text-[#C4BFB8] font-bold mb-4' : ''}
                  ${line.type === 'ok' ? 'text-[#5A5248]' : ''}
                  ${line.type === 'success' ? 'font-bold mt-3' : ''}
                `}
                style={line.type === 'success' ? { color: '#D97706' } : {}}
              >
                {line.type === 'ok' ? (
                  <>
                    <span style={{ color: '#3D3830' }}>{line.text.replace('[OK]', '')}</span>
                    <span style={{ color: '#10B981' }}>[OK]</span>
                  </>
                ) : (
                  line.text
                )}
                {i === shownLines.length - 1 && !exiting && (
                  <span
                    className="inline-block ml-0.5 w-2 h-4 bg-[#D97706] align-middle"
                    style={{ animation: 'blink 1s step-end infinite' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Skip hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1 }}
            onClick={skip}
            className="absolute bottom-6 right-8 text-xs tracking-widest uppercase text-[#5A5248] hover:text-[#D97706] transition-colors cursor-pointer"
          >
            SKIP →
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
