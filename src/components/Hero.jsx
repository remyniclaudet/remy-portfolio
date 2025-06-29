import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import '../styles/hero.css';

const Hero = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
       ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="hero-text" variants={staggerContainer}>
            <motion.h1 variants={textVariants}>
              {language === 'fr' ? (
                <>Bonjour, je suis <span>RAZAKATSARA Remy Niclaudet</span></>
              ) : (
                <>Hi, I'm <span>RAZAKATSARA Remy Niclaudet</span></>
              )}
            </motion.h1>
            
            <motion.h2 variants={textVariants}>
              {language === 'fr' 
                ? "Développeur Fullstack & Designer" 
                : "Fullstack Developer & Designer"}
            </motion.h2>
            
            <motion.p variants={textVariants}>
              {language === 'fr'
                ? "Étudiant en Master Professionnel à l'École Nationale d'Informatique de Madagascar"
                : "Master's student at the National Computer Science School of Madagascar"}
            </motion.p>
            
            <motion.div className="hero-buttons" variants={textVariants}>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? "Me contacter" : "Contact me"} <FiArrowRight />
              </motion.a>
              
              <motion.a
                href="/cv-remy-niclaudet.pdf"
                download
                className="btn btn-secondary"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? "Télécharger mon CV" : "Download CV"} <FiDownload />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { 
              opacity: 1, 
              scale: 1,
              transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 100
              }
            } : {}}
          >
            <div className="image-wrapper">
              <div className="placeholder-image"></div>
              <div className="floating-elements">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    className={`floating-element element-${item}`}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3 + item,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;