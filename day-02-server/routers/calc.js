const express = require('express');
const router = express.Router();
const calcController = require('../controllers/calc.js');
const modelCalc = require('../models/calc');

/** Dependencies */
const dependencies = { modelCalc };

/** Routes */
router.get('/', calcController.home);
router.get('/sum', calcController.soma);
router.get('/sub', calcController.sub);

router.get('/mult/:a/:b', calcController.mult);
router.get('/div/:a/:b', calcController.div);
router.get('/div2/:a/:b', calcController.div2.bind(null, dependencies));

module.exports = router;
