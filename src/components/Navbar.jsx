import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Détection de la section visible
      if (location.pathname === '/') {
        const sections = [
          { id: 'a-propos', name: 'À propos' },
          { id: 'competences', name: 'Compétences' },
          { id: 'projets', name: 'Projets' },
          { id: 'contact', name: 'Contact' }
        ];
        let found = 'accueil';
        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
              found = section.id;
              break;
            }
          }
        }
        setActiveSection(found);
      } else {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleCvClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation simple : route ou scroll vers id
  const scrollToId = (id) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
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

  const navItems = [
    { name: 'Accueil', path: '/', type: 'route' },
    { name: 'À propos', path: 'a-propos', type: 'id' },
    { name: 'Compétences', path: 'competences', type: 'id' },
    { name: 'Projets', path: '/projets', type: 'route' },
    { name: 'Contact', path: '/contact', type: 'route' }
  ];

  // Active route ou section
  const isActive = (item) => {
    if (item.type === 'route') {
      // Accueil actif si aucune section active sur "/"
      return location.pathname === item.path && (activeSection === 'accueil' || activeSection === '');
    }
    // Pour les sections, active si on est sur "/" ET si la section est visible
    return location.pathname === '/' && activeSection === item.path;
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-md py-3' : 'bg-transparent py-4 md:py-6'} ${isMobileMenuOpen ? 'bg-dark-900/95' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleNavClick}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-xl sm:text-2xl font-bold text-primary-500"
              >
                RAZAKATSARA
              </motion.div>
            </Link>
            
            {/* Menu desktop */}
            <div className="hidden md:flex space-x-8 lg:space-x-10">
              {navItems.map((item, index) => (
                item.type === 'id' ? (
                  <motion.button
                    key={index}
                    whileHover={{ y: -2 }}
                    className={`nav-link text-sm lg:text-base ${isActive(item) ? 'text-primary-400' : ''}`}
                    onClick={() => scrollToId(item.path)}
                  >
                    {item.name}
                  </motion.button>
                ) : (
                  <Link key={index} to={item.path}>
                    <motion.span
                      whileHover={{ y: -2 }}
                      className={`nav-link text-sm lg:text-base ${isActive(item) ? 'text-primary-400' : ''}`}
                      onClick={() => {
                        handleNavClick();
                        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                )
              ))}
            </div>
            
            {/* Bouton CV desktop */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary hidden md:block text-sm lg:text-base"
              onClick={handleCvClick}
            >
              Télécharger CV
            </motion.button>
            
            {/* Menu mobile */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>

          {/* Menu mobile déroulant */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-dark-800/95 backdrop-blur-md rounded-lg mt-4 overflow-hidden"
              >
                <div className="py-4 px-4 space-y-4">
                  {navItems.map((item, index) => (
                    item.type === 'id' ? (
                      <motion.button
                        key={index}
                        className={`block text-white hover:text-primary-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-dark-700/50 w-full text-left ${isActive(item) ? 'text-primary-400' : ''}`}
                        onClick={() => scrollToId(item.path)}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.button>
                    ) : (
                      <Link key={index} to={item.path}>
                        <motion.span
                          className={`block text-white hover:text-primary-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-dark-700/50 cursor-pointer ${isActive(item) ? 'text-primary-400' : ''}`}
                          onClick={() => {
                            handleNavClick();
                            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    )
                  ))}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary mt-4 text-center"
                    onClick={() => {
                      handleCvClick();
                      handleNavClick();
                    }}
                  >
                    Télécharger CV
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-dark-800/95 backdrop-blur-md border border-primary-500/30 text-white px-6 py-4 rounded-lg shadow-lg max-w-xs sm:max-w-sm text-center"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Cette fonctionnalité n'est pas encore disponible</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;