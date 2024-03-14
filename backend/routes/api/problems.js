const express = require('express');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Problem } = require('../../db/models');

// ******************* GET Problems *******************
router.get('/', requireAuth, async (req, res) => {
    const problems = await Problem.findAll();
    return res.json(problems);
})

// ******************* GET Problem *******************
router.get('/:id', requireAuth, async (req, res) => {
    const problem = await Problem.findByPk(req.params.id);
    return res.json(problem);
})

// ******************* POST Problem *******************
// router.post('/', requireAuth, async (req, res) => {
//     const problem = await Problem.create(req.body);
//     return res.json(problem);
// })

// ******************* PUT Problem *******************
router.put('/:id', requireAuth, async (req, res) => {
    const problem = await Problem.findByPk(req.params.id);
    await problem.update(req.body);
    return res.json(problem);
})

// ******************* DELETE Problem *******************
router.delete('/:id', requireAuth, async (req, res) => {
    const problem = await Problem.findByPk(req.params.id);
    await problem.destroy();
    return res.json(problem);
})


module.exports = router;
