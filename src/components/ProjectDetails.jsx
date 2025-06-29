import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi'
import projectsData from './Projects'
import '../styles/project-details.css'

export default function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id))
    setProject(foundProject)
  }, [id])

  if (!project) {
    return <div className="container">Projet non trouvé</div>
  }

  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/#projects" className="back-button">
          <FiArrowLeft /> Retour aux projets
        </Link>

        <motion.div
          className="project-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>{project.title}</h1>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FiGithub /> Code source
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FiExternalLink /> Voir en ligne
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="project-image-main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img src={project.image} alt={project.title} />
        </motion.div>

        <div className="project-content">
          <motion.div
            className="project-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2>À propos du projet</h2>
            <p>{project.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
              hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut
              eleifend nibh porttitor. Ut in nulla enim.
            </p>
          </motion.div>

          <motion.div
            className="project-details-sidebar"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="details-box">
              <h3>Technologies utilisées</h3>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="details-box">
              <h3>Fonctionnalités</h3>
              <ul>
                <li>Interface utilisateur intuitive</li>
                <li>Responsive design</li>
                <li>Performance optimisée</li>
                <li>Sécurité renforcée</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="project-gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2>Galerie</h2>
          <div className="gallery-grid">
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
            <div className="gallery-item"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}