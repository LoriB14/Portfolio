import About from './Sections/About.jsx';
import Education from './Sections/Education.jsx';
import Skills from './Sections/Skills.jsx';
import Projects from './Sections/Projects.jsx';
import Contact from './Sections/Contact.jsx';

export default function Main() {
  return (
    <main className="main">
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}