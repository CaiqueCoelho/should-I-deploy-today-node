const express = require('express');
const router = express.Router();
const controller = require('../controllers/shouldIDeployTodayController')

router.post('/', controller.post);
router.post('/proxy', controller.postLikeAProxy);
router.get('/', controller.getAll);
router.get('/proxy', controller.getAllLikeAProxy);
router.get('/:day', controller.get);
router.put('/:day', controller.put);
router.delete('/:day', controller.delete);

module.exports = router;