const express = require('express');
const controller = require('../controllers/offer.controller');
const { validateOffer } = require('../validators/offer.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateOffer, controller.create);
router.put('/:id', validateOffer, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/offers';

module.exports = router;
