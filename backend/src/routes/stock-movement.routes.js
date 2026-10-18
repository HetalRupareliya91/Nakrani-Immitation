const express = require('express');
const controller = require('../controllers/stock-movement.controller');
const { validateStockMovement } = require('../validators/stock-movement.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateStockMovement, controller.create);
router.put('/:id', validateStockMovement, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/stock-movements';

module.exports = router;
