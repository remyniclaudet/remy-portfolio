import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiLinkedin, FiPhone, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../styles/contact.css';

const Contact = ({ language }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_fzkwvwj',
      'template_9wx7r2i',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'gv7DW-KChz1YcI59G'
    ).then(() => {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }).catch((err) => {
      console.error('EmailJS error:', err);
      setSubmitError(true);
    }).finally(() => {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError(false);
      }, 3000);
    });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container-contact">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? {
            opacity: 1, y: 0,
            transition: { delay: 0.2, type: 'spring', stiffness: 100 }
          } : {}}>
          {language === 'fr' ? "Contactez-moi" : "Contact me"}
        </motion.h2>

        <div className="contact-content">
          <motion.div className="contact-info"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            {/* Email */}
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><FiMail /></div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:niclaudet.raz@gmail.com">niclaudet.raz@gmail.com</a>
              </div>
            </motion.div>

            {/* LinkedIn */}
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><FiLinkedin /></div>
              <div className="info-content">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/remyniclaudet" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/remyniclaudet
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><FaWhatsapp /></div>
              <div className="info-content">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/261323882147" target="_blank" rel="noopener noreferrer">
                  +261 32 38 821 47
                </a>
              </div>
            </motion.div>

            {/* Téléphone */}
            <motion.div className="info-item" whileHover={{ x: 5 }}>
              <div className="info-icon"><FiPhone /></div>
              <div className="info-content">
                <h3>{language === 'fr' ? "Téléphone" : "Phone"}</h3>
                <a href="tel:+261346384075">+261 34 63 840 75</a>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.form className="contact-form" onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? {
              opacity: 1, y: 0,
              transition: { delay: 0.4, type: 'spring', stiffness: 100 }
            } : {}}
          >
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder=" " />
              <label>{language === 'fr' ? "Votre nom" : "Your name"}</label>
            </div>

            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder=" " />
              <label>{language === 'fr' ? "Votre email" : "Your email"}</label>
            </div>

            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder=" " rows="5" />
              <label>{language === 'fr' ? "Votre message" : "Your message"}</label>
            </div>

            <motion.button type="submit" className="submit-btn" disabled={isSubmitting}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <motion.span animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }}>
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
              <motion.div className="success-message" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                {language === 'fr' ? "Message envoyé avec succès !" : "Message sent successfully!"}
              </motion.div>
            )}

            {submitError && (
              <motion.div className="success-message" style={{ backgroundColor: '#e74c3c' }}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                {language === 'fr' ? "Échec de l'envoi. Réessayez." : "Failed to send. Please try again."}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
