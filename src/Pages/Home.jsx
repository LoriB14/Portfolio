import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IntroAnimation from '../Components/IntroAnimation.jsx';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();
  
  const handleIntroComplete = () => {
    setShowIntro(false);
    // After a brief moment, navigate to about page
    setTimeout(() => {
      navigate('/about');
    }, 500);
  };
  
  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }
  
  // Optional: Show a brief transition screen
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '2rem',
      color: 'white'
    }}>
      Loading...
    </div>
  );
}
