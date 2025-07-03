import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import '../styles/about.css';

const About = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12
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
        ? "Spécialisation en architectures logicielles avancées et expérience utilisateur, avec une approche centrée sur les bonnes pratiques de développement et les méthodologies agiles." 
        : "Specialization in advanced software architectures and user experience, with a focus on development best practices and agile methodologies.",
      icon: <FiAward />
    },
    {
      id: 2,
      title: language === 'fr' ? "Licence en Informatique" : "Bachelor in Computer Science",
      company: language === 'fr' ? "Université de Madagascar" : "University of Madagascar",
      period: "2018 - 2022",
      description: language === 'fr' 
        ? "Formation complète couvrant les fondamentaux de l'informatique, avec un accent particulier sur les systèmes distribués et les technologies web modernes." 
        : "Comprehensive training covering computer science fundamentals, with particular emphasis on distributed systems and modern web technologies.",
      icon: <FiUser />
    },
    {
      id: 3,
      title: language === 'fr' ? "Développeur Fullstack" : "Fullstack Developer",
      company: "Freelance",
      period: "2020 - Présent",
      description: language === 'fr' 
        ? "Conception et réalisation d'applications web performantes en utilisant les dernières technologies (React, Node.js, MongoDB), avec une attention particulière à l'optimisation et à la sécurité." 
        : "Design and implementation of high-performance web applications using the latest technologies (React, Node.js, MongoDB), with special attention to optimization and security.",
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
              delay: 0.1,
              type: 'spring',
              stiffness: 120
            }
          } : {}}
        >
          {language === 'fr' ? "À propos" : "About"}
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
    ? "Étudiant en première année de master professionnel à l'École Nationale d'Informatique, je me spécialise en développement fullstack avec un intérêt particulier pour l’ingénierie logicielle et l’ergonomie des interfaces. Mes projets académiques et personnels me permettent d’allier rigueur technique et sens pratique pour concevoir des solutions efficaces et intuitives."
    : "As a first-year master's student at the National School of Computer Science, I specialize in fullstack development with a particular interest in software engineering and user interface design. My academic and personal projects allow me to combine technical rigor with practical thinking to build effective and intuitive solutions."}
</motion.p>

<motion.p variants={itemVariants}>
  {language === 'fr'
    ? "Mon parcours à l'École Nationale d'Informatique m’apporte des bases solides en algorithmique, systèmes et développement web. En parallèle, mes stages et projets en alternance m’aident à mieux comprendre les réalités du métier et les besoins concrets des utilisateurs."
    : "My studies at the National School of Computer Science provide me with strong foundations in algorithms, systems, and web development. At the same time, my internships and apprenticeship projects help me better understand real-world job expectations and user needs."}
</motion.p>

<motion.p variants={itemVariants}>
  {language === 'fr'
    ? "Curieux et passionné de technologies, je reste à jour sur les dernières innovations et participe à des projets collaboratifs dès que possible. Pour moi, l’apprentissage continu et le partage de connaissances sont essentiels dans ce domaine en constante évolution."
    : "Curious and passionate about technology, I stay up-to-date with the latest innovations and contribute to collaborative projects whenever possible. I believe continuous learning and knowledge sharing are essential in this ever-evolving field."}
</motion.p>

          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1,
              transition: {
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
                damping: 15
              }
            } : {}}
          >
            <div className="image-container">
              <div className="image-placeholder"></div>
              <motion.div 
                className="decoration-circle circle-1"
                animate={inView ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                } : {}}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="decoration-circle circle-2"
                animate={inView ? {
                  scale: [1, 1.15, 1],
                  rotate: [360, 180, 0]
                } : {}}
                transition={{
                  duration: 18,
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
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div 
                className="timeline-icon"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item.icon}
              </motion.div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ 
                  boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
                }}
                transition={{ duration: 0.3 }}
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