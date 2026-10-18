const express = require('express');
const controller = require('../controllers/address.controller');
const { validateAddress } = require('../validators/address.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateAddress, controller.create);
router.put('/:id', validateAddress, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/addresses';

module.exports = router;
