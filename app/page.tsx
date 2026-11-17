const skills = [
  "Python", "C", "Java", "C#", "AI/ML",
  "RAG", "FAISS", "Git", "GitHub",
  "ESP32", "Arduino", "Next.js"
];

const projects = [
  {
    name: "J.A.R.V.I.S. Mark I",
    description: "An ESP32-based voice assistant integrating speech input, Gemini AI and an OLED display.",
    tech: ["Python", "ESP32", "Gemini API", "OLED"]
  },
  {
    name: "RAG Document Q&A",
    description: "A document question-answering system using semantic search and retrieval-augmented generation.",
    tech: ["Python", "FAISS", "Sentence Transformers", "Groq"]
  },
  {
    name: "School Database Management System",
    description: "A database application for managing student records, attendance and academic performance.",
    tech: ["Python", "SQL", "RDBMS"]
  },
  {
    name: "Arduino Follower Robot",
    description: "A robotics prototype using sensors and motor control for autonomous movement.",
    tech: ["Arduino", "C++", "Sensors", "Motors"]
  }
];

function ProjectCard({ project }: { project: typeof projects[number] }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="flex flex-wrap gap-2 my-5">
        {project.tech.map((item) => (
          <span className="tag" key={item}>{item}</span>
        ))}
      </div>
      <a href="https://github.com/Sanchit-dev-107"
         target="_blank" rel="noreferrer">
        View on GitHub ↗
      </a>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="section-title">{title}<span>.</span></h2>;
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">SB<span>.</span></a>
        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="accent">HELLO I'M,</p>
        <h1>Sanchit<br /><span>Bharadwaj.</span></h1>
        <h2>AI & Software Development Enthusiast</h2>
        <p>Building ideas into intelligent solutions.</p>
        <div className="flex gap-4 mt-8">
          <a className="primary-btn" href="#projects">View my work ↗</a>
          <a className="secondary-btn" href="#contact">Contact me</a>
        </div>
      </section>

      <section id="about" className="section">
        <SectionTitle title="About Me" />
        <p className="description">
          I'm a Computer Science and Engineering student at Bangalore
          Institute of Technology, interested in artificial intelligence,
          software development and robotics. I enjoy building practical
          projects, exploring emerging technologies and turning ideas
          into solutions.
        </p>
        <h3 className="subheading">My Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionTitle title="My Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <SectionTitle title="Get In Touch" />
        <p className="description">
          Have an idea or want to collaborate? Feel free to reach out.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows={5} required />
          <button type="button" className="primary-btn">Send Message ↗</button>
        </form>

        <div className="flex flex-wrap gap-6 mt-8">
          <a href="mailto:bharadwaj.sanchit77@gmail.com">Email ↗</a>
          <a href="https://github.com/Sanchit-dev-107"
             target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer>
        © 2026 Sanchit Bharadwaj. Built with curiosity.
      </footer>
    </main>
  );
}