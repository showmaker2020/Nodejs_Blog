var express = require('express');
var router = express.Router();
const meController = require('../app/controllers/MeController');
router.get('/stored/myIdol', meController.storedMyIdol);
router.get('/trash/myIdol', meController.trashMyIdol);
module.exports = router;
