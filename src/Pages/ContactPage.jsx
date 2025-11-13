import { useEffect } from 'react';
import Header from '../Components/header.jsx';
import Footer from '../Components/footer.jsx';
import Contact from '../Components/Sections/Contact.jsx';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
