import "./App.css";
import { motion } from "motion/react";
import { WhySection } from "./components/WhySection";
import { DitherCanvas } from "./components/DitherCanvas";

const pillars = [
  {
    num: "01",
    title: "From prompts to products",
    text: "Natural language + AI agents compress the path from idea to shipped web app.",
  },
  {
    num: "02",
    title: "Designers who execute",
    text: "Business Design now includes prototyping with real code, not just static mockups.",
  },
  {
    num: "03",
    title: "Human direction, machine acceleration",
    text: "A creative workflow where taste, strategy and judgment stay fully human.",
  },
];

const marqueeItems = [
  "55% faster task completion with AI copilots",
  "25% of YC W25 startups run ~95% AI-generated codebases",
  "Design intent → working interfaces in hours",
];

const agenda = [
  { num: "01", text: "AI-native product thinking for designers" },
  { num: "02", text: "Vibecoding — shipping fast without losing quality" },
  { num: "03", text: "Agent workflows for ideation, UI, code & iteration" },
  {
    num: "04",
    text: "Prompting patterns that produce production-ready output",
  },
  { num: "05", text: "Live build — concept to deployed landing page" },
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

const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />

      <nav className="topnav">
        <span className="nav-logo">IED BCN</span>
        <a
          href="https://www.linkedin.com/in/jesauraoller/"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          Connect ↗
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              IED Barcelona · Business Design Bachelors
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Building
              <br />
              Web Apps
              <br />
              <span className="accent-italic">Without Code</span>
            </motion.h1>
            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              A workshop on vibecoding, AI agents and the new design
              role&nbsp;— from concept direction to shipped product.
            </motion.p>
            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <span>With Jose Saura</span>
              <span className="meta-dot" />
              <span>Runroom</span>
              <span className="meta-dot" />
              <span>2026</span>
            </motion.div>
          </div>
        </section>

        <div className="marquee-strip">
          <div className="marquee-track">
            {doubled.map((item, i) => (
              <span key={i} className="marquee-item">
                {item}
                <span className="marquee-sep">●</span>
              </span>
            ))}
          </div>
        </div>

        <WhySection />
        
        <DitherCanvas />

        <section className="section-dark pillars-section">
          <div className="container">
            <div className="pillars-grid">
              {pillars.map((item, i) => (
                <motion.article
                  key={item.num}
                  className="pillar"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <span className="pillar-num">{item.num}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-cream agenda-section">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Workshop agenda
            </motion.h2>
            <div className="agenda-list">
              {agenda.map((item, i) => (
                <motion.div
                  key={item.num}
                  className="agenda-row"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <span className="agenda-num">{item.num}</span>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark gallery-section">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              The space
            </motion.h2>
            <div className="gallery-grid">
              {iedPhotos.map((photo, i) => (
                <motion.figure
                  key={photo.src}
                  className="gallery-item"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-inner">
            <span>IED Barcelona</span>
            <span>2026</span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
