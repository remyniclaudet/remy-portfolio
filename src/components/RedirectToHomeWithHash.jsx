import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RedirectToHomeWithHash = () => {
  const { hash } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Rediriger vers la page d'accueil avec le hash
    navigate('/', { replace: true });
    
    // Scroll vers la section après le rendu
    setTimeout(() => {
      const element = document.querySelector(`#${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [hash, navigate]);

  return null;
};

export default RedirectToHomeWithHash;