import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Hero.css";
import profilePic from "../../assets/DSC_0774.jpg.jpeg";
import TypewriterText from "../TypewriterText/TypewriterText";
import cvPdf from "../../assets/MOHAMMED BATIS CV.pdf";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  const { t } = useTranslation();
  const rawRoles = t("summary.roles", { returnObjects: true });
  const roles = Array.isArray(rawRoles)
    ? rawRoles
    : [
        "Computer Science",
        "Software Engineer",
        "Web Developer",
        "AI Integration Specialist",
      ];

  return (
    <section className="section hero" id="hero">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-profile">
          <motion.img
            src={profilePic}
            alt={t("header.name")}
            className="profile-img"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
            }}
          />
          <motion.h1 className="hero-title" variants={itemVariants}>
            <TypewriterText text={t("header.name")} delayOffset={0.5} />
          </motion.h1>
        </div>

        <motion.div className="hero-content" variants={itemVariants}>
          <h2 className="summary-title">{t("summary.title")}</h2>

          <div className="hero-roles-container">
            <div className="hero-roles-track">
              {[...roles, ...roles, ...roles].map((role, idx) => (
                <div key={idx} className="hero-role-cell">
                  <span className="role-dot"></span>
                  <span className="role-text">{role}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="hero-text">{t("summary.p1")}</p>
          <p
            className="hero-text"
            dangerouslySetInnerHTML={{ __html: t("summary.p2") }}
          ></p>
          <p className="hero-text">{t("summary.p3")}</p>
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a
            href={cvPdf}
            download="MOHAMMED_BATIS_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download-cv"
          >
            <svg
              className="btn-download-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{t("header.download_cv")}</span>
          </a>

          <div className="social-links-hero">
            <a
              href="mailto:mohammed.batis.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-batis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MOHAMMED-MAHER-BATIS"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="tel:+966535669941"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
            >
              +966 53 566 9941
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
