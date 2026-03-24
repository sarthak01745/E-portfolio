import { motion } from 'framer-motion'
import portfolioData from './data/portfolio.json'
import type { PortfolioData } from './types/portfolio'
import './App.css'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const content = portfolioData as PortfolioData

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          {content.name}
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <motion.section
          id="home"
          className="hero plain-hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-copy">
            <p className="eyebrow">Available for internships</p>
            <h1>{content.name}</h1>
            <h2>{content.role}</h2>
            <p className="lead">{content.summary}</p>
            <p className="objective">{content.objective}</p>
            <div className="hero-cta">
              <a className="btn solid" href="#contact">
                Connect with me
              </a>
              <a className="btn ghost" href="#resume">
                Resume quick-view
              </a>
            </div>
            <p className="meta">
              <span>{content.location}</span>
              <span>Graduating in {content.graduationYear}</span>
            </p>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <h3>Summary</h3>
          <p>{content.summary}</p>
        </motion.section>

        <motion.section
          id="education"
          className="panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <h3>Education</h3>
          <div className="grid two">
            {content.education.map((item) => (
              <article className="card" key={`${item.institute}-${item.year}`}>
                <p className="year">{item.year}</p>
                <h4>{item.institute}</h4>
                <p>{item.detail}</p>
                <p className="score">{item.score}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <h3>Experience</h3>
          <div className="grid two">
            {content.experience.map((item) => (
              <article className="card" key={`${item.role}-${item.organization}`}>
                <p className="year">{item.meta}</p>
                <h4>{item.role}</h4>
                <p>{item.organization}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <h3>Skills</h3>
          <div className="chips-wrap">
            {content.skills.programming.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
            {content.skills.frameworks.map((skill) => (
              <span className="chip muted" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.55 }}
        >
          <h3>Projects</h3>
          <div className="grid two">
            {content.projects.map((project) => (
              <article className="card" key={project.title}>
                <p className="year">{project.status.replace('-', ' ')}</p>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View project
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </motion.section>

        <div className="grid two compact-panels">
          <motion.section
            id="certifications"
            className="panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            <h3>Certifications</h3>
            <ul>
              {content.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            id="volunteering"
            className="panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            <h3>Volunteering</h3>
            <ul>
              {content.volunteering.map((item) => (
                <li key={`${item.organization}-${item.role}`}>
                  {item.organization} - {item.role}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <div className="grid two compact-panels">
          <motion.section
            id="languages"
            className="panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            <h3>Languages</h3>
            <ul>
              {content.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            id="resume"
            className="panel"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            transition={{ duration: 0.5 }}
          >
            <h3>Resume</h3>
            <p>
              Keep your latest resume in <strong>public/resume.pdf</strong> and this
              button will open it instantly.
            </p>
            <a className="btn solid" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </motion.section>
        </div>

        <motion.section
          id="contact"
          className="panel contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ duration: 0.5 }}
        >
          <h3>Contact</h3>
          <p>
            {content.email} | {content.phone}
          </p>
          <div className="chips-wrap">
            {content.links.map((link) => (
              <a className="chip link-chip" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </motion.section>
      </main>

      <footer>
        <p>{content.name} - Built with React and Framer Motion</p>
      </footer>
    </div>
  )
}

export default App
