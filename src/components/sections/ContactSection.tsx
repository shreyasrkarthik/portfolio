"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGame } from '../../context/GameContext';

const CHANNELS = [
  {
    icon: '💼',
    label: 'LinkedIn',
    handle: '/in/shreyas-rk',
    href: 'https://www.linkedin.com/in/shreyas-rk',
    desc: 'Connect professionally',
    color: '#3B82F6',
  },
  {
    icon: '📅',
    label: 'Calendly',
    handle: '30-min intro call',
    href: 'https://calendly.com/shreyasrk95/meeting-1-1',
    desc: 'Book a meeting directly',
    color: '#10B981',
    featured: true,
  },
  {
    icon: '📺',
    label: 'YouTube',
    handle: '@shreyasrk',
    href: 'https://youtube.com/@shreyasrk',
    desc: '200K+ community',
    color: '#D97706',
  },
  {
    icon: '🌐',
    label: 'Personal Site',
    handle: 'shreyasrk.com',
    href: 'https://www.shreyasrk.com',
    desc: 'More about me',
    color: '#7C3AED',
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const { visitSection } = useGame();
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) visitSection('contact');
  }, [isInView, visitSection]);

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20 pb-40">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(217,119,6,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="section-label mb-3 justify-center flex">06 — OPEN CHANNEL</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#FAF9F7' }}>
            Let&apos;s Build
            <span className="ml-3" style={{ color: '#D97706' }}>Something</span>
          </h2>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: '#78716C' }}>
            Open to senior engineering roles, consulting, advisory, and collaboration on interesting distributed systems problems.
          </p>
        </motion.div>

        {/* Featured CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: 'rgba(26,23,20,0.8)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(217,119,6,0.3)',
            boxShadow: '0 0 40px rgba(217,119,6,0.08)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 70% at 50% 120%, rgba(217,119,6,0.07) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-black mb-2" style={{ color: '#FAF9F7' }}>
              Want to recruit or collaborate?
            </h3>
            <p className="mb-6 text-base" style={{ color: '#A8A29E' }}>
              Skip the back-and-forth. Book a 30-minute call directly.
            </p>
            <a
              href="https://calendly.com/shreyasrk95/meeting-1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-black text-base tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background: '#D97706',
                color: '#0C0A08',
                boxShadow: '0 0 25px rgba(217,119,6,0.4)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#F59E0B';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(245,158,11,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#D97706';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(217,119,6,0.4)';
              }}
            >
              BOOK A CALL →
            </a>
          </div>
        </motion.div>

        {/* Channels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {CHANNELS.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 no-underline"
              style={{
                background: hoveredChannel === ch.label
                  ? `rgba(${hexToRgb(ch.color)}, 0.08)`
                  : 'rgba(26,23,20,0.5)',
                border: `1px solid ${hoveredChannel === ch.label
                  ? `rgba(${hexToRgb(ch.color)}, 0.3)`
                  : 'rgba(61,56,48,0.4)'}`,
                transform: hoveredChannel === ch.label ? 'translateY(-2px)' : 'none',
                boxShadow: hoveredChannel === ch.label
                  ? `0 8px 24px rgba(${hexToRgb(ch.color)}, 0.08)`
                  : 'none',
              }}
              onMouseEnter={() => setHoveredChannel(ch.label)}
              onMouseLeave={() => setHoveredChannel(null)}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{
                  background: `rgba(${hexToRgb(ch.color)}, 0.12)`,
                  border: `1px solid rgba(${hexToRgb(ch.color)}, 0.2)`,
                }}
              >
                {ch.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm" style={{ color: '#FAF9F7' }}>{ch.label}</span>
                  {ch.featured && (
                    <span
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest"
                      style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}
                    >
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono truncate mt-0.5" style={{ color: ch.color }}>{ch.handle}</div>
                <div className="text-xs" style={{ color: '#5A5248' }}>{ch.desc}</div>
              </div>
              <div
                className="text-sm transition-transform duration-200"
                style={{
                  color: hoveredChannel === ch.label ? ch.color : '#3D3830',
                  transform: hoveredChannel === ch.label ? 'translateX(3px)' : 'none',
                }}
              >
                →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center border-t pt-10"
          style={{ borderColor: 'rgba(42,37,32,0.5)' }}
        >
          <div
            className="text-2xl font-black tracking-[0.3em] mb-2"
            style={{ color: '#D97706' }}
          >
            SRK
          </div>
          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: '#3D3830' }}>
            Shreyas R K · Senior Staff Engineer · San Francisco, CA · © 2026
          </p>
          <p className="text-xs font-mono mt-2" style={{ color: '#2A2520' }}>
            Built with Next.js · Three.js · Framer Motion · Claude
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const m = hex.replace('#', '').match(/.{2}/g);
  if (!m) return '217,119,6';
  return m.map(x => parseInt(x, 16)).join(',');
}
