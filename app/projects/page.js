import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "VibePick",
    description: "Discover music tailored to your mood with this curated playlist generator.",
    link: "https://vibepick.shreyasrk.com",
  },
  {
    title: "RR",
    description: "An experimental platform exploring real-time interactions in the browser.",
    link: "https://RR.shreyasrk.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="space-y-5">
      <section className="glass p-6 sm:p-8">
        <h1 className="text-3xl font-bold text-violet-200">projects.index</h1>
        <p className="mt-1 text-sm text-slate-300">A few things I built and shipped.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}
