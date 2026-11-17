import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { roomCategories } from "../../data/roomCategories.js";
import "../../assets/css/Rooms.css";

export default function Rooms() {
  return (
    <main className="rooms-page">
      <section className="rooms-content" aria-labelledby="rooms-categories-title">
        <header className="rooms-page-heading">
          <span className="rooms-eyebrow">Hotel La Paragua</span>
          <h1 id="rooms-categories-title">Habitaciones</h1>
          <p>Selecciona una categoría para abrir sus detalles.</p>
        </header>

        <div className="rooms-categories">
          {roomCategories.map(({ capacity }) => (
            <Link
              className="rooms-category"
              key={capacity}
              to={`/habitaciones/${capacity}`}
            >
              <span className="rooms-category-image" aria-hidden="true">
                <FontAwesomeIcon icon={faUsers} />
              </span>
              <span className="rooms-category-info">
                <span className="rooms-category-capacity">{capacity} personas</span>
                <span className="rooms-category-action">Ver características</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
