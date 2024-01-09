const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');

router.get('/', requireAuth, async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
})

module.exports = router;
