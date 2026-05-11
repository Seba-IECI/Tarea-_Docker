import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" id="main-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <span className="logo-icon">⚽</span>
          <span className="logo-text">FC Barcelona</span>
        </Link>
        <ul className="navbar-menu" id="navbar-menu">
          <li>
            <Link
              to="/"
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              id="nav-home"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/jugadores-actuales"
              className={`navbar-link ${isActive('/jugadores-actuales') ? 'active' : ''}`}
              id="nav-jugadores-actuales"
            >
              Plantilla Actual
            </Link>
          </li>
          <li>
            <Link
              to="/jugadores-historicos"
              className={`navbar-link ${isActive('/jugadores-historicos') ? 'active' : ''}`}
              id="nav-jugadores-historicos"
            >
              Leyendas
            </Link>
          </li>
          <li>
            <Link
              to="/logros"
              className={`navbar-link ${isActive('/logros') ? 'active' : ''}`}
              id="nav-logros"
            >
              Palmarés
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
