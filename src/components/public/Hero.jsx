import React from 'react';
import '../../assets/css/Hero.css'; 

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img 
          src="src/assets/img/01.jpg" 
          alt="Hotel Luxury Background" 
          className="hero-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          
          <span className="hero-subtitle">
            Hotel La Paragua
          </span>

          <h1 className="hero-title">
            Donde el lujo <br />
            se encuentra <br />
            <span className="hero-highlight">
              con el paraíso
            </span>
          </h1>

          <p className="hero-description">
            Sumérgete en una experiencia de descanso incomparable. Habitaciones exclusivas, vistas panorámicas y un servicio de primera clase diseñado para hacer de tu estadía un momento inolvidable.
          </p>

        </div>
      </div>
    </section>
  );
}