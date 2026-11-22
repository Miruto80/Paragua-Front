import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/img/01.jpg";
import "../../assets/css/About.css";

export default function About() {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-container">
        {/* Columna Izquierda: Imagen */}
        <div className="about-image-wrapper">
          <img
            src={aboutImg}
            alt="Áreas comunes del Hotel La Paragua"
            className="about-image"
          />
          <div className="about-badge">
            <span className="about-badge-number">20%</span>
            <span className="about-badge-text">Abono para reservar</span>
          </div>
        </div>

        {/* Columna Derecha: Identidad y Experiencia */}
        <div className="about-content">
          <span className="about-eyebrow">Conócenos</span>
          <h2 id="about-heading">
            Hospitalidad costera hecha para disfrutar sin complicaciones
          </h2>

          <p className="about-text">
            En el <strong>Hotel La Paragua</strong> creemos que unas buenas
            vacaciones empiezan por sentirte bien atendido desde el primer
            momento. Nuestro equipo trabaja cada día para ofrecerte un ambiente
            limpio, ordenado y tranquilo donde solo tengas que preocuparte por
            disfrutar tu viaje.
          </p>

          <p className="about-text">
            Somos el punto de partida perfecto para quienes vienen a recorrer
            las bahías, tomar lancha hacia <strong>La Ciénaga o Cata</strong> y
            regresar al final de la tarde a descansar en un lugar seguro y con
            atención directa en recepción.
          </p>

          {/* Información operativa útil que NO está en Features */}
          <div className="about-stats">
            <div className="about-stat-item">
              <strong>3:00 PM</strong>
              <span>Hora de Check-in</span>
            </div>
            <div className="about-stat-item">
              <strong>1:00 PM</strong>
              <span>Hora de Check-out</span>
            </div>
            <div className="about-stat-item">
              <strong>Directa</strong>
              <span>Atención en recepción</span>
            </div>
          </div>

          <div className="about-actions">
            <Link to="/habitaciones" className="about-btn">
              Explorar disponibilidad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}