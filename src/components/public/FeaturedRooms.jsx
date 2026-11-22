import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faSnowflake, faWifi, faTv } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { roomCategories } from "../../data/roomCategories.js";
import roomImage from "../../assets/img/01.jpg";
import "../../assets/css/FeaturedRooms.css";

const featuredCategories = [2, 4, 6, 7];

export default function FeaturedRooms() {
  const featuredRooms = roomCategories.filter(({ capacity }) =>
    featuredCategories.includes(capacity)
  );

  return (
    <section className="featured-rooms-section" aria-labelledby="featured-rooms-title">
      <div className="featured-rooms-container">
        <header className="featured-rooms-heading">
          <span>Opciones para cada viaje</span>
          <h2 id="featured-rooms-title">Habitaciones destacadas</h2>
          <p>Encuentra el espacio ideal para descansar con tu familia o grupo.</p>
        </header>

        <Splide
          className="featured-rooms-carousel"
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1.25rem",
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            breakpoints: {
              991: { perPage: 2 },
              640: { perPage: 1, gap: "0.75rem" },
            },
          }}
          aria-label="Habitaciones destacadas"
        >
          {featuredRooms.map(({ capacity }) => (
            <SplideSlide key={capacity}>
              <article className="featured-room-card">
                <Link
                  className="featured-room-image-link"
                  to={`/habitaciones/${capacity}`}
                  aria-label={`Ver habitación para ${capacity} personas`}
                >
                  <img src={roomImage} alt={`Habitación para ${capacity} personas`} />
                  <span className="featured-room-capacity">
                    <FontAwesomeIcon icon={faBed} aria-hidden="true" />
                    {capacity} personas
                  </span>
                </Link>

                <div className="featured-room-content">
                  <h3>Habitación para {capacity}</h3>
                  <p>Espacio cómodo y funcional para disfrutar tu estadía en El Playón.</p>

                  <ul className="featured-room-amenities" aria-label="Comodidades">
                    <li title="Aire acondicionado">
                      <FontAwesomeIcon icon={faSnowflake} aria-hidden="true" />
                      <span>Aire acondicionado</span>
                    </li>
                    <li title="Wi-Fi">
                      <FontAwesomeIcon icon={faWifi} aria-hidden="true" />
                      <span>Wi-Fi</span>
                    </li>
                    <li title="TV por cable">
                      <FontAwesomeIcon icon={faTv} aria-hidden="true" />
                      <span>TV por cable</span>
                    </li>
                  </ul>

                  <Link
                    className="featured-room-link"
                    to={`/habitaciones/${capacity}`}
                  >
                    Ver habitación
                  </Link>
                </div>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
