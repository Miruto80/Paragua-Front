import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";
import logoParagua from "../../assets/img/WhatsApp Image 2026-11-12 at 3.39.07 PM.jpeg";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg paragua-navbar">
      <div className="container">
        <button
          className="navbar-toggler paragua-navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#paraguaNavbar"
          aria-controls="paraguaNavbar"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link className="navbar-brand paragua-brand" to="/" aria-label="Hotel La Paragua, inicio">
          <img className="paragua-logo" src={logoParagua} alt="Hotel La Paragua" />
        </Link>

        <div className="collapse navbar-collapse paragua-navbar-collapse" id="paraguaNavbar">
          <ul className="navbar-nav">
            {links.map(({ label, href }) => (
              <li className="nav-item" key={label}>
                <a
                  className="nav-link"
                  href={href}
                  data-bs-toggle="collapse"
                  data-bs-target="#paraguaNavbar"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
