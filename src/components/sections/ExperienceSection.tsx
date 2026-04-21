"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import { careerData } from '../../data/careerData';

const TYPE_COLORS: Record<string, string> = {
  work: '#D97706',
  education: '#7C3AED',
};

const TYPE_LABELS: Record<string, string> = {
  work: 'WORK',
  education: 'EDU',
};

function hexToRgb(hex: string): string {
  const m = hex.replace('#', '').match(/.{2}/g);
  if (!m) return '217,119,6';
  return m.map(x => parseInt(x, 16)).join(',');
}

function TimelineEntry({ node, index, isInView }: {
  node: typeof careerData[0];
  index: number;
  isInView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const accentColor = TYPE_COLORS[node.type] ?? '#D97706';
  const rgb = hexToRgb(accentColor);

  return (
    <motion.div
      className="relative mb-10 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-[21px] md:-left-[37px] top-5 w-3 h-3 rounded-full border-2 z-10"
        style={{
          background: node.current ? '#10B981' : '#0C0A08',
          borderColor: accentColor,
          boxShadow: node.current
            ? '0 0 10px rgba(16,185,129,0.5)'
            : `0 0 6px rgba(${rgb}, 0.3)`,
        }}
      />

      {/* Card */}
      <div
        className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: 'rgba(26, 23, 20, 0.7)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${expanded ? `rgba(${rgb}, 0.4)` : 'rgba(61,56,48,0.5)'}`,
          boxShadow: expanded ? `0 0 20px rgba(${rgb}, 0.08)` : 'none',
        }}
        onClick={() => setExpanded(v => !v)}
      >
        <div className="p-5 md:p-6">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span
                  className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest"
                  style={{ background: `rgba(${rgb}, 0.15)`, color: accentColor }}
                >
                  {TYPE_LABELS[node.type]}
                </span>
                {node.current && (
                  <span
                    className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest"
                    style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}
                  >
                    CURRENT
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-black leading-tight" style={{ color: '#FAF9F7' }}>
                {node.company}
              </h3>
              <div className="text-sm mt-0.5" style={{ color: '#C4BFB8' }}>{node.title}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xs font-mono" style={{ color: accentColor }}>{node.duration}</div>
              <div className="text-xs mt-0.5" style={{ color: '#78716C' }}>{node.location}</div>
            </div>
          </div>

          {/* Impact chips */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {node.impact.map(imp => (
              <span
                key={imp}
                className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium"
                style={{
                  background: 'rgba(217,119,6,0.1)',
                  color: '#F59E0B',
                  border: '1px solid rgba(217,119,6,0.2)',
                }}
              >
                {imp}
              </span>
            ))}
          </div>

          {/* Expandable details */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-3" style={{ borderTop: '1px solid rgba(61,56,48,0.4)' }}>
              <ul className="space-y-1.5 mb-4">
                {node.description.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#A8A29E' }}>
                    <span style={{ color: '#D97706', marginTop: '2px', flexShrink: 0 }}>›</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {node.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-mono"
                    style={{
                      background: 'rgba(42,37,32,0.8)',
                      border: '1px solid rgba(61,56,48,0.6)',
                      color: '#78716C',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Expand hint */}
          <div className="mt-3 text-[10px] font-mono" style={{ color: '#5A5248' }}>
            {expanded ? '▲ COLLAPSE' : '▼ EXPAND DETAILS'}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const { visitSection } = useGame();

  useEffect(() => {
    if (isInView) visitSection('experience');
  }, [isInView, visitSection]);

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 20% 50%, rgba(217,119,6,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label mb-3">02 — QUEST LOG</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#FAF9F7' }}>
            Career
            <span className="ml-3" style={{ color: '#D97706' }}>Timeline</span>
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: '#78716C' }}>
            10 years of shipping — from Bangalore to Boston to San Francisco.
            Click any entry to expand.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(217,119,6,0.2) 10%, rgba(217,119,6,0.2) 90%, transparent)',
            }}
          />
          {[...careerData].reverse().map((node, i) => (
            <TimelineEntry key={node.id} node={node} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
