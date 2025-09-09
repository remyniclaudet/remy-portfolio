import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Scroll vers section sur la home
  const scrollToId = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 border-t border-dark-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Contenu principal du footer */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <span className="text-2xl font-bold text-primary-500">RAZAKATSARA</span>
                <p className="text-dark-300 mt-2 max-w-md">
                  Designer UX/UI & Développeur Frontend passionné par la création d'expériences digitales exceptionnelles.
                </p>
              </motion.div>
            </div>

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
              <motion.a
                href="https://twitter.com/remyniclaudet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter />
              </motion.a>
              <motion.a
                href="https://instagram.com/remyniclaudet"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram />
              </motion.a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-dark-400 text-sm">
              © {currentYear} RAZAKATSARA. Tous droits réservés.
            </p>
            <p className="text-dark-400 text-sm mt-2 md:mt-0">
              Fait avec <span className="text-primary-500">❤</span> par Remy NICLAUDET
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;