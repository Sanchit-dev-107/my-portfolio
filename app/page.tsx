import VisualEffects from "./components/VisualEffects";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  SendIcon,
} from "./components/Icons";

const skills = [
  "Python",
  "C",
  "Java",
  "C#",
  "AI/ML",
  "RAG",
  "FAISS",
  "Git",
  "GitHub",
  "ESP32",
  "Arduino",
  "Next.js",
];

const projects = [
  {
    name: "J.A.R.V.I.S. Mark I",
    description:
      "An ESP32-based voice assistant integrating speech input, Gemini AI and an OLED display.",
    tech: ["Python", "ESP32", "Gemini API", "OLED"],
    github: "https://github.com/Sanchit-dev-107",
  },
  {
    name: "RAG Document Q&A",
    description:
      "A document question-answering system using semantic search and retrieval-augmented generation.",
    tech: ["Python", "FAISS", "Sentence Transformers", "Groq"],
    github: "https://github.com/Sanchit-dev-107",
  },
  {
    name: "School Smart System",
    description:
      "A database application for managing student records, attendance and academic performance.",
    tech: ["Python", "SQL", "RDBMS"],
    github: "https://github.com/Sanchit-dev-107",
  },
  {
    name: "Arduino Follower Robot",
    description:
      "A robotics prototype using sensors and motor control for autonomous movement.",
    tech: ["Arduino", "C++", "Sensors", "Motors"],
    github: "https://github.com/Sanchit-dev-107",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{project.name}</h3>
        <span className="project-dot" aria-hidden="true" />
      </div>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tech.map((item) => (
          <span className="tech-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        <span>View on GitHub</span>
        <ExternalLinkIcon className="w-4 h-4" />
      </a>
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-title-wrap">
      {subtitle && <span className="section-eyebrow">{subtitle}</span>}
      <h2 className="section-title">
        {title}
        <span>.</span>
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="portfolio-wrapper">
      <VisualEffects />

      {/* Adaptive Glass Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">
        <img src="/logo.png" alt="Sanchit Logo" />
        </a>
        <div className="nav-links">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-cta">
            Get in Touch ↗
          </a>
        </div>
      </nav>

      {/* 1. Hero Section - Crisp Light Theme */}
      <section className="hero">
        <div className="hero-content">
          <p className="accent">HELLO I'M,</p>
          <h1>
            Sanchit
            <br />
            <span>Bharadwaj.</span>
          </h1>
          <h2>AI &amp; Software Development Enthusiast</h2>
          <p className="hero-tagline">Think.Build.Innovate.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore Projects ↗
            </a>
            <a href="#about" className="secondary-btn">
              About Me
            </a>
            <a href="#contact" className="primary-btn outline-btn">
              Get in Touch ↗
            </a>
          </div>
        </div>
        <div className="hero-image">
         <img src="/tech-collage.png" alt="Programming and technology emblem" />
          </div>
      </section>

      {/* 2. About Section - Smooth Gradient Transition into Dark Slate */}
      <section id="about" className="section section-about">
        <div className="section-container">
          <SectionTitle title="About Me"/>
          <p className="description">
            I'm a Computer Science and Engineering student at Bangalore
            Institute of Technology, interested in artificial intelligence,
            software development, and robotics. I enjoy building practical
            projects, exploring emerging technologies, and turning ambitious
            ideas into reliable code solutions.
          </p>

          <h3 className="subheading">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                <span className="chip-indicator" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Section - Sleek Dark Mode */}
      <section id="projects" className="section section-projects">
        <div className="section-container">
          <SectionTitle title="My Projects" />
          <p className="projects-intro">
            A selection of AI, embedded systems, and full-stack software
            prototypes I've built.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section - Techy and Dark Blue */}
      <section id="contact" className="section section-contact">
        <div className="contact-ambient-glow" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="tech-badge">
            <span className="tech-ping">
              <span className="ping-dot" />
              <span className="core-dot" />
            </span>
            <span className="tech-badge-text"></span>
          </div>

          <SectionTitle title="Get In Touch" />
          <p className="description contact-desc">
            <span className="tech-badge-text">Have an idea, project inquiry, or want to collaborate? 
              Send a message through the terminal below or reach out directly.</span>
          </p>

          <div className="contact-layout">
            {/* Tech Form Card */}
            <form
              className="tech-form-card"
              action="mailto:bharadwaj.sanchit77@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="form-header">
                <span className="form-dot red" />
                <span className="form-dot yellow" />
                <span className="form-dot green" />
                <span className="form-title">Let's Connect</span>
              </div>

              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. Alex Turing"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, idea or question..."
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className="tech-submit-btn">
                <span>Send Message</span>
                <SendIcon className="w-4 h-4" />
              </button>
            </form>

            {/* Direct Connect Tech Badges */}
            <div className="contact-direct">
              <div className="tech-channel-card">
                <span className="channel-label">DIRECT EMAIL</span>
                <a
                  href="mailto:bharadwaj.sanchit77@gmail.com"
                  className="channel-link"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>bharadwaj.sanchit77@gmail.com</span>
                </a>
              </div>

              <div className="tech-channel-card">
                <span className="channel-label">GITHUB PROFILE</span>
                <a
                  href="https://github.com/Sanchit-dev-107"
                  target="_blank"
                  rel="noreferrer"
                  className="channel-link"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/Sanchit-dev-107</span>
                </a>
              </div>

              <div className="tech-channel-card">
                <span className="channel-label">NETWORKING</span>
                <a
                  href="https://www.linkedin.com/in/sanchit-bharadwaj-cse/"
                  target="_blank"
                  rel="noreferrer"
                  className="channel-link"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>linkedin.com/in/sanchit-bharadwaj-cse</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Deep Cyber Dark Blue */}
      <footer className="footer">
        <p>© 2026 Sanchit Bharadwaj. Built with curiosity &amp; code.</p>
      </footer>
    </main>
  );
}
