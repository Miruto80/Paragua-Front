import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
//import { useLogout } from "../../hooks/useLogout";
import {
  faBars,
  faBed,
  faBell,
  faChartLine,
  faClipboardList,
  faGauge,
  faRightFromBracket,
  faUsers,
  faHouse,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/AdminNav.css";

const adminLinks = [
  { to: "/admin", label: "Inicio", icon: faGauge, end: true },
  { to: "/admin/habitaciones", label: "Habitaciones", icon: faBed },
  { to: "/admin/reservas", label: "Reservas", icon: faClipboardList },
  { to: "/admin/reportes", label: "Reportes", icon: faChartLine },
  { to: "/admin/alquiler", label: "Alquiler", icon: faHouse },
  { to: "/admin/clientes", label: "Clientes", icon: faUsers },
];

export default function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  //const handleLogout = useLogout();

  return (
    <header className="admin-navbar">
      
      <div className="admin-navbar-left">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú de administración"
          aria-expanded={isMenuOpen}
          aria-controls="admin-mobile-menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <NavLink to="/admin" className="admin-hotel-brand">
          Hotel La Paragua
        </NavLink>
      </div>

      <nav className="admin-navbar-links" aria-label="Navegación administrativa">
        {adminLinks.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `admin-navbar-link${isActive ? " active" : ""}`
            }
          >
            <FontAwesomeIcon icon={icon} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="admin-mobile-menu">
          <button
            type="button"
            className="admin-mobile-menu-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          />
          <aside
            id="admin-mobile-menu"
            className="admin-mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navegación administrativa"
          >
            <div className="admin-mobile-menu-header">
              <span>Hotel La Paragua</span>
              <button
                type="button"
                className="admin-mobile-menu-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <nav className="admin-mobile-menu-links">
              {adminLinks.map(({ to, label, icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `admin-mobile-menu-link${isActive ? " active" : ""}`
                  }
                >
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="admin-navbar-right">
        <NavLink
          to="/admin/notificaciones"
          className="icon-button d-flex align-items-center justify-content-center text-decoration-none"
          aria-label="Ver notificaciones"
          title="Ver notificaciones"
        >
          <FontAwesomeIcon icon={faBell} />
        </NavLink>

        <button 
          type="button"
          // onClick={handleLogout}
          className="btn btn-logout d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
          <span>Cerrar</span>
          <span className="d-none d-sm-inline ms-1">sesión</span>
        </button>
      </div>
    </header>
  );
}