import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiDribbble } from 'react-icons/fi';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (hash) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

            {/* Liens rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-dark-300 hover:text-primary-400 transition-colors">Accueil</Link>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#a-propos')}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#competences')}
                    className="text-dark-300 hover:text-primary-400 transition-colors"
                  >
                    Compétences
                  </button>
                </li>
                <li>
                  <Link to="/projets" className="text-dark-300 hover:text-primary-400 transition-colors">Projets</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</Link>
                </li>
              </ul>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Connectons-nous</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <FiDribbble className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Barre de séparation */}
          <div className="border-t border-dark-800/50 my-8"></div>

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