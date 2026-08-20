import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Skills.css';
import TypewriterText from "../TypewriterText/TypewriterText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

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
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterText text={t('skills.title')} delayOffset={0.2} />
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.key} 
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="chips-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.items.map((item, index) => (
                  <motion.span 
                    key={index} 
                    className="chip"
                    variants={chipVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)", color: "var(--color-background)" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
