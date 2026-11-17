import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCheck } from "@fortawesome/free-solid-svg-icons";
import { roomCategories } from "../../data/roomCategories.js";
import "../../assets/css/Rooms.css";

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

export default function RoomDetail() {
  const { capacity } = useParams();
  const category = roomCategories.find(
    (roomCategory) => roomCategory.capacity === Number(capacity),
  );

  return (
    <main className="rooms-page">
      <section className="rooms-content">
        {category ? (
          <>
            <Link className="rooms-back-link" to="/habitaciones">
              Volver a habitaciones
            </Link>

            <header className="rooms-page-heading">
              <span className="rooms-eyebrow">Hotel La Paragua</span>
              <h1>Características</h1>
              <p>Habitación para {category.capacity} personas</p>
            </header>

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
          </>
        ) : (
          <div className="rooms-invalid-category" role="alert">
            <h1>Categoría no encontrada</h1>
            <p>No existe una categoría para esa capacidad.</p>
            <Link className="rooms-back-link" to="/habitaciones">
              Volver a habitaciones
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
