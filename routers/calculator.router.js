const express = require('express');
const router = express.Router();

const calculatorCtrl = require('../controllers/calculator.ctrl');
const calculatorModel = require('../models/calculator.model');

/** Dependencies */
const dependencies = { calculatorModel };

/** Routes */
router.get('/', calculatorCtrl.home);
router.get('/sum', calculatorCtrl.soma);
router.get('/sub', calculatorCtrl.sub);

router.get('/mult/:a/:b', calculatorCtrl.mult);
router.get('/div/:a/:b', calculatorCtrl.div);
router.get('/div2/:a/:b', calculatorCtrl.div2.bind(null, dependencies));

module.exports = router;
