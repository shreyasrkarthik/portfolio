"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGame } from '../../context/GameContext';
import { projectsData } from '../../data/careerData';

const STATUS_META: Record<string, { label: string; color: string }> = {
  live:     { label: 'LIVE',     color: '#10B981' },
  archived: { label: 'ARCHIVED', color: '#78716C' },
  research: { label: 'RESEARCH', color: '#7C3AED' },
};

function ProjectCard({ project, index, isInView }: {
  project: typeof projectsData[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const statusMeta = STATUS_META[project.status] ?? STATUS_META.archived;
  const isClickable = project.link !== '#';

  const cardContent = (
    <div
      className="h-full rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
      style={{
        background: hovered
          ? 'rgba(36, 32, 24, 0.9)'
          : 'rgba(26, 23, 20, 0.7)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${hovered
          ? 'rgba(217,119,6,0.35)'
          : project.featured
          ? 'rgba(217,119,6,0.2)'
          : 'rgba(61,56,48,0.5)'}`,
        boxShadow: hovered
          ? '0 0 30px rgba(217,119,6,0.1), 0 8px 40px rgba(0,0,0,0.4)'
          : project.featured
          ? '0 0 0 0 rgba(217,119,6,0)'
          : 'none',
        transform: hovered ? 'translateY(-4px)' : 'none',
        cursor: isClickable ? 'pointer' : 'default',
      }}
    >
      {/* Featured glow bar */}
      {project.featured && (
        <div
          className="h-0.5 w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(217,119,6,0.6), transparent)' }}
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="text-3xl">{project.icon}</div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span
                className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest"
                style={{ background: 'rgba(217,119,6,0.15)', color: '#D97706' }}
              >
                FEATURED
              </span>
            )}
            <span
              className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-widest flex items-center gap-1"
              style={{
                background: `rgba(${hexToRgb(statusMeta.color)}, 0.12)`,
                color: statusMeta.color,
              }}
            >
              {project.status === 'live' && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse inline-block" />
              )}
              {statusMeta.label}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-black mb-1 leading-tight" style={{ color: '#FAF9F7' }}>
          {project.title}
        </h3>
        <p className="text-sm mb-3" style={{ color: '#D97706' }}>{project.tagline}</p>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#A8A29E' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono"
              style={{
                background: 'rgba(42,37,32,0.8)',
                border: '1px solid rgba(61,56,48,0.6)',
                color: '#78716C',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link indicator */}
        {isClickable && (
          <div
            className="mt-4 flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider transition-colors duration-200"
            style={{ color: hovered ? '#D97706' : '#5A5248' }}
          >
            OPEN PROJECT →
          </div>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isClickable ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const { visitSection } = useGame();

  useEffect(() => {
    if (isInView) visitSection('projects');
  }, [isInView, visitSection]);

  const featured = projectsData.filter(p => p.featured);
  const rest = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 80%, rgba(124,58,237,0.05) 0%, transparent 70%)',
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
          <div className="section-label mb-3">04 — ACTIVE MISSIONS</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#FAF9F7' }}>
            Projects &amp;
            <span className="ml-3" style={{ color: '#D97706' }}>Deployments</span>
          </h2>
          <p className="mt-4 text-base max-w-xl" style={{ color: '#78716C' }}>
            Side projects, experiments, and community work outside the day job.
          </p>
        </motion.div>

        {/* Featured grid */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} isInView={isInView} />
            ))}
          </div>
        )}

        {/* Rest grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={featured.length + i} isInView={isInView} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const m = hex.replace('#', '').match(/.{2}/g);
  if (!m) return '217,119,6';
  return m.map(x => parseInt(x, 16)).join(',');
}
