import { useTranslation } from "react-i18next";
import "./Hero.css";
import profilePic from "../../assets/DSC_0774.jpg.jpeg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="section hero" id="hero">
      <div className="container">
        <div className="hero-profile">
          <img
            src={profilePic}
            alt={t("header.name")}
            className="profile-img"
          />
          <h1 className="hero-title">{t("header.name")}</h1>
        </div>

        <div className="hero-content">
          <h2 className="summary-title">{t("summary.title")}</h2>
          <p className="hero-text">{t("summary.p1")}</p>
          <p
            className="hero-text"
            dangerouslySetInnerHTML={{ __html: t("summary.p2") }}
          ></p>
          <p className="hero-text">{t("summary.p3")}</p>
        </div>

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
      </div>
    </section>
  );
};

export default Hero;
