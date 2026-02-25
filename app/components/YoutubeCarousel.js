"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "idG8NIwtplU", title: "Systems + Career" },
  { id: "raxX1wwnSTY", title: "Builder Mindset" },
  { id: "ipX3ovvNJ8g", title: "Engineering Stories" },
];

export default function YouTubeCarousel() {
  return (
    <section className="glass p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-200">signal.feed()</h2>
        <span className="text-xs uppercase tracking-widest text-cyan-300">Live archive</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {videos.map((video, i) => (
          <motion.article
            key={video.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-white/10 bg-slate-950/40 p-3"
          >
            <p className="mb-2 text-sm text-cyan-200">{video.title}</p>
            <div className="aspect-video overflow-hidden rounded-lg border border-violet-300/20">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
