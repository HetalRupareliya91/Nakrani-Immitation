const express = require('express');
const controller = require('../controllers/category.controller');
const { validateCategory } = require('../validators/category.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateCategory, controller.create);
router.put('/:id', validateCategory, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/categories';

module.exports = router;
