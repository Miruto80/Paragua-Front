import { Link, useParams } from "react-router-dom";
import RoomFeatureCard from "../../components/public/RoomFeatureCard.jsx";
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
              <p>Habitaciones para {category.capacity} personas</p>
            </header>

            <RoomFeatureCard />
          </>
        ) : (
          <div className="rooms-invalid-category" role="alert">
            <h1>Categoría no encontrada</h1>
            <p>No hay habitaciones disponibles para esa capacidad.</p>
            <Link className="rooms-back-link" to="/habitaciones">
              Volver a habitaciones
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
