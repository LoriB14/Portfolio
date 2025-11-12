import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import './index.css';
import Header from './components/Header.jsx';
import Main from './Components/sections.jsx';
import Footer from './components/Footer.jsx';
import IntroAnimation from './Components/IntroAnimation.jsx';

const root = createRoot(document.getElementById('root'));

root.render(<Page />);

function Page() {
  const [showIntro, setShowIntro] = useState(true);
  
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