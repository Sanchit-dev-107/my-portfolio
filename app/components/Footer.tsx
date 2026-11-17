import { portfolioData } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-900/30 bg-[#05080f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Copyright notice required by user prompt */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="font-mono text-sm text-slate-400">
            ©️ 2026 {portfolioData.name}
          </p>
          <span className="hidden sm:inline text-slate-700">|</span>
          <p className="text-xs font-mono text-slate-500">
            Crafted with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-950/40 rounded-lg transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-950/40 rounded-lg transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            aria-label="Email"
            className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-950/40 rounded-lg transition-colors"
          >
            <MailIcon className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="ml-2 px-3 py-1 text-xs font-mono text-blue-400 border border-blue-900/50 hover:border-blue-500/50 bg-blue-950/30 hover:bg-blue-900/30 rounded-md transition-all hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
