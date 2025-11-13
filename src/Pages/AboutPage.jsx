import { useEffect } from 'react';
import Header from '../Components/header.jsx';
import Footer from '../Components/footer.jsx';
import About from '../Components/Sections/About.jsx';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
