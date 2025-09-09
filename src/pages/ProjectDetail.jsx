import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projet non trouvé</h1>
          <button onClick={() => navigate('/projets')} className="btn-primary">
            Retour aux projets
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <button onClick={() => navigate('/projets')} className="text-primary-400 hover:text-primary-300">
            ← Retour aux projets
          </button>
        </nav>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-medium mb-2 block">
            {project.type}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        {/* Image principale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-dark-700/50 h-64 md:h-96 flex items-center justify-center"
        >
          <span className="text-8xl opacity-30">📱</span>
        </motion.div>

        {/* Détails du projet */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">À propos du projet</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-dark-300 mb-6">
                  {project.category === 'design' ?
                    "Ce projet a été réalisé avec une attention particulière portée à l'expérience utilisateur et à l'interface moderne." :
                    "Développement complet avec une architecture robuste et des technologies modernes."
                  }
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">Fonctionnalités principales</h3>
                <ul className="text-dark-300 space-y-2 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-white mb-4">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statut */}
            <div className="bg-dark-800/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Informations du projet</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-dark-400 text-sm">Statut</span>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ml-2 ${
                    project.status === 'Complété' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div>
                  <span className="text-dark-400 text-sm">Catégorie</span>
                  <div className="text-white ml-2">{project.category === 'design' ? 'Design' : 'Développement'}</div>
                </div>
                <div>
                  <span className="text-dark-400 text-sm">Type</span>
                  <div className="text-white ml-2">{project.type}</div>
                </div>
              </div>
            </div>

            {/* Liens */}
            {(project.github || project.demo) && (
              <div className="bg-dark-800/50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Liens</h3>
                <div className="space-y-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-outline flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Code source
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Voir la démo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;