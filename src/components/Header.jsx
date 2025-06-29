import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import '../styles/header.css';

const Header = ({ theme, toggleTheme, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'fr' ? 'Accueil' : 'Home', path: '/' },
    { name: language === 'fr' ? 'À propos' : 'About', path: '#about' },
    { name: language === 'fr' ? 'Compétences' : 'Skills', path: '#skills' },
    { name: language === 'fr' ? 'Projets' : 'Projects', path: '#projects' },
    { name: language === 'fr' ? 'Contact' : 'Contact', path: '#contact' }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100
      }
    })
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">RAZAKATSARA</Link>
        </motion.div>

        <nav className="desktop-nav">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                custom={i}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={location.hash === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch">
            <button 
              className={language === 'fr' ? 'active' : ''}
              onClick={() => toggleLanguage('fr')}
            >
              FR
            </button>
            <button 
              className={language === 'en' ? 'active' : ''}
              onClick={() => toggleLanguage('en')}
            >
              EN
            </button>
          </div>
          
          <div className="theme-switch" onClick={toggleTheme}>
            <FiSun />
            <FiMoon />
            <span className="switch-handle"></span>
          </div>

          <motion.button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <ul>
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={location.hash === link.path ? 'active' : ''}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;