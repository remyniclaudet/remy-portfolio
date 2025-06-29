import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayers, FiDatabase, FiPenTool } from 'react-icons/fi';
import '../styles/skills.css';

const Skills = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const skillsData = [
    {
      category: language === 'fr' ? "Frontend" : "Frontend",
      icon: <FiCode />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      category: language === 'fr' ? "Backend" : "Backend",
      icon: <FiDatabase />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      category: language === 'fr' ? "Design" : "Design",
      icon: <FiPenTool />,
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Prototypage", level: 85 },
        { name: "Design System", level: 75 }
      ]
    },
    {
      category: language === 'fr' ? "Outils" : "Tools",
      icon: <FiLayers />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Webpack", level: 65 },
        { name: "Jest", level: 70 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 10
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: 'spring',
        damping: 10
      }
    })
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 0.2,
              type: 'spring',
              stiffness: 100
            }
          } : {}}
        >
          {language === 'fr' ? "Mes Compétences" : "My Skills"}
        </motion.h2>

        <motion.div
          className="skills-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-category"
              custom={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
              }}
            >
              <motion.div 
                className="category-header"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="category-icon"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3>{category.category}</h3>
              </motion.div>
              
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress"
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        style={{ 
                          background: `linear-gradient(90deg, var(--primary), var(--secondary))`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;