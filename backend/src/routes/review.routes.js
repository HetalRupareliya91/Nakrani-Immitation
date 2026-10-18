const express = require('express');
const controller = require('../controllers/review.controller');
const { validateReview } = require('../validators/review.validator');

const router = express.Router();

router.get('/', controller.list);
router.get('/:id', controller.get);
router.post('/', validateReview, controller.create);
router.put('/:id', validateReview, controller.update);
router.delete('/:id', controller.remove);

router.basePath = '/reviews';

module.exports = router;
