import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Columna 1: Logo, RIF, Descripción y Redes Sociales */}
        <div className="footer-col-brand">
          <div className="footer-logo-container">
            <img 
              src="src/assets/img/logo.webp" // Reemplaza con la ruta de tu logo circular
              alt="Logo Marca" 
              className="footer-logo"
            />
          </div>
          <p className="footer-rif">RIF: J-000-3</p>
          <p className="footer-brand-desc">
            Tu 
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/hotel_laparagua?xtok=MWVoZ2JzNXZ6OG03bw==" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.tiktok.com/@hotel_laparagua?_r=1&_t=ZS-9BUDCSTvqkC" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="https://wa.me/584127616797" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col-links">
          <h4 className="footer-heading">NAVEGACIÓN</h4>
          <ul className="footer-list">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#Habitaciones">Habitaciones</a></li>
            <li><a href="#Login">Login</a></li>

          </ul>
        </div>

        {/* Columna 3: Información */}
        <div className="footer-col-links">
          <h4 className="footer-heading">INFORMACIÓN</h4>
          <ul className="footer-list">
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#aviso-legal">Aviso Legal</a></li>
            <li><a href="#privacidad">Politica de Privacidad</a></li>
            <li><a href="#cookies">Politica de cookies</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto & Tienda */}
        <div className="footer-col-contact">
          <h4 className="footer-heading">CONTACTO & TIENDA</h4>
          <p className="footer-contact-text">
            Ubicada 
          </p>
          <p className="footer-contact-text">
            WhatsApp: 
          </p>
        </div>

      </div>

      {/* Barra Inferior (Copyright y Pago Móvil) */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copy">
            © 2026 Hotel la paragua. Todos los derechos reservados.
          </p>
          <div className="footer-payment">
            <FontAwesomeIcon icon={faMobileScreenButton} />
            <span>Pago Móvil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}