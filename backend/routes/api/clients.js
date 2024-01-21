const express = require('express');
const router = express.Router();
const { Client, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// ************************* GET *************************
router.get('/', requireAuth, async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.user.id
        }
    });
    try {
        const clients = await Client.findAll({
            where: {
                userId: user.id,
            },
            order: ['lastName']
        });
        return res.json(clients);
    } catch (e) {
        return res.json(e);
    }
});

// ************************* POST *************************
router.post('/', requireAuth, async (req, res) => {
    const { firstName, lastName, userId, isActive } = req.body;
    const newClient = await Client.create({ firstName, lastName, userId, isActive });
    return res.json(newClient);
});

// ************************* PUT *************************
router.put('/:id', requireAuth, async (req, res) => {
    const { firstName, lastName, isActive } = req.body;
    const clientId = req.params.id;
    const clientToUpdate = await Client.findByPk(clientId);
    const updatedClient = await clientToUpdate.update({ firstName, lastName, isActive });
    return res.json(updatedClient);
});

// ************************* DELETE *************************
router.delete('/:id', requireAuth, async (req, res) => {
    const clientId = req.params.id;
    const clientToDelete = await Client.findByPk(clientId);
    await clientToDelete.destroy();
    return res.json(clientToDelete);
});

module.exports = router;
