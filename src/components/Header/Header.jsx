import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./Header.css";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="currentColor"><path d="M14.13,14.13Q15,13.25 15,12T14.13,9.88T12,9T9.88,9.88T9,12t0.88,2.13T12,15t2.13-0.88ZM8.46,15.54Q7,14.08 7,12Q7,9.92 8.46,8.46T12,7t3.54,1.46T17,12t-1.46,3.54T12,17q-2.07,0-3.54-1.46ZM5,13H1V11H5v2Zm18,0H19V11h4v2ZM11,5V1h2V5H11Zm0,18V19h2v4H11ZM6.4,7.75L3.88,5.32L5.3,3.85l2.4,2.5L6.4,7.75Zm12.3,12.4l-2.42-2.52l1.32-1.38l2.52,2.43L18.7,20.15ZM16.25,6.4l2.43-2.52L20.15,5.3l-2.5,2.4l-1.4-1.3ZM3.85,18.7l2.53-2.43L7.75,17.6L5.33,20.13L3.85,18.7ZM12,12Z"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="currentColor"><path d="M12,21q-3.75,0-6.38-2.63T3,12T5.63,5.63T12,3q0.35,0 0.69,0.02q0.34,0.02 0.66,0.07q-1.03,0.73-1.64,1.89T11.1,7.5q0,2.25 1.57,3.82T16.5,12.9q1.38,0 2.53-0.61t1.88-1.64q0.05,0.33 0.07,0.66T21,12q0,3.75-2.63,6.38T12,21Zm0-2q2.2,0 3.95-1.21t2.55-3.16q-0.5,0.13-1,0.2t-1,0.08q-3.07,0-5.24-2.16Q9.1,10.58 9.1,7.5q0-0.5 0.08-1t0.2-1Q7.43,6.3 6.21,8.05T5,12q0,2.9 2.05,4.95T12,19Zm-0.25-6.75Z"/></svg>
);


const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isArabic = i18n.language === "ar";

  return (
    <motion.header className="header" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, damping: 20 }}>
      <div className="container header-container" dir="rtl">
        <nav className="nav-links">
          <a href="#experience">{t("experience.title")}</a>
          <a href="#projects">{t("projects.title")}</a>
          <a href="#education">{t("education.title")}</a>
          <a href="#skills">{t("skills.title")}</a>
        </nav>
        <div className="controls">
          <button
            type="button"
            role="switch"
            aria-checked={!isArabic}
            aria-label={isArabic ? "اللغة الإنجليزية" : "English language"}
            className="nav-switch"
            onClick={() => i18n.changeLanguage(isArabic ? "en" : "ar")}
          >
            <span className={isArabic ? "selected" : ""} lang="ar">ع</span>
            <span className={isArabic ? "" : "selected"} lang="en">EN</span>
          </button>
          <button
            type="button"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={isArabic ? "الوضع الداكن" : "Dark mode"}
            className="nav-switch"
            onClick={toggleTheme}
          >
            <span className={theme === "light" ? "selected" : ""} aria-hidden="true"><SunIcon /></span>
            <span className={theme === "dark" ? "selected" : ""} aria-hidden="true"><MoonIcon /></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
