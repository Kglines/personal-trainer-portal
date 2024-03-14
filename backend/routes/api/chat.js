const express = require('express');
const router = express.Router();
const { Chat, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// *******************Chat Routes*******************
// GET /api/chat - Get all chat messages
router.get('/', requireAuth, async (req, res) => {
  // Get all chat messages
  const chatMessages = await Chat.findAll({
    include: {
      model: User,
    }
  });

  return res.json(chatMessages);
});

// POST /api/chat - Create a new chat message
router.post('/', requireAuth, async (req, res) => {
  const { userId, message } = req.body;
  const newChatMessage = await Chat.create({
    userId,
    message,
  });

  return res.json(newChatMessage);
});

module.exports = router;
