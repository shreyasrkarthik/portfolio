"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../../context/GameContext';

const TITLES = [
  'Cloud & Distributed Systems Engineer',
  'Backend Platform Architect',
  'Senior Staff Engineer @ Salesforce',
  'Builder of high-scale systems',
];

const STATS = [
  { label: 'Daily Transactions', value: '100M+', suffix: '', icon: '⚡' },
  { label: 'Years Engineering', value: '9+', suffix: '', icon: '🛠' },
  { label: 'Companies Scaled', value: '4', suffix: '', icon: '🚀' },
  { label: 'YouTube Channel', value: '@shreyasrk', suffix: '', icon: '📡' },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

export default function HeroSection() {
  const { state, visitSection } = useGame();
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Typewriter
  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setIsDeleting(false);
        setTitleIdx((titleIdx + 1) % TITLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIdx]);

  // Stats visibility
  useEffect(() => {
    const t = setTimeout(() => setStatsVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visitSection('hero'); },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [visitSection]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(217,119,6,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(61,56,48,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(61,56,48,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: state.booted ? 1 : 0, y: state.booted ? 0 : -10 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-label mb-6 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px" style={{ background: '#D97706' }} />
          DEVELOPER PROFILE — SENIOR STAFF ENGINEER
          <span className="w-8 h-px" style={{ background: '#D97706' }} />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: state.booted ? 1 : 0, y: state.booted ? 0 : 30 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glitch-wrapper text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6"
          data-text="SHREYAS R K"
          style={{ color: '#FAF9F7' }}
        >
          SHREYAS
          <span className="block" style={{ color: '#D97706' }}>R K</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: state.booted ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-8 mb-10 font-mono text-lg md:text-xl"
          style={{ color: '#C4BFB8' }}
        >
          {displayed}
          <span className="inline-block w-0.5 h-5 ml-0.5 align-middle animate-blink" style={{ background: '#D97706' }} />
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: statsVisible ? 1 : 0, y: statsVisible ? 0 : 20 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: statsVisible ? 1 : 0, y: statsVisible ? 0 : 16 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bracket-corner px-4 py-3 rounded-lg"
              style={{
                background: 'rgba(26, 23, 20, 0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(61,56,48,0.5)',
              }}
            >
              <div className="text-xl mb-0.5">{stat.icon}</div>
              <div className="text-2xl font-black font-mono" style={{ color: '#D97706' }}>
                {stat.value}
              </div>
              <div className="text-xs mt-1 leading-tight" style={{ color: '#78716C' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: statsVisible ? 1 : 0, y: statsVisible ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button
            onClick={scrollToNext}
            className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: '#D97706',
              color: '#0C0A08',
              boxShadow: '0 0 20px rgba(217,119,6,0.3)',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = '#F59E0B';
              (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(245,158,11,0.5)';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = '#D97706';
              (e.target as HTMLElement).style.boxShadow = '0 0 20px rgba(217,119,6,0.3)';
            }}
          >
            EXPLORE PROFILE ↓
          </button>

          <a
            href="https://www.linkedin.com/in/shreyas-rk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider border transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid rgba(217,119,6,0.4)',
              color: '#D97706',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(217,119,6,0.1)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,119,6,0.7)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,119,6,0.4)';
            }}
          >
            LINKEDIN →
          </a>

          <a
            href="https://calendly.com/shreyasrk95/meeting-1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider border transition-all duration-300 hover:scale-105"
            style={{
              border: '1px solid rgba(61,56,48,0.7)',
              color: '#C4BFB8',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,191,184,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(61,56,48,0.7)';
            }}
          >
            BOOK A CALL
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: statsVisible ? 0.5 : 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-[9px] font-mono tracking-[0.4em] uppercase" style={{ color: '#5A5248' }}>SCROLL</div>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #D97706, transparent)' }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
