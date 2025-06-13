const express = require('express');
const router = express.Router();

// Sample GET route
router.get('/', (req, res) => {
    res.json({ message: 'Tasks fetched successfully' });
});

module.exports = router;

