const express = require('express');
const router = express.Router();
const controller = require('../controllers/jugadoresHistoricosController');

// GET /api/jugadores-historicos - Obtener todos los jugadores históricos
router.get('/', controller.getAll);

// GET /api/jugadores-historicos/:id - Obtener un jugador histórico por ID
router.get('/:id', controller.getById);

module.exports = router;
