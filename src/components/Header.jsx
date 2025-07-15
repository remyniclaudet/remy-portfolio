import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import '../styles/header.css';

const Header = ({ theme, toggleTheme, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'fr' ? 'Accueil' : 'Home', path: '#home' },
    { name: language === 'fr' ? 'À propos' : 'About', path: '#about' },
    { name: language === 'fr' ? 'Compétences' : 'Skills', path: '#skills' },
    { name: language === 'fr' ? 'Projets' : 'Projects', path: '#projects' },
    { name: language === 'fr' ? 'Contact' : 'Contact', path: '#contact' }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '/FR.png' },
    { code: 'en', name: 'English', flag: '/ANG.png' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

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
          <div 
            className="lang-selector"
            onMouseEnter={() => setLangDropdownOpen(true)}
            onMouseLeave={() => setLangDropdownOpen(false)}
          >
            <button 
              className="lang-button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            >
              <img 
                src={currentLanguage.flag} 
                alt={currentLanguage.name} 
                className="flag-icon"
              />
              <span>{currentLanguage.code.toUpperCase()}</span>
              <FiChevronDown size={14} />
            </button>
            
            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="lang-option"
                      onClick={() => {
                        toggleLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <img 
                        src={lang.flag} 
                        alt={lang.name} 
                        className="flag-icon"
                      />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div 
            className="theme-switch" 
            onClick={toggleTheme}
            title={language === 'fr' ? 'Changer de thème' : 'Toggle theme'}
          >
            <FiSun className="theme-icon" />
            <FiMoon className="theme-icon" />
            <span className="switch-handle"></span>
          </div>

          <motion.button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={language === 'fr' ? 'Menu mobile' : 'Mobile menu'}
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