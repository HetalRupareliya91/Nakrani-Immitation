const express = require('express');
const controller = require('../controllers/staff.controller');
const { validateStaff } = require('../validators/staff.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateStaff, controller.create);
router.put('/:id', validateStaff, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/staff';

module.exports = router;
