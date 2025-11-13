import { useEffect } from 'react';
import Header from '../Components/header.jsx';
import Footer from '../Components/footer.jsx';
import Education from '../Components/Sections/Education.jsx';

export default function EducationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      <Header />
      <Education />
      <Footer />
    </div>
  );
}
