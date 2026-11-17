"use client";

import { useState, FormEvent } from "react";
import { portfolioData } from "../data/portfolio";
import { MailIcon, GithubIcon, LinkedinIcon, SendIcon, CheckIcon } from "./Icons";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate UI submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-blue-400 text-base font-semibold">03.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
        <div className="h-px bg-gradient-to-r from-blue-500/40 to-transparent flex-grow max-w-xs ml-2" />
      </div>

      <p className="text-slate-400 text-base max-w-2xl mb-12 font-mono text-sm">
        // Have an opportunity, question, or just want to talk tech? Drop a message.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Socials (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-7 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-3">Let&apos;s Connect</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              I am always eager to discuss new software projects, engineering challenges, or internship and full-time opportunities.
            </p>

            {/* Email Box */}
            <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-1">Direct Email</span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-sm sm:text-base font-mono text-blue-400 hover:text-blue-300 transition-colors truncate"
                >
                  {portfolioData.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-md border border-slate-700 transition-colors flex items-center gap-1 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <span>Copy</span>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-3">Profiles &amp; Networks</span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-blue-950/40 hover:border-blue-500/50 text-slate-200 hover:text-blue-300 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                >
                  <GithubIcon className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-blue-950/40 hover:border-blue-500/50 text-slate-200 hover:text-blue-300 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-950/70 border border-blue-500/50 text-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <CheckIcon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Received!</h3>
                <p className="text-slate-300 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono text-blue-300 bg-blue-950/50 hover:bg-blue-900/40 border border-blue-500/30 rounded-lg transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2">
                      Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2">
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Hello Sanchit, I'd like to talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_28px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <SendIcon className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
