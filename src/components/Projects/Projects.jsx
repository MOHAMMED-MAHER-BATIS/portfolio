import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import TypewriterText from "../TypewriterText/TypewriterText";

import aseerImg1 from "../../assets/AseerProject/1.webp";
import aseerImg2 from "../../assets/AseerProject/2.webp";
import aseerImg3 from "../../assets/AseerProject/3.webp";

const Projects = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hasMoreAseerContent, setHasMoreAseerContent] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Assumes max 3 images for now
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      key: "discover_aseer",
      name: t("projects.discover_aseer.name"),
      date: t("projects.discover_aseer.date"),
      status: t("projects.discover_aseer.status"),
      bullets: t("projects.discover_aseer.bullets", { returnObjects: true }),
      images: [aseerImg1, aseerImg2, aseerImg3],
      link: "https://discoveraseer.com/ar",
      isMain: true,
    },
    {
      key: "feedanalysis",
      name: t("projects.feedanalysis.name"),
      date: t("projects.feedanalysis.date"),
      status: t("projects.feedanalysis.status"),
      bullets: t("projects.feedanalysis.bullets", { returnObjects: true }),
      link: "https://github.com/MOHAMMED-MAHER-BATIS/FeedAnalysis",
    },
    {
      key: "recipe",
      name: t("projects.recipe.name"),
      date: t("projects.recipe.date"),
      status: t("projects.recipe.status"),
      bullets: t("projects.recipe.bullets", { returnObjects: true }),
      link: "https://github.com/MOHAMMED-MAHER-BATIS/AI-Powered-Recipe-Assistant",
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterText text={t("projects.title")} delayOffset={0.2} />
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              className={`project-card ${project.isMain ? "project-card-main" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {project.images && project.images.length > 0 && (
                <div className="project-image-container">
                  <AnimatePresence>
                    <motion.div
                      key={currentImageIndex}
                      className="project-carousel-image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      style={{
                        backgroundImage: `url(${project.images[currentImageIndex]})`,
                      }}
                    />
                  </AnimatePresence>
                </div>
              )}

              <div className="project-content"
                onScroll={project.isMain ? (event) => {
                  const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
                  setHasMoreAseerContent(scrollTop + clientHeight < scrollHeight - 8);
                } : undefined}
              >
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  {project.link && (
                    <div className="project-link-wrapper">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        {t("projects.view_project")}
                      </a>
                    </div>
                  )}
                </div>
                <div className="project-meta">
                  <span className="date">{project.date}</span>
                </div>
                <ul className="project-list">
                  {Array.isArray(project.bullets) &&
                    project.bullets.map((bullet, idx) => (
                      <li key={idx} className="project-item">
                        {bullet}
                      </li>
                    ))}
                </ul>
              </div>
              {project.isMain && hasMoreAseerContent && (
                <button
                  type="button"
                  className="project-read-more"
                  aria-label={t("projects.read_more")}
                  onClick={(event) => {
                    const content = event.currentTarget.parentElement.querySelector(".project-content");
                    content.scrollBy({ top: 240, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
                  }}
                >
                  <span>{t("projects.read_more")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.03,22L6.25,20.23L14.48,12L6.25,3.77L8.03,2l10,10l-10,10Z" /></svg>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
