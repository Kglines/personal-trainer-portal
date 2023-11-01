const express = require('express');
const router = express.Router();
const { Announcement } = require('../../db/models');

router.get('/', async (req, res) => {
    const announcements = await Announcement.findAll();
    return res.json(announcements);
});

router.post('/', async (req, res) => {
    const { date, body, userId } = req.body;
    const newAnnouncement = await Announcement.create({ date, body, userId });
    return res.json(newAnnouncement);
});

router.put('/:id', async (req, res) => {
    const { date, announcement } = req.body;
    const announcementId = req.params.id;
    const announcementToUpdate = await Announcement.findByPk(announcementId);
    const updatedAnnouncement = await announcementToUpdate.update({ date, announcement });
    return res.json(updatedAnnouncement);
});

router.delete('/:id', async (req, res) => {
    const announcementId = req.params.id;
    const announcementToDelete = await Announcement.findByPk(announcementId);
    await announcementToDelete.destroy();
    return res.json(announcementToDelete);
});

module.exports = router;
