const db = require('../db');

// Obtener todos los jugadores actuales
const getAll = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM jugadores_actuales ORDER BY dorsal');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener jugadores actuales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un jugador actual por ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM jugadores_actuales WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener jugador actual:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getAll, getById };
