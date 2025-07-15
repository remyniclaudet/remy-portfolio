import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/projects.css';
import spray from '../assets/logo 1.png';
import visite from '../assets/logo 2.png';
import voiture from '../assets/logo 3.webp';
import routeip from '../assets/ip.png'

const Projects = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const projectsData = [
    {
      id: 1,
      title: language === 'fr' ? "Application E-learning" : "E-learning App",
      description: language === 'fr' 
        ? "Plateforme complète d'apprentissage en ligne avec gestion des cours, paiements et espace admin." 
        : "Complete online learning platform with course management, payments and admin dashboard.",
      tags: ["React", "Node.js", "MariaDB", "PayPal"],
      image: spray,
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: language === 'fr' ? "Gestion de location de voiture" : "Car Rental Management",
      description: language === 'fr' 
        ? "Système de gestion de location de voitures avec réservation, suivi et facturation." 
        : "Car rental management system with booking, tracking and invoicing.",
      tags: ["Vue.js", "MySql"],
      image: voiture,
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: language === 'fr' ? "Gestion de visite médicale" : "Medical Visit Management",
      description: language === 'fr' 
        ? "Application desktop pour planifier, enregistrer et suivre les visites médicales." 
        : "Desktop app to schedule, record, and monitor medical visits.",
      tags: ["Java", "JavaSwing", "PostgreSql"],
      image: visite,
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: language === 'fr' ? "Routage IP et Simulation Réseau" : "IP Routing and Network Simulation",
      description: language === 'fr' 
        ? "Simulation de réseau avec GNS3, routage statique et dynamique, analyse de paquets." 
        : "Network simulation using GNS3 with static/dynamic routing and packet analysis.",
      tags: ["GNS3", "Routeur", "TCP/IP", "Wireshark"],
      image: routeip,
      github: "#",
      live: "#"
    }
  ];

  const [filter, setFilter] = useState(language === 'fr' ? "Tous" : "All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const allTags = [
    language === 'fr' ? "Tous" : "All",
    ...new Set(projectsData.flatMap(project => project.tags))
  ];

  // Met à jour le filtre si la langue change
  useEffect(() => {
    setFilter(language === 'fr' ? "Tous" : "All");
  }, [language]);

  useEffect(() => {
    if (filter === (language === 'fr' ? "Tous" : "All")) {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.tags.includes(filter))
      );
    }
  }, [filter, language, projectsData]);

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
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0, transition: { delay: 0.2, type: 'spring', stiffness: 100 } } : {}}
        >
          {language === 'fr' ? "Mes Projets" : "My Projects"}
        </motion.h2>

        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0, transition: { delay: 0.4, type: 'spring', stiffness: 100 } } : {}}
        >
          {allTags.map(tag => (
            <motion.button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              custom={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              <div className="project-image">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <motion.span key={tag} whileHover={{ scale: 1.1 }}>
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.div whileHover={{ x: 5, transition: { type: 'spring', stiffness: 300 } }}>
                  <Link to={`/projects/${project.id}`} className="project-details-btn">
                    {language === 'fr' ? "Voir plus" : "View details"}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
