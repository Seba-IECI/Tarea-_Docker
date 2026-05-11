import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home" id="home-page">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-accent">FC Barcelona</span>
            <br />
            Més que un club
          </h1>
          <p className="hero-subtitle">
            Explora la plantilla actual, las leyendas que hicieron historia
            y los logros que convirtieron al Barça en el mejor club del mundo.
          </p>
          <div className="hero-buttons">
            <Link to="/jugadores-actuales" className="btn btn-primary" id="btn-plantilla">
              Ver Plantilla
            </Link>
            <Link to="/logros" className="btn btn-secondary" id="btn-palmares">
              Palmarés
            </Link>
          </div>
        </div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--x': `${Math.random() * 100}%`,
              '--duration': `${3 + Math.random() * 4}s`,
            }}></div>
          ))}
        </div>
      </section>

      {/* Secciones destacadas */}
      <section className="features" id="features-section">
        <div className="features-container">
          <div className="feature-card" id="feature-plantilla">
            <div className="feature-icon">👕</div>
            <h2>Plantilla Actual</h2>
            <p>Conoce a los jugadores que visten la camiseta azulgrana esta temporada, sus características y estadísticas.</p>
            <Link to="/jugadores-actuales" className="feature-link">
              Explorar →
            </Link>
          </div>

          <div className="feature-card" id="feature-leyendas">
            <div className="feature-icon">🌟</div>
            <h2>Leyendas</h2>
            <p>Revive la grandeza de los jugadores que marcaron la historia del FC Barcelona con su talento inigualable.</p>
            <Link to="/jugadores-historicos" className="feature-link">
              Descubrir →
            </Link>
          </div>

          <div className="feature-card" id="feature-logros">
            <div className="feature-icon">🏆</div>
            <h2>Palmarés</h2>
            <p>Repasa los títulos y logros que han convertido al Barça en uno de los clubes más laureados del mundo.</p>
            <Link to="/logros" className="feature-link">
              Ver logros →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats rápidas */}
      <section className="quick-stats" id="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-desc">Champions League</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">27</span>
            <span className="stat-desc">Ligas de España</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">31</span>
            <span className="stat-desc">Copas del Rey</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-desc">Mundiales de Clubes</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
