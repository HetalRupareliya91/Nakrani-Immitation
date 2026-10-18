const express = require('express');
const controller = require('../controllers/shipment.controller');
const { validateShipment } = require('../validators/shipment.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateShipment, controller.create);
router.put('/:id', validateShipment, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/shipments';

module.exports = router;
