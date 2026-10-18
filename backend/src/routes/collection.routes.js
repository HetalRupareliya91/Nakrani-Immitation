const express = require('express');
const controller = require('../controllers/collection.controller');
const { validateCollection } = require('../validators/collection.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCollection, controller.create);
router.put('/:id', validateCollection, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/collections';

module.exports = router;
