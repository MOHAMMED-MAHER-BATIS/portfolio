import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="section education" id="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t('education.title')}
        </motion.h2>
        
        <motion.div 
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
