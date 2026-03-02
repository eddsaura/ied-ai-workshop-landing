import { motion } from "motion/react";

export function WhySection() {
  return (
    <section className="section-cream why-section">
      <div className="container">
        <div className="why-grid">
          <motion.div
            className="why-content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              Why this
              <br />
              matters now
            </h2>
            <p>
              AI has changed the build loop. You can go from brief to
              interface in hours, not weeks. For Business Designers, this
              shifts value toward vision, taste, systems thinking and the
              ability to direct agents with precision.
            </p>
            <p>
              In this session students learn to execute ideas
              themselves&nbsp;— turning strategy and storytelling into live
              products.
            </p>
          </motion.div>
          <motion.aside
            className="teacher-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <span className="teacher-label">Instructor</span>
            <p className="teacher-name">
              Jose Eduardo
              <br />
              Saura Oller
            </p>
            <p className="teacher-bio">
              Digital product specialist based in Barcelona. Currently at
              Runroom, with a background in web development and product
              execution.
            </p>
            <a
              href="https://www.linkedin.com/in/jesauraoller/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
