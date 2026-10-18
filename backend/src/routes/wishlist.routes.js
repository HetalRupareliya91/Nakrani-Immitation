const express = require('express');
const controller = require('../controllers/wishlist.controller');
const { validateWishlist } = require('../validators/wishlist.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateWishlist, controller.create);
router.put('/:id', validateWishlist, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/wishlists';

module.exports = router;
