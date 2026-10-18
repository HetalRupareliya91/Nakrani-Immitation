const express = require('express');
const controller = require('../controllers/return-request.controller');
const { validateReturnRequest } = require('../validators/return-request.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateReturnRequest, controller.create);
router.put('/:id', validateReturnRequest, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/return-requests';

module.exports = router;
