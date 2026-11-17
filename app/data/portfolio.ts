export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface PortfolioData {
  name: string;
  role: string;
  oneLineIntro: string;
  shortBio: string[];
  skills: {
    name: string;
    category?: "languages" | "frameworks" | "tools";
  }[];
  projects: Project[];
  email: string;
  github: string;
  linkedin: string;
  location: string;
  availableForHire: boolean;
}

export const portfolioData: PortfolioData = {
  name: "Sanchit Bharadwaj",
  role: "Software Developer & CS Student",
  oneLineIntro: "CS student who loves building modern web applications & developer tools.",
  shortBio: [
    "I'm a Computer Science undergraduate passionate about building high-performance, beautiful, and accessible web experiences.",
    "My focus centers around modern TypeScript ecosystems, distributed backends, and responsive user interfaces.",
    "When I'm not writing code, I enjoy exploring open-source repositories, reading system architecture blogs, and experimenting with new tech stacks."
  ],
  skills: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "PostgreSQL" },
    { name: "Git & GitHub" },
    { name: "REST APIs" },
    { name: "Docker" },
    { name: "Linux" }
  ],
  projects: [
    {
      id: "cloudpulse",
      name: "CloudPulse",
      description: "Real-time infrastructure health and telemetry monitor with live latency graphs, socket-driven alert pipelines, and multi-node status tracking.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/sanchitbharadwaj/cloudpulse",
      demoUrl: "https://cloudpulse-demo.vercel.app",
      featured: true
    },
    {
      id: "devflow",
      name: "DevFlow",
      description: "Collaborative developer workspace featuring real-time Markdown notes, kanban sprint planning boards, and bidirectional GitHub issue sync.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/sanchitbharadwaj/devflow",
      demoUrl: "https://devflow-workspace.vercel.app",
      featured: true
    },
    {
      id: "codecraft-ai",
      name: "CodeCraft AI",
      description: "Context-aware developer CLI and web assistant that indexes local codebases to generate automated unit tests, refactoring suggestions, and API documentation.",
      tech: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/sanchitbharadwaj/codecraft-ai",
      demoUrl: "https://codecraft-ai.vercel.app",
      featured: true
    }
  ],
  email: "sanchitbharadwaj@gmail.com",
  github: "https://github.com/sanchitbharadwaj",
  linkedin: "https://linkedin.com/in/sanchitbharadwaj",
  location: "New Delhi, India",
  availableForHire: true
};
