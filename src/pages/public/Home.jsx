import Hero from "../../components/public/Hero.jsx";
import Gallery from "../../components/public/Gallery.jsx";
import Ubication from "../../components/public/Ubication.jsx";
import Services from "../../components/public/Services.jsx";
import FeaturedRooms from "../../components/public/FeaturedRooms.jsx";
import AreasOfInterested from "../../components/public/AreasOfInterested.jsx";
import About from "../../components/public/About.jsx";

export default function Home() {
  return (
    <main id="inicio">
      <div className="home-section">
        <Hero />
      </div>
      <div className="home-section">
        <FeaturedRooms />
      </div>
      <div className="home-section">
        <Services />
      </div>
      <div className="home-section">
        <Gallery />
      </div>
      <div className="home-section">
        <AreasOfInterested />
      </div>
      <div className="home-section">
        <Ubication />
      </div>
      <div className="home-section">
        <About />
      </div>
    </main>
  );
}
