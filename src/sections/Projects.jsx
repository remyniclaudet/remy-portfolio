import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'Tous les projets', icon: '🌟' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'frontend', name: 'Frontend', icon: '⚛️' }
  ];

  const allProjects = [...projectsData.design, ...projectsData.frontend];
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : projectsData[activeCategory];

  return (
    <section id="projets" className="py-20 bg-dark-800">
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
            Mes <span className="text-primary-500">projets</span>
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations en design UX/UI et développement frontend.
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-dark-700/50 p-2 rounded-2xl flex flex-wrap gap-2">
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

        {/* Grille de projets */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-900/50 rounded-2xl overflow-hidden border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300 group"
            >
              {/* Image du projet */}
              <div className="h-48 bg-gradient-to-br from-primary-500/20 to-dark-700/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-dark-900/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📱</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Complété' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <span className="text-xs font-medium text-dark-400">
                    {project.category === 'design' ? 'Design' : 'Développement'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-dark-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-dark-400 bg-dark-700/50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-dark-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Bouton Voir détails */}
                <Link
                  to={`/projet/${project.id}`}
                  className="w-full border border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-500 hover:text-white text-center block"
                >
                  Voir les détails
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-dark-300 mb-6">
            Vous souhaitez voir plus de projets ou discuter d'une collaboration ?
          </p>
          <button
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30 inline-flex items-center gap-2"
            onClick={() => navigate('/contact')}
          >
            Me contacter
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;