import './PlayerCard.css';

function PlayerCard({ jugador, tipo }) {
  const getInitials = (nombre) => {
    return nombre
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getPosicionColor = (posicion) => {
    const pos = posicion.toLowerCase();
    if (pos.includes('portero')) return '#f39c12';
    if (pos.includes('defensa') || pos.includes('lateral')) return '#2ecc71';
    if (pos.includes('centro') || pos.includes('pivote') || pos.includes('mediapunta')) return '#3498db';
    return '#e74c3c';
  };

  return (
    <div className="player-card" id={`player-card-${jugador.id}`}>
      <div className="card-header">
        <div
          className="player-avatar"
          style={{ borderColor: getPosicionColor(jugador.posicion) }}
        >
          <span className="avatar-initials">{getInitials(jugador.nombre)}</span>
        </div>
        {tipo === 'actual' && jugador.dorsal && (
          <span className="player-dorsal">#{jugador.dorsal}</span>
        )}
      </div>

      <div className="card-body">
        <h3 className="player-name">{jugador.nombre}</h3>
        <span
          className="player-posicion"
          style={{ background: getPosicionColor(jugador.posicion) }}
        >
          {jugador.posicion}
        </span>
        <p className="player-nacionalidad">🏳️ {jugador.nacionalidad}</p>

        {tipo === 'actual' && (
          <div className="player-stats">
            {jugador.altura && (
              <div className="stat">
                <span className="stat-value">{jugador.altura}m</span>
                <span className="stat-label">Altura</span>
              </div>
            )}
            {jugador.peso && (
              <div className="stat">
                <span className="stat-value">{jugador.peso}kg</span>
                <span className="stat-label">Peso</span>
              </div>
            )}
            {jugador.pie_dominante && (
              <div className="stat">
                <span className="stat-value">{jugador.pie_dominante}</span>
                <span className="stat-label">Pie</span>
              </div>
            )}
          </div>
        )}

        {tipo === 'historico' && (
          <div className="player-stats">
            <div className="stat">
              <span className="stat-value">{jugador.goles}</span>
              <span className="stat-label">Goles</span>
            </div>
            <div className="stat">
              <span className="stat-value">{jugador.partidos}</span>
              <span className="stat-label">Partidos</span>
            </div>
            <div className="stat">
              <span className="stat-value">{jugador.titulos_ganados}</span>
              <span className="stat-label">Títulos</span>
            </div>
          </div>
        )}

        {tipo === 'historico' && (
          <p className="player-periodo">
            📅 {jugador.anio_inicio} - {jugador.anio_fin}
          </p>
        )}

        <p className="player-descripcion">{jugador.descripcion}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
