import { useEffect, useState } from 'react';

export default function IntroAnimation({ onComplete }) {
  const [nameText, setNameText] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  
  const name = "Lori Battouk";
  const welcomeText = "Welcome to my portfolio";
  
  useEffect(() => {
    // Type out name first
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < name.length) {
        setNameText(name.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        // Show welcome message after name is complete
        setTimeout(() => {
          setShowWelcome(true);
          // Allow user to continue after welcome appears
          setTimeout(() => {
            setCanContinue(true);
          }, 500);
        }, 500);
      }
    }, 80);

    return () => clearInterval(nameInterval);
  }, []);
  
  const handleClick = () => {
    if (canContinue) {
      onComplete();
    }
  };
  
  return (
    <div className="intro-screen" onClick={handleClick}>
      <div className="intro-content">
        <h1 className="intro-name">{nameText}</h1>
        {showWelcome && (
          <p className="intro-welcome">{welcomeText}</p>
        )}
        {canContinue && (
          <div className="click-hint">Click anywhere to enter</div>
        )}
      </div>
    </div>
  );
}
