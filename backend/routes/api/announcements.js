const express = require('express');
const router = express.Router();
const { Announcement, User, Comment } = require('../../db/models');
const nodemailer = require('nodemailer');
const { requireAuth } = require('../../utils/auth');

// let transporter = nodemailer.createTransport({

// })

// *******************Announcement Routes*******************
// GET /api/announcements - Get all announcements
router.get('/', requireAuth, async (req, res) => {
  // Get all announcements
  const announcements = await Announcement.findAll({
    include: {
      model: Comment,
    },
    order: [['date', 'ASC']]
  });

  // Sort announcements by date
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].date < pivot.date) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  const sortedAnnouncements = quickSort(announcements)
  // console.log('****************** SORTED ANNOUNCEMENTS === ', sortedAnnouncements)
  // Filter announcements by month
  const monthlyAnnouncements = sortedAnnouncements.filter((announcement) => {
    const currentMonth = new Date().getMonth() + 1;
    // console.log('****************** CURRENT MONTH === ', currentMonth)
    const announcementMonth = announcement.date.getMonth() + 1;
    const announcementDay = announcement.date.getDate() + 1;
    // console.log('************************ ', announcement.id, currentMonth, announcementMonth, announcementDay)
    return announcementMonth === currentMonth;
  });
// console.log('****************** Monthly Announcements === ', monthlyAnnouncements)
  return res.json(monthlyAnnouncements);
});

// GET /api/announcements/:id - Get a single announcement by id
router.get('/:id', requireAuth, async (req, res) => {
  const announcementId = req.params.id;
  const announcement = await Announcement.findByPk(announcementId, {
    include: {
      model: Comment,
    }
  });
  console.log('ANNOUNCEMENT BY ID === ', announcement)
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
  if (announcement) {
    await announcement.update({ date, body });
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

// *******************Comment Routes*******************
// Get All Comments Associated With An Announcement
router.get('/:id/comments', requireAuth, async (req, res, next) => {
  const announcementId = req.params.id;
  console.log('***************** announcement ID === ', announcementId)
  // const comments = await Comment.findAll({ where: { announcementId } });
  // const commentCount = comments.length
  try {
    const comments = await Comment.findAll({
      where: { announcementId },
      include: User,
    });
    // console.log('****************** Comments === ', comments)
    return res.json(comments);
  } catch (e) {
    console.log(e)

    // const err = new Error(e)
    // err.status = 401
    // err.title = 'Comment failed'
    // err.errors = 'The comment was invalid.'
    // return next({err})
  }
});

// Create A New Comment Associated With An Announcement
router.post('/:id/comments', requireAuth, async (req, res) => {
  const { body, userId } = req.body;
  const announcementId = req.params.id;
  const newComment = await Comment.create({ body, userId, announcementId });
  // console.log('************************* NEW COMMENT === ', newComment)
  return res.json(newComment);
});





module.exports = router;
