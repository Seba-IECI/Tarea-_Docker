import { useState, useEffect } from 'react';
import { getLogrosHistoricos } from '../../services/api';
import './Logros.css';

function Logros() {
  const [logros, setLogros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  useEffect(() => {
    const fetchLogros = async () => {
      try {
        const response = await getLogrosHistoricos();
        setLogros(response.data);
      } catch (err) {
        setError('Error al cargar los logros históricos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLogros();
  }, []);

  const categorias = ['Todos', ...new Set(logros.map((l) => l.categoria))];

  const logrosFiltrados = categoriaActiva === 'Todos'
    ? logros
    : logros.filter((l) => l.categoria === categoriaActiva);

  const getIcono = (categoria) => {
    const iconos = {
      'Champions League': '🏆',
      'La Liga': '🥇',
      'Copa del Rey': '👑',
      'Supercopa': '⭐',
      'Supercopa de Europa': '🌟',
      'Mundial de Clubes': '🌍',
      'Recopa de Europa': '🏅',
      'Hito Histórico': '📜',
    };
    return iconos[categoria] || '🏆';
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando palmarés...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">⚠️ {error}</p>
        <p className="error-hint">Asegúrate de que el backend y la base de datos estén corriendo.</p>
      </div>
    );
  }

  return (
    <div className="logros-page" id="logros-page">
      <div className="page-header">
        <h1 className="page-title">Palmarés Histórico</h1>
        <p className="page-subtitle">
          Los títulos y momentos que forjaron la leyenda del FC Barcelona
        </p>
      </div>

      <div className="filtros" id="filtros-categoria">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`filtro-btn ${categoriaActiva === cat ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="logros-grid">
        {logrosFiltrados.map((logro) => (
          <div key={logro.id} className="logro-card" id={`logro-card-${logro.id}`}>
            <div className="logro-icon">{getIcono(logro.categoria)}</div>
            <div className="logro-content">
              <span className="logro-anio">{logro.anio}</span>
              <h3 className="logro-titulo">{logro.titulo}</h3>
              <span className="logro-categoria">{logro.categoria}</span>
              <p className="logro-descripcion">{logro.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logros;
