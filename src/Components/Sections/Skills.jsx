export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML", "CSS", "Python", "Java", "C", "SQL"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React", "Vite", "React Router", "Node.js", "Responsive Design"]
    },
    {
      title: "Developer Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Web3Forms", "npm"]
    },
    {
      title: "Core Competencies",
      skills: ["Version Control", "API Integration", "Mobile-First Design", "UI/UX Design", "Debugging"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-content">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
