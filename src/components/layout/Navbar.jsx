import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/Navbar.css";
import logoParagua from "../../assets/img/logo.webp";

const links = [
  { label: "Inicio", href: "/", isRoute: true },
  { label: "Habitaciones", href: "/habitaciones", isRoute: true },
  { label: "Login", href: "/login", isRoute: true, isButton: true }, 
];

export default function Navbar() {
  const handleMenuClose = () => {
    const menu = document.getElementById("paraguaNavbar");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

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

        <Link className="navbar-brand paragua-brand" to="/" aria-label="Hotel La Paragua, inicio" onClick={handleMenuClose}>
          <img className="paragua-logo" src={logoParagua} alt="Hotel La Paragua" />
        </Link>

        <div className="collapse navbar-collapse paragua-navbar-collapse" id="paraguaNavbar">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-end w-100 gap-2">
            <ul className="navbar-nav d-flex align-items-lg-center">
              {links.map(({ label, href, isRoute, isButton }) => (
                <li className="nav-item" key={label}>
                  {isButton ? (
                  
                    <Link
                      className="paragua-login-btn ms-lg-2"
                      to={href}
                      onClick={handleMenuClose}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <span>{label}</span>
                    </Link>
                  ) : isRoute ? (
                  
                    <Link
                      className="nav-link paragua-nav-link"
                      to={href}
                      onClick={handleMenuClose}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      className="nav-link paragua-nav-link"
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