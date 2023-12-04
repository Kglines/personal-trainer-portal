const express = require('express');
const router = express.Router();
const { Announcement, User } = require('../../db/models');
const nodemailer = require('nodemailer');
const { requireAuth } = require('../../utils/auth');

// let transporter = nodemailer.createTransport({

// })

// GET /api/announcements - Get all announcements
router.get('/', requireAuth ,async (req, res) => {
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
router.get('/:id', requireAuth, async (req, res) => {
    const announcementId = req.params.id;
    const announcement = await Announcement.findByPk(announcementId);
    return res.json(announcement);
});

// POST /api/announcements - Create a new announcement
router.post('/', requireAuth, async (req, res) => {
    const { date, body, userId } = req.body;
    const newAnnouncement = await Announcement.create({ date, body, userId });
    // let message = {
    //     from: User.email,
    //     to: 'keithglines@yahoo.com',
    //     subject: 'New Announcement',
    //     text: newAnnouncement.body
    // }
    // transporter.sendMail({
    //     message, function(err, info) {
    //         if(err){
    //             console.log(err)
    //         } else {
    //             console.log(info)
    //         }
    //     }
    // })
    return res.json(newAnnouncement);
});

// PUT /api/announcements/:id - Update an announcement
router.put('/:announcementId', requireAuth, async (req, res) => {
    const { date, body, id } = req.body;
    
    const announcement = await Announcement.findByPk(id);
console.log('************************* ANNOUNCEMENT === ', announcement)
    if(announcement){
        await announcement.update({ date, body });
        console.log('************************* UPDATED ANNOUNCEMENT === ', announcement)
        res.json(announcement);
    } else {
        const error = new Error('Announcement not found');
        error.status = 404;
        throw error;
    }
});

// DELETE /api/announcements/:id - Delete an announcement
router.delete('/:id', requireAuth, async (req, res) => {
    const announcementId = req.params.id;
    const announcementToDelete = await Announcement.findByPk(announcementId);
    await announcementToDelete.destroy();
    return res.json(announcementToDelete);
});

module.exports = router;
