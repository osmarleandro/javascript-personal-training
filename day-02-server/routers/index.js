const express = require('express');
const router = express.Router();


/** Routes */
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/name', (req, res) => {
    const { name } = req.query;
    res.send(`Hello World, ${name}!`);
});

module.exports = router;