import "../../assets/css/Ubication.css";

const hotelLocation = "Hotel La Paragua, Venezuela";
const mapSearch = encodeURIComponent(hotelLocation);
const mapEmbedUrl = `https://maps.google.com/maps?q=${mapSearch}&z=15&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapSearch}`;

export default function Ubication() {
  return (
    <section className="home-location" aria-labelledby="home-location-title">
      <div className="home-location-heading">
        <p className="home-location-eyebrow">Cómo llegar</p>
        <h2 id="home-location-title">Nuestra ubicación</h2>
        <p>Encuéntranos en Google Maps y planifica tu visita.</p>
      </div>
      <div className="home-location-map">
        <iframe
          title="Mapa de ubicación de Hotel La Paragua"
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        className="home-location-link"
        href={mapLink}
        target="_blank"
        rel="noreferrer"
      >
        Abrir en Google Maps
      </a>
    </section>
  );
}
