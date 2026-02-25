export default function ResumePage() {
  return (
    <div className="glass flex min-h-[80vh] flex-col p-5 sm:p-8">
      <h1 className="mb-4 text-3xl font-bold text-violet-200">resume.pdf</h1>

      <div className="h-[70vh] w-full overflow-hidden rounded-xl border border-white/10">
        <iframe src="/Resume_SRK.pdf" className="h-full w-full" title="Resume" />
      </div>

      <a
        href="/Resume_SRK.pdf"
        download="ShreyasRK_Resume.pdf"
        className="mt-4 inline-flex w-fit rounded-lg border border-cyan-300/50 px-4 py-2 text-sm text-cyan-200 transition hover:border-violet-300/60"
      >
        Download resume
      </a>
    </div>
  );
}
