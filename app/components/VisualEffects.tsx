"use client";

import { useEffect } from "react";

export default function VisualEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const handleMouseMove = (event: PointerEvent) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;

      // Update scroll progress variable
      root.style.setProperty("--scroll-progress", progress.toString());

      // Toggle scrolled state on body for adaptive navbar
      if (scrollY > 50) {
        body.setAttribute("data-scrolled", "true");
      } else {
        body.removeAttribute("data-scrolled");
      }

      // Dynamic cursor glow color based on scroll depth:
      // Top (Hero): soft lavender/indigo
      // Middle (Projects - Dark Mode): electric blue
      // Bottom (Contact - Tech Dark Blue): high-tech cyan
      if (progress < 0.28) {
        root.style.setProperty("--glow-color", "rgba(129, 140, 248, 0.12)");
      } else if (progress < 0.68) {
        root.style.setProperty("--glow-color", "rgba(59, 130, 246, 0.20)");
      } else {
        root.style.setProperty("--glow-color", "rgba(6, 182, 212, 0.26)");
      }
    };

    window.addEventListener("pointermove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}
