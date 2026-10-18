const express = require('express');
const controller = require('../controllers/subcategory.controller');
const { validateSubcategory } = require('../validators/subcategory.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateSubcategory, controller.create);
router.put('/:id', validateSubcategory, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/subcategories';

module.exports = router;
