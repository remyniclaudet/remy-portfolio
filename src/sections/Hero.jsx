import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      const smallScreen = window.innerWidth < 480;
      setIsMobile(mobile);
      setIsSmallScreen(smallScreen);
    };

    // Vérifier la taille initiale
    checkScreenSize();

    // Écouter les changements de taille
    window.addEventListener('resize', checkScreenSize);

    // Nettoyer l'écouteur
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative bg-dark-900 overflow-hidden pt-12 pb-20 md:py-8">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center text-center w-full">
          {/* Nom et prénom avec espacement réduit entre eux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-10 px-2"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-3">
              <span>RAZAKATSARA</span>
              <span className="text-primary-400 hidden sm:inline">•</span>
              <span className="text-primary-400 sm:hidden">-</span>
              <span>Remy Niclaudet</span>
            </div>
          </motion.div>
          
          {/* Image avec espacement augmenté autour */}
          <div className="relative w-80 h-80 sm:w-88 sm:h-88 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] mb-12 md:mb-16">
            {/* Votre image sans fond */}
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img 
                src="/tix.png" 
                alt="Remy NICLAUDET" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Designer UX/UI - Position responsive cohérente */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`absolute bg-dark-800/80 backdrop-blur-md rounded-lg shadow-lg ${
                isSmallScreen 
                  ? 'left-2 top-28 px-3 py-2 text-sm' 
                  : isMobile 
                    ? '-left-4 top-32 px-3 py-2 text-base' 
                    : '-left-6 md:-left-8 top-40 md:top-48 px-4 py-3 md:px-5 md:py-4 text-lg md:text-xl'
              }`}
            >
              <span className="text-primary-400 font-mono font-semibold whitespace-nowrap">DESIGNER UX/UI</span>
            </motion.div>
            
            {/* Développeur Frontend - Position responsive cohérente */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className={`absolute bg-dark-800/80 backdrop-blur-md rounded-lg shadow-lg ${
                isSmallScreen 
                  ? 'right-2 -bottom-2 px-3 py-2 text-sm' 
                  : isMobile 
                    ? '-right-4 -bottom-4 px-3 py-2 text-base' 
                    : '-right-6 md:-right-8 -bottom-6 md:-bottom-8 px-4 py-3 md:px-5 md:py-4 text-lg md:text-xl'
              }`}
            >
              <span className="text-primary-400 font-mono font-semibold whitespace-nowrap">DÉVELOPPEUR FRONTEND</span>
            </motion.div>
          </div>
          
          {/* Boutons avec espacement augmenté au-dessus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mt-6 md:mt-0"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4"
              onClick={() => {
                const el = document.querySelector('#projets');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/projets');
                }
              }}
            >
              Voir mes projets
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4"
              onClick={() => navigate('/contact')}
            >
              Me contacter
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;