const express = require('express');
const controller = require('../controllers/product.controller');
const { validateProduct } = require('../validators/product.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateProduct, controller.create);
router.put('/:id', validateProduct, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/products';

module.exports = router;
