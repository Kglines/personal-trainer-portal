const router = require('express').Router();
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js')
const announcementsRouter = require('./announcements.js')
const clientsRouter = require('./clients.js')
const machinesRouter = require('./machines.js')
const commentsRouter = require('./comments.js')
const problemsRouter = require('./problems.js')

router.use(restoreUser);

// ************************* Routes *************************
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/announcements', announcementsRouter);
router.use('/clients', clientsRouter);
router.use('/machines', machinesRouter);
router.use('/comments', commentsRouter);
router.use('/problems', problemsRouter)

// ************************* Test Middleware *************************
// GET /api/set-token-cookie
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

// GET /api/restore-user
router.get('/restore-user', (req, res) => {
  return res.json(req.user);
});

// ************************* TEST ROUTE *************************
router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});



// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);



module.exports = router;
