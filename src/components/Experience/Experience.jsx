import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Experience.css";
import TypewriterText from "../TypewriterText/TypewriterText";
import aqwasLogo from "../../assets/aqwas-logo.svg";

const Experience = () => {
  const { t } = useTranslation();
  const bullets = t("experience.aqwas.bullets", { returnObjects: true });

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterText text={t("experience.title")} delayOffset={0.2} />
        </motion.h2>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="experience-header">
            <div className="experience-company-wrapper">
              <a
                href="https://www.aqwas.sa/ar"
                target="_blank"
                rel="noopener noreferrer"
                className="company-logo-badge"
                title={t("experience.aqwas.company")}
              >
                <img
                  src={aqwasLogo}
                  alt={t("experience.aqwas.company")}
                  className="company-logo-img"
                />
              </a>
              <div className="experience-title-group">
                <h3 className="role">{t("experience.aqwas.role")}</h3>
                <a
                  href="https://www.aqwas.sa/ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company"
                >
                  {t("experience.aqwas.company")}
                </a>
              </div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
