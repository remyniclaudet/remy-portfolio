import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import sary from '../assets/1.png';
import '../styles/hero.css';

const Hero = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatVariants = {
    float: {
      y: [-15, 15, -15],
      x: [0, 5, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const text = language === 'fr' 
    ? "Bonjour, je suis RAZAKATSARA Remy Niclaudet" 
    : "Hi, I'm RAZAKATSARA Remy Niclaudet";

  const title = text.split(" ").map((word, wordIndex) => (
    <motion.span 
      key={wordIndex} 
      className="word"
      style={{ display: 'inline-block' }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {word.split("").map((letter, letterIndex) => (
        <motion.span
          key={letterIndex}
          className="letter"
          variants={letterVariants}
          whileHover={{ y: -5, color: 'var(--primary)' }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.span className="letter">&nbsp;</motion.span>
    </motion.span>
  ));

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="tech-grid"></div>
      <div className="particles"></div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="hero-text" variants={containerVariants}>
            <motion.h1>
              {title}
              <motion.span 
                className="gradient-text"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 1.5 }
                }}
              >
                {" "}
              </motion.span>
            </motion.h1>
            
            <motion.h2 variants={letterVariants}>
              {language === 'fr' 
                ? "Développeur Fullstack & Designer" 
                : "Fullstack Developer & Designer"}
            </motion.h2>
            
            <motion.p variants={letterVariants}>
              {language === 'fr'
                ? "Étudiant en Master Professionnel à l'École Nationale d'Informatique de Madagascar"
                : "Master's student at the National Computer Science School of Madagascar"}
            </motion.p>
            
            <motion.div className="hero-buttons" variants={letterVariants}>
              <motion.a
                href="#about"
                className="btn btn-primary"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(126, 217, 87, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? "Voir plus" : "See more"} 
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                    transition: { 
                      duration: 1.5,
                      repeat: Infinity
                    }
                  }}
                >
                  <FiArrowRight />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(16, 36, 41, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'fr' ? "Contact" : "Contact"}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5 }
            } : {}}
          >
            <motion.div 
              className="image-wrapper"
              variants={floatVariants}
              animate="float"
            >
              <img 
                src={sary} 
                alt="RAZAKATSARA Remy Niclaudet" 
                className="profile-photo"
              />
              
              <div className="tech-circle circle-1"></div>
              <div className="tech-circle circle-2"></div>
              <div className="tech-circle circle-3"></div>
              
              <div className="code-snippet snippet-1">
                <span>const</span> developer = <span>new</span> Developer();
              </div>
              <div className="code-snippet snippet-2">
                <span>design</span>.create(<span>"modern UI"</span>);
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;