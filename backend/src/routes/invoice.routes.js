const express = require('express');
const controller = require('../controllers/invoice.controller');
const { validateInvoice } = require('../validators/invoice.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateInvoice, controller.create);
router.put('/:id', validateInvoice, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/invoices';

module.exports = router;
