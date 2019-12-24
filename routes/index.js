// Load modules
const express = require('express');
const router = express.Router();

// Get route at root 
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;