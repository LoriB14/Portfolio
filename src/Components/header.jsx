export default function Header() {
  return (
    <header className="header">
      <img src="/src/assets/LB_Initial.png" className = "image" width="40" alt="React Logo" />
      <nav aria-label="Primary">
        <ul className ="nav-list">
          <li className = "nav-list-item"><a href="#about" aria-label="Go to About section">About</a></li>
          <li className = "nav-list-item"><a href="#education" aria-label="Go to Education section">Education</a></li>
          <li className = "nav-list-item"><a href="#skills" aria-label="Go to Skills section">Skills</a></li>
          <li className = "nav-list-item"><a href="#projects" aria-label="Go to Projects section">Projects</a></li>
          <li className = "nav-list-item"><a href="#contact" aria-label="Go to Contact section">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}