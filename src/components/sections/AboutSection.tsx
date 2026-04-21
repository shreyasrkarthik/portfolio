"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGame } from '../../context/GameContext';

const CORE_STATS = [
  { label: 'Distributed Systems', pct: 95 },
  { label: 'Backend Engineering', pct: 93 },
  { label: 'Cloud Architecture', pct: 90 },
  { label: 'Applied ML / MLOps', pct: 80 },
  { label: 'Engineering Leadership', pct: 85 },
  { label: 'System Design', pct: 92 },
];

const QUICK_FACTS = [
  { icon: '📍', text: 'San Francisco Bay Area' },
  { icon: '🎓', text: 'M.S. CS — Northeastern (4.0 GPA)' },
  { icon: '⚡', text: 'Go · Python · Java · TypeScript' },
  { icon: '☁️', text: 'GCP · AWS · Kubernetes · Kafka' },
  { icon: '📡', text: '200K+ YouTube subscribers' },
  { icon: '🔗', text: 'F1 visa & career mentor' },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const { visitSection } = useGame();
  const [barsActive, setBarsActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      visitSection('about');
      const t = setTimeout(() => setBarsActive(true), 300);
      return () => clearTimeout(t);
    }
  }, [isInView, visitSection]);

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      {/* Section bg accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-3">01 — PROFILE OVERVIEW</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#FAF9F7' }}>
            The Engineer
            <span className="ml-3" style={{ color: '#D97706' }}>Behind the Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Character card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Card */}
            <div
              className="bracket-corner rounded-2xl p-7 mb-6"
              style={{
                background: 'rgba(26, 23, 20, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(61,56,48,0.5)',
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6 pb-5" style={{ borderBottom: '1px solid rgba(61,56,48,0.4)' }}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black shrink-0"
                  style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)', color: '#D97706' }}
                >
                  SRK
                </div>
                <div>
                  <div className="font-black text-lg leading-tight" style={{ color: '#FAF9F7' }}>Shreyas R K</div>
                  <div className="text-sm mt-0.5" style={{ color: '#D97706' }}>Senior Member of Technical Staff</div>
                  <div className="text-xs mt-0.5" style={{ color: '#78716C' }}>Salesforce · San Francisco, CA</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-wide" style={{ color: '#10B981' }}>ACTIVE</span>
                </div>
              </div>

              {/* Skill bars */}
              <div className="space-y-3.5">
                <div className="section-label mb-4">CORE COMPETENCIES</div>
                {CORE_STATS.map((s, i) => (
                  <div key={s.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: '#C4BFB8' }}>{s.label}</span>
                      <span className="font-mono" style={{ color: '#D97706' }}>{s.pct}</span>
                    </div>
                    <div className="stat-bar">
                      <motion.div
                        className="stat-bar-fill"
                        initial={{ width: '0%' }}
                        animate={{ width: barsActive ? `${s.pct}%` : '0%' }}
                        transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-2.5">
              {QUICK_FACTS.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs"
                  style={{
                    background: 'rgba(26,23,20,0.5)',
                    border: '1px solid rgba(42,37,32,0.7)',
                    color: '#A8A29E',
                  }}
                >
                  <span>{fact.icon}</span>
                  <span>{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(26, 23, 20, 0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(61,56,48,0.5)',
              }}
            >
              <div className="section-label mb-4">BIO</div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#C4BFB8' }}>
                <p>
                  I&apos;m a <span style={{ color: '#FAF9F7', fontWeight: 600 }}>Senior Member of Technical Staff at Salesforce</span>, building the distributed infrastructure that powers enterprise software at scale.
                </p>
                <p>
                  Before Salesforce, I spent three years at <span style={{ color: '#FAF9F7', fontWeight: 600 }}>PayPal</span> engineering high-scale microservices in Go and Python on GCP — systems that process hundreds of millions of daily transactions while maintaining tight SLA guarantees.
                </p>
                <p>
                  I&apos;ve been deeply into <span style={{ color: '#D97706' }}>distributed systems, event-driven architecture, and applied ML</span> across companies like Vymo, Ittiam Systems, and through graduate research at Northeastern University, where I graduated with a 4.0 GPA.
                </p>
                <p>
                  Outside engineering, I run a <span style={{ color: '#FAF9F7', fontWeight: 600 }}>200K+ subscriber YouTube channel</span> helping F1 visa holders, CS students, and early-career engineers navigate tech careers in the US.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '9+', label: 'Years of Engineering', color: '#D97706' },
                { val: '4.0', label: 'M.S. GPA @ NEU', color: '#7C3AED' },
                { val: '100M+', label: 'Daily Txns Handled', color: '#D97706' },
                { val: '200K+', label: 'YouTube Community', color: '#10B981' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: 'rgba(26,23,20,0.6)',
                    border: `1px solid rgba(${hexToRgb(item.color)}, 0.2)`,
                  }}
                >
                  <div className="text-3xl font-black font-mono" style={{ color: item.color }}>{item.val}</div>
                  <div className="text-xs mt-1" style={{ color: '#78716C' }}>{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const m = hex.replace('#', '').match(/.{2}/g);
  if (!m) return '217,119,6';
  return m.map(x => parseInt(x, 16)).join(',');
}
