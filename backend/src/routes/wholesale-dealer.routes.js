const express = require('express');
const controller = require('../controllers/wholesale-dealer.controller');
const { validateWholesaleDealer } = require('../validators/wholesale-dealer.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateWholesaleDealer, controller.create);
router.put('/:id', validateWholesaleDealer, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/wholesale-dealers';

module.exports = router;
