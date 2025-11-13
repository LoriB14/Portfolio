import { useEffect } from 'react';
import Header from '../Components/header.jsx';
import Footer from '../Components/footer.jsx';
import Projects from '../Components/Sections/Projects.jsx';

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}
