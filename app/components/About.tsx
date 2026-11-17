import { portfolioData } from "../data/portfolio";
import { CodeIcon, TerminalIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-blue-400 text-base font-semibold">01.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
        <div className="h-px bg-gradient-to-r from-blue-500/40 to-transparent flex-grow max-w-xs ml-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Short Bio Column */}
        <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
          {portfolioData.shortBio.map((paragraph, index) => (
            <p key={index} className="text-slate-300">
              {paragraph}
            </p>
          ))}

          {/* Highlights Box */}
          <div className="pt-4">
            <div className="rounded-xl border border-blue-900/30 bg-slate-900/40 p-4 sm:p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs sm:text-sm mb-3">
                <TerminalIcon className="w-4 h-4" />
                <span>developer_profile.json</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">role:</span>
                  <span className="text-blue-300">{portfolioData.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">status:</span>
                  <span className="text-emerald-400">Ready for hire</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">primary_focus:</span>
                  <span className="text-slate-200">Full Stack &amp; Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">education:</span>
                  <span className="text-slate-200">B.Tech in Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Column with small tags/chips */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-7 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/40 transition-colors duration-300">
            {/* Ambient subtle glow */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" 
            />

            <div className="flex items-center gap-2 text-white font-semibold mb-5">
              <CodeIcon className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg">Technical Skills</h3>
            </div>

            <p className="text-sm text-slate-400 mb-6">
              Technologies and tools I work with daily:
            </p>

            {/* Chips / Tags */}
            <div className="flex flex-wrap gap-2.5">
              {portfolioData.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono text-slate-200 bg-slate-950/80 border border-slate-800 hover:border-blue-500/60 hover:text-blue-300 hover:bg-blue-950/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
