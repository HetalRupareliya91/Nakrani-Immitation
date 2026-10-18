const express = require('express');
const controller = require('../controllers/customer.controller');
const { validateCustomer } = require('../validators/customer.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCustomer, controller.create);
router.put('/:id', validateCustomer, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/customers';

module.exports = router;
