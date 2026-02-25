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

      {/* Section: Timeline Spacers */}
      {/* These empty sections force the scroll height to match the GSAP timeline */}
      {careerData.map((node) => (
        <section key={node.id} className="h-screen flex items-center p-20 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-xl ml-auto md:ml-20"
          >
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">{node.company}</h2>
            <h3 className="text-xl text-white mb-4">{node.title}</h3>
            <p className="text-gray-400 mb-4 font-mono text-sm">{node.duration} • {node.location}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {node.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {node.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
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
            <h2 className="text-4xl font-bold text-white mb-6">Let's build something remarkable.</h2>
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
