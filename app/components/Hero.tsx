import { portfolioData } from "../data/portfolio";
import { ArrowRightIcon, MailIcon, GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid">
      {/* Radial ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/15 blur-[120px] rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full"
      />

      <div className="relative max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Tech status badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-300 text-xs sm:text-sm font-mono mb-6 hover:border-blue-400/60 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Open to Software Roles &amp; Internships</span>
        </div>

        {/* Code greeting */}
        <p className="font-mono text-sm sm:text-base text-blue-400 mb-3 tracking-wide">
          &lt;developer&gt; Hello, I am &lt;/developer&gt;
        </p>

        {/* Name in large text */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
            {portfolioData.name}
          </span>
        </h1>

        {/* One-line intro */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-10">
          {portfolioData.oneLineIntro}
        </p>

        {/* Two Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* View my work (scrolls to Projects) */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View my work</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Contact me (scrolls to Contact) */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-blue-300 hover:text-white bg-slate-900/80 hover:bg-blue-950/50 border border-blue-500/30 hover:border-blue-400/70 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <MailIcon className="w-4 h-4 text-blue-400" />
            <span>Contact me</span>
          </a>
        </div>

        {/* Quick Social Icon Links */}
        <div className="flex items-center gap-5 text-slate-400">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-950/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-950/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-950/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MailIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
