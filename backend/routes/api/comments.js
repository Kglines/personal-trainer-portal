const express = require('express');
const router = express.Router();
const { Announcement } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// Get All Announcements
router.get('/', requireAuth, async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
})



module.exports = router;
