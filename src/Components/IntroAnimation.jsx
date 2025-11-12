import { useEffect, useState } from 'react';

export default function IntroAnimation({ onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Hi, I'm Lori Battouk. \n Welcome to my portfolio.";
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        // DO NOT auto-advance - wait for user click only
      }
    }, 80); // Typing speed: 80ms per character (slower)
    
    return () => clearInterval(typingInterval);
  }, []);
  
  const handleClick = () => {
    onComplete();
  };
  
  return (
    <div className="intro-screen" onClick={handleClick}>
      <div className="intro-content">
        <div className="intro-text" style={{ whiteSpace: 'pre-line' }}>
          {displayedText}
          {!typingComplete && <span className="cursor">|</span>}
        </div>
        <div className="click-hint">Click anywhere to enter</div>
      </div>
    </div>
  );
}
