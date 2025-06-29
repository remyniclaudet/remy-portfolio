import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/projects.css';

const Projects = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  const [filter, setFilter] = useState(language === 'fr' ? "Tous" : "All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projectsData = [
    {
      id: 1,
      title: language === 'fr' ? "Application E-commerce" : "E-commerce App",
      description: language === 'fr' 
        ? "Plateforme complète de e-commerce avec panier, paiement et dashboard admin." 
        : "Complete e-commerce platform with cart, payment and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      image: "/placeholder-project1.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: language === 'fr' ? "Réseau Social" : "Social Network",
      description: language === 'fr' 
        ? "Application de réseau social avec fonctionnalités de publication et commentaires." 
        : "Social network application with post and comment features.",
      tags: ["Vue.js", "Firebase", "TailwindCSS"],
      image: "/placeholder-project2.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: language === 'fr' ? "Dashboard Analytique" : "Analytics Dashboard",
      description: language === 'fr' 
        ? "Tableau de bord de données avec visualisations interactives et filtres." 
        : "Data dashboard with interactive visualizations and filters.",
      tags: ["React", "D3.js", "TypeScript"],
      image: "/placeholder-project3.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: language === 'fr' ? "Application de Gestion de Tâches" : "Task Management App",
      description: language === 'fr' 
        ? "Application de productivité avec gestion de projets et tâches en équipe." 
        : "Productivity app with project and team task management.",
      tags: ["React Native", "GraphQL", "Node.js"],
      image: "/placeholder-project4.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: language === 'fr' ? "Portfolio Artistique" : "Art Portfolio",
      description: language === 'fr' 
        ? "Site vitrine pour un artiste avec galerie interactive et boutique en ligne." 
        : "Showcase website for an artist with interactive gallery and online shop.",
      tags: ["Next.js", "Stripe", "Framer Motion"],
      image: "/placeholder-project5.jpg",
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: language === 'fr' ? "Système de Réservation" : "Booking System",
      description: language === 'fr' 
        ? "Plateforme de réservation en ligne avec calendrier et notifications." 
        : "Online booking platform with calendar and notifications.",
      tags: ["Angular", "Firebase", "Material UI"],
      image: "/placeholder-project6.jpg",
      github: "#",
      live: "#"
    }
  ];

  const allTags = [
    language === 'fr' ? "Tous" : "All", 
    ...new Set(projectsData.flatMap(project => project.tags))
  ];

  useEffect(() => {
    if (filter === (language === 'fr' ? "Tous" : "All")) {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.tags.includes(filter)));
    }
  }, [filter, language]);

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
          {language === 'fr' ? "Mes Projets" : "My Projects"}
        </motion.h2>

        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 0.4,
              type: 'spring',
              stiffness: 100
            }
          } : {}}
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
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
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
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ 
                    x: 5,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="project-details-btn"
                  >
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