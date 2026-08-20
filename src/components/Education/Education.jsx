import { useTranslation } from 'react-i18next';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section-title">{t('education.title')}</h2>
        
        <div className="education-card">
          <div className="education-header">
            <div>
              <h3 className="degree">{t('education.degree')}</h3>
              <p className="university">{t('education.university')}</p>
            </div>
            <div className="education-meta">
              <span className="location">{t('education.location')}</span>
              <span className="date">{t('education.date')}</span>
            </div>
          </div>
          
          <div className="education-details">
            <span className="gpa">{t('education.gpa')}</span>
            <p className="coursework">{t('education.coursework')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
