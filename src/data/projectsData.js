export const projectsData = {
  design: [
    {
      id: 1,
      title: "E-tsena",
      category: "design",
      type: "Application Mobile",
      description: "Application d'épicerie en ligne avec service de livraison intégré",
      image: "/projects/e-tsena.jpg",
      technologies: ["Figma", "Adobe XD", "Prototypage"],
      features: ["UI/UX Design", "User Flow", "Wireframes", "Mockups"],
      status: "Complété"
    },
    {
      id: 2,
      title: "Mitahiry Password",
      category: "design",
      type: "Application Web",
      description: "Design d'une application gestionnaire de mots de passe sécurisée",
      image: "./YYYY.png",
      technologies: ["Figma", "Illustrator", "Design System"],
      features: ["Interface intuitive", "Système de sécurité visuel", "Design responsive"],
      status: "Complété"
    },
    {
      id: 3,
      title: "Refonte UI Site Vitrine",
      category: "design",
      type: "Projet Collaboratif",
      description: "Refonte complète de l'interface utilisateur d'un site vitrine chez ARATO",
      image: "/projects/arato.jpg",
      technologies: ["Figma", "Photoshop", "Design Thinking"],
      features: ["Modernisation UI", "Amélioration UX", "Design System"],
      status: "En cours"
    }
  ],
  frontend: [
    {
      id: 4,
      title: "Mitahiry Password",
      category: "frontend",
      type: "Application Web",
      description: "Application complète de gestion de mots de passe avec chiffrement",
      image: "/projects/mitahiry-app.jpg",
      technologies: ["Vite", "React", "Tailwind", "Node.js", "Supabase"],
      features: ["Chiffrement AES-256", "Gestion multi-comptes", "Générateur de mots de passe"],
      status: "Complété",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 5,
      title: "Surveillance Réseau Mobile",
      category: "frontend",
      type: "Application Web",
      description: "Outil de surveillance et analyse de réseau pour appareils mobiles",
      image: "/projects/network.jpg",
      technologies: ["Vite", "React", "Tailwind", "Node.js"],
      features: ["Monitoring temps réel", "Analyses graphiques", "Alertes personnalisables"],
      status: "Complété",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      id: 6,
      title: "Spray Info E-Learning",
      category: "frontend",
      type: "Plateforme Educative",
      description: "Plateforme e-learning pour le centre de formation Spray Info",
      image: "/projects/spray-info.jpg",
      technologies: ["Vite", "React", "CSS", "Node.js", "Express", "MariaDB"],
      features: ["Cours interactifs", "Système de quiz", "Progression utilisateur"],
      status: "Complété",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ]
};

export const getAllProjects = () => {
  return [...projectsData.design, ...projectsData.frontend];
};

export const getProjectById = (id) => {
  const allProjects = getAllProjects();
  return allProjects.find(project => project.id === parseInt(id));
};