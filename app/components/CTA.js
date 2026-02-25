export default function CTA() {
  return (
    <section className="glass p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Collab protocol</p>
          <h2 className="text-2xl font-bold text-violet-200">Want to build something that actually matters?</h2>
          <p className="mt-1 text-slate-300">I like hard problems, clean architecture, and shipping fast.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg border border-violet-300/50 px-5 py-2.5 font-medium text-violet-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
        >
          ping.shreyas()
        </a>
      </div>
    </section>
  );
}
