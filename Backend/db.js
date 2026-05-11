const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'secreto',
  database: process.env.DB_NAME || 'fcbarcelona',
});

// Verificar conexión al iniciar
pool.on('error', (err) => {
  console.error('Error inesperado en la conexión a PostgreSQL:', err);
});

// Test de conexión
pool.query('SELECT NOW()')
  .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
  .catch((err) => console.error('❌ Error al conectar a PostgreSQL:', err.message));

module.exports = pool;