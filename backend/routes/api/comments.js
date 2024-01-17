const express = require('express');
const router = express.Router();
const { Announcement } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// Get All Announcements
router.get('/', requireAuth, async (req, res) => {
  const comments = await Comment.findAll();
  return res.json(comments);
});

// Update A Comment Associated With An Announcement
router.put('/:commentId', requireAuth, async (req, res) => {
  const { body } = req.body;
  const commentId = req.params.commentId;
  const comment = await Comment.findByPk(commentId);
  if (comment) {
    await comment.update({ body });
    res.json(comment);
  } else {
    const error = new Error('Comment not found');
    error.status = 404;
    throw error;
  }
});

// Delete A Comment Associated With An Announcement
router.delete('/:commentId', requireAuth, async (req, res) => {
  const commentId = req.params.commentId;
  const commentToDelete = await Comment.findByPk(commentId);
  await commentToDelete.destroy();
  return res.json(commentToDelete);
});

module.exports = router;
