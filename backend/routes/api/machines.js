const express = require('express');
const router = express.Router();
const { Machine, Problem, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

// ********************* Get Machines *********************
router.get('/', requireAuth, async (req, res) => {
  const machines = await Machine.findAll();
  return res.json(machines);
});

// ********************* Get Machine *********************
router.get('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const machineId = parseInt(id);
  const machine = await Machine.findOne({
    where: {
      id: machineId
    },
    include: {
      model: Problem,
      
    },
    // include: {
    //   model: User
    // }
  });
  
  return res.json(machine);
});

// ********************* Create Machine *********************
router.post('/', requireAuth, async (req, res) => {
  const machine = await Machine.create(req.body);
  res.json(machine);
});

// Create a New Problem for a Machine
router.post('/:id/problems', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { description, userId } = req.body;
  const machineId = parseInt(id);
  const problem = await Problem.create({ description, userId, machineId });
  res.json(problem);
});


// ********************* Update Machine *********************
router.put('/:id', requireAuth, async (req, res) => {
  const machine = await Machine.findByPk(req.params.id);
  await machine.update(req.body);
  res.json(machine);
});

// ********************* Delete Machine *********************
router.delete('/:id', requireAuth, async (req, res) => {
  const machine = await Machine.findByPk(req.params.id);
  await machine.destroy();
  res.json({ message: 'Deleted Machine' });
});

module.exports = router;
