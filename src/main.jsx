import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Mail,
  ArrowUpRight,
  Menu,
  X,
  Download,
  ExternalLink,
  Award,
  Code2,
  Cloud,
  Database,
  Brain,
  GraduationCap,
  Users,
  Briefcase,
  ChevronDown,
} from "lucide-react";

import "./styles.css";
import "./custom.css";

const projects = [
  {
    title: "SafeCell AI",
    category: "AI / Machine Learning",
    description:
      "An early thermal runaway warning system for electric vehicle batteries using neural networks and multimodal battery telemetry.",
    technologies: ["Python", "Neural Networks", "Deep Learning", "EV"],
    github: "https://github.com/Pruthivika3",
  },
  {
    title: "Voice-Based Natural Language to SQL",
    category: "AI / Full Stack",
    description:
      "A voice-enabled system that converts natural language questions into SQL queries, validates them, executes them on MySQL, and presents the results.",
    technologies: ["Python", "FastAPI", "Streamlit", "MySQL", "Ollama"],
    github: "https://github.com/Pruthivika3",
  },
  {
    title: "SchemeNavigator",
    category: "Software Engineering",
    description:
      "A smart government scheme eligibility platform using deterministic rule-based evaluation to provide transparent and traceable eligibility results.",
    technologies: ["Java", "HTML", "CSS", "JavaScript", "JSON"],
    github: "https://github.com/Pruthivika3",
  },
  {
    title: "Smart Traffic & Emission System",
    category: "Data / AI",
    description:
      "A transportation analytics project focusing on bus priority, fuel consumption estimation, and CO₂ emission analysis.",
    technologies: ["Python", "Machine Learning", "Data Analytics"],
    github: "https://github.com/Pruthivika3",
  },
];

