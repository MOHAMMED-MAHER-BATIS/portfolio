import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    { key: 'languages', title: t('skills.languages'), items: t('skills.languages_list').split(', ') },
    { key: 'frontend', title: t('skills.frontend'), items: t('skills.frontend_list').split(', ') },
    { key: 'backend', title: t('skills.backend'), items: t('skills.backend_list').split(', ') },
    { key: 'ai', title: t('skills.ai'), items: t('skills.ai_list').split(', ') },
    { key: 'tools', title: t('skills.tools'), items: t('skills.tools_list').split(', ') }
  ];

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="skills-grid">
          {skillCategories.map(category => (
            <div key={category.key} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="chips-container">
                {category.items.map((item, index) => (
                  <span key={index} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
