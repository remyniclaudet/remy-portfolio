import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import '../styles/contact.css';

const Contact = ({ language }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

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

  const inputVariants = {
    focus: {
      boxShadow: "0 0 0 2px var(--primary)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container-contact">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 0.2,
              type: 'spring',
              stiffness: 100
            }
          } : {}}
        >
          {language === 'fr' ? "Contactez-moi" : "Contact me"}
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="info-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="info-icon"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                <FiMail />
              </motion.div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:contact@remyniclaudet.com">contact@remyniclaudet.com</a>
              </div>
            </motion.div>

            <motion.div 
              className="info-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="info-icon"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  delay: 0.5
                }}
              >
                <FiGithub />
              </motion.div>
              <div className="info-content">
                <h3>GitHub</h3>
                <a href="https://github.com/remyniclaudet" target="_blank" rel="noopener noreferrer">
                  github.com/remyniclaudet
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="info-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="info-icon"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  delay: 1
                }}
              >
                <FiLinkedin />
              </motion.div>
              <div className="info-content">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/remyniclaudet" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/remyniclaudet
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.4,
                type: 'spring',
                stiffness: 100
              }
            } : {}}
          >
            <motion.div 
              className="form-group"
              variants={inputVariants}
              whileFocus="focus"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>{language === 'fr' ? "Votre nom" : "Your name"}</label>
            </motion.div>

            <motion.div 
              className="form-group"
              variants={inputVariants}
              whileFocus="focus"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>{language === 'fr' ? "Votre email" : "Your email"}</label>
            </motion.div>

            <motion.div 
              className="form-group"
              variants={inputVariants}
              whileFocus="focus"
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows="5"
              />
              <label>{language === 'fr' ? "Votre message" : "Your message"}</label>
            </motion.div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <motion.span
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  {language === 'fr' ? "Envoi en cours..." : "Sending..."}
                </motion.span>
              ) : (
                <>
                  <span>{language === 'fr' ? "Envoyer le message" : "Send message"}</span>
                  <FiSend />
                </>
              )}
            </motion.button>

            {submitSuccess && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {language === 'fr' 
                  ? "Message envoyé avec succès !" 
                  : "Message sent successfully!"}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;