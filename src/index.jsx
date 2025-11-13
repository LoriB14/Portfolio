import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// Import Pages
import Home from './Pages/Home.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import EducationPage from './Pages/EducationPage.jsx';
import SkillsPage from './Pages/SkillsPage.jsx';
import ProjectsPage from './Pages/ProjectsPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      {/* Redirect any unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);