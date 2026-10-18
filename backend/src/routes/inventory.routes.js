const express = require('express');
const controller = require('../controllers/inventory.controller');
const { validateInventory } = require('../validators/inventory.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateInventory, controller.create);
router.put('/:id', validateInventory, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/inventories';

module.exports = router;
