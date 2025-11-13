import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logoImage from '/GOLD_LB.png';

const NAV_ITEMS = [
  { id: "about", label: "About", path: "/about" },
  { id: "education", label: "Education", path: "/education" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={logoImage} className="image" width="40" alt="Logo" />
      </div>

      <nav aria-label="Primary">
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="nav-list-item">
              <NavLink
                to={item.path}
                aria-label={`Go to ${item.label} page`}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}