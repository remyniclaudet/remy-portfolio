import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayers, FiDatabase, FiTool, FiGlobe } from 'react-icons/fi';
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
        { name: "React", level: 70 },
        { name: "Vue.js", level: 50 },
      ]
    },
    {
      category: language === 'fr' ? "Backend" : "Backend",
      icon: <FiDatabase />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "PHP", level: 80 },
        { name: "PostgreSQL", level: 70 }
      ]
    },
    {
      category: language === 'fr' ? "Design" : "Design",
      icon: <FiTool />,
      skills: [
        { name: "Figma", level: 60 },
        { name: "Canva", level: 85 },
        { name: "Git", level: 75 },
        { name: "Wireshark", level: 50 },
        { name: "GNS3", level: 50 }
      ]
    },
  
    {
      category: language === 'fr' ? "Notions Réseau" : "Networking Basics",
      icon: <FiGlobe />,
      skills: [
        { name: "TCP/IP, LAN, WAN" },
        { name: "Architecture OSI" },
        { name: "Routeurs & Switch" },
        { name: "Routage IP" },
        { name: "Protocoles HTTP, FTP, DNS" }
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
      <div className="skills-container">
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
                      {skill.level ? <span>{skill.level}%</span> : null}
                    </div>
                    {skill.level && (
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
                    )}
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
