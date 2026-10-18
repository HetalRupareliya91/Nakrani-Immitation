const express = require('express');
const controller = require('../controllers/banner.controller');
const { validateBanner } = require('../validators/banner.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateBanner, controller.create);
router.put('/:id', validateBanner, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/banners';

module.exports = router;
