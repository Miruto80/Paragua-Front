import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";
import logoParagua from "../../assets/img/WhatsApp Image 2026-11-12 at 3.39.07 PM.jpeg";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Habitaciones", href: "/habitaciones", isRoute: true },
  { label: "Login", href: "/login", isRoute: true },
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
          <div className="d-flex align-items-center justify-content-end w-100">
            <ul className="navbar-nav d-flex align-items-center">
              {links.map(({ label, href, isRoute }) => (
                <li className="nav-item" key={label}>
                  {isRoute ? (
                    <Link
                      className="nav-link"
                      to={href}
                      onClick={() => {
                        const menu = document.getElementById("paraguaNavbar");
                        if (menu && menu.classList.contains("show")) {
                          menu.classList.remove("show");
                        }
                      }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      className="nav-link"
                      href={href}
                      data-bs-toggle="collapse"
                      data-bs-target="#paraguaNavbar"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
