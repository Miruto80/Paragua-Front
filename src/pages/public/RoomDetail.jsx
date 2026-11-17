import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUsers } from "@fortawesome/free-solid-svg-icons";
import { roomCategories } from "../../data/roomCategories.js";
import "../../assets/css/Rooms.css";

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
                <h2>Habitación para {category.capacity} personas</h2>
                <p>{category.description}</p>

                <div className="room-feature-facts">
                  <div>
                    <FontAwesomeIcon icon={faUsers} aria-hidden="true" />
                    <span>Capacidad</span>
                    <strong>{category.capacity} personas</strong>
                  </div>
                  <div>
                    <span>Tarifa</span>
                    <strong>Por definir</strong>
                  </div>
                </div>

                <Link className="room-feature-action" to="/habitaciones">
                  Ver otras habitaciones
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
