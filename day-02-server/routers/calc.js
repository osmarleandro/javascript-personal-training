const express = require('express');
const router = express.Router();
const calcController = require('../controllers/calc.js');

/** Routes */
router.get('/', calcController.home);
router.get('/sum/:a/:b', calcController.soma);
router.get('/sub', calcController.sub);

module.exports = router;
