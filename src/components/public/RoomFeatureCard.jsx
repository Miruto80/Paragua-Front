import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCheck } from "@fortawesome/free-solid-svg-icons";

const roomFeatures = [
  "Baño privado",
  "Aire acondicionado",
  "Ventilador",
  "TV por cable",
  "Lencería incluida",
];

const roomDetails = [
  { label: "Número de habitación", value: "Por definir" },
  { label: "Piso", value: "Por definir" },
  { label: "Tarifa por persona", value: "Por definir" },
  { label: "Estatus", value: "Por definir" },
  { label: "Descripción", value: "Por definir", isDescription: true },
];

export default function RoomFeatureCard() {
  return (
    <article className="room-feature-card">
      <div
        className="room-feature-image"
        role="img"
        aria-label="Imagen de habitación próximamente"
      >
        <FontAwesomeIcon icon={faBed} aria-hidden="true" />
      </div>

      <div className="room-feature-content">
        <h2>Detalles de la habitación</h2>
        <dl className="room-metadata">
          {roomDetails.map(({ label, value, isDescription }) => (
            <div
              className={isDescription ? "room-metadata-description" : ""}
              key={label}
            >
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <h3 className="room-feature-subheading">Comodidades incluidas</h3>
        <ul className="room-feature-amenities">
          {roomFeatures.map((feature) => (
            <li key={feature}>
              <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <Link className="room-feature-action" to="/habitaciones">
          Reservar ahora
        </Link>
      </div>
    </article>
  );
}
