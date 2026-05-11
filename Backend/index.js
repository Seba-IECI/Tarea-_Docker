const express = require('express');
const cors = require('cors');

// Importar rutas
const jugadoresActualesRoutes = require('./routes/jugadoresActuales');
const jugadoresHistoricosRoutes = require('./routes/jugadoresHistoricos');
const logrosHistoricosRoutes = require('./routes/logrosHistoricos');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta raíz - Health check
app.get('/', (req, res) => {
  res.json({ 
    mensaje: 'API del FC Barcelona - Backend activo',
    endpoints: {
      jugadoresActuales: '/api/jugadores-actuales',
      jugadoresHistoricos: '/api/jugadores-historicos',
      logrosHistoricos: '/api/logros'
    }
  });
});

// Rutas de la API
app.use('/api/jugadores-actuales', jugadoresActualesRoutes);
app.use('/api/jugadores-historicos', jugadoresHistoricosRoutes);
app.use('/api/logros', logrosHistoricosRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend FC Barcelona corriendo en http://localhost:${PORT}`);
});