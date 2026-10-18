const express = require('express');
const controller = require('../controllers/material.controller');
const { validateMaterial } = require('../validators/material.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateMaterial, controller.create);
router.put('/:id', validateMaterial, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/materials';

module.exports = router;
