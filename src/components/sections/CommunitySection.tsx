"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGame } from '../../context/GameContext';

const CONTENT_TYPES = [
  {
    icon: '🎓',
    title: 'F1 Visa & OPT/H1B Guide',
    description: 'The most-watched series on the channel. Practical guidance for international students navigating US work authorization.',
    tag: 'Most Watched',
    tagColor: '#D97706',
  },
  {
    icon: '⚙️',
    title: 'System Design Deep Dives',
    description: 'Real architectures — distributed queues, payment rails, caching layers — explained from production experience, not textbooks.',
    tag: 'Engineering',
    tagColor: '#3B82F6',
  },
  {
    icon: '🗺️',
    title: 'Tech Career Strategy',
    description: 'How to break into FAANG+, navigate promotions, build your personal brand, and make the most of your first decade in tech.',
    tag: 'Career',
    tagColor: '#10B981',
  },
  {
    icon: '🤖',
    title: 'AI & LLM Experiments',
    description: 'From agentic workflows to production LLM integration — covering what actually works vs what&apos;s overhyped.',
    tag: 'AI/ML',
    tagColor: '#7C3AED',
  },
];

const STATS = [
  { val: '200K+', label: 'Subscribers', icon: '👥' },
  { val: '400+', label: 'Videos', icon: '🎬' },
  { val: '10M+', label: 'Views', icon: '👁' },
  { val: '2019', label: 'Founded', icon: '📅' },
];

export default function CommunitySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const { visitSection } = useGame();

  useEffect(() => {
    if (isInView) visitSection('community');
  }, [isInView, visitSection]);

  return (
    <section id="community" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(217,119,6,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-3">05 — BROADCAST CHANNEL</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#FAF9F7' }}>
            YouTube &amp;
            <span className="ml-3" style={{ color: '#D97706' }}>Community</span>
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: '#78716C' }}>
            Building a community of engineers and CS students who want to grow their careers in the US tech industry.
          </p>
        </motion.div>

        {/* Main banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-8 md:p-10 mb-8 relative overflow-hidden"
          style={{
            background: 'rgba(26,23,20,0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(217,119,6,0.25)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(217,119,6,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Channel icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shrink-0"
              style={{
                background: 'rgba(217,119,6,0.12)',
                border: '1px solid rgba(217,119,6,0.3)',
              }}
            >
              📡
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-2xl font-black" style={{ color: '#FAF9F7' }}>
                  @shreyasrk
                </h3>
                <span
                  className="px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest flex items-center gap-1.5"
                  style={{ background: 'rgba(217,119,6,0.15)', color: '#D97706' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
                  ACTIVE CHANNEL
                </span>
              </div>
              <p className="text-base mb-5" style={{ color: '#A8A29E' }}>
                Tech career guidance, system design, F1 visa navigation, and engineering deep-dives for the global developer community.
              </p>

              {/* Channel stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <div className="text-2xl font-black font-mono" style={{ color: '#D97706' }}>
                      {s.val}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: '#5A5248' }}>
                      {s.icon} {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://youtube.com/@shreyasrk"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-full font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: '#D97706',
                color: '#0C0A08',
                boxShadow: '0 0 20px rgba(217,119,6,0.3)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#F59E0B';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(245,158,11,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#D97706';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(217,119,6,0.3)';
              }}
            >
              WATCH NOW →
            </a>
          </div>
        </motion.div>

        {/* Content type grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTENT_TYPES.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="flex gap-4 p-5 rounded-xl"
              style={{
                background: 'rgba(26,23,20,0.5)',
                border: '1px solid rgba(61,56,48,0.4)',
              }}
            >
              <div className="text-2xl shrink-0 mt-0.5">{type.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="font-bold text-sm" style={{ color: '#FAF9F7' }}>{type.title}</span>
                  <span
                    className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest"
                    style={{
                      background: `rgba(${hexToRgb(type.tagColor)}, 0.12)`,
                      color: type.tagColor,
                    }}
                  >
                    {type.tag}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#78716C' }}
                >
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
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
