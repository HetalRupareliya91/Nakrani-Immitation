const express = require('express');
const controller = require('../controllers/cart.controller');
const { validateCart } = require('../validators/cart.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCart, controller.create);
router.put('/:id', validateCart, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/carts';

module.exports = router;
