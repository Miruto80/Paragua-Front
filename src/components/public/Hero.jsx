import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/01.jpg';
import '../../assets/css/Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          src={heroImg}
          alt="Instalaciones del Hotel La Paragua en Ocumare de la Costa"
          className="hero-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          <span className="hero-subtitle">
            Hotel La Paragua • El Playón
          </span>

          <h1 className="hero-title">
            Tu estadía ideal <br />
            a minutos del <br />
            <span className="hero-highlight">
              mar en Ocumare
            </span>
          </h1>

          <p className="hero-description">
            Un espacio cómodo, fresco y accesible pensado para que vengas a
            disfrutar de la costa con quienes más quieres.
          </p>

          <div className="hero-actions">
            <Link to="/habitaciones" className="hero-cta-button">
              Ver habitaciones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}