const express = require('express');
const controller = require('../controllers/color.controller');
const { validateColor } = require('../validators/color.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateColor, controller.create);
router.put('/:id', validateColor, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/colors';

module.exports = router;
