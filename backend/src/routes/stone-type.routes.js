const express = require('express');
const controller = require('../controllers/stone-type.controller');
const { validateStoneType } = require('../validators/stone-type.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateStoneType, controller.create);
router.put('/:id', validateStoneType, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/stone-types';

module.exports = router;
