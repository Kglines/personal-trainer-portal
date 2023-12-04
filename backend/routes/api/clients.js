const express = require('express');
const router = express.Router();
const { Client } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// ************************* GET *************************
router.get('/', requireAuth, async (req, res) => {
    const clients = await Client.findAll({
        where: {
            userId: req.user.id
        },
        orderBy: [['lastName', 'ASC']]
    });
    return res.json(clients);
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
