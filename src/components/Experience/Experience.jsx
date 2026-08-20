import { useTranslation } from "react-i18next";
import "./Experience.css";

const Experience = () => {
  const { t } = useTranslation();
  const bullets = t("experience.aqwas.bullets", { returnObjects: true });

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">{t("experience.title")}</h2>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="role">{t("experience.aqwas.role")}</h3>
              <p className="company">{t("experience.aqwas.company")}</p>
            </div>
            <div className="experience-meta">
              <span className="location">{t("experience.aqwas.location")}</span>
              <span className="date">{t("experience.aqwas.date")}</span>
            </div>
          </div>

          <ul className="experience-list">
            {Array.isArray(bullets) &&
              bullets.map((bullet, index) => (
                <li key={index} className="experience-item">
                  {bullet}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
