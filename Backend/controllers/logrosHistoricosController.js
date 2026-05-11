const db = require('../db');

// Obtener todos los logros históricos
const getAll = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM logros_historicos ORDER BY anio DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener logros históricos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un logro por ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('SELECT * FROM logros_historicos WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Logro no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error al obtener logro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener logros por categoría
const getByCategoria = async (req, res) => {
  try {
    const { categoria } = req.params;
    const result = await db.query(
      'SELECT * FROM logros_historicos WHERE categoria = $1 ORDER BY anio DESC',
      [categoria]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener logros por categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getAll, getById, getByCategoria };
