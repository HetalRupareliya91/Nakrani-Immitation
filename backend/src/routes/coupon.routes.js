const express = require('express');
const controller = require('../controllers/coupon.controller');
const { validateCoupon } = require('../validators/coupon.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCoupon, controller.create);
router.put('/:id', validateCoupon, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/coupons';

module.exports = router;
