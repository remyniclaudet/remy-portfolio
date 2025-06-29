import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import '../styles/about.css';

const About = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  const timelineItems = [
    {
      id: 1,
      title: language === 'fr' ? "Master Professionnel" : "Professional Master",
      company: language === 'fr' ? "École Nationale d'Informatique" : "National Computer Science School",
      period: "2023 - Présent",
      description: language === 'fr' 
        ? "Spécialisation en développement d'applications et design d'interfaces" 
        : "Specialization in application development and interface design",
      icon: <FiAward />
    },
    {
      id: 2,
      title: language === 'fr' ? "Licence en Informatique" : "Bachelor in Computer Science",
      company: language === 'fr' ? "Université de Madagascar" : "University of Madagascar",
      period: "2018 - 2022",
      description: language === 'fr' 
        ? "Parcours axé sur les systèmes d'information et le développement web" 
        : "Curriculum focused on information systems and web development",
      icon: <FiUser />
    },
    {
      id: 3,
      title: language === 'fr' ? "Développeur Fullstack" : "Fullstack Developer",
      company: "Freelance",
      period: "2020 - Présent",
      description: language === 'fr' 
        ? "Développement de solutions web sur mesure pour divers clients" 
        : "Custom web solutions development for various clients",
      icon: <FiBriefcase />
    }
  ];

  return (
    <section id="about" className="about" ref={ref}>
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
          {language === 'fr' ? "À propos de moi" : "About me"}
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              {language === 'fr'
                ? "Passionné par la création numérique depuis mon plus jeune âge, j'ai développé une expertise à la fois en développement web et en design UX/UI. Mon approche combine une solide compréhension technique avec un sens aigu du design pour créer des expériences digitales mémorables."
                : "Passionate about digital creation since my early years, I've developed expertise in both web development and UX/UI design. My approach combines strong technical understanding with sharp design sense to create memorable digital experiences."}
            </motion.p>
            
            <motion.p variants={itemVariants}>
              {language === 'fr'
                ? "Actuellement étudiant en Master Professionnel à l'École Nationale d'Informatique de Madagascar, je me spécialise dans le développement d'applications modernes et le design d'interfaces utilisateur."
                : "Currently a Master's student at the National Computer Science School of Madagascar, I'm specializing in modern application development and user interface design."}
            </motion.p>
            
            <motion.p variants={itemVariants}>
              {language === 'fr'
                ? "En dehors de mes études, j'aime travailler sur des projets personnels, participer à des hackathons et contribuer à des projets open source pour continuer à apprendre et à me perfectionner."
                : "Outside of my studies, I enjoy working on personal projects, participating in hackathons and contributing to open source projects to keep learning and improving."}
            </motion.p>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1,
              transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 100
              }
            } : {}}
          >
            <div className="image-container">
              <div className="image-placeholder"></div>
              <motion.div 
                className="decoration-circle circle-1"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="decoration-circle circle-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="timeline"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              custom={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="timeline-icon"
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
              >
                <h3>{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <span className="timeline-period">{item.period}</span>
                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;