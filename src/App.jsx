import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import NotFound from './components/NotFound';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    // Apply theme to body
    document.body.setAttribute('data-theme', theme);
    
    // Save preferences to localStorage
    localStorage.setItem('portfolio-theme', theme);
    localStorage.setItem('portfolio-language', language);
  }, [theme, language]);

  useEffect(() => {
    // Load preferences from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    const savedLanguage = localStorage.getItem('portfolio-language') || 'fr';
    
    setTheme(savedTheme);
    setLanguage(savedLanguage);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="app">
        <Header 
          theme={theme} 
          toggleTheme={toggleTheme} 
          language={language} 
          toggleLanguage={toggleLanguage} 
        />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <>
                <Hero language={language} />
                <About language={language} />
                <Skills language={language} />
                <Projects language={language} />
                <Contact language={language} />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        
        <Footer language={language} />
      </div>
    </Router>
  );
}