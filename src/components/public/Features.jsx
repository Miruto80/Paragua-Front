import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faWifi,
  faPaw,
  faSnowflake,
  faDroplet,
  faCar,
  faUsers,
  faUmbrellaBeach
} from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Features.css';

const features = [
  {
    icon: faBolt,
    title: 'Planta eléctrica',
    description: 'Respaldo energético para garantizar tu comodidad y descanso durante toda tu estadía.'
  },
  {
    icon: faWifi,
    title: 'Conexión Wi-Fi',
    description: 'Internet inalámbrico disponible en nuestras instalaciones para que te mantengas siempre conectado.'
  },
  {
    icon: faPaw,
    title: 'Pet Friendly',
    description: 'Tus mascotas son bienvenidas para que disfruten de las vacaciones junto a toda la familia.'
  },
  {
    icon: faSnowflake,
    title: 'Habitaciones equipadas',
    description: 'Todas cuentan con aire acondicionado, ventilador, TV por cable, baño privado y lencería incluida.'
  },
  {
    icon: faDroplet,
    title: 'Agua garantizada',
    description: 'Sistema de almacenamiento continuo para asegurar el servicio en nuestras 60 habitaciones.'
  },
  {
    icon: faCar,
    title: 'Estacionamiento',
    description: 'Espacio seguro para resguardar tu vehículo mientras disfrutas de la costa.'
  },
  {
    icon: faUsers,
    title: 'Ideal para familias y grupos',
    description: 'Habitaciones de 2 a 7 personas con distribución flexible y tarifas accesibles desde €10 por persona.'
  },
  {
    icon: faUmbrellaBeach,
    title: 'A minutos de la playa',
    description: 'Ubicados en El Playón, con acceso rápido a la costa, zona comercial y embarcadero hacia Cata y La Ciénaga.'
  }
];

export default function Features() {
  return (
    <section className="hero-features-section">
      <header className="features-header">
        <p className="features-eyebrow">Comodidades y Servicios</p>
        <p className="features-intro">
          Contamos con 60 habitaciones equipadas y los servicios esenciales para que disfrutes de Ocumare sin preocupaciones.
        </p>
      </header>
      <div className="hero-features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}