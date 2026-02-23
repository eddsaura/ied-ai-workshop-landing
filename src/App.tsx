import "./App.css";
import { motion } from "motion/react";

const pillars = [
  {
    title: "From prompts to products",
    text: "How natural language + AI agents compress the path from idea to shipped web app.",
  },
  {
    title: "Designers who execute",
    text: "Why Business Design now includes prototyping with real code, not only static mockups.",
  },
  {
    title: "Human direction, machine acceleration",
    text: "Building a creative workflow where taste, strategy and judgment remain fully human.",
  },
];

const stats = [
  {
    value: "55%",
    label:
      "faster task completion with GitHub Copilot in controlled tests (GitHub Research, 2024).",
  },
  {
    value: "25%",
    label:
      "of YC W25 startups reported ~95% AI-generated codebases (TechCrunch/CNBC, 2025).",
  },
  {
    value: "Now",
    label:
      "Agentic workflows are turning design intent directly into working interfaces.",
  },
];

const agenda = [
  "AI-native product thinking for designers",
  "Vibecoding: shipping fast without losing quality",
  "Agent workflows for ideation, UI, code and iteration",
  "Prompting patterns that actually produce production-ready output",
  "Live build: from concept to deployed landing page",
];

const iedPhotos = [
  {
    src: "https://www.ied.edu/_default_upload_bucket/38200/image-thumb__38200__scaleByWidth1000/IED_barcelona_hero_image_2026.jpg",
    alt: "IED Barcelona hero view",
  },
  {
    src: "https://www.ied.edu/laboratories/spain/barcelona/Point%20One%20%282023%29/14787/image-thumb__14787__scaleByWidth800/Fachada-1.jpg",
    alt: "IED Barcelona Point One facade",
  },
  {
    src: "https://www.ied.edu/laboratories/spain/barcelona/Point%20One%20%282023%29/14812/image-thumb__14812__scaleByWidth800/Open-Space-2.jpg",
    alt: "IED Barcelona open space",
  },
  {
    src: "https://www.ied.edu/laboratories/spain/barcelona/Point%20One%20%282023%29/14826/image-thumb__14826__scaleByWidth800/Terraza.jpg",
    alt: "IED Barcelona terrace",
  },
];

function App() {
  return (
    <main className="page">
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="eyebrow">IED Barcelona · Business Design Bachelors</p>
        <h1>
          Building Web Apps <span>Without Coding with Jose Saura</span>
        </h1>
        <p className="lead">
          An editorial workshop on vibecoding, AI agents and the new design
          role: from concept direction to real execution in code.
        </p>
      </motion.section>

      <motion.section
        className="split"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        <article>
          <h2>Why this matters now</h2>
          <p>
            AI has changed the build loop. You can now go from brief to
            interface in hours, not weeks. For Business Designers, this shifts
            value toward vision, taste, systems thinking and the ability to
            direct agents with precision.
          </p>
          <p>
            In this session, students learn how to execute ideas themselves —
            turning strategy and storytelling into live products.
          </p>
        </article>
        <article className="teacher-card">
          <h3>Teacher</h3>
          <p className="teacher-name">Jose Eduardo Saura Oller</p>
          <p>
            Digital product specialist based in Barcelona. Currently at{" "}
            <strong>Runroom</strong>, with a background in web development and
            product execution.
          </p>
          <a
            href="https://www.linkedin.com/in/jesauraoller/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile ↗
          </a>
        </article>
      </motion.section>

      <section className="pillars">
        {pillars.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="stats">
        {stats.map((item, i) => (
          <motion.div
            key={item.value + i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <p className="value">{item.value}</p>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="agenda"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Workshop agenda</h2>
        <ul>
          {agenda.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="gallery"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <h2>IED Barcelona · Spaces</h2>
        <div className="gallery-grid">
          {iedPhotos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </motion.figure>
          ))}
        </div>
      </motion.section>

      <footer>
        <p>IED Barcelona · 2026</p>
      </footer>
    </main>
  );
}

export default App;
