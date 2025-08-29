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
    <main className="min-h-screen bg-black text-white py-16">
      <h1 className="text-4xl font-bold text-center text-[#c8cefa] mb-12">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}
