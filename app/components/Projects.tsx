import { portfolioData } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-blue-400 text-base font-semibold">02.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
        <div className="h-px bg-gradient-to-r from-blue-500/40 to-transparent flex-grow max-w-xs ml-2" />
      </div>

      <p className="text-slate-400 text-base max-w-2xl mb-12 font-mono text-sm">
        // A curated selection of applications, systems, and open-source projects.
      </p>

      {/* Projects Grid with reusable ProjectCard components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom link to GitHub profile */}
      <div className="mt-12 text-center">
        <a
          href={portfolioData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-blue-950/40 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 text-sm font-medium font-mono transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        >
          <GithubIcon className="w-4 h-4 text-blue-400" />
          <span>See more repositories on GitHub</span>
        </a>
      </div>
    </section>
  );
}
