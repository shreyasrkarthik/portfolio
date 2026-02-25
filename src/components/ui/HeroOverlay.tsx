"use client";

import { motion } from 'framer-motion';
import { careerData } from '../../data/careerData';

export default function HeroOverlay() {
  return (
    <div id="scroll-container" className="w-full relative z-10 pointer-events-none">
      
      {/* Section 0: Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center pointer-events-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold font-sans text-white mb-4"
        >
          Shreyas R K
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl text-blue-300 font-mono"
        >
          Cloud & Distributed Systems Engineer
        </motion.p>
        <div className="mt-8 flex gap-4">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition">
            Explore My Work
          </button>
          <button className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition">
            View Resume
          </button>
        </div>
      </section>

      {/* HUD / Status Bar */}
      <div className="fixed bottom-8 left-8 z-50 font-mono text-xs text-cyan-500/60 pointer-events-none hidden md:block">
        <div>SYSTEM: ONLINE</div>
        <div>TARGET: CLOUD_ARCHITECT</div>
      </div>

      {/* Section: Timeline Spacers */}
      {/* Reduced height to min-h-[70vh] to tighten the gaps */}
      {careerData.map((node, index) => (
        <section key={node.id} className="min-h-[70vh] flex items-center p-4 md:p-20 pointer-events-auto relative">
          
          {/* Connecting Line (Visual Guide) */}
          <div className="absolute left-8 md:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900/50 to-transparent hidden md:block" />
          
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-black/60 backdrop-blur-xl p-6 md:p-8 rounded-lg border border-cyan-500/20 shadow-[0_0_15px_rgba(0,212,255,0.1)] max-w-xl md:ml-24 relative overflow-hidden group ml-auto mr-auto md:mr-0"
          >
            {/* Tech Decoration: Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500/50" />
            
            <div className="flex items-baseline justify-between mb-2">
               <h2 className="text-3xl font-bold text-cyan-400 font-display tracking-tight">{node.company}</h2>
               <span className="text-xs font-mono text-cyan-500/50">0{index + 1}</span>
            </div>
            
            <h3 className="text-lg text-white mb-3 font-medium border-b border-white/10 pb-2">{node.title}</h3>
            <p className="text-gray-400 mb-4 font-mono text-xs uppercase tracking-wider text-cyan-200/60">{node.duration} • {node.location}</p>
            
            <ul className="space-y-2 text-gray-300 text-sm mb-5">
              {node.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">›</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {node.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-cyan-950/40 border border-cyan-900 text-cyan-300 text-[10px] uppercase tracking-wider rounded">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      ))}

      {/* Section: Skills & Projects */}
      <section className="h-screen flex items-center justify-center pointer-events-auto">
        <div className="text-center bg-black/60 p-10 rounded-2xl backdrop-blur-lg border border-white/10">
          <h2 className="text-5xl font-bold text-white mb-8">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Languages, frameworks, and tools used to build high-scale distributed systems.
            (Check the orbiting nodes above)
          </p>
        </div>
      </section>

      {/* Section: Contact */}
      <section className="h-screen flex items-center justify-center pointer-events-auto">
         <div className="bg-black/80 p-12 rounded-2xl border border-white/10 text-center max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s build something remarkable.</h2>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition">YouTube</a>
            </div>
            <p className="text-gray-500">© 2026 Shreyas R K</p>
         </div>
      </section>

    </div>
  );
}
