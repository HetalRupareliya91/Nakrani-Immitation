const express = require('express');
const controller = require('../controllers/order-item.controller');
const { validateOrderItem } = require('../validators/order-item.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateOrderItem, controller.create);
router.put('/:id', validateOrderItem, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/order-items';

module.exports = router;
