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
      title: language === 'fr' ? "Master Professionnel" : "Professional Master's Degree",
      company: language === 'fr' ? "École Nationale d'Informatique" : "National School of Computer Science",
      period: "2024 - Présent",
      description: language === 'fr'
        ? "Première année de Master Professionnel à l'École Nationale d'Informatique de Madagascar, en Informatique Générale (logiciels et réseaux)."
        : "First year of a Professional Master's at the National School of Computer Science of Madagascar, specializing in general IT (software and networks).",
      icon: <FiAward />
    },
    {
      id: 2,
      title: language === 'fr' ? "Licence Professionnelle" : "Bachelor's Degree in Computer Science",
      company: language === 'fr' ? "École Nationale d'Informatique" : "National School of Computer Science",
      period: "Décembre 2024",
      description: language === 'fr'
        ? "Obtention de la Licence Professionnelle avec un projet de fin d'études : conception et réalisation d’une plateforme e-learning pour le centre de formation Spray Info."
        : "Earned a Bachelor's Degree with a final year project: design and development of an e-learning platform for the training center Spray Info.",
      icon: <FiUser />
    },
    {
      id: 3,
      title: language === 'fr' ? "Troisième année de licence" : "Third Year of Bachelor's Degree",
      company: language === 'fr' ? "École Nationale d'Informatique" : "National School of Computer Science",
      period: "2023 - 2024",
      description: language === 'fr'
        ? "Développement d'applications web avec React, Node.js, MySQL et d'applications desktop avec Java. Passage sécurisé du protocole HTTP vers HTTPS."
        : "Developed web applications using React, Node.js, and MySQL, and desktop applications with Java. Implemented HTTPS for secure communication.",
      icon: <FiBriefcase />
    },
    {
      id: 4,
      title: language === 'fr' ? "Deuxième année de licence" : "Second Year of Bachelor's Degree",
      company: language === 'fr' ? "École Nationale d'Informatique" : "National School of Computer Science",
      period: "2022 - 2023",
      description: language === 'fr'
        ? "Création de sites web avec JSP, HTML et CSS, et d'applications desktop en C#. Mise en œuvre de projets réseau avec routage IP."
        : "Built web applications using JSP, HTML, and CSS, and desktop applications with C#. Worked on network projects involving IP routing.",
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

        <motion.div
          className="about-text only"
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
              ? "Mon parcours m’a permis d’acquérir des bases solides en algorithmique, développement web et systèmes. Je possède également une bonne compréhension des notions de réseau, utiles dans l’intégration de systèmes distribués."
              : "My background has given me solid foundations in algorithms, web development, and systems. I also have a good understanding of networking basics, useful for distributed system integration."}
          </motion.p>

          <motion.p variants={itemVariants}>
            {language === 'fr'
              ? "Curieux et passionné de technologies, je reste à jour sur les dernières innovations et participe à des projets collaboratifs dès que possible. Pour moi, l’apprentissage continu et le partage de connaissances sont essentiels dans ce domaine en constante évolution."
              : "Curious and passionate about technology, I stay up-to-date with the latest innovations and contribute to collaborative projects whenever possible. I believe continuous learning and knowledge sharing are essential in this ever-evolving field."}
          </motion.p>
        </motion.div>

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
                whileHover={{ boxShadow: "0 8px 25px rgba(0,0,0,0.12)" }}
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
