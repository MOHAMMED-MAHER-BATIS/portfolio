import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="container footer-container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} {t('header.name')}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
