import { useState } from 'react';

const PROJECTS = [
  {
    title: "Project One",
    description: "Coming Soon",
    tech: "Stay Tuned",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Coming Soon",
    tech: "Stay Tuned",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Coming Soon",
    tech: "Stay Tuned",
    link: "#"
  },
  {
    title: "Project Four",
    description: "Coming Soon",
    tech: "Stay Tuned",
    link: "#"
  },
  {
    title: "Project Five",
    description: "Coming Soon",
    tech: "Stay Tuned",
    link: "#"
  },
  {
    title: "Project Six",
    description: "Coming Soon",
    tech: "Stay Tuned",
    link: "#"
  }
];

export default function Projects() {
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setRotation(prev => prev - 60);
    setSelectedIndex(prev => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setRotation(prev => prev + 60);
    setSelectedIndex(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <h2>Projects</h2>
      
      <div className="project-wheel-container" onWheel={handleWheel}>
        <div className="project-wheel" style={{ transform: `rotateY(${rotation}deg)` }}>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`project-card ${index === selectedIndex ? 'active' : ''}`}
              style={{
                transform: `rotateY(${index * 60}deg) translateZ(320px)`
              }}
            >
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wheel-controls">
        <button onClick={handlePrev} className="wheel-btn" aria-label="Previous project">
          ← Previous
        </button>
        <div className="project-indicator">
          {selectedIndex + 1} / {PROJECTS.length}
        </div>
        <button onClick={handleNext} className="wheel-btn" aria-label="Next project">
          Next →
        </button>
      </div>
    </section>
  );
}
