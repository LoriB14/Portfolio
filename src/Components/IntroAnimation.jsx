import { useEffect, useState } from 'react';
import logoImage from '/GOLD_LB.png';

export default function IntroAnimation({ onComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [logoShrinking, setLogoShrinking] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  
  const name = "Lori Battouk";
  const welcomeText = "Welcome to my portfolio";
  
  useEffect(() => {
    // Step 1: Show big logo immediately
    setTimeout(() => {
      setShowLogo(true);
    }, 300);
    
    // Step 2: Start shrinking logo
    setTimeout(() => {
      setLogoShrinking(true);
    }, 1800);
    
    // Step 3: Show name and welcome together as logo disappears
    setTimeout(() => {
      setShowMain(true);
    }, 2500);
    
    // Step 4: Show underline shortly after
    setTimeout(() => {
      setShowUnderline(true);
    }, 2700);
    
    // Step 5: Show click hint shortly after
    setTimeout(() => {
      setCanContinue(true);
    }, 3200);
  }, []);
  
  const handleClick = () => {
    if (canContinue) {
      onComplete();
    }
  };
  
  return (
    <div className="intro-screen" onClick={handleClick}>
      <div className="particle-background">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="particle transform-gpu" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="intro-content">
        {showLogo && (
          <img 
            src={logoImage} 
            alt="LB Logo" 
            className={`intro-logo-big transform-gpu ${logoShrinking ? 'shrinking' : ''}`}
          />
        )}
        
        {showMain && (
          <>
            <div className="intro-name-container">
              <h1 className="intro-name transform-gpu animate-fade-in-up">{name}</h1>
              {showUnderline && <div className="intro-underline"></div>}
            </div>
            
            <p className="intro-welcome transform-gpu animate-fade-in-up">{welcomeText}</p>
          </>
        )}
        
        {canContinue && (
          <div className="click-hint transform-gpu animate-fade-in">Click anywhere to enter</div>
        )}
      </div>
    </div>
  );
}
