import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Experience.css";

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
          {t("experience.title")}
        </motion.h2>

        <motion.div 
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
