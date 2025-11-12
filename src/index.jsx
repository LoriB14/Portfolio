import { createRoot } from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import './index.css';
import Header from './Components/header.jsx';
import Main from './Components/sections.jsx';
import Footer from './Components/footer.jsx';
import IntroAnimation from './Components/IntroAnimation.jsx';

const root = createRoot(document.getElementById('root'));

root.render(<Page />);

function Page() {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    // Always scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleLogoClick = () => {
    setShowIntro(true);
  };
  
  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }
  
  return (
    <div className="main-content">
      <Header onLogoClick={handleLogoClick} />
      <Main />
      <Footer />
    </div>
  );
}