const express = require('express');
const controller = require('../controllers/payment.controller');
const { validatePayment } = require('../validators/payment.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validatePayment, controller.create);
router.put('/:id', validatePayment, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/payments';

module.exports = router;
