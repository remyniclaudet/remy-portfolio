import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import '../styles/not-found.css'

export default function NotFound() {
  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="not-found-content">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Page non trouvée
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/" className="home-link">
              <FiHome /> Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}