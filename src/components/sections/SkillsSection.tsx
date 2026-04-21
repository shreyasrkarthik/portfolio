"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import { skillsData } from '../../data/careerData';

const CATEGORY_META: Record<string, { label: string; color: string; icon: string }> = {
  languages:     { label: 'Languages',        color: '#D97706', icon: '{ }' },
  infrastructure:{ label: 'Infrastructure',   color: '#3B82F6', icon: '☁' },
  architecture:  { label: 'Architecture',     color: '#10B981', icon: '⬡' },
  ml:            { label: 'ML / Data',        color: '#7C3AED', icon: '🧠' },
  frontend:      { label: 'Frontend',         color: '#F59E0B', icon: '◈' },
};

function SkillTag({
  name, level, highlight, color, delay, active
}: {
  name: string; level: number; highlight?: boolean; color: string; delay: number; active: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={active ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.3, ease: 'backOut' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-default select-none"
    >
      <div
        className="px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
        style={{
          background: hovered
            ? `rgba(${hexToRgb(color)}, 0.15)`
            : highlight
            ? `rgba(${hexToRgb(color)}, 0.08)`
            : 'rgba(26,23,20,0.6)',
          border: `1px solid ${hovered ? `rgba(${hexToRgb(color)}, 0.5)` : highlight ? `rgba(${hexToRgb(color)}, 0.25)` : 'rgba(61,56,48,0.4)'}`,
          color: hovered ? '#FAF9F7' : highlight ? '#C4BFB8' : '#78716C',
          boxShadow: hovered ? `0 0 15px rgba(${hexToRgb(color)}, 0.1)` : 'none',
          transform: hovered ? 'translateY(-2px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <span>{name}</span>
          {highlight && (
            <span
              className="text-[10px] font-mono font-bold"
              style={{ color }}
            >
              ★
            </span>
          )}
        </div>

        {/* Proficiency bar */}
        {hovered && (
          <div className="mt-1.5 stat-bar">
            <motion.div
              className="stat-bar-fill"
              initial={{ width: '0%' }}
              animate={{ width: `${level}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function SkillCategory({
  categoryKey, active
}: {
  categoryKey: keyof typeof skillsData;
  active: boolean;
}) {
  const meta = CATEGORY_META[categoryKey];
  const skills = skillsData[categoryKey];
  if (!meta || !skills) return null;

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'rgba(26,23,20,0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(61,56,48,0.5)',
      }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(61,56,48,0.4)' }}>
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{ background: `rgba(${hexToRgb(meta.color)}, 0.15)`, color: meta.color }}
        >
          {meta.icon}
        </span>
        <div>
          <div className="font-bold text-sm tracking-wide" style={{ color: '#FAF9F7' }}>{meta.label}</div>
          <div className="text-[10px] font-mono" style={{ color: '#5A5248' }}>
            {skills.length} SKILLS · HOVER FOR PROFICIENCY
          </div>
        </div>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillTag
            key={skill.name}
            name={skill.name}
            level={skill.level}
            highlight={skill.highlight}
            color={meta.color}
            delay={i * 0.04}
            active={active}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const { visitSection } = useGame();

  useEffect(() => {
    if (isInView) visitSection('skills');
  }, [isInView, visitSection]);

  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
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
          <div className="section-label mb-3">03 — TECHNICAL ARSENAL</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#FAF9F7' }}>
            Skills &amp;
            <span className="ml-3" style={{ color: '#D97706' }}>Technologies</span>
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: '#78716C' }}>
            ★ = Primary strength · Hover any skill to see proficiency.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {categories.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <SkillCategory categoryKey={key} active={isInView} />
            </motion.div>
          ))}
        </div>

        {/* Legend note */}
        <motion.div
          className="mt-10 text-center text-xs font-mono"
          style={{ color: '#3D3830' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          TIP: Try the ↑↑↓↓←→←→BA sequence for a surprise
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
