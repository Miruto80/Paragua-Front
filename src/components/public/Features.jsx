import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBath, faConciergeBell, faTags } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Features.css';

export default function Features() {
  return (
    <section className="hero-features-section">
      <div className="hero-features-grid">
        
        {/* Card 1 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <h3 className="feature-title">Situado en el corazón de la ciudad</h3>
          <p className="feature-desc">Con una ubicación ideal en el corazón de la ciudad, que ofrece fácil acceso y comodidad.</p>
        </div>

        {/* Card 2 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faBath} />
          </div>
          <h3 className="feature-title">Lujoso, moderno y cómodo</h3>
          <p className="feature-desc">Disfruta de un espacio lujoso, moderno y totalmente equipado para tu comodidad..</p>
        </div>

        {/* Card 3 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faConciergeBell} />
          </div>
          <h3 className="feature-title">Personal amable y acogedor</h3>
          <p className="feature-desc">Nuestro personal amable y acogedor garantiza una estancia deliciosa en cada visita.</p>
        </div>

        {/* Card 4 */}
        <div className="feature-card">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faTags} />
          </div>
          <h3 className="feature-title">Mejores precios y grandes ofertas</h3>
          <p className="feature-desc">Disfruta de precios inigualables con excelentes ofertas adaptadas solo para ti.</p>
        </div>

      </div>
    </section>
  );
}