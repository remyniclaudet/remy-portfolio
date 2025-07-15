import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

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
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div 
            className="footer-logo"
            variants={itemVariants}
          >
            <h2>RAZAKATSARA</h2>
            <p>
              {language === 'fr' 
                ? "Développeur Fullstack & Designer UX/UI" 
                : "Fullstack Developer & UX/UI Designer"}
            </p>
            <p>
              {language === 'fr'
                ? "École Nationale d'Informatique, Madagascar"
                : "National Computer Science School, Madagascar"}
            </p>
          </motion.div>

          <motion.div 
            className="footer-social"
            variants={itemVariants}
          >
            <h3>{language === 'fr' ? "Suivez-moi" : "Follow me"}</h3>
            <div className="social-icons">
              <motion.a
                href="https://github.com/remyniclaudet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/remyniclaudet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>

            </div>
          </motion.div>

          <motion.div 
            className="footer-nav"
            variants={itemVariants}
          >
            <h3>{language === 'fr' ? "Navigation" : "Navigation"}</h3>
            <ul>
              <li><a href="#home">{language === 'fr' ? "Accueil" : "Home"}</a></li>
              <li><a href="#about">{language === 'fr' ? "À propos" : "About"}</a></li>
              <li><a href="#skills">{language === 'fr' ? "Compétences" : "Skills"}</a></li>
              <li><a href="#projects">{language === 'fr' ? "Projets" : "Projects"}</a></li>
              <li><a href="#contact">{language === 'fr' ? "Contact" : "Contact"}</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="footer-bottom">
          <p>© {currentYear} RAZAKATSARA Remy Niclaudet. {language === 'fr' ? "Tous droits réservés." : "All rights reserved."}</p>
          
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            whileHover={{ 
              y: -5,
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;