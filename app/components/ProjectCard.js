import Link from "next/link";

export default function ProjectCard({ title, description, link }) {
  return (
    <article className="glass p-5">
      <h2 className="mb-2 text-xl font-bold text-violet-200">{title}</h2>
      <p className="mb-4 text-sm text-slate-300">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-lg border border-cyan-300/40 px-4 py-2 text-sm text-cyan-200 transition hover:border-violet-300/60"
      >
        Launch project
      </Link>
    </article>
  );
}
