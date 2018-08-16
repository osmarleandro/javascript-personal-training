const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/person.ctrl');
const db = require('../database/index');

router.get('/', ctrl.index.bind(null, { db }));
router.post('/', ctrl.create.bind(null, { db }));
router.get('/:id', ctrl.show.bind(null, { db }));
router.put('/:id', ctrl.update.bind(null, { db }));
router.delete('/:id', ctrl.destroy.bind(null, { db }));

module.exports = router;