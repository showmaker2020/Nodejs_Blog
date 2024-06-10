var express = require('express');
var router = express.Router();
const personController = require('../app/controllers/PersonController');
router.get('/create', personController.create);
router.post('/store', personController.store);
router.get('/:id/edit', personController.edit);
router.post('/handle-form-actions', personController.handleFormActions)
router.put('/:id', personController.update);
router.patch('/:id/restore', personController.restore);
router.delete('/:id', personController.destroy);
router.delete('/:id/force', personController.force);
router.get('/:slug', personController.show);
module.exports = router;
