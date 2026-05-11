import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">⚽ FC Barcelona</span>
            <p className="footer-tagline">Més que un club</p>
          </div>
          <div className="footer-info">
            <p>Proyecto académico - Taller de Desarrollo</p>
            <p>Node.js • React • PostgreSQL 16 • Docker</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 - Proyecto Tarea Docker Compose</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
