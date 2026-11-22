import hotelImage from "../../assets/img/01.jpg";
import "../../assets/css/Gallery.css";

const galleryImages = [
  { id: "pool", caption: "Piscina del hotel" },
  { id: "facade", caption: "Hotel La Paragua" },
  { id: "outdoors", caption: "Áreas exteriores" },
  { id: "water", caption: "Un descanso junto a la piscina" },
  { id: "stay", caption: "Tu estadía en El Playón" },
  { id: "hotel", caption: "Conoce nuestras instalaciones" },
];

export default function Gallery() {
  return (
    <section className="hotel-gallery" aria-labelledby="hotel-gallery-title">
      <div className="hotel-gallery-container">
        <header className="hotel-gallery-heading">
          <span className="hotel-gallery-eyebrow">Galería</span>
          <h2 id="hotel-gallery-title">Conoce Hotel La Paragua</h2>
          <p>
            Un espacio para relajarte y disfrutar tu estadía en El Playón.
          </p>
        </header>

        <div className="hotel-gallery-grid">
          {galleryImages.map(({ id, caption }) => (
            <figure className={`hotel-gallery-item hotel-gallery-item--${id}`} key={id}>
              <img
                src={hotelImage}
                alt="Piscina y áreas exteriores del Hotel La Paragua"
                loading="lazy"
              />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
