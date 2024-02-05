const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Problem } = require('../../db/models');

// ******************* GET Problems *******************
router.get('/', requireAuth, async (req, res) => {
    const problems = await Problem.findAll();
    return res.json(problems);
})

module.exports = router;
