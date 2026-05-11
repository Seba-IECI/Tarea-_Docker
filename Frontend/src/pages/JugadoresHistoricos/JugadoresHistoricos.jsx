import { useState, useEffect } from 'react';
import { getJugadoresHistoricos } from '../../services/api';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import './JugadoresHistoricos.css';

function JugadoresHistoricos() {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJugadores = async () => {
      try {
        const response = await getJugadoresHistoricos();
        setJugadores(response.data);
      } catch (err) {
        setError('Error al cargar los jugadores históricos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJugadores();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando leyendas...</p>
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
    <div className="jugadores-page historicos" id="jugadores-historicos-page">
      <div className="page-header">
        <h1 className="page-title">Leyendas del Barça</h1>
        <p className="page-subtitle">
          Los jugadores que escribieron con letras doradas la historia del FC Barcelona
        </p>
      </div>

      <div className="players-grid">
        {jugadores.map((jugador) => (
          <PlayerCard key={jugador.id} jugador={jugador} tipo="historico" />
        ))}
      </div>
    </div>
  );
}

export default JugadoresHistoricos;
