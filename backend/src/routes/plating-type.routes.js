const express = require('express');
const controller = require('../controllers/plating-type.controller');
const { validatePlatingType } = require('../validators/plating-type.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validatePlatingType, controller.create);
router.put('/:id', validatePlatingType, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/plating-types';

module.exports = router;
