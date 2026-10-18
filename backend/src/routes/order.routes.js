const express = require('express');
const controller = require('../controllers/order.controller');
const { validateOrder } = require('../validators/order.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateOrder, controller.create);
router.put('/:id', validateOrder, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/orders';

module.exports = router;
