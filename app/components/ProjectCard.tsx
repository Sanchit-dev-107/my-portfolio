import { Project } from "../data/portfolio";
import { GithubIcon, ExternalLinkIcon, CodeIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/40 hover:bg-slate-900/70 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_12px_30px_-8px_rgba(59,130,246,0.22)] hover:-translate-y-1.5">
      {/* Top ambient highlight on card hover */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-400/50 transition-all duration-500" 
      />

      <div>
        {/* Top bar with icon and links */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:border-blue-400/50 group-hover:text-blue-300 transition-colors">
            <CodeIcon className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label={`View ${project.name} on GitHub`}
              title="View on GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
                aria-label={`Live Demo of ${project.name}`}
                title="Live Demo"
              >
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((techItem) => (
            <span
              key={techItem}
              className="px-2.5 py-1 text-xs font-mono font-medium text-blue-300 bg-blue-950/40 border border-blue-900/40 rounded-md"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* View on GitHub link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold font-mono text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>View on GitHub</span>
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
