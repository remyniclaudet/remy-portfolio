import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('design');

  const skillsData = {
    design: [
      { name: 'UI/UX Design', level: 90, icon: '🎨' },
      { name: 'Figma', level: 85, icon: '🖌️' },
      { name: 'Adobe XD', level: 75, icon: '✏️' },
      { name: 'Prototypage', level: 80, icon: '📱' },
      { name: 'Design System', level: 70, icon: '🔄' }
    ],
    frontend: [
      { name: 'HTML/CSS', level: 95, icon: '🌐' },
      { name: 'JavaScript', level: 88, icon: '⚡' },
      { name: 'React.js', level: 85, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' },
      { name: 'Vue.js', level: 75, icon: '🟢' },
      { name: 'Responsive Design', level: 92, icon: '📱' }
    ],
    tools: [
      { name: 'Git/GitHub', level: 85, icon: '📦' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Webpack', level: 70, icon: '🔧' },
      { name: 'Photoshop', level: 75, icon: '🎭' },
      { name: 'Illustrator', level: 65, icon: '✏️' }
    ]
  };

  const categories = [
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'frontend', name: 'Frontend', icon: '⚛️' },
    { id: 'tools', name: 'Outils', icon: '🛠️' }
  ];

  return (
    <section id="competences" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mes <span className="text-primary-500">compétences</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Découvrez mon expertise technique et mes compétences acquises au fil de mes études et projets personnels.
          </p>
        </motion.div>

        {/* Catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-dark-800/50 p-2 rounded-2xl flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    : 'text-dark-300 hover:text-white hover:bg-dark-700/50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compétences */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800/30 p-6 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-primary-400 font-bold text-lg">{skill.level}%</span>
              </div>
              
              {/* Barre de progression */}
              <div className="w-full bg-dark-700/50 rounded-full h-3 mb-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 animate-pulse"></div>
                </motion.div>
              </div>
              
              {/* Indicateur de niveau */}
              <div className="flex justify-between text-xs text-dark-400">
                <span>Débutant</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center p-6 bg-dark-800/30 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-dark-300">Projets réalisés</div>
          </div>
          <div className="text-center p-6 bg-dark-800/30 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">2+</div>
            <div className="text-dark-300">Ans d'expérience</div>
          </div>
          <div className="text-center p-6 bg-dark-800/30 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">10+</div>
            <div className="text-dark-300">Technologies maîtrisées</div>
          </div>
          <div className="text-center p-6 bg-dark-800/30 rounded-2xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">5+</div>
            <div className="text-dark-300">Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;