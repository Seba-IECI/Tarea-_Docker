const express = require('express');
const router = express.Router();
const controller = require('../controllers/logrosHistoricosController');

// GET /api/logros - Obtener todos los logros históricos
router.get('/', controller.getAll);

// GET /api/logros/categoria/:categoria - Obtener logros por categoría
// IMPORTANTE: Esta ruta debe ir ANTES de /:id para evitar conflictos
router.get('/categoria/:categoria', controller.getByCategoria);

// GET /api/logros/:id - Obtener un logro por ID
router.get('/:id', controller.getById);

module.exports = router;
