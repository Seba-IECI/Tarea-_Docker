const express = require('express');
const router = express.Router();
const controller = require('../controllers/jugadoresActualesController');

// GET /api/jugadores-actuales - Obtener todos los jugadores actuales
router.get('/', controller.getAll);

// GET /api/jugadores-actuales/:id - Obtener un jugador actual por ID
router.get('/:id', controller.getById);

module.exports = router;
