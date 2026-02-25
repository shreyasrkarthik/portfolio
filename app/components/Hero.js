"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="glass relative overflow-hidden p-6 sm:p-10">
      <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative grid items-center gap-8 md:grid-cols-[220px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-cyan-300/40"
        >
          <Image src="/SRK.png" alt="Shreyas" fill className="object-cover" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">System online</p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            I build systems that scale.
            <br />
            <span className="text-violet-300">I create content that sticks.</span>
          </h1>
          <p className="max-w-2xl text-slate-300">
            I&apos;m Shreyas — Software Engineer, builder, and creator. This is not a normal portfolio.
            Explore the modules, play the mini-game, and decode how I think.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
