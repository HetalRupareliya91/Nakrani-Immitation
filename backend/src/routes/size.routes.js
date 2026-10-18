const express = require('express');
const controller = require('../controllers/size.controller');
const { validateSize } = require('../validators/size.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateSize, controller.create);
router.put('/:id', validateSize, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/sizes';

module.exports = router;
