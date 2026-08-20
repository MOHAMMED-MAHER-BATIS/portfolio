import { useTranslation } from "react-i18next";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
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
        <h2 className="section-title">{t("projects.title")}</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.key} className="project-card">
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
                  project.bullets.map((bullet, index) => (
                    <li key={index} className="project-item">
                      {bullet}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
