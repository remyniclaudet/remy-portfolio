import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: "Août 2025",
      title: "Formation Design UX/UI",
      institution: "ARATO, Fianarantsoa",
      description: "Formation intensive en design d'expérience utilisateur et d'interface utilisateur"
    },
    {
      year: "2024-2025",
      title: "Master Professionnel",
      institution: "École Nationale d'Informatique (ENI)",
      description: "Première année en master professionnel en informatique"
    },
    {
      year: "Décembre 2024",
      title: "Licence Professionnelle",
      institution: "École Nationale d'Informatique (ENI)",
      description: "Obtention du diplôme de licence professionnelle en informatique"
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Colonne de gauche - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              À propos de <span className="text-primary-500">moi</span>
            </h2>
            
            <div className="space-y-4 text-dark-300 text-lg">
              <p className="leading-relaxed">
                Je suis un étudiant passionné de l'École Nationale d'Informatique de Madagascar (ENI), 
                où je poursuis actuellement mon master professionnel en informatique.
              </p>
              
              <p className="leading-relaxed">
                Passionné par les nouvelles technologies, je me spécialise particulièrement dans 
                le <span className="text-primary-400 font-semibold">design UX/UI</span> et le 
                <span className="text-primary-400 font-semibold"> développement frontend</span>. 
                J'aime créer des interfaces qui allient esthétique moderne et expérience utilisateur optimale.
              </p>
              
              <p className="leading-relaxed">
                Mon objectif est de concevoir des solutions digitales innovantes qui répondent 
                aux besoins réels des utilisateurs tout en offrant une expérience visuelle remarquable.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-dark-700/50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-primary-500">2+</div>
                <div className="text-dark-300 mt-1">Années d'étude</div>
              </div>
              <div className="text-center p-4 bg-dark-700/50 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-primary-500">10+</div>
                <div className="text-dark-300 mt-1">Projets réalisés</div>
              </div>
            </div>
          </motion.div>

          {/* Colonne de droite - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Mon <span className="text-primary-500">parcours</span>
            </h3>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group cursor-pointer"
                  onMouseEnter={() => setActiveTimeline(index)}
                  onClick={() => setActiveTimeline(index)}
                >
                  {/* Ligne verticale */}
                  <div className="absolute left-5 top-0 h-full w-0.5 bg-primary-500/20">
                    <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 transition-all duration-300 ${activeTimeline === index ? 'scale-125' : 'scale-100'}`}></div>
                  </div>
                  
                  {/* Contenu */}
                  <div className={`p-6 rounded-xl transition-all duration-300 ${
                    activeTimeline === index 
                      ? 'bg-primary-500/10 border-l-4 border-primary-500 shadow-lg' 
                      : 'bg-dark-700/30 hover:bg-dark-700/50'
                  }`}>
                    <div className="text-primary-400 font-mono font-semibold text-sm mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <div className="text-primary-300 font-medium mb-3">
                      {item.institution}
                    </div>
                    <p className="text-dark-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Citation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-primary-500/10 rounded-xl border-l-4 border-primary-500"
            >
              <p className="text-white italic text-lg">
                "Le design n'est pas seulement ce à quoi ça ressemble, c'est comment ça fonctionne."
              </p>
              <p className="text-primary-400 mt-2 text-sm">- Steve Jobs</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;