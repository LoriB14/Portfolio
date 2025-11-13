export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      
      <div className="education-content">
        {/* York University */}
        <div className="education-item">
          <div className="education-header">
            <h3 className="education-school">York University — Lassonde School of Engineering</h3>
            <span className="education-year">2024 – Present</span>
          </div>
          <p className="education-degree">BSc, Specialized Honours in Computer Science</p>
          
          <p className="education-description">
            I'm a second-year Computer Science student at York University, building a strong 
            foundation in software development, problem-solving, and modern web technologies. 
            My academic focus blends theory with hands-on projects across Java, JavaScript/React, 
            low-level systems, and algorithms.
          </p>
          
          <p className="education-description">
            I'm actively involved in the Computer Science Club, where I collaborate with peers, 
            attend tech workshops, and participate in hackathon-style events to improve my 
            skills outside the classroom.
          </p>
          
          <div className="education-subsection">
            <h4>Relevant Coursework:</h4>
            <ul className="education-list">
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming (Java)</li>
              <li>Web Development (HTML/CSS/JS/React)</li>
              <li>Discrete Mathematics</li>
              <li>Computer Organization (C + low-level systems)</li>
              <li>Software Design & Architecture</li>
            </ul>
          </div>
          
          <div className="education-subsection">
            <h4>Highlights & Skills Developed:</h4>
            <ul className="education-list">
              <li>Built multiple web applications using React and modern front-end tools</li>
              <li>Strong understanding of OOP and clean code principles</li>
              <li>Experience using Git/GitHub for real collaborative projects</li>
              <li>Solid grasp of debugging, testing, and problem-solving</li>
              <li>Growing focus on UI/UX and creating aesthetically polished web experiences</li>
            </ul>
          </div>
        </div>

        {/* Google Certificate */}
        <div className="education-item">
          <div className="education-header">
            <h3 className="education-school">Google Data Analytics Professional Certificate</h3>
            <span className="education-year">2025 – Present</span>
          </div>          
          <p className="education-description">
            I am currently completing the Google Data Analytics Professional Certificate, 
            gaining industry-relevant skills in SQL & databases, data cleaning, visualization, 
            and analysis. This certification strengthens my technical background and complements 
            my CS studies by giving me exposure to real-world data workflows.
          </p>
          
          <div className="education-subsection">
            <h4>Skills Gained:</h4>
            <ul className="education-list">
              <li>SQL & databases</li>
              <li>Data cleaning, visualization, and analysis</li>
              <li>Excel spreadsheets & dashboard creation</li>
              <li>Introductory Python for data analysis</li>
              <li>Analytical thinking and problem-solving</li>
              <li>Understanding data storytelling and insights</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
