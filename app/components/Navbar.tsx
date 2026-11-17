"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { MenuIcon, CloseIcon, TerminalIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#070b14]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Name / Brand on the left */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-base sm:text-lg font-bold tracking-tight text-slate-100 hover:text-blue-400 transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-950/70 border border-blue-500/30 text-blue-400 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all">
            <TerminalIcon className="w-4 h-4" />
          </span>
          <span>
            <span className="text-blue-400">&lt;</span>
            <span>{portfolioData.name}</span>
            <span className="text-blue-400"> /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation Links on the right */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-blue-400 rounded-lg hover:bg-blue-950/40 border border-transparent hover:border-blue-900/50 transition-all duration-200"
            >
              <span className="text-blue-500/70 font-mono text-xs mr-1">0{index + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-4 py-2 text-sm font-medium font-mono text-blue-300 bg-blue-950/60 hover:bg-blue-900/50 border border-blue-500/40 hover:border-blue-400 rounded-lg transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-blue-950/40 border border-blue-900/40 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blue-900/40 bg-[#070b14]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-blue-300 hover:bg-blue-950/50 border border-transparent hover:border-blue-800/40 transition-all"
            >
              <span className="text-blue-500 font-mono text-xs mr-2">0{index + 1}.</span>
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full text-center px-4 py-2.5 text-sm font-medium font-mono text-blue-200 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/50 rounded-lg transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
