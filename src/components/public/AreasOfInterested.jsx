import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import hotelImage from "../../assets/img/01.jpg";
import "../../assets/css/AreasOfInterested.css";

const places = [
  {
    title: "Playa El Playón",
    sector: "Sector El Playón, Ocumare de la Costa",
    time: "3 min a pie",
    description:
      "Mar abierto, alquiler de toldos y ambiente costero a pocas cuadras caminando.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Playa+El+Playon+Ocumare+de+la+Costa",
  },
  {
    title: "Embarcadero (La Ciénaga y Cata)",
    sector: "Muelle turístico de El Playón",
    time: "5 min en carro",
    description:
      "Salida de lanchas hacia las bahías de La Ciénaga, Bahía de Cata y Cuyagua.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bahia+de+Cata+Ocumare+de+la+Costa",
  },
  {
    title: "Malecón y Zona Comercial",
    sector: "Avenida principal de El Playón",
    time: "A pocas cuadras",
    description:
      "Restaurantes de pescado fresco, panaderías, farmacias y tiendas del pueblo.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Malecon+El+Playon+Ocumare+de+la+Costa",
  },
];

export default function AreasOfInterested() {
  return (
    <section className="nearby-section" aria-labelledby="nearby-heading">
      <div className="nearby-container">
        <div className="nearby-header">
          <span className="nearby-eyebrow">Zonas de Interés</span>
          <h2 id="nearby-heading">Qué hacer y dónde ir en El Playón</h2>
          <p>
            Puntos clave cerca del hotel para moverte sin vueltas entre la
            playa, las lanchas y la zona comercial.
          </p>
        </div>

        <div className="nearby-destinations">
          {places.map(({ title, sector, time, description, mapsUrl }, index) => (
            <article className="nearby-destination" key={title}>
              <figure className="nearby-destination-image">
                <img
                  src={hotelImage}
                  alt={`Instalaciones del Hotel La Paragua, punto de partida para visitar ${title}`}
                  loading="lazy"
                />
                <figcaption>
                  <span>Punto de interés 0{index + 1}</span>
                  <strong>{time}</strong>
                </figcaption>
              </figure>

              <div className="nearby-destination-content">
                <span className="nearby-spot-sector">
                  <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
                  {sector}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nearby-spot-btn"
                >
                  <FontAwesomeIcon icon={faRoute} aria-hidden="true" />
                  Cómo llegar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}