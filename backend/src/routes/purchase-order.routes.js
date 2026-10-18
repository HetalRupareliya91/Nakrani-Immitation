const express = require('express');
const controller = require('../controllers/purchase-order.controller');
const { validatePurchaseOrder } = require('../validators/purchase-order.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validatePurchaseOrder, controller.create);
router.put('/:id', validatePurchaseOrder, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/purchase-orders';

module.exports = router;
