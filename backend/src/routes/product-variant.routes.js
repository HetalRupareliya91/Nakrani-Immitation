const express = require('express');
const controller = require('../controllers/product-variant.controller');
const { validateProductVariant } = require('../validators/product-variant.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateProductVariant, controller.create);
router.put('/:id', validateProductVariant, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/product-variants';

module.exports = router;
