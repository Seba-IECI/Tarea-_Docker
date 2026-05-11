import { useState, useEffect } from 'react';
import { getJugadoresActuales } from '../../services/api';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './JugadoresActuales.css';

function JugadoresActuales() {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState('Todos');

  const posiciones = ['Todos', 'Portero', 'Defensa', 'Centrocampista', 'Extremo', 'Delantero'];

  useEffect(() => {
    const fetchJugadores = async () => {
      try {
        const response = await getJugadoresActuales();
        setJugadores(response.data);
      } catch (err) {
        setError('Error al cargar los jugadores actuales');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJugadores();
  }, []);

  const jugadoresFiltrados = filtro === 'Todos'
    ? jugadores
    : jugadores.filter((j) => j.posicion.toLowerCase().includes(filtro.toLowerCase()));

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando plantilla...</p>
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
    <div className="jugadores-page" id="jugadores-actuales-page">
      <div className="page-header">
        <h1 className="page-title">Plantilla Actual</h1>
        <p className="page-subtitle">Temporada 2024/2025 — Los jugadores que defienden la camiseta azulgrana</p>
      </div>

      <div className="filtros" id="filtros-posicion">
        {posiciones.map((pos) => (
          <button
            key={pos}
            className={`filtro-btn ${filtro === pos ? 'active' : ''}`}
            onClick={() => setFiltro(pos)}
          >
            {pos}
          </button>
        ))}
      </div>

      <div className="players-grid">
        {jugadoresFiltrados.map((jugador) => (
          <PlayerCard key={jugador.id} jugador={jugador} tipo="actual" />
        ))}
      </div>

      {jugadoresFiltrados.length === 0 && (
        <p className="no-results">No se encontraron jugadores con ese filtro.</p>
      )}
    </div>
  );
}

export default JugadoresActuales;