const skills = [
  { name: "Java", icon: <Code2 size={22} /> },
  { name: "Python", icon: <Code2 size={22} /> },
  { name: "React", icon: <Code2 size={22} /> },
  { name: "JavaScript", icon: <Code2 size={22} /> },
  { name: "SQL / MySQL", icon: <Database size={22} /> },
  { name: "Machine Learning", icon: <Brain size={22} /> },
  { name: "AWS", icon: <Cloud size={22} /> },
  { name: "Git & GitHub", icon: <Code2 size={22} /> },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            P<span>.</span>
          </a>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <div className="nav-socials">
            <a
              href="https://github.com/Pruthivika3"
              target="_blank"
              rel="noreferrer"
              className="text-social"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-social"
            >
              in
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main>

        <section id="home" className="hero section">

          <div className="hero-content">

            <p className="eyebrow">
              MSc AI & ML • Developer • Entrepreneur
            </p>

            <h1>
              Hi, I'm <span>Pruthivika.</span>
            </h1>

            <h2>
              I build technology with
              <br />
              <span>purpose & possibilities.</span>
            </h2>

            <p className="hero-description">
              I'm an AI & ML student at Coimbatore Institute of Technology,
              passionate about building intelligent systems, solving real-world
              problems, and turning ideas into meaningful products.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-button">
                Explore My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Let's Connect
              </a>

            </div>

            <div className="hero-socials">

              <a
                href="https://github.com/Pruthivika3"
                target="_blank"
                rel="noreferrer"
              >
                <span className="brand-icon">GH</span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="brand-icon">in</span>
                LinkedIn
              </a>

              <a href="mailto:your-email@example.com">
                <Mail size={18} />
                Email
              </a>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-card">

              <div className="hero-card-top">
                <span>Currently</span>
                <span className="status-dot"></span>
              </div>

              <h3>
                Building
                <br />
                <span>Intelligent Systems</span>
              </h3>

              <div className="hero-card-line"></div>

              <p>
                AI • ML • Software • Cloud
              </p>

            </div>

          </div>

          <a href="#about" className="scroll-indicator">
            <span>Scroll to explore</span>
            <ChevronDown size={18} />
          </a>

        </section>


        {/* ================= ABOUT ================= */}
        <section id="about" className="section about-section">

          <div className="section-heading">
            <p className="eyebrow">01 — About Me</p>

            <h2>
              Curious mind.
              <br />
              <span>Builder at heart.</span>
            </h2>
          </div>

          <div className="about-grid">

            <div className="about-text">

              <p className="large-text">
                I'm currently pursuing my MSc in Artificial Intelligence
                & Machine Learning at Coimbatore Institute of Technology.
              </p>

              <p>
                My interests span artificial intelligence, machine learning,
                software engineering, cloud technologies, and data-driven
                problem solving.
              </p>

              <p>
                I enjoy taking an idea from a simple concept to a working
                solution — understanding the problem, designing the system,
                writing the code, and deploying it.
              </p>

              <p>
                Beyond technology, I enjoy fine arts, especially dance,
                and I actively participate in student communities and
                leadership activities.
              </p>

            </div>

            <div className="about-stats">

              <div className="stat-card">
                <strong>8.7</strong>
                <span>CGPA</span>
              </div>

              <div className="stat-card">
                <strong>MSc</strong>
                <span>AI & ML</span>
              </div>

              <div className="stat-card">
                <strong>4+</strong>
                <span>Major Projects</span>
              </div>

              <div className="stat-card">
                <strong>∞</strong>
                <span>Ideas to Build</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}
        <section className="section education-section">

          <div className="section-heading">
            <p className="eyebrow">02 — Education</p>

            <h2>
              Learning to
              <br />
              <span>build the future.</span>
            </h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-icon">
                <GraduationCap size={23} />
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Current
                </span>

                <h3>
                  MSc Artificial Intelligence & Machine Learning
                </h3>

                <p className="institution">
                  Coimbatore Institute of Technology
                </p>

                <p>
                  Focus areas include artificial intelligence, machine
                  learning, deep learning, data science and software
                  development.
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-icon">
                <Award size={23} />
              </div>

              <div className="timeline-content">

                <span className="timeline-date">
                  Academic Achievement
                </span>

                <h3>
                  Consistent Academic Performance
                </h3>

                <p>
                  Maintained a strong academic record with an 8.7 CGPA
                  and consistently ranked among the top students.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}
        <section id="skills" className="section skills-section">

          <div className="section-heading">
            <p className="eyebrow">03 — Skills</p>

            <h2>
              Tools I use to
              <br />
              <span>turn ideas into reality.</span>
            </h2>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (

              <div className="skill-card" key={skill.name}>

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span>{skill.name}</span>

              </div>

            ))}

          </div>

        </section>


        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section projects-section">

          <div className="section-heading">

            <p className="eyebrow">04 — Selected Projects</p>

            <h2>
              Things I've
              <br />
              <span>built & explored.</span>
            </h2>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <article className="project-card" key={project.title}>

                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>

              </article>

            ))}

          </div>

        </section>


        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="section experience-section">

          <div className="section-heading">

            <p className="eyebrow">05 — Leadership & Experience</p>

            <h2>
              Beyond the
              <br />
              <span>code.</span>
            </h2>

          </div>

          <div className="experience-grid">

            <div className="experience-card">

              <div className="experience-icon">
                <Users size={23} />
              </div>

              <span>2026 — Present</span>

              <h3>
                Executive Director
              </h3>

              <h4>
                Datalytics Club
              </h4>

              <p>
                Contributing to student-led technical activities,
                events, learning initiatives and community building.
              </p>

            </div>


            <div className="experience-card">

              <div className="experience-icon">
                <Users size={23} />
              </div>

              <span>2026 — Present</span>

              <h3>
                Secretary
              </h3>

              <h4>
                Nalam Anbudan — Rotaract Club of CIT
              </h4>

              <p>
                Supporting community service initiatives and coordinating
                student-led social impact activities.
              </p>

            </div>


            <div className="experience-card">

              <div className="experience-icon">
                <Briefcase size={23} />
              </div>

              <span>2026 — Present</span>

              <h3>
                Startup Coordinator
              </h3>

              <h4>
                IIC — CIT
              </h4>

              <p>
                Supporting innovation, entrepreneurship and startup-related
                student activities.
              </p>

            </div>


            <div className="experience-card">

              <div className="experience-icon">
                <Code2 size={23} />
              </div>

              <span>Student Leadership</span>

              <h3>
                Technical & Creative Activities
              </h3>

              <h4>
                CIT & School Communities
              </h4>

              <p>
                Active in technical clubs, creative activities, events,
                public speaking, dance and student leadership.
              </p>

            </div>

          </div>

        </section>


        {/* ================= ACHIEVEMENTS ================= */}
        <section className="section achievements-section">

          <div className="section-heading">

            <p className="eyebrow">06 — Achievements</p>

            <h2>
              Milestones that
              <br />
              <span>shaped my journey.</span>
            </h2>

          </div>

          <div className="achievement-list">

            <div className="achievement-item">

              <Award size={22} />

              <div>
                <h3>Academic Excellence</h3>
                <p>
                  8.7 CGPA with consistently strong academic performance.
                </p>
              </div>

            </div>


            <div className="achievement-item">

              <Award size={22} />

              <div>
                <h3>Classical Dance</h3>
                <p>
                  Completed 8-grade classical dance examinations and
                  participated in competitive performances.
                </p>
              </div>

            </div>


            <div className="achievement-item">

              <Award size={22} />

              <div>
                <h3>National-Level Cultural Representation</h3>
                <p>
                  Participated in cultural events associated with the
                  75th Azadi Ka Amrit Mahotsav.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">

          <div className="contact-container">

            <p className="eyebrow">
              07 — Get In Touch
            </p>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p className="contact-description">
              I'm always interested in technology, AI/ML, software
              development, entrepreneurship and meaningful projects.
            </p>

            <div className="contact-buttons">

              <a
                href="mailto:your-email@example.com"
                className="primary-button"
              >
                <Mail size={18} />
                Send Me an Email
              </a>

              <a
                href="https://github.com/Pruthivika3"
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                GitHub
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-logo">
            P<span>.</span>
          </div>

          <p>
            Designed & built by Pruthivika
          </p>

          <div className="footer-links">

            <a
              href="https://github.com/Pruthivika3"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="#home">
              Back to top ↑
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);