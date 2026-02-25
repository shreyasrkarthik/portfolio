"use client";

const timelineData = [
  "2013-2017 · B.E. Information Science, PESIT",
  "2015 · InMobi internship (big data + geo ads)",
  "2016 · Quicken internship (Android engineering)",
  "2017 · Juniper internship (cloud telemetry)",
  "2017-2019 · Ittiam Systems (ML + backend)",
  "2019-2021 · Vymo (ML backend services)",
  "2021-2023 · M.S. CS, Northeastern",
  "2022 · PayPal internship (data pipelines)",
  "2023-present · PayPal Senior Software Engineer",
  "2024 · YouTube + podcast creator mode",
];

export default function AboutTimeline() {
  return (
    <section className="glass p-6 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-violet-200">build.log</h2>
        <span className="text-xs text-slate-400">career timeline</span>
      </div>

      <ol className="space-y-3">
        {timelineData.map((line, index) => (
          <li key={line} className="group flex items-start gap-3 rounded-lg border border-white/10 bg-slate-950/35 p-3 transition hover:border-cyan-300/60">
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 text-xs text-cyan-200">
              {index + 1}
            </span>
            <p className="text-sm text-slate-200 group-hover:text-white">{line}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
