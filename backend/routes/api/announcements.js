const express = require('express');
const router = express.Router();
const { Announcement } = require('../../db/models');

// GET /api/announcements - Get all announcements
router.get('/', async (req, res) => {
    // Get all announcements
    const announcements = await Announcement.findAll();

    // Sort announcements by date
    const sortedAnnouncements = announcements.sort((a, b) => {
        return a.date - b.date;
    });

    // Filter announcements by month
    const monthlyAnnouncements =sortedAnnouncements.filter(announcement => {
        const announcementMonth = (announcement.date.getMonth() + 1);
        return announcementMonth === (new Date().getMonth() + 1);
        }
    );
    
    return res.json(monthlyAnnouncements);
});

// GET /api/announcements/:id - Get a single announcement by id
router.get('/:id', async (req, res) => {
    const announcementId = req.params.id;
    const announcement = await Announcement.findByPk(announcementId);
    return res.json(announcement);
});

// POST /api/announcements - Create a new announcement
router.post('/', async (req, res) => {
    const { date, body, userId } = req.body;
    const newAnnouncement = await Announcement.create({ date, body, userId });
    return res.json(newAnnouncement);
});

// PUT /api/announcements/:id - Update an announcement
router.put('/:id', async (req, res) => {
    const { date, body, id } = req.body;
    // const announcementId = req.params.id;
    const announcementToUpdate = await Announcement.findByPk(id);
    console.log('************************** Announcement to Update ===== ', announcementToUpdate)
    const updatedAnnouncement = await announcementToUpdate.update({ date, body, id });
    console.log('************************** Updated Announcement ===== ', updatedAnnouncement)
    return res.json(updatedAnnouncement);
});

// DELETE /api/announcements/:id - Delete an announcement
router.delete('/:id', async (req, res) => {
    const announcementId = req.params.id;
    const announcementToDelete = await Announcement.findByPk(announcementId);
    await announcementToDelete.destroy();
    return res.json(announcementToDelete);
});

module.exports = router;
