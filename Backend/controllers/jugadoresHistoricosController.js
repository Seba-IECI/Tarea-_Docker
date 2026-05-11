const db = require('../db');

// Obtener todos los jugadores históricos
const getAll = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM jugadores_historicos ORDER BY anio_inicio DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener jugadores históricos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un jugador histórico por ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM jugadores_historicos WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Jugador histórico no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener jugador histórico:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getAll, getById };
